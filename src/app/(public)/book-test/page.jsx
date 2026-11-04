import BookingFlow from "./BookingFlow";

export default async function BookTestPage({ searchParams }) {
    const { test } = await searchParams;

    return <BookingFlow slug={test || ""} />;
}