import React from "react";
import { signIn } from "next-auth/react";
import {
  AppleIcon,
  GoogleIcon,
  BaseWhiteLogo,
  DiscordIcon,
  GithubIcon,
  LinkedInIcon,
  BaseWhiteSmallIcon,
  TwitterIcon,
} from "../assets/icons";

function SignUpComponent() {
  return (
    <>
      <div className="w-full md:hidden flex items-center gap-4 py-4 px-4 bg-primary">
        <BaseWhiteSmallIcon />
        <p className="text-xl font-semibold text-white">Base</p>
      </div>
      <div className="section1 hidden md:flex justify-center items-center flex-1 bg-primary -skew-x-12 transform -translate-x-24">
        <div className="relative h-full w-[70%] py-12 px-4 mx-auto skew-x-12">
          <BaseWhiteLogo />
          <div className="flex justify-center items-center h-full -translate-y-24">
            <h4 className="text-6xl text-white ">BASE</h4>
          </div>
          <div className="icons-container absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-6">
              <GithubIcon />
              <TwitterIcon />
              <LinkedInIcon />
              <DiscordIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="section2 flex-1 flex justify-center items-center">
        <div className="form max-w-lg w-full">
          <div className="form__header">
            <h4 className="text-4xl font-bold">Sign In</h4>
            <p className="text-lg">Sign in to your account</p>
          </div>
          <div className="form__buttons w-full mt-8 text-slate-500 flex  items-center gap-8">
            <button
              onClick={() => signIn("google")}
              className="bg-white cursor-pointer py-2 flex-1 px-4 flex items-center gap-2 rounded"
            >
              <GoogleIcon />
              <span>Sign in with Google</span>
            </button>
            <button className="bg-white cursor-pointer py-2 flex-1 px-3 flex items-center gap-2 rounded">
              <AppleIcon />
              <p>Sign in with Apple</p>
            </button>
          </div>
          <form
            action=""
            className="w-full mt-8 bg-white rounded-lg shadow-md px-8 py-12"
          >
            <div className="input__container flex flex-col gap-2">
              <label htmlFor="email">Email Address</label>
              <input
                className="bg-[#EAEAEA] px-2 py-3 rounded"
                type="text"
                id="email"
                placeholder="johndoe@gmail.com"
              />
            </div>
            <div className="input__container flex flex-col gap-2">
              <label htmlFor="password">Passowrd</label>
              <input
                className="bg-[#EAEAEA] px-2 py-3 rounded"
                id="password"
                type="password"
                placeholder="Enter your password here"
              />
            </div>
            <span className="text-blue-600 mt-4 block">Forgot password?</span>
            <button className="bg-primary cursor-pointer mt-6 w-full rounded text-white font-semibold py-2">
              Sign in
            </button>
          </form>

          <p className="text-center mt-4">
            Don&apos;t have an account?{" "}
            <span className="text-blue-600 underline cursor-pointer">
              Register here
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUpComponent;
