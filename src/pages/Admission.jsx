import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Admission = () => {
    return (
        <section id="admission" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Title */}
                <motion.h2
                    className="text-3xl font-extrabold text-red-600 text-center mb-8"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Admissions
                </motion.h2>

                {/* Introduction */}
                <motion.p
                    className="text-lg text-gray-700 text-center mb-10"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Admissions are open for <span className="font-semibold text-gray-800">Playgroup to Class 9</span>. We welcome new students to join our supportive and enriching learning environment.
                </motion.p>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {[1, 2, 3].map((step, index) => (
                        <motion.div
                            key={step}
                            className="bg-gray-50 p-6 rounded-lg shadow-lg text-center"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <h3 className="text-xl font-semibold text-red-500 mb-2">Step {step}</h3>
                            <p className="text-gray-700">
                                {step === 1 && 'Visit our school or contact us to get the admission form and detailed information.'}
                                {step === 2 && 'Submit the filled form along with the required documents to our school office.'}
                                {step === 3 && 'Attend the interaction session (for parents and students) followed by admission confirmation.'}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Required Documents */}
                <motion.div
                    className="bg-gray-100 p-6 rounded-lg mb-12"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Required Documents:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Birth Certificate</li>
                        <li>Previous School Transfer Certificate (if applicable)</li>
                        <li>Progress Report / Marksheet</li>
                        <li>Passport-size Photos (2 copies)</li>
                        <li>Copy of Parent's Citizenship</li>
                    </ul>
                </motion.div>

                {/* CTA - Call Button */}
                <motion.div
                    className="text-center"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <p className="text-lg text-gray-800 mb-4">Have questions about the admission process?</p>
                    <a
                        href="tel:+9779841891130"
                        className="inline-block bg-red-500 text-white px-6 py-3 rounded-full shadow hover:bg-red-600 transition duration-300"
                    >
                        Call Us for Admission Info
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Admission;
