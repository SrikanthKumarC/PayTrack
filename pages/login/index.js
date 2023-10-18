"use client";
import { useState } from "react";
import Input from "@/components/low-level-components/Input";
import { Toaster, toast } from "sonner";
import useAuth from "@/hooks/useAuth";
import axios from "../../axios";
import { useRouter } from "next/router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { setAuth } = useAuth();
  const authenticate = async (e) => {
    e.preventDefault();
    // get access token from server using username and password and use credentials

    try {
      const result = await axios.post(
        "/auth",
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
      const accessToken = result?.data?.accessToken;
      setAuth({ username, password, accessToken });
      toast.success("Login successful, redirecting...", { duration: 5000 });
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (e) {
      toast.error(e.message);
    }
  };
  return (
    <div className="max-w-xl px-4 mx-auto mt-10">
      <Toaster richColors />
      <h1 className="text-4xl mb-6">Login</h1>
      <button
        className="bg-emerald-600 w-full text-white  p-2 px-4 mt-4"
        onClick={() => router.push("/signup")}
      >
        No account? Sign Up.
      </button>
      <form action="" className="mt-4" onSubmit={authenticate}>
        <Input
          label={"Enter your username"}
          type={"text"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label={"and your password"}
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-gray-600 text-white  p-2 px-4 mt-4">
          Submit
        </button>
      </form>
      {/* sign up button */}
    </div>
  );
};

export default Login;
