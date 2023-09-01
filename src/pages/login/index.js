import { RootLayout } from "@/components/Layout/RootLayout";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const sData = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });
    if (sData?.error) {
      toast.error(sData?.error);
    }
    if (sData?.ok) {
      toast.success("Logged in successfully");
      router.push("/");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="w-full max-w-md p-6 rounded-lg shadow-md"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold">Login</h2>
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="example@example.com"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
        <p className="mt-4 text-center">
          Do not have any account{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export default Login;
