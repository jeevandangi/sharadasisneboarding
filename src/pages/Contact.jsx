import { motion } from "framer-motion";


const Contact = () => {
    return (
        <section className="bg-gray-100 py-12 px-4 md:px-16" id="contact">
            <motion.h2
                className="text-3xl font-bold text-center text-gray-800 mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Contact Us
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <motion.div
                    className="space-y-4 text-gray-700"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p><strong>School Name:</strong> Sharada Sisne Boarding School</p>
                    <p><strong>Address:</strong> Butwal, Rupandehi, Nepal</p>
                    <p><strong>Phone:</strong> +977-71-XXXXX</p>
                    <p><strong>Email:</strong> info@sharadasisne.edu.np</p>

                    {/* Optional: Embedded Map */}
                    <div className="mt-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1684.1216489102137!2d82.30004564343588!3d28.142235380887822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1746960628837!5m2!1sen!2snp" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    className="bg-white p-6 rounded-xl shadow-md space-y-4"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Message sent!"); // You can connect to backend here
                    }}
                >
                    <div>
                        <label className="block text-sm font-medium">Name</label>
                        <input type="text" className="w-full border p-2 rounded mt-1" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input type="email" className="w-full border p-2 rounded mt-1" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Message</label>
                        <textarea rows="4" className="w-full border p-2 rounded mt-1" required></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;