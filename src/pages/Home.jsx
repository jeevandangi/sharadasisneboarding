import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { MdOutlineCelebration, MdMapsHomeWork } from "react-icons/md";
import { BiSolidBusSchool } from "react-icons/bi";
import { LuNewspaper } from "react-icons/lu";
import { TfiLocationPin } from "react-icons/tfi";
import { HiOutlineAcademicCap, HiOutlineUserGroup, HiOutlineStar } from "react-icons/hi2";
import dayjs from 'dayjs';

/* ─── Animation variants ─── */
const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
    }),
};

/* ─── Data ─── */


const academicEvents = [
    { date: "2025-05-14", title: "Science Exhibition", type: "Event" },
    { date: "2025-05-21", title: "Buddha Jayanti", type: "Holiday" },
    { date: "2025-05-25", title: "Unit Test Starts", type: "Exam" },
];

const eventBadge = (type) => {
    const map = {
        Holiday: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
        Exam: "bg-rose-500/15 text-rose-400 border border-rose-500/30",
        Event: "bg-sky-500/15 text-sky-400 border border-sky-500/30",
    };
    return map[type] || map.Event;
};

/* ─── Animated Counter ─── */
function Counter({ value, suffix }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });



    useEffect(() => {

        if (!inView) return;
        let start = 0;
        const duration = 1600;
        const step = 16;
        const increment = value / (duration / step);
        const timer = setInterval(() => {
            start += increment;
            if (start >= value) { setCount(value); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, step);
        return () => clearInterval(timer);
    }, [inView, value]);



    return (
        <span ref={ref} className="tabular-nums">
            {count}{suffix}
        </span>
    );
}

/* ════════════════════════════════════════════ */
const Home = () => {
    const [excellent, setexcellent] = useState(0)
    useEffect(() => {
        setexcellent(new Date().getFullYear() - 2008);
    }, [])

    const stats = [
        { value: 600, suffix: "+", label: "Students Enrolled" },
        { value: 100, suffix: "%", label: "Pass Rate" },
        { value: 25, suffix: "+", label: "Expert Teachers" },
        { value: excellent, suffix: "yrs", label: "Of Excellence" },
    ];
    return (
        <div className="min-h-screen bg-[#F9F7F4] text-gray-800 font-[system-ui]">

            {/* ── HERO ── */}
            <section className="relative min-h-[680px] md:min-h-[760px] flex flex-col justify-end overflow-hidden">

                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center scale-[1.03]"
                    style={{ backgroundImage: "url('/photo/homeone.JPG')" }}
                />

                {/* Layered gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-transparent to-transparent" />

                {/* Decorative accent line */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-amber-400 via-orange-500 to-transparent" />

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 pt-32 w-full">
                    <div className="max-w-2xl">

                        {/* Pill badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-6"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                            Now Enrolling — 2025–26
                        </motion.div>

                        {/* Main headline */}
                        <motion.h1
                            className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Sharada
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                                Sisne
                            </span>
                        </motion.h1>

                        <motion.p
                            className="mt-2 text-xl md:text-2xl text-gray-300 font-light italic tracking-wide"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                        >
                            Boarding School
                        </motion.p>

                        <motion.p
                            className="mt-5 text-base md:text-lg text-gray-400 leading-relaxed max-w-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Nurturing young minds with creativity, discipline, and care.
                            A vibrant learning environment built for the future.
                        </motion.p>

                        {/* CTA buttons */}
                        <motion.div
                            className="mt-8 flex flex-wrap gap-3"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.55 }}
                        >
                            <button className="group flex items-center gap-2 px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/25">
                                Take A Tour
                                <GoArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="flex items-center gap-2 px-7 py-3.5 border border-white/25 hover:bg-white/10 text-white font-medium rounded-xl backdrop-blur-sm transition-all duration-200">
                                Learn More
                            </button>
                        </motion.div>
                    </div>

                    {/* ── STAT BAR ── */}
                    <motion.div
                        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        {stats.map((s, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-sm px-6 py-5 hover:bg-white/10 transition-colors">
                                <p className="text-2xl md:text-3xl font-black text-white">
                                    <Counter value={s.value} suffix={s.suffix} />
                                </p>
                                <p className="text-xs text-gray-400 mt-1 tracking-wide">{s.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll hint */}
                <motion.div
                    className="absolute bottom-6 right-8 flex flex-col items-center gap-1.5 text-white/40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <span className="text-[10px] uppercase tracking-widest rotate-90 origin-center">Scroll</span>
                    <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
                </motion.div>
            </section>

            {/* ── QUICK LINKS ── */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-6 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { icon: <HiOutlineAcademicCap size={22} />, title: "Admissions Open", sub: "Apply for 2025–26", color: "text-amber-600 bg-amber-50 border-amber-200" },
                        { icon: <HiOutlineUserGroup size={22} />, title: "Parent Portal", sub: "Track your child's progress", color: "text-sky-600 bg-sky-50 border-sky-200" },
                        { icon: <HiOutlineStar size={22} />, title: "Scholarships", sub: "Merit-based programs", color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className={`flex items-center gap-4 p-5 rounded-2xl border ${item.color} bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer`}
                        >
                            <div className={`p-2.5 rounded-xl ${item.color}`}>
                                {item.icon}
                            </div>
                            <div>
                                <p className="font-bold text-sm text-gray-900">{item.title}</p>
                                <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
                            </div>
                            <GoArrowUpRight className="ml-auto text-gray-400" size={16} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── GALLERY CARDS ── */}
            <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
                <motion.div
                    className="flex items-end justify-between mb-10"
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                >
                    <div>
                        <p className="text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2">School Life</p>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900">Memorable Moments</h2>
                    </div>
                    <button className="hidden md:flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                        View Gallery <GoArrowRight />
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { img: "/photo/img2.png", title: "Holi Celebrations", tag: "Festival", color: "bg-violet-500" },
                        { img: "/photo/img1.png", title: "Kids Art & Drawing", tag: "Activity", color: "bg-rose-500" },
                        { img: "/photo/img3.png", title: "Annual Awards", tag: "Achievement", color: "bg-amber-500" },
                    ].map((item, i) => (
                        <motion.article
                            key={i}
                            custom={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1.5"
                        >
                            <div className="overflow-hidden aspect-[4/3]">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Tag */}
                            <span className={`absolute top-3 left-3 px-3 py-1 ${item.color} text-white text-xs font-bold rounded-full`}>
                                {item.tag}
                            </span>

                            <div className="p-5">
                                <h3 className="font-bold text-gray-900 text-lg leading-snug">{item.title}</h3>
                                <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
                                    Engaging students in creativity, fun, and meaningful learning experiences.
                                </p>
                                <button className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors">
                                    Read More <GoArrowRight size={14} />
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* ── ABOUT ── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        className="relative"
                        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    >
                        <img src="/photo/about.jpg" alt="About" className="rounded-2xl w-full object-cover shadow-xl" />
                        {/* Floating badge */}
                        <div className="absolute -bottom-5 -right-5 bg-amber-400 text-gray-900 rounded-2xl px-6 py-4 shadow-lg hidden md:block">
                            <p className="text-3xl font-black">25+</p>
                            <p className="text-xs font-semibold mt-0.5">Years of Excellence</p>
                        </div>
                        {/* Accent strip */}
                        <div className="absolute -top-3 -left-3 w-16 h-16 rounded-xl border-4 border-amber-400 opacity-60" />
                    </motion.div>

                    <motion.div
                        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    >
                        <p className="text-xs uppercase tracking-widest text-amber-500 font-semibold mb-3">Who We Are</p>
                        <h2 className="text-4xl font-black text-gray-900 leading-tight">
                            Building Future<br />Leaders
                        </h2>
                        <div className="mt-2 w-12 h-1 bg-amber-400 rounded-full" />

                        <p className="mt-6 text-gray-600 leading-relaxed">
                            We provide holistic education that nurtures creativity, discipline,
                            and confidence in every student — preparing them for a changing world.
                        </p>

                        <ul className="mt-6 space-y-3">
                            {["Experienced & passionate teachers", "Modern, state-of-the-art facilities", "Rich co-curricular activities", "Safe and inclusive environment"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <span className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                                        <span className="text-amber-600 text-xs">✓</span>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="mt-8 group flex items-center gap-2 px-7 py-3.5 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-colors">
                            Our Story
                            <GoArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* ── FEATURES ── */}
            <section className="py-20 bg-gray-950">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div
                        className="text-center mb-12"
                        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    >
                        <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">What We Offer</p>
                        <h2 className="text-3xl md:text-4xl font-black text-white">Everything a Student Needs</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: <MdOutlineCelebration size={28} />, title: "Events & Fests", desc: "Year-round cultural and academic events that celebrate student talent.", accent: "from-violet-500 to-purple-600" },
                            { icon: <MdMapsHomeWork size={28} />, title: "Visit School", desc: "Open campus tours available for prospective families every weekend.", accent: "from-amber-400 to-orange-500" },
                            { icon: <BiSolidBusSchool size={28} />, title: "Safe Transport", desc: "GPS-enabled buses with trained staff covering all major routes.", accent: "from-sky-400 to-cyan-500" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="group p-7 bg-gray-900 rounded-2xl border border-white/5 hover:border-white/15 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-white mb-5`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="text-gray-400 mt-2 text-sm leading-relaxed">{item.desc}</p>
                                <button className="mt-5 flex items-center gap-1 text-sm font-medium text-gray-500 group-hover:text-white transition-colors">
                                    Learn more <GoArrowRight size={13} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── NEWS + EVENTS ── */}
            <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-3 gap-10">

                    {/* NEWS */}
                    <div className="md:col-span-2">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <p className="text-xs uppercase tracking-widest text-amber-500 font-semibold mb-1">Latest</p>
                                <h2 className="text-3xl font-black text-gray-900">News & Updates</h2>
                            </div>
                            <button className="hidden md:flex items-center gap-1 text-sm text-gray-400 hover:text-gray-900 transition-colors">
                                All News <GoArrowRight size={14} />
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp} custom={i}
                                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                                    className="group cursor-pointer"
                                >
                                    <div className="overflow-hidden rounded-xl aspect-video bg-gray-100">
                                        <img src="/photo/img3.png" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" />
                                    </div>
                                    <div className="mt-3">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="text-[10px] uppercase tracking-widest text-amber-500 font-bold">School News</span>
                                            <span className="text-gray-300">·</span>
                                            <span className="text-xs text-gray-400">Baisakh 7, 2082</span>
                                        </div>
                                        <h3 className="font-bold text-gray-900 leading-snug group-hover:text-amber-600 transition-colors">
                                            Parents honored at the Annual Awards Ceremony
                                        </h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* EVENTS */}
                    <motion.div
                        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="bg-gray-950 rounded-2xl p-7 text-white relative overflow-hidden"
                    >
                        {/* Decorative bg circles */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-amber-500/10" />
                        <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-sky-500/10" />

                        <div className="relative z-10">
                            <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">Calendar</p>
                            <h2 className="text-2xl font-black mb-6">Upcoming Events</h2>

                            <div className="space-y-5">
                                {academicEvents.map((event, i) => (
                                    <div key={i} className="flex gap-4 items-start group cursor-pointer">
                                        {/* Date block */}
                                        <div className="w-12 h-12 rounded-xl bg-white/8 border border-white/10 flex flex-col items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                                            <span className="text-lg font-black leading-none text-white">
                                                {dayjs(event.date).format("DD")}
                                            </span>
                                            <span className="text-[9px] text-gray-400 uppercase tracking-wide">
                                                {dayjs(event.date).format("MMM")}
                                            </span>
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${eventBadge(event.type)}`}>
                                                    {event.type}
                                                </span>
                                            </div>
                                            <h3 className="font-semibold text-sm text-white leading-snug">{event.title}</h3>
                                            <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                                                <TfiLocationPin size={10} />
                                                <span>Sharada Sisne</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="mt-8 w-full py-3 rounded-xl border border-white/15 text-sm font-medium text-gray-300 hover:bg-white/8 transition-colors flex items-center justify-center gap-2">
                                Full Academic Calendar <GoArrowRight size={14} />
                            </button>
                        </div>
                    </motion.div>

                </div>
            </section>

        </div>
    );
};

export default Home;