import React from 'react';
import { motion } from 'framer-motion';

import founderImg from '../../public/photo/founder.JPG';
import aboutImg from '../../public/photo/about.jpg';

// Sample staff data
const adminStaff = [
    { name: 'Sushila Oli', role: 'Founder', img: founderImg },
    { name: 'Dev Bahadur Oli', role: 'Founder', img: founderImg },
    { name: 'Another Admin', role: 'Principal', img: founderImg },
];

const teacherStaff = [
    { name: 'Ram Karki', role: 'Math Teacher', img: founderImg },
    { name: 'Sita Sharma', role: 'Science Teacher', img: founderImg },
    { name: 'Gita Basnet', role: 'English Teacher', img: founderImg },
];

const supportStaff = [
    { name: 'Bimal Thapa', role: 'Bus Driver', img: founderImg },
    { name: 'Rita Chaudhary', role: 'Cleaner', img: founderImg },
    { name: 'Shyam BK', role: 'Security Guard', img: founderImg },
];

const About = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    const stagger = {
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const renderStaff = (staffList) =>
        staffList.map((person, index) => (
            <motion.div
                key={index}
                className="text-center shadow-2xl py-4 rounded-lg bg-white"
                variants={fadeUp}
            >
                <img
                    src={person.img}
                    alt={person.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-lg font-medium">{person.name}</h4>
                <p className="text-sm text-gray-600">{person.role}</p>
            </motion.div>
        ));

    return (
        <div>
            {/* About Section */}
            <motion.section
                id="about"
                className="bg-gray-50 py-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
            >
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2
                        className="text-3xl font-extrabold text-red-600 text-center mb-8"
                        variants={fadeUp}
                    >
                        About Us
                    </motion.h2>
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        {/* Description */}
                        <motion.div className="md:w-1/2 text-lg text-gray-700 space-y-6" variants={fadeUp}>
                            <p>
                                Sharada Sisne Boarding School, situated in Tulsipur 5, Dang, Sharadanagar Tole, is committed to providing
                                <strong> quality education</strong> to every student. Our <strong>mission</strong> is to foster excellence
                                in education, ensuring <strong>holistic development</strong> for all students, from Playgroup to Class 10.
                            </p>
                            <p>
                                Founded in 2064 BS, the school initially started with classes from <strong>Playgroup to Class 5</strong>. In
                                <strong> 2073 BS</strong>, we proudly participated in the <strong>SEE examination</strong> for the first time,
                                with 11 students achieving <strong>exceptional results</strong>. We now have <strong>9 successful batches</strong>.
                            </p>
                            <p>
                                We offer facilities like <strong>bus service</strong>, <strong>clean drinking water</strong>,
                                <strong> playgrounds</strong>, <strong>in-house building</strong>, and a healthy <strong>canteen</strong>.
                                Founders <strong>Sushila Oli</strong> and <strong>Dev Bahadur Oli</strong> created this school to nurture young minds.
                            </p>
                        </motion.div>

                        {/* Image */}
                        <motion.div className="md:w-1/2" variants={fadeUp}>
                            <img
                                src={aboutImg}
                                alt="Sharada Sisne Boarding School"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Founder Suggestion */}
            <motion.section
                id="founder-suggestion"
                className="bg-white py-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
            >
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2
                        className="text-3xl font-extrabold text-red-600 text-center mb-8"
                        variants={fadeUp}
                    >
                        What Our Founder Suggests
                    </motion.h2>
                    <div className="flex flex-col md:flex-row gap-14 items-center">
                        {/* Photo */}
                        <motion.div className="md:w-1/3 text-center" variants={fadeUp}>
                            <img
                                src={founderImg}
                                alt="Founder"
                                className="rounded-lg shadow-lg"
                            />
                        </motion.div>

                        {/* Suggestion */}
                        <motion.div className="md:w-2/3 text-lg text-gray-700 space-y-6" variants={fadeUp}>
                            <p>
                                <strong>Sushila Oli</strong> and <strong>Dev Bahadur Oli</strong> believe education must
                                go beyond textbooks. Their dream is a school that develops students academically, emotionally, socially, and morally.
                            </p>
                            <p>
                                They urge parents to trust the school, support children, and actively participate. A strong parent-teacher bond
                                helps children grow holistically.
                            </p>
                            <p>
                                Attending meetings, volunteering, and communicating with teachers are vital. Together, we can build a nurturing environment.
                            </p>
                            <blockquote className="italic text-gray-600">
                                "Our commitment is to provide a nurturing environment where children can grow into responsible, thoughtful citizens."
                            </blockquote>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Staff Sections */}

            {/* Footer */}

        </div >
    );
};

export default About;


// const staff = () => {
//     return (
//         <>
//             <section id="staff" className="py-16 bg-gray-100">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <h2 className="text-3xl font-extrabold text-red-600 text-center mb-8">Our Dedicated Staff</h2>

//                     {/* Admin Staff */}
//                     <motion.div
//                         className="mb-12"
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true }}
//                         variants={stagger}
//                     >
//                         <h3 className="text-2xl font-semibold text-red-600 mb-4">Administration Staff</h3>
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//                             {renderStaff(adminStaff)}
//                         </div>
//                     </motion.div>

//                     {/* Teacher Staff */}
//                     <motion.div
//                         className="mb-12"
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true }}
//                         variants={stagger}
//                     >
//                         <h3 className="text-2xl font-semibold text-red-600 mb-4">Teacher Staff</h3>
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//                             {renderStaff(teacherStaff)}
//                         </div>
//                     </motion.div>

//                     {/* Support Staff */}
//                     <motion.div
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true }}
//                         variants={stagger}
//                     >
//                         <h3 className="text-2xl font-semibold text-red-600 mb-4">Support Staff</h3>
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//                             {renderStaff(supportStaff)}
//                         </div>
//                     </motion.div>
//                 </div>
//             </section >

//         </>
//     )
// }
