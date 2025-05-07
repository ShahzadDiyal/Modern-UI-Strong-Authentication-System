"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [isValidData, setIsValidData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSignUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      toast.success("User Created Successfully!");
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } catch (error: any) {
      console.log("Sign up failed");
      toast.error(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    setIsValidData(
      user.email.length > 0 &&
        user.password.length > 0 &&
        user.username.length > 0
    );
  }, [user]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-4 overflow-y-auto"
      style={{
        backgroundColor: "black",
        backgroundImage: `
          radial-gradient(circle at top left, #11573E, transparent 30%),
          radial-gradient(circle at bottom right, #933FFE30, transparent 30%)
        `,
      }}
    >
      <div style={{ marginBottom: "90px", marginTop: "90px" }}>
        <img src="/logo.png" alt="Logo" width={200} />
      </div>

      <div className="w-full max-w-md p-8 space-y-4">
        <h1 className="text-3xl font-semibold text-white mt-3">
          Create an Account!
        </h1>
        <p className="text-1xl text-white font-extralight opacity-80 pb-2">
          Create a new account here.
        </p>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="text-sm font-extralight text-white opacity-70"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={user.username}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, username: e.target.value }))
              }
              placeholder="Enter your username"
              style={{
                background: "#19161C",
                color: "white",
                border: "1px solid #343B4F",
              }}
              className="w-full p-2 mt-1 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:border-transparent text-black"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-extralight text-white opacity-70"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              value={user.email}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Example@email.com"
              style={{
                background: "#19161C",
                color: "white",
                border: "1px solid #343B4F",
              }}
              className="w-full p-2 mt-1 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:border-transparent text-black"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm font-extralight text-white opacity-70"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                value={user.password}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, password: e.target.value }))
                }
                placeholder="At least 8 characters"
                style={{
                  background: "#19161C",
                  color: "white",
                  border: "1px solid #343B4F",
                }}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
              />
            </div>
          </div>
        </div>

        <button
          onClick={onSignUp}
          style={{
            color: "white",
            background:
              "linear-gradient(10deg, rgb(147, 63, 254) 0%, rgb(24, 200, 255) 100%)",
            // marginBottom: "5px",
            marginTop: "30px",
          }}
          className={`w-full p-3 text-white rounded-lg ${
            isValidData ? "hover:bg-blue-600" : ""
          } focus:outline-none`}
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
          ) : (
            "Sign Up"
          )}
        </button>

        <div className="text-center pt-1">
          <Link
            href="/login"
            className="text-sm text-white opacity-90 hover:underline font-extralight"
          >
            Already have an account? Login
          </Link>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SignUp;
