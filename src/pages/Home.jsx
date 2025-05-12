import React from 'react';
import { motion } from 'framer-motion';
import { GoArrowRight } from "react-icons/go";
import { MdOutlineCelebration } from "react-icons/md";
import { BiSolidBusSchool } from "react-icons/bi";
import { MdMapsHomeWork } from "react-icons/md";
import { LuNewspaper } from "react-icons/lu";
import { TfiLocationPin } from "react-icons/tfi";
import dayjs from 'dayjs';

const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};
const academicEvents = [
    { date: "2025-05-14", title: "Science Exhibition", type: "Event" },
    { date: "2025-05-21", title: "Buddha Jayanti", type: "Holiday" },
    { date: "2025-05-25", title: "Unit Test Starts", type: "Exam" },
];

const Home = () => {
    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* Hero Section */}
            <motion.section
                className="relative min-h-[400px] md:min-h-[600px] flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >

                <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/photo/child.jpeg')" }}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                />


                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                />


                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6">
                    <motion.div
                        className="w-full lg:w-1/2 text-white"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <h1 className="text-3xl md:text-6xl font-bold">Sharada Sisne</h1>
                        <h2 className="text-3xl text-orange-400 font-semibold italic mt-2">Boarding School</h2>
                        <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-md">
                            Discover the vibrant learning environment of Sharada Sisne. From classrooms to playgrounds, take a tour and see how we nurture young minds with care, creativity, and a strong foundation for the future.
                        </p>
                        <motion.button
                            className="mt-6 px-4 py-0.5 md:px-6 md:py-3 bg-sky-400 hover:bg-sky-500 text-white font-medium rounded shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Take A Tour
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section>


            {/* Quick Info Section */}
            <section className="py-6   px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6     rounded-lg">

                <motion.div

                    className="bg-white flex flex-col   border-b-2 border-blue-600 items-center justify-between h-full text-center rounded-lg  transition-shadow duration-300"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                >
                    <div className="w-full h-48 overflow-hidden rounded-t-lg">
                        <img src="/photo/img2.png" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="px-4 py-6 flex flex-col items-center">
                        <h1 className="text-blue-400 text-xl md:text-2xl font-bold italic">Holi</h1>
                        <p className="text-black text-sm mt-3 italic leading-relaxed">
                            Children celebrate Holi with bursts of color, laughter, and joy.
                            Each splash of paint reflects their spirit of togetherness and fun.
                        </p>
                        <button className="mt-5 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500">
                            Learn More
                        </button>
                    </div>
                </motion.div>

                <motion.div

                    className="bg-white flex flex-col   border-b-2 border-red-600 items-center justify-between h-full text-center rounded-lg  transition-shadow duration-300"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                >
                    <div className="w-full h-48 overflow-hidden rounded-t-lg">
                        <img src="/photo/img1.png" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="px-4 py-6 flex flex-col items-center">
                        <h1 className="text-red-400 text-xl md:text-2xl font-bold italic">Kids Drawing</h1>
                        <p className="text-black text-sm mt-3 italic leading-relaxed">
                            Kids express their imagination through vibrant colors and playful strokes. Every drawing tells a story only their hearts can create.
                        </p>
                        <button className="mt-5 px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-blue-500">
                            Learn More
                        </button>
                    </div>
                </motion.div>

                <motion.div

                    className="bg-white flex flex-col   border-b-2 border-yellow-600 items-center justify-between h-full text-center rounded-lg  transition-shadow duration-300"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                >
                    <div className="w-full h-48 overflow-hidden rounded-t-lg">
                        <img src="/photo/img3.png" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="px-4 py-6 flex flex-col items-center">
                        <h1 className="text-yellow-400 text-xl md:text-2xl font-bold italic">Award</h1>
                        <p className="text-black text-sm mt-3 italic leading-relaxed">
                            Parents are honored for their unwavering love and support.
                            Their encouragement shapes the future of every child.
                        </p>
                        <button className="mt-5 px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-blue-500">
                            Learn More
                        </button>
                    </div>
                </motion.div>

            </section>


            {/* About Us Section */}
            <section className="py-3 px-6   text-center lg:flex-row md:items-center flex flex-col justify-center shadow-xl rounded-lg">
                <motion.div
                    className=" md:w-5/6 lg:w-1/2 mb-8 flex items-center justify-center flex-col md:mb-0"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
                >
                    <h2 className="  font-bold text-4xl mb-6">About Our School</h2>
                    <img
                        src="/photo/about.jpg"
                        alt="School Building"
                        className="w-[600px] rounded-lg"
                    />
                </motion.div>

                <motion.div
                    className="lg:w-1/2 md:w-5/6 mt-0.5 sm:mt-9 text-left  lg:mt-16"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
                >

                    <p className="text-md text-gray-700 mb-4 leading-relaxed tracking-norma ">
                        Sharada Sisne Boarding School is committed to providing a holistic education that goes beyond textbooks. We focus on nurturing curiosity, creativity, and confidence in every student. With experienced teachers, modern facilities, and a caring environment, we aim to shape responsible individuals who are ready to face real-world challenges with knowledge and values.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        We strongly believe that education is not just about learning facts-it's about developing a lifelong love for learning. Our school encourages participation in arts, sports, and extracurricular activities alongside academics, ensuring that every child grows intellectually, emotionally, and socially. At Sharada Sisne, we don't just educate minds-we nurture hearts.
                    </p>

                </motion.div>
            </section>


            <section className="py-16 px-4 bg-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-start justify-center">

                <motion.div

                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 1.4, ease: 'easeOut' }}
                >
                    <div className="flex gap-6">
                        <div>
                            <MdOutlineCelebration className=' text-5xl text-orange-600' />
                        </div>
                        <div>
                            <h1 className="text-white text-lg sm:text-xl font-bold">Events & Celebrations </h1>
                            <p className="text-white text-sm mt-3 max-w-xs">
                                We celebrate various events and festivals throughout the year, fostering joy, creativity, and cultural appreciation among students.
                            </p>
                            <button className="mt-3 text-red-500 hover:underline">
                                Read More <GoArrowRight className="inline-block ml-2 text-red-500" />
                            </button>
                        </div>
                    </div>
                </motion.div>
                <motion.div

                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 1.4, ease: 'easeOut' }}
                >
                    <div className="flex gap-6">
                        <div>
                            <MdMapsHomeWork className=' text-5xl text-orange-600' />
                        </div>
                        <div>
                            <h1 className="text-white text-lg sm:text-xl font-bold">Visit School</h1>
                            <p className="text-white text-sm mt-3 max-w-xs">
                                Parents can schedule a visit to explore the school campus and facilities.
                            </p>
                            <button className="mt-3 text-red-500 hover:underline">
                                Schedule a Visit <GoArrowRight className="inline-block ml-2 text-red-500" />
                            </button>
                        </div>
                    </div>
                </motion.div>
                <motion.div

                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 1.4, ease: 'easeOut' }}
                >
                    <div className="flex gap-6">
                        <div>
                            <BiSolidBusSchool className=' text-6xl text-orange-500' />
                        </div>
                        <div>
                            <h1 className="text-white text-lg sm:text-xl font-bold">Transportation</h1>
                            <p className="text-white text-sm mt-3 max-w-xs">
                                All about how your children can get to school
                            </p>
                            <button className="mt-3 text-red-500 cursor-pointer hover:underline">
                                Read More  <GoArrowRight className="inline-block ml-2 text-red-500" />
                            </button>
                        </div>
                    </div>
                </motion.div>

            </section>



            <section className="  bg-gray-50   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
                <div className=" lg:col-span-2">
                    <div className="flex flex-col px-6 py-4 ">
                        <div className="">
                            <div className="flex gap-4">
                                <LuNewspaper className=' text-5xl text-gray-600' />
                                <h1 className="text-2xl font-bold mt-4">News & Updates</h1>
                            </div>
                            <span className=" text-sm text-gray-500">Read All News</span>
                        </div>
                        <div className=" grid grid-cols-1 lg:grid-cols-2 mt-6 gap-8 ">
                            <div className="">
                                <div className=" overflow-hidden relative group rounded-lg">
                                    <img src="/photo/img3.png" alt="" className=' group-hover:scale-105 transition duration-200 ease-in-out cursor-pointer rounded-lg' />
                                    <div className=" absolute bg-black bottom-0 left-0 right-0 opacity-40 w-full group-hover:h-full h-0 cursor-pointer transition-all ease-in-out duration-300 "></div>
                                </div>
                                <div className=" mt-4">
                                    <span className=" text-gray-400 text-sm  ">Baisakh 7, 2082</span>
                                    <p className=" text-lg font-bold">Our student parents are awarded by the school.</p>
                                </div>
                            </div>


                            <div className=" flex flex-col gap-8">
                                <div className=" flex gap-8">
                                    <div className=" relative group w-24 overflow-hidden rounded-lg ">
                                        <img src="/photo/img1.png" alt="" className=' h-24 w-24 group-hover:scale-125 transition duration-900 ease-in-out cursor-pointer rounded-lg' />
                                        <div className=" absolute bg-black bottom-0 opacity-40 left-0 right-0 group-hover:opacity-40 w-full group-hover:h-full   cursor-pointer transition-all  duration-900 "></div>
                                    </div>
                                    <div className="  ">
                                        <span className=" text-gray-400 text-sm mt-3 ">Baisakh 7, 2082</span>
                                        <p className=" text-lg font-bold mt-3">Our student parents are awarded by the school.</p>
                                    </div>

                                </div>
                                <div className=" flex gap-8">
                                    <div className=" relative group w-24 overflow-hidden rounded-lg ">
                                        <img src="/photo/img1.png" alt="" className=' h-24 w-24 group-hover:scale-125 transition duration-900 ease-in-out cursor-pointer rounded-lg' />
                                        <div className=" absolute bg-black bottom-0 opacity-40 left-0 right-0 group-hover:opacity-40 w-full group-hover:h-full   cursor-pointer transition-all  duration-900 "></div>
                                    </div>
                                    <div className="  ">
                                        <span className=" text-gray-400 text-sm mt-3 ">Baisakh 7, 2082</span>
                                        <p className=" text-lg font-bold mt-3">Our student parents are awarded by the school.</p>
                                    </div>

                                </div>
                                <div className=" flex gap-8">
                                    <div className=" relative group w-24 overflow-hidden rounded-lg ">
                                        <img src="/photo/img1.png" alt="" className=' h-24 w-24 group-hover:scale-125 transition duration-900 ease-in-out cursor-pointer rounded-lg' />
                                        <div className=" absolute bg-black bottom-0 opacity-40 left-0 right-0 group-hover:opacity-40 w-full group-hover:h-full   cursor-pointer transition-all  duration-900 "></div>
                                    </div>
                                    <div className="  ">
                                        <span className=" text-gray-400 text-sm mt-3 ">Baisakh 7, 2082</span>
                                        <p className=" text-lg font-bold mt-3">Our student parents are awarded by the school.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=" relative  inset-0 bg-cover bg-center h-full"
                    style={{ backgroundImage: "url('/photo/school.jpg')" }}
                >
                    <div className=" absolute bottom-0 right-0 left-0 w-full h-full bg-gradient-to-t from-gray-800 to-gray-900 opacity-90"></div>
                    <div className=" w-full h-full text-white px-10 mt-22  relative z-50">
                        <div className="">
                            <div className="   ">
                                <h1 className=" font-semibold text-3xl">Upcomming Events</h1>
                            </div>
                            {
                                academicEvents.map((event, index) => (
                                    <div className=" flex mb-10 gap-4 mt-7"
                                        key={index}
                                    >
                                        <div className=" flex flex-col gap-1 border-b-2 border-blue-600">
                                            <span className=" font-semibold text-5xl text-blue-800">
                                                {dayjs(event.date).format("DD")}
                                            </span>
                                            <span className=" font-semibold text-4xl">
                                                {dayjs(event.date).format("MM")}
                                            </span>

                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <div className=" font-semibold text-2xl ">
                                                {event.title}
                                            </div>
                                            <div className=" mt-6 flex gap-3">
                                                <TfiLocationPin />
                                                <span className=" text-xs">
                                                    Sharada Sisne
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </section>


        </div >
    );
}
export default Home;