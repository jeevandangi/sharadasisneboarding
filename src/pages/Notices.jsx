import { motion } from "framer-motion";

const notices = [
    {
        id: 1,
        title: "SEE Exam Routine Published",
        description: "The routine for the upcoming SEE exams has been released. Please download the PDF for full details.",
        date: "2025-05-10",
        link: "/notices/see-exam-routine.pdf"
    },
    {
        id: 2,
        title: "Admission Open for 2082",
        description: "Admissions for the academic year 2082 are now open for PG to Class 10.",
        date: "2025-04-25",
        link: "/notices/admission-2082"
    }
];

const Notices = () => {
    return (
        <section className="bg-white py-12 px-4 md:px-16" id="notices">
            <motion.h2
                className="text-3xl font-bold text-center mb-8 text-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                School Notices
            </motion.h2>

            <div className="grid gap-6 md:grid-cols-2">
                {notices.map((notice) => (
                    <motion.div
                        key={notice.id}
                        className="border rounded-xl p-6 shadow-md bg-gray-50 hover:shadow-lg transition duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: notice.id * 0.1 }}
                    >
                        <p className="text-sm text-gray-500">{new Date(notice.date).toDateString()}</p>
                        <h3 className="text-xl font-semibold text-gray-800 mt-2">{notice.title}</h3>
                        <p className="text-gray-600 mt-1">{notice.description}</p>
                        <a
                            href={notice.link}
                            className="inline-block mt-3 text-blue-600 font-medium hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Read More →
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Notices;
