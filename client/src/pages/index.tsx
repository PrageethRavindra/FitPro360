import React, { useState, useCallback } from "react";
import { useRouter } from "next/router";

const LoginPage: React.FC = () => {
  const [isSignup, setIsSignup] = useState<boolean | null>(null);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const router = useRouter();

  // Handle form submission for Sign Up and Sign In
  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (isSignup === null) return;

      if (isSignup) {
        if (password !== confirmPassword) {
          setPasswordError("Passwords do not match.");
          return;
        }

        // Perform further actions, like sending the password to the server
        router.push("/signup");
      } else {
        router.push("/signin");
      }
    },
    [isSignup, password, confirmPassword, router]
  );

  // Password validation function
  const validatePassword = (value: string) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);

    if (value.length < minLength) {
      setPasswordError(`Password must be at least ${minLength} characters long.`);
    } else if (!hasUpperCase) {
      setPasswordError("Password must contain at least one uppercase letter.");
    } else if (!hasLowerCase) {
      setPasswordError("Password must contain at least one lowercase letter.");
    } else if (!hasNumber) {
      setPasswordError("Password must contain at least one number.");
    } else {
      setPasswordError(null);
    }

    setPassword(value);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#1A1A40] text-white p-6">
      {/* Logo and Brand */}
      <div className="flex flex-col items-center mb-8">
        <div className="text-6xl font-bold mb-4 bg-white text-[#1A1A40] rounded-full w-20 h-20 flex justify-center items-center">
          M
        </div>
        <h1 className="text-3xl font-bold uppercase">MINATOR</h1>
      </div>

      {/* Buttons to switch between Sign In and Sign Up */}
      {isSignup === null ? (
        <div className="flex gap-6 mb-8">
          <button
            className="px-6 py-3 text-xl font-bold bg-[#A3BFFA] text-[#1A1A40] rounded-lg cursor-pointer transition-all duration-300 ease-in-out shadow-lg"
            onClick={() => setIsSignup(false)}
          >
            Sign In
          </button>
          <button
            className="px-6 py-3 text-xl font-bold bg-[#A3BFFA] text-[#1A1A40] rounded-lg cursor-pointer transition-all duration-300 ease-in-out shadow-lg"
            onClick={() => setIsSignup(true)}
          >
            Sign Up
          </button>
        </div>
      ) : (
        // Form Container
        <div className="bg-[#2C2C6C] p-6 rounded-2xl shadow-2xl w-full max-w-md animate-fadeIn">
          <h2 className="text-center text-xl font-bold mb-6 tracking-wide">
            {isSignup ? "Sign Up" : "Sign In"}
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Name field for Sign Up */}
            {isSignup && (
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 text-base text-black rounded-lg border border-gray-300 focus:outline-none focus:border-[#A3BFFA] focus:ring-2 focus:ring-[#A3BFFA]"
                />
              </div>
            )}

            {/* Email field */}
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-base text-black rounded-lg border border-gray-300 focus:outline-none focus:border-[#A3BFFA] focus:ring-2 focus:ring-[#A3BFFA]"
              />
            </div>

            {/* Password field */}
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Enter your password"
                value={password}
                onChange={(e) => validatePassword(e.target.value)}
                className="w-full px-4 py-2 text-base text-black rounded-lg border border-gray-300 focus:outline-none focus:border-[#A3BFFA] focus:ring-2 focus:ring-[#A3BFFA]"
              />
            </div>

            {/* Show Confirm Password field for Sign Up */}
            {isSignup && (
              <div className="mb-4">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 text-base text-black rounded-lg border border-gray-300 focus:outline-none focus:border-[#A3BFFA] focus:ring-2 focus:ring-[#A3BFFA]"
                />
              </div>
            )}

            {/* Error message */}
            {passwordError && (
              <p className="text-red-500 text-sm mb-4">{passwordError}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 text-lg font-semibold bg-[#A3BFFA] text-[#1A1A40] rounded-lg cursor-pointer transition-all duration-300 ease-in-out shadow-lg"
            >
              {isSignup ? "Sign Up" : "Sign In"}
            </button>
          </form>

          {/* Links for switching between Sign Up and Sign In */}
          <div className="text-center mt-4">
            {isSignup ? (
              <p>
                Already have an account?{" "}
                <button
                  className="text-[#A3BFFA] font-semibold"
                  onClick={() => setIsSignup(false)}
                >
                  Sign In
                </button>
              </p>
            ) : (
              <p>
                Don't have an account?{" "}
                <button
                  className="text-[#A3BFFA] font-semibold"
                  onClick={() => setIsSignup(true)}
                >
                  Sign Up
                </button>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
