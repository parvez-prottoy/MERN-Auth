import React from "react";
import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <form
      noValidate=""
      className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50 mt-6"
    >
      <h2 className="w-full text-3xl font-bold leading-tight">Login</h2>

      <div>
        <label htmlFor="email" className="block mb-1 ml-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Your email"
          required
          className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
        />
      </div>
      <div>
        <label htmlFor="password" className="block mb-1 ml-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Your password"
          required
          className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
        />
      </div>
      <p className="text-red-400">There was and error!</p>
      <div>
        <button className="w-full py-[7px] text-[1rem] px-[16px] rounded-md capitalize bg-slate-600 text-white hover:bg-slate-700 transition-all duration-300 ">
          Sign In
        </button>
        <p className="text-gray-500 text-sm mt-4">
          Don't have and account? <Link to="/sign-up">SignUp</Link>
        </p>
      </div>
    </form>
  );
};

export default SignInForm;
