import { useState } from "react";
import Input from "@/components/low-level-components/Input";
import { Toaster, toast } from "sonner";
import axios from "../../axios";
import { BarLoader } from "react-spinners";
import { LoadingContext } from "@/providers/loadingProvider";
import React from "react";
import Head from "next/head";
import Link from "next/link";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { loading: isLoading, setLoading: setIsLoading } =
    React.useContext(LoadingContext);
  const authenticate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // get access token from server using username and password and use credentials
    if (confirmPassword !== password) {
      toast.error("Passwords do not match");
      setIsLoading(false);
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
      setIsLoading(false);
    } catch (e) {
      if (e?.response?.status === 409) {
        // already a user with that username
        toast.error("Username already taken");
      } else if (e?.response?.status === 404) {
        toast.error("Server not found, please try again later")
      }
       else if (e?.response?.status === 400) {
        // already a user with that username
        toast.error("Username or password missing");
      } else {
        toast.error(e.message); // show error message
      }
      setIsLoading(false);
    }
  };
  return (
    <>
      <BarLoader
        color="#059669"
        loading={typeof isLoading === "undefined" ? false : isLoading}
        cssOverride={{
          position: "absolute",
          top: 0,
          width: "calc(100% + 3rem)",
          marginLeft: "-4rem",
          marginRight: "-4rem",
        }}
      />
      <div className="max-w-xl px-4 mx-auto mt-10">
        <Toaster richColors />
        <Head>
          <title>Sign up securely</title>
          <meta name="signup" content="Sign up as a user to login" key="desc" />
        </Head>
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
          <div className="flex flex-col gap-2  sm:flex-row mt-4 justify-between">
          <button
            disabled={isLoading ? true : false}
            className="hover:bg-gray-600 self-center m-0 border-red-100  disabled:bg-gray-500 text-white cursor-pointer bg-emerald-600 transition-all p-2 px-4"
          >
            Create Account
          </button>
          <button className="" type="button" >
            <Link href="/login">Already have an account? Login</Link>
          </button>
          </div>
          
        </form>
      </div>
    </>
  );
};

export default Signup;
