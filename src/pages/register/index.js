import { RootLayout } from "@/components/Layout/RootLayout";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const url = `https://pc-hatt-assignment.vercel.app/api/register`;
    console.log(url);
    const data = {
      name,
      email,
      password,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((cdata) => {
        toast.success("Registered success. Please login");
        router.push("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="w-full max-w-md p-6 rounded-lg shadow-md"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold">Register</h2>
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your Name"
            required
          />
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
          Register
        </button>
        <div className="mt-6 flex items-center justify-center">
          <button
            className="bg-gray-700 text-white flex items-center py-2 px-4 rounded-md hover:bg-gray-800 w-full justify-center"
            onClick={() =>
              signIn("github", {
                callbackUrl: "https://pc-hatt-assignment.vercel.app/",
              })
            }
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 0a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48V16.2C5 16.61 4.67 15 4.67 15A2.38 2.38 0 0 0 3 13.27c-.82-.56.06-.55.06-.55a1.88 1.88 0 0 1 1.36.92 1.9 1.9 0 0 0 2.58.74A1.92 1.92 0 0 1 7.75 15c-1.7 0-2.9-1.64-2.9-3.62a2.89 2.89 0 0 1 .77-2.02 2.68 2.68 0 0 1 .08-2.02s.64-.2 2.1.78a7.24 7.24 0 0 1 3.76 0c1.46-.98 2.1-.78 2.1-.78a2.67 2.67 0 0 1 .08 2.02 2.88 2.88 0 0 1 .77 2.02c0 2-1.2 3.62-2.9 3.62a1.9 1.9 0 0 1-.51-.07c.36.22.68.54.68 1.1v1.72c0 .27.18.58.69.48A10 10 0 0 0 10 0z"
              />
            </svg>
            Sign up with GitHub
          </button>
        </div>
        <p className="mt-4 text-center">
          Already registered?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

RegisterForm.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export default RegisterForm;
