import React from 'react';
import { motion } from 'framer-motion';
import {
    Facebook,
    Instagram,
    Youtube,
    Linkedin
} from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2 }
    })
};

const Footer = () => {
    return (
        <footer className="bg-white shadow-lg pt-12 border border-t-2 border-gray-200">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6 pb-10 text-gray-800">
                {/* Logo & Description */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={0}
                >
                    <h2 className="text-3xl font-extrabold text-red-600 mb-4">Sharada Sisne</h2>
                    <p className="text-sm leading-relaxed text-gray-600">
                        Empowering education from Playgroup to Class 10 with excellence in academics and holistic development.
                    </p>
                </motion.div>

                {/* Navigation Links */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={1}
                >
                    <h3 className="text-xl font-semibold mb-4 text-red-600">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        {['Home', 'About Us', 'Admissions', 'Contact'].map((item, index) => (
                            <li key={index}>
                                <a href={`/${item.toLowerCase().replace(/\s/g, '')}`} className="hover:text-red-600 transition-colors">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Social Media */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={2}
                >
                    <h3 className="text-xl font-semibold mb-4 text-red-600">Follow Us</h3>
                    <div className="flex gap-4">

                        <motion.a
                            href="https://www.facebook.com/profile.php?id=100063692702730"
                            whileHover={{ scale: 1.1 }}
                            className="p-2 rounded-full bg-gradient-to-br from-red-500 to-yellow-400 text-white shadow-md"
                        >
                            <Facebook size={20} />
                        </motion.a>

                    </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={3}
                >
                    <h3 className="text-xl font-semibold mb-4 text-red-600">Contact Info</h3>
                    <p className="text-sm text-gray-700">Sharada Sisne School, Tulsipur-5, Dang, Nepal</p>
                    <p className="text-sm text-gray-700">Phone: 082521520</p>
                    <p className="text-sm text-gray-700">Email: sharadasisneboardingschool@gmail.com</p>
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <motion.div
                className="bg-white border border-t-2 border-gray-200  text-red-500 text-center py-2 text-sm font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
            >
                © {new Date().getFullYear()} Sharada Sisne Boarding School. All rights reserved.
            </motion.div>
        </footer>
    );
};

export default Footer;
