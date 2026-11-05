"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useSingleTestBySlug } from "@/hooks/useTest";
import { useCreateTestBooking } from "@/hooks/useTestBooking";
import { buildDob } from "./utils";
import SelectedTestBar from "./components/SelectedTestBar";
import DateTimeStep from "./components/DateTimeStep";
import DetailsStep from "./components/DetailsStep";
import ReviewStep from "./components/ReviewStep";
import ConfirmedStep from "./components/ConfirmedStep";

const emptyDetails = {
  firstName: "",
  lastName: "",
  dobDay: "",
  dobMonth: "",
  dobYear: "",
  gender: "",
  phone: "",
  email: "",
};

function Notice({ children }) {
  return (
    <div className="min-h-screen bg-(--bgLight) px-4 pt-48 pb-24">
      <div className="container mx-auto  rounded-2xl border border-(--borderSoft) bg-white p-8 text-center shadow-(--shadowSoft)">
        {children}
      </div>
    </div>
  );
}

export default function BookingFlow({ slug }) {
  const router = useRouter();
  const { data: test, isLoading, isError } = useSingleTestBySlug(slug);
  const createBooking = useCreateTestBooking();

  const [step, setStep] = useState("date");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [details, setDetails] = useState(emptyDetails);
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState("");

  const handleDetailChange = (field, value) =>
    setDetails((prev) => ({ ...prev, [field]: value }));

  const goBack = () => {
    setError("");
    if (step === "details") setStep("date");
    else if (step === "review") setStep("details");
    else router.back();
  };

  const handleConfirm = async () => {
    setError("");
    try {
      const result = await createBooking.mutateAsync({
        testSlug: test.slug,
        date,
        time,
        firstName: details.firstName,
        lastName: details.lastName,
        dateOfBirth: buildDob(details),
        gender: details.gender,
        phone: details.phone,
        email: details.email,
      });
      setBooking(result);
      setStep("confirmed");
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        "Something went wrong. Please try again.";
      if (err?.response?.status === 409) {
        setTime("");
        setStep("date");
      }
      setError(message);
    }
  };

  if (!slug) {
    return (
      <Notice>
        <p className="text-(--textDark)">No test selected.</p>
        <Link
          href="/test/test-a-z"
          className="mt-4 inline-block font-semibold text-(--brandColor) hover:underline"
        >
          Browse tests
        </Link>
      </Notice>
    );
  }

  if (isLoading) {
    return (
      <Notice>
        <p className="text-(--textLight)">Loading...</p>
      </Notice>
    );
  }

  if (isError || !test) {
    return (
      <Notice>
        <p className="text-(--textDark)">We could not find this test.</p>
        <Link
          href="/test/test-a-z"
          className="mt-4 inline-block font-semibold text-(--brandColor) hover:underline"
        >
          Browse tests
        </Link>
      </Notice>
    );
  }

  return (
    <div className="min-h-screen bg-(--bgLight) px-4 pt-48 pb-24">
      <div className="container mx-auto  space-y-6">
        {step !== "confirmed" && (
          <button
            type="button"
            onClick={goBack}
            className="flex items-center gap-1 text-sm font-bold text-(--textDark) hover:text-(--brandColor)"
          >
            <ChevronLeft size={18} />
            Back
          </button>
        )}

        {(step === "date" || step === "details") && (
          <SelectedTestBar test={test} />
        )}

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-(--brandRed)">
            {error}
          </div>
        )}

        {step === "date" && (
          <DateTimeStep
            date={date}
            time={time}
            onSelectDate={(d) => {
              setError("");
              setDate(d);
              setTime("");
            }}
            onSelectTime={(t) => {
              setError("");
              setTime(t);
            }}
            onContinue={() => {
              setError("");
              setStep("details");
            }}
          />
        )}

        {step === "details" && (
          <DetailsStep
            details={details}
            onChange={handleDetailChange}
            onContinue={() => setStep("review")}
          />
        )}

        {step === "review" && (
          <ReviewStep
            test={test}
            date={date}
            time={time}
            details={details}
            submitting={createBooking.isPending}
            onChangeTime={() => setStep("date")}
            onEditDetails={() => setStep("details")}
            onConfirm={handleConfirm}
          />
        )}

        {step === "confirmed" && booking && (
          <ConfirmedStep
            booking={booking}
            onBookAnother={() => router.push("/test/test-a-z")}
          />
        )}
      </div>
    </div>
  );
}
