import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <section
      id="error-page"
      className="w-full min-h-screen flex justify-center items-center bg-gray-50 p-5"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">404 Not Found</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Oops! ရှာမတွေ့ပါဘူး
        </h2>
        <p className="min-w-100 text-gray-600 mb-4">
          သင်ရှာနေတဲ့ Product ဒါမှမဟုတ် Page က မရှိတော့တာ ဒါမှမဟုတ် တခြားနေရာကို
          ပြောင်းသွားတာ ဖြစ်နိုင်ပါတယ်။
        </p>
        <Link to={"/"} className="border border-black px-4 py-1 rounded-xl">
          Return to home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
