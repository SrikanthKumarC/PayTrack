import { useState } from "react";
import Input from "@/components/low-level-components/Input";
import { Toaster, toast } from "sonner";
import useAuth from "@/hooks/useAuth";
import axios from "../../axios";
import { useRouter } from "next/router";
import Head from "next/head";
import { BarLoader } from "react-spinners";
import { LoadingContext } from "@/providers/loadingProvider";
import React from "react";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading: isLoading, setLoading: setIsLoading } =
    React.useContext(LoadingContext); // for loading spinner
  const router = useRouter();

  const { setAuth } = useAuth();
  const authenticate = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    // get access token from server using username and password and use credentials
    if (!username || !password) {
      toast.error("Username or password missing");
      setIsLoading(false);
      return;
    }

    try {
      const result = await axios.post(
        "/auth",
        JSON.stringify({ username, password })
      );
      // get status code
      console.log(JSON.stringify(result?.data));
      const accessToken = result?.data?.accessToken;
      setAuth({ username, password, accessToken });
      toast.success("Login successful, redirecting...", { duration: 5000 });
      setIsLoading(false);
      router.push("/");
    } catch (e) {
      if (e.code === "ECONNREFUSED") {
        toast.error("Server is not running");
        setIsLoading(false);
        return;
      }
      console.log(e);
      if (e?.response?.status === 403) {
        // already a user with that username
        toast.error("Username or password incorrect");
      } else if (e?.response?.status === 400) {
        // already a user with that username
        toast.error("Username or password missing");
      } else {
        toast.error("Something went wrong"); // show error message
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
        <Head>
          <title>Secure Login</title>
          <meta
            name="login"
            content="Login to your account to get started"
            key="desc"
          />
        </Head>
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
          <button
            disabled={isLoading}
            className={`${
              isLoading ? "bg-gray-600" : "bg-emerald-600"
            } text-white  p-2 px-4 mt-4`}
          >
            Submit
          </button>
        </form>
        {/* sign up button */}
      </div>
    </>
  );
};

export default Login;
