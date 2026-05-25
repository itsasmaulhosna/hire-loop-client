"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  User,
  Mail,
  Lock,
  ArrowLeft,
  Eye,
  EyeOff,
} from "lucide-react";

export default function SignUpPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage({
      type: "",
      text: "",
    });

    if (
      !formData.name ||
      !formData.email ||
      !formData.password
    ) {
      return setMessage({
        type: "error",
        text: "All fields are required",
      });
    }

    if (formData.password.length < 6) {
      return setMessage({
        type: "error",
        text: "Password must be at least 6 characters",
      });
    }

    try {
      setLoading(true);

      const res = await fetch("/api/auth/sign-up/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setMessage({
        type: "success",
        text: "Account created successfully!",
      });

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      setTimeout(() => {
        router.push("/sign-in");
      }, 1500);
    } catch (error) {
      setMessage({
        type: "error",
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-10">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-600/30 blur-3xl" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl">
        {/* Back Button */}
        <Link
          href="/sign-in"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Sign In
        </Link>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">
            Create Account
          </h1>

          <p className="mt-2 text-gray-400">
            Join and start your journey today.
          </p>
        </div>

        {/* Success / Error Message */}
        {message.text && (
          <div
            className={`mb-6 rounded-xl border px-4 py-3 text-sm ${
              message.type === "success"
                ? "border-green-500/30 bg-green-500/10 text-green-400"
                : "border-red-500/30 bg-red-500/10 text-red-400"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Full Name
            </label>

            <div className="flex items-center rounded-2xl border border-white/10 bg-white/[0.03] px-4">
              <User className="h-5 w-5 text-gray-500" />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-transparent px-3 py-4 text-white outline-none placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Email Address
            </label>

            <div className="flex items-center rounded-2xl border border-white/10 bg-white/[0.03] px-4">
              <Mail className="h-5 w-5 text-gray-500" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="w-full bg-transparent px-3 py-4 text-white outline-none placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Password
            </label>

            <div className="flex items-center rounded-2xl border border-white/10 bg-white/[0.03] px-4">
              <Lock className="h-5 w-5 text-gray-500" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-transparent px-3 py-4 text-white outline-none placeholder:text-gray-500"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="text-gray-500 transition hover:text-white"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-violet-600 py-4 font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Bottom Link */}
        <p className="mt-8 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-medium text-violet-400 transition hover:text-violet-300"
          >
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
}