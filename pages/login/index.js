import Link from 'next/link';

export default function Home() {
  return (
    <>
    <div>
      <div className="h-screen bg-gray-200 py-20 p-4 md:p-12 lg:p-20">
        <div className=" pb-[80px] text-center ">
          <h1 className="text-3xl lg:text-[2.5rem]">Create New Account</h1>
          <p className="mt-5">
            <Link href={`/register`}>
              Already have an account?{" "}
              <span className="text-blue-900 font-semibold">Sign Up</span>
            </Link>
          </p>
        </div>
        <div className=" sm:w-[90vw] xl:w-[50vw] bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome Back!
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              Please sign in to your account
            </p>
            <form>
              <div className="mb-4">
                <label
                  className="block text-blue-900 font-bold mb-2 text-xl"
                  htmlFor="aadhar"
                >
                  Aadhar Number
                </label>
                <input
                  classaadhar="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="aadhar"
                  type="aadhar"
                  placeholder="aadhar"
                  
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-blue-900 text-xl font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-900 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
