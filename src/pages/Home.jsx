import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const Home = () => {
    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center py-32 px-4 text-white shadow-xl bg-no-repeat"
                style={{
                    backgroundImage: "url('../../public/photo/all.JPG')",
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <motion.div
                    className="relative z-10 text-center"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-600 mb-6">
                        Sharada Sisne Boarding School
                    </h1>
                    <p className="text-md md:text-lg max-w-2xl mx-auto text-orange-200">
                        Providing quality education from Playgroup to Class 10 with experienced faculty and modern facilities.
                    </p>
                </motion.div>
            </section>

            {/* Quick Info Section */}
            <section className="py-12 px-6 grid md:grid-cols-3 gap-6 text-center bg-gray-100 shadow-xl rounded-lg">
                <motion.div
                    className="bg-orange-600 text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                >
                    <h2 className="text-xl font-semibold mb-2 text-yellow-300">Experienced Faculty</h2>
                    <p>Our teachers are dedicated, skilled, and passionate about education.</p>
                </motion.div>

                <motion.div
                    className="bg-yellow-500 text-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
                >
                    <h2 className="text-xl font-semibold mb-2 text-white">Modern Facilities</h2>
                    <p>Equipped with smart classrooms, computer labs, and a science lab.</p>
                </motion.div>

                <motion.div
                    className="bg-orange-600 text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
                >
                    <h2 className="text-xl font-semibold mb-2 text-yellow-300">Extra Activities</h2>
                    <p>Sports, arts, and extracurriculars to develop overall student growth.</p>
                </motion.div>
            </section>

            {/* About Us Section */}
            <section className="py-16 px-6 bg-gray-50 text-center md:flex md:items-center md:justify-between shadow-xl rounded-lg">
                <motion.div
                    className="md:w-1/2 mb-8 md:mb-0"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
                >
                    <img
                        src="../../public/photo/about.jpg"
                        alt="School Building"
                        className="w-[600px] rounded-lg shadow-xl"
                    />
                </motion.div>

                <motion.div
                    className="md:w-1/2 text-left"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
                >
                    <h2 className="text-3xl font-bold text-orange-600 mb-6">About Our Academic Portfolio</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Sharada Sisne Boarding School offers a comprehensive academic curriculum from Playgroup to Class 10.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        Our experienced faculty members are dedicated to ensuring that every student receives personalized attention.
                    </p>
                    <a
                        href="/about"
                        className="bg-yellow-500 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors"
                    >
                        Know More
                    </a>
                </motion.div>
            </section>

            {/* Testimonial Section */}
            <section className="py-16 px-6 bg-gray-200 shadow-xl rounded-lg">
                <motion.div
                    className="text-center"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 1.4, ease: 'easeOut' }}
                >
                    <h2 className="text-3xl font-bold text-orange-600 mb-6">What Our Students & Parents Say</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-10">
                        <div className="bg-white p-6 rounded-lg shadow-xl max-w-xs transform transition-all hover:scale-105 duration-300">
                            <p className="text-lg text-gray-700 mb-4">
                                "Sharada Sisne Boarding School has helped my child grow academically and socially. The teachers are so caring and attentive!"
                            </p>
                            <h4 className="font-semibold text-orange-600">Sita Sharma</h4>
                            <p className="text-sm text-gray-500">Parent</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-xl max-w-xs transform transition-all hover:scale-105 duration-300">
                            <p className="text-lg text-gray-700 mb-4">
                                "I love being part of this school. The extracurricular activities and the focus on academic excellence have shaped my future!"
                            </p>
                            <h4 className="font-semibold text-orange-600">Aarav Karki</h4>
                            <p className="text-sm text-gray-500">Student</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Contact Us Section (Added) */}
            <section className="py-16 px-6 bg-gray-50 text-center shadow-xl rounded-lg">
                <motion.div
                    className="text-center"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 1.6, ease: 'easeOut' }}
                >
                    <h2 className="text-3xl font-bold text-orange-600 mb-6">Contact Us</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Have questions or want to get in touch? Feel free to contact us for more information or inquiries.
                    </p>



                    {/* Form and Device Info Section */}
                    <div className="w-full   items-center justify-center flex flex-col gap-6">
                        {/* Contact Form */}
                        {/* Contact Form */}
                        <form className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-red-600 font-semibold mb-1">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-red-600 font-semibold mb-1">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-red-600 font-semibold mb-1">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                                    rows="5"
                                    placeholder="Write your message..."
                                ></textarea>
                            </div>

                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-red-500 to-yellow-400 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:from-red-600 hover:to-yellow-500 transition-all"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>

                        {/* Device Info Section */}

                    </div>

                </motion.div>
            </section>

        </div >
    );
}
export default Home;
