import React from "react";

const Footer = () => {
    return (
        <footer className="bg-zinc-100 mt-20">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Logo */}
                    <div>
                        <a href="#" className="text-4xl font-bold">
                            Miz<span className="text-orange-500">U</span>
                        </a>

                        <p className="mt-5 text-zinc-600 leading-7">
                            Fresh groceries delivered to your doorstep.
                            Quality products sourced directly from trusted suppliers.
                        </p>

                        <p className="mt-5 font-medium text-zinc-800">
                            Owner: Tejashri Patil
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-xl font-bold text-zinc-800 mb-5">
                            Company
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-zinc-600 hover:text-orange-500">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-zinc-600 hover:text-orange-500">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-zinc-600 hover:text-orange-500">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-xl font-bold text-zinc-800 mb-5">
                            Support
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-zinc-600 hover:text-orange-500">
                                    Support Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-zinc-600 hover:text-orange-500">
                                    Feedback
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-zinc-600 hover:text-orange-500">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-bold text-zinc-800 mb-5">
                            Stay Connected
                        </h3>

                        <p className="text-zinc-600 leading-7">
                            Questions or feedback?
                            <br />
                            We'd love to hear from you.
                        </p>

                        <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-all">
                            Get In Touch
                        </button>
                    </div>

                </div>


            </div>
        </footer>
    );
};

export default Footer;