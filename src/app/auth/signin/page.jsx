
"use client";

import { useState } from "react";

import {
  Card,
  Button,
  Link,
  TextField,
  Label,
  InputGroup,
  Input,
} from "@heroui/react";

import {
  Eye,
  EyeSlash,
  At,
  ShieldKeyhole,
  ArrowRight,
} from "@gravity-ui/icons";

import { signIn } from "@/lib/auth-client";

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [isVisible, setIsVisible] =
    useState(false);

  const [isLoading, setIsLoading] =
    useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] =
    useState("");

  const toggleVisibility = () =>
    setIsVisible(!isVisible);

  const handleSignin = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      const { error: authError } =
        await signIn.email({
          email,
          password,
          callbackURL: "/",
        });

      if (authError) {
        setError(
          authError.message ||
            "Invalid credentials."
        );
      } else {
        setSuccess(
          "Successfully signed in!"
        );

        setEmail("");
        setPassword("");
      }
    } catch (err) {
      setError(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030712] px-4 py-10">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-100px] h-[320px] w-[320px] rounded-full bg-violet-600/20 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-100px] h-[300px] w-[300px] rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Card */}
      <Card className="relative z-10 w-full max-w-md border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur-2xl">

        {/* Logo */}
        <div className="mb-6 flex items-center justify-center">
          <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-xl">
            HireLoop
          </div>
        </div>

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-zinc-400">
            Sign in to continue your
            professional journey.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSignin}
          className="flex flex-col gap-5"
        >

          {/* Email */}
          <TextField
            isRequired
            className="flex flex-col gap-2"
          >
            <Label className="text-sm font-medium text-zinc-300">
              Email Address
            </Label>

            <InputGroup className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 transition-all focus-within:border-violet-500">
              <At
                size={18}
                className="text-zinc-500"
              />

              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full border-none bg-transparent py-3 text-sm text-white outline-none"
              />
            </InputGroup>
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            className="flex flex-col gap-2"
          >
            <Label className="text-sm font-medium text-zinc-300">
              Password
            </Label>

            <InputGroup className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 transition-all focus-within:border-violet-500">
              <ShieldKeyhole
                size={18}
                className="text-zinc-500"
              />

              <Input
                type={
                  isVisible
                    ? "text"
                    : "password"
                }
                placeholder="Enter password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                className="w-full border-none bg-transparent py-3 text-sm text-white outline-none"
              />

              <button
                type="button"
                onClick={toggleVisibility}
                className="text-zinc-500 transition hover:text-white"
              >
                {isVisible ? (
                  <EyeSlash size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </InputGroup>
          </TextField>

          {/* Error */}
          {error && (
            <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm text-emerald-400">
              {success}
            </div>
          )}

          {/* Button */}
          <Button
            type="submit"
            isLoading={isLoading}
            isDisabled={isLoading}
            className="mt-2 h-12 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-sm font-semibold text-white transition-all hover:scale-[1.01]"
          >
            Sign In
            <ArrowRight size={16} />
          </Button>

          {/* Footer */}
          <div className="mt-4 text-center text-sm text-zinc-400">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/signup"
              className="font-medium text-violet-400 hover:text-violet-300"
            >
              Create account
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

