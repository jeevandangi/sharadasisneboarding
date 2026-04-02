import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GoArrowRight, GoQuote } from "react-icons/go";
import { HiOutlineAcademicCap, HiOutlineUsers, HiOutlineTruck, HiOutlineBeaker } from "react-icons/hi2";
import { TbDroplet, TbShield } from "react-icons/tb";
import { PiBuildingApartmentFill } from "react-icons/pi";
import founderImg from '../../public/photo/founder.JPG';
import aboutImg from '../../public/photo/about.jpg';

/* ─── Animation variants ─── */
const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
};

const stagger = {
    visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── Data ─── */
const milestones = [
    { year: "2064 BS", label: "School Founded", desc: "Started with Playgroup to Class 5" },
    { year: "2073 BS", label: "First SEE Batch", desc: "11 students, exceptional results" },
    { year: "2082 BS", label: "9 SEE Batches", desc: "Hundreds of graduates, growing legacy" },
];

const facilities = [
    { icon: <HiOutlineTruck size={20} />, label: "Bus Service" },
    { icon: <TbDroplet size={20} />, label: "Clean Water" },
    { icon: <HiOutlineAcademicCap size={20} />, label: "Playgrounds" },
    { icon: <PiBuildingApartmentFill size={20} />, label: "In-house Building" },
    { icon: <HiOutlineBeaker size={20} />, label: "Science Lab" },
    { icon: <TbShield size={20} />, label: "Safe Campus" },
];

const adminStaff = [
    { name: 'Sushila Oli', role: 'Co-Founder', img: founderImg },
    { name: 'Dev Bahadur Oli', role: 'Co-Founder', img: founderImg },
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

const staffTabs = [
    { id: 'admin', label: 'Administration', data: adminStaff },
    { id: 'teachers', label: 'Teachers', data: teacherStaff },
    { id: 'support', label: 'Support Staff', data: supportStaff },
];

/* ─── Sub-components ─── */
function SectionLabel({ children }) {
    return (
        <p className="text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2">
            {children}
        </p>
    );
}

function StaffCard({ person, i }) {
    return (
        <motion.div
            custom={i}
            variants={fadeUp}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
        >
            <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-5">
                <h4 className="font-bold text-gray-900 text-base">{person.name}</h4>
                <p className="text-sm text-amber-600 mt-0.5 font-medium">{person.role}</p>
            </div>
        </motion.div>
    );
}

/* ════════════════════════════════════════════ */
const About = () => {
    const [activeTab, setActiveTab] = useState('admin');
    const activeStaff = staffTabs.find(t => t.id === activeTab)?.data || [];

    return (
        <div className="bg-[#F9F7F4] min-h-screen">

            {/* ── PAGE HERO ── */}
            <section className="relative bg-gray-950 py-24 overflow-hidden">
                {/* Decorative left accent */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-amber-400 via-orange-500 to-transparent" />
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <SectionLabel>Our Story</SectionLabel>
                        <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Sharada Sisne</span>
                        </h1>
                        <p className="mt-4 text-gray-400 text-lg max-w-xl leading-relaxed">
                            A school founded on love for learning, growing strong for over two decades in the heart of Dang.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── ABOUT SECTION ── */}
            <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Image side */}
                    <motion.div
                        className="relative"
                        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    >
                        <img src={aboutImg} alt="School" className="rounded-2xl w-full object-cover shadow-xl" />
                        {/* Decorative frame */}
                        <div className="absolute -top-3 -left-3 w-20 h-20 rounded-xl border-4 border-amber-400 opacity-50" />
                        {/* Founded badge */}
                        <div className="absolute -bottom-5 -right-5 bg-amber-400 text-gray-900 rounded-2xl px-6 py-4 shadow-lg hidden md:block">
                            <p className="text-3xl font-black">2064</p>
                            <p className="text-xs font-bold mt-0.5 tracking-wide">Founded (BS)</p>
                        </div>
                    </motion.div>

                    {/* Text side */}
                    <motion.div
                        variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    >
                        <motion.div variants={fadeUp}>
                            <SectionLabel>Who We Are</SectionLabel>
                            <h2 className="text-4xl font-black text-gray-900 leading-tight">
                                Quality Education<br />Since 2064 BS
                            </h2>
                            <div className="mt-2 w-12 h-1 bg-amber-400 rounded-full" />
                        </motion.div>

                        <motion.p className="mt-6 text-gray-600 leading-relaxed" variants={fadeUp}>
                            Sharada Sisne Boarding School, situated in Tulsipur 5, Dang, Sharadanagar Tole, is committed to providing quality education to every student — from Playgroup to Class 10.
                        </motion.p>
                        <motion.p className="mt-3 text-gray-600 leading-relaxed" variants={fadeUp}>
                            Founded by <strong className="text-gray-900">Sushila Oli</strong> and <strong className="text-gray-900">Dev Bahadur Oli</strong>, our mission is fostering excellence through holistic development — academically, socially, and morally.
                        </motion.p>

                        {/* Facilities grid */}
                        <motion.div className="mt-8 grid grid-cols-3 gap-3" variants={stagger}>
                            {facilities.map((f, i) => (
                                <motion.div
                                    key={i} custom={i} variants={fadeUp}
                                    className="flex items-center gap-2 bg-white rounded-xl px-3 py-2.5 border border-gray-100 text-sm font-medium text-gray-700 shadow-sm"
                                >
                                    <span className="text-amber-500">{f.icon}</span>
                                    <span className="text-xs">{f.label}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ── MILESTONES ── */}
            <section className="py-16 bg-gray-950">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div
                        className="text-center mb-12"
                        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    >
                        <SectionLabel>Our Journey</SectionLabel>
                        <h2 className="text-3xl md:text-4xl font-black text-white">Milestones That Matter</h2>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-6 relative"
                        variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    >
                        {/* Connector line (desktop only) */}
                        <div className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-px bg-white/10" />

                        {milestones.map((m, i) => (
                            <motion.div key={i} custom={i} variants={fadeUp}
                                className="relative bg-gray-900 rounded-2xl p-7 border border-white/5 hover:border-amber-500/30 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mb-4">
                                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                </div>
                                <p className="text-amber-400 text-sm font-bold tracking-wide">{m.year}</p>
                                <h3 className="text-white font-black text-xl mt-1">{m.label}</h3>
                                <p className="text-gray-500 text-sm mt-2 leading-relaxed">{m.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── FOUNDER MESSAGE ── */}
            <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-5 gap-12 items-center">

                    {/* Photo */}
                    <motion.div
                        className="md:col-span-2 relative"
                        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                            <img src={founderImg} alt="Founders" className="w-full object-cover" />
                            {/* Name card */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950 to-transparent p-6">
                                <p className="text-white font-black text-lg">Sushila & Dev Bahadur Oli</p>
                                <p className="text-amber-400 text-sm font-medium">Co-Founders</p>
                            </div>
                        </div>
                        {/* Decorative */}
                        <div className="absolute -top-3 -right-3 w-16 h-16 rounded-xl border-4 border-orange-400 opacity-40" />
                    </motion.div>

                    {/* Message */}
                    <motion.div
                        className="md:col-span-3"
                        variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    >
                        <motion.div variants={fadeUp}>
                            <SectionLabel>Founder's Message</SectionLabel>
                            <h2 className="text-4xl font-black text-gray-900 leading-tight">
                                A Vision Beyond<br />Textbooks
                            </h2>
                            <div className="mt-2 w-12 h-1 bg-amber-400 rounded-full" />
                        </motion.div>

                        <motion.p className="mt-6 text-gray-600 leading-relaxed" variants={fadeUp}>
                            Sushila Oli and Dev Bahadur Oli believe education must go beyond textbooks. Their dream is a school that develops students academically, emotionally, socially, and morally.
                        </motion.p>
                        <motion.p className="mt-4 text-gray-600 leading-relaxed" variants={fadeUp}>
                            They urge parents to trust the school, actively support their children, and participate in school life. A strong parent-teacher bond helps every child grow holistically.
                        </motion.p>

                        {/* Blockquote */}
                        <motion.blockquote
                            className="mt-8 relative pl-6 border-l-4 border-amber-400"
                            variants={fadeUp}
                        >
                            <GoQuote className="absolute -top-2 -left-1 text-amber-400 opacity-50" size={22} />
                            <p className="text-gray-700 italic leading-relaxed text-lg">
                                "Our commitment is to provide a nurturing environment where children can grow into responsible, thoughtful citizens."
                            </p>
                            <footer className="mt-3 text-sm font-semibold text-gray-900">— The Founders</footer>
                        </motion.blockquote>
                    </motion.div>
                </div>
            </section>

            {/* ── STAFF SECTION ── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12">

                    <motion.div
                        className="text-center mb-12"
                        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    >
                        <SectionLabel>The Team</SectionLabel>
                        <h2 className="text-4xl font-black text-gray-900">Our Dedicated Staff</h2>
                    </motion.div>

                    {/* Tabs */}
                    <div className="flex gap-2 justify-center mb-10 flex-wrap">
                        {staffTabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === tab.id
                                    ? 'bg-amber-400 text-gray-900 shadow-md shadow-amber-200'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Staff Grid */}
                    {/* <motion.div
                        key={activeTab}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                    >
                        {activeStaff.map((person, i) => (
                            <StaffCard key={i} person={person} i={i} />
                        ))}
                    </motion.div> */}

                    {/* CTA */}
                    <motion.div
                        className="text-center mt-14"
                        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    >
                        <p className="text-gray-500 text-sm mb-4">Want to join our team?</p>
                        <button className="group flex items-center gap-2 px-7 py-3.5 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-colors mx-auto">
                            View Careers
                            <GoArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default About;