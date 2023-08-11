import React from "react";
import Link from "next/link";

const SuccessPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-800 via-purple-700 to-pink-600 text-white">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold mb-4">
          You are now on the waitlist!
        </h1>
        <p className="text-lg mb-6">
          Revolutionize the way your products are tested.
        </p>
        <Link href="/">Back to Form</Link>
      </div>
    </div>
  );
};

export default SuccessPage;
