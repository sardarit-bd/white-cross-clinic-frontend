'use client'

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

const BackBtn = () => {
    const router = useRouter();
    return (
        <div
            onClick={() => router.back()}
            className="bg-gray-200 p-2 h-10 w-10 flex items-center justify-center cursor-pointer">
            <FaArrowLeft className="text-gray-800 text-2xl" />
        </div>
    )
}

export default BackBtn;