import Link from 'next/link';

export default function Home() {
    return (
        <>
            <div className=' bg-gray-200 min-h-screen'>
                <div className="bg-gray-200 pt-[40px] pb-[150px] text-center ">
                    <h1 className="text-3xl lg:text-[2.5rem]">Create New Account</h1>
                    <p className="mt-5">
                        <Link href={`/login`}>Already have an account? <span className='text-violet-900 font-semibold'>Log In</span></Link>
                    </p>
                </div>
                <div className="bg-white sm:w-[90vw] xl:w-[50vw] mt-[-130px] mb-2 m-auto px-14 pt-16 pb-10 rounded-3xl">
                    <div>
                        <form>
                            {/* Name field */}
                            <div className="mb-4">
                                <label
                                    className="block text-blue-900 font-bold mb-2 text-xl"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                />
                            </div>
                            {/* Phone Number field */}
                            <div className="mb-4">
                                <label
                                    className="block text-blue-900 font-bold mb-2 text-xl"
                                    htmlFor="phone"
                                >
                                    Phone Number
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="phone"
                                    type="tel"
                                    placeholder="Phone Number"
                                />
                            </div>
                            {/* Aadhar Number field */}
                            <div className="mb-4">
                                <label
                                    className="block text-blue-900 font-bold mb-2 text-xl"
                                    htmlFor="aadhar"
                                >
                                    Aadhar Number
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="aadhar"
                                    type="text"
                                    placeholder="Aadhar Number"
                                />
                            </div>
                            {/* Password field */}
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
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
