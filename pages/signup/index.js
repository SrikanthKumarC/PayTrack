"use client";
import { useState } from "react";
import Input from "@/components/low-level-components/Input";
import { Toaster, toast } from "sonner";
import useAuth from "@/hooks/useAuth";
import axios from "../../axios";
import { useRouter } from "next/router";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const authenticate = async (e) => {
    e.preventDefault();
    // get access token from server using username and password and use credentials
    if (confirmPassword !== password) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const result = await axios.post(
        "/auth/createUser",
        JSON.stringify({ username, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      // get status code
      console.log(JSON.stringify(result?.data));
      // show  toast for 5 seconds and redirect to login
      toast.success(`Account created for ${username}, please login`);
    } catch (e) {
      if (e?.response?.status === 409) {
        // already a user with that username
        toast.error("Username already taken");
      } else if (e?.response?.status === 400) {
        // already a user with that username
        toast.error("Username or password missing");
      } else {
        toast.error(e.message); // show error message
      }
    }
  };
  return (
    <div className="max-w-xl px-4 mx-auto mt-10">
      <Toaster richColors />
      <h1 className="text-4xl">Signup</h1>
      <form action="" className="mt-4" onSubmit={authenticate}>
        <Input
          label={"Choose a nice username"}
          type={"text"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label={"and a good password"}
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          label={"just one more time.."}
          type={"password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="bg-gray-600 text-white hover:bg-emerald-600 transition-all p-2 px-4 mt-4">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
