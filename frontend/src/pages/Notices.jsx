import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const notices = [
    {
        id: 1,
        title: "SEE Exam Routine Published",
        description: "The routine for the upcoming SEE exams has been officially released by the National Examination Board. Students are advised to download the PDF and plan their preparation accordingly.",
        date: "2025-05-10",
        category: "Exam",
        important: true,
        link: "/notices/see-exam-routine.pdf",
    },
    {
        id: 2,
        title: "Admission Open for 2083",
        description: "Admissions for the academic year 2083 are now open for Playgroup to Class 10. Limited seats available. Contact the school office for details.",
        date: "2026-04-03",
        category: "Admission",
        important: true,
        link: "/notices/admission-2082",
    },
    {
        id: 3,
        title: "Annual Sports Day – 2082",
        description: "The Annual Sports Day will be held on Jestha 20, 2082. All students are required to participate. Parents are warmly invited to attend.",
        date: "2025-05-01",
        category: "Event",
        important: false,
        link: "/notices/sports-day-2082",
    },
    {
        id: 4,
        title: "Parent-Teacher Meeting",
        description: "A Parent-Teacher meeting is scheduled for Jestha 28, 2082. Parents are requested to be present at 10:00 AM sharp to discuss student progress.",
        date: "2025-04-18",
        category: "Meeting",
        important: false,
        link: "/notices/ptm-2082",
    },
    {
        id: 5,
        title: "School Holiday Notice – Dashain",
        description: "The school will remain closed from Ashwin 25 to Kartik 5 on the occasion of Dashain festival. Classes will resume on Kartik 6, 2082.",
        date: "2025-04-10",
        category: "Holiday",
        important: false,
        link: "/notices/holiday-dashain",
    },
];

const CATEGORIES = ["All", "Exam", "Admission", "Event", "Meeting", "Holiday"];

const CATEGORY_STYLE = {
    Exam: { bg: "#fff7ed", text: "#c2410c", border: "#fed7aa", dot: "#f97316" },
    Admission: { bg: "#fef2f2", text: "#dc2626", border: "#fca5a5", dot: "#dc2626" },
    Event: { bg: "#eff6ff", text: "#1d4ed8", border: "#bfdbfe", dot: "#3b82f6" },
    Meeting: { bg: "#f0fdf4", text: "#15803d", border: "#bbf7d0", dot: "#22c55e" },
    Holiday: { bg: "#fdf4ff", text: "#7e22ce", border: "#e9d5ff", dot: "#a855f7" },
};

function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric", month: "short", day: "numeric",
    });
}

const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: (i) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.07, duration: 0.42, ease: "easeOut" },
    }),
};

export default function Notices() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [expanded, setExpanded] = useState(null);

    const filtered = activeCategory === "All"
        ? notices
        : notices.filter(n => n.category === activeCategory);

    const pinned = filtered.filter(n => n.important);
    const regular = filtered.filter(n => !n.important);

    return (
        <section id="notices" style={s.section}>
            {/* bg blobs */}
            <div style={s.blob1} /><div style={s.blob2} />

            <div style={s.container}>

                {/* Header */}
                <motion.div style={s.header} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
                    <span style={s.eyebrow}>Official Announcements</span>
                    <h2 style={s.title}>School <span style={s.titleAccent}>Notices</span></h2>
                    <p style={s.subtitle}>Stay updated with the latest news, circulars, and announcements from Sharada Sisne Boarding School.</p>
                </motion.div>

                {/* Filter tabs */}
                <motion.div style={s.filterRow} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            style={{
                                ...s.filterBtn,
                                background: activeCategory === cat ? "#dc2626" : "#fff",
                                color: activeCategory === cat ? "#fff" : "#555",
                                border: activeCategory === cat ? "1.5px solid #dc2626" : "1.5px solid #e5e7eb",
                                fontWeight: activeCategory === cat ? 700 : 500,
                            }}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Pinned notices */}
                <AnimatePresence mode="wait">
                    {pinned.length > 0 && (
                        <motion.div key="pinned" style={s.pinnedSection} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <div style={s.pinnedLabel}>
                                <span style={s.pinnedDot} />
                                Important Notices
                            </div>
                            <div style={s.pinnedGrid}>
                                {pinned.map((notice, i) => {
                                    const cs = CATEGORY_STYLE[notice.category] || CATEGORY_STYLE.Event;
                                    return (
                                        <motion.div
                                            key={notice.id}
                                            style={s.pinnedCard}
                                            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                                            whileHover={{ y: -4, boxShadow: "0 20px 48px rgba(220,38,38,0.13)" }}
                                        >
                                            <div style={s.pinnedTop}>
                                                <span style={{ ...s.badge, background: cs.bg, color: cs.text, border: `1px solid ${cs.border}` }}>
                                                    <span style={{ ...s.badgeDot, background: cs.dot }} />
                                                    {notice.category}
                                                </span>
                                                <span style={s.importantPill}>📌 Important</span>
                                            </div>
                                            <h3 style={s.pinnedTitle}>{notice.title}</h3>
                                            <p style={s.pinnedDesc}>{notice.description}</p>
                                            <div style={s.pinnedFooter}>
                                                <span style={s.dateChip}>
                                                    <svg viewBox="0 0 16 16" fill="none" style={{ width: 12, height: 12, marginRight: 4 }}>
                                                        <rect x="1" y="3" width="14" height="12" rx="2" stroke="#9ca3af" strokeWidth="1.4" />
                                                        <line x1="1" y1="7" x2="15" y2="7" stroke="#9ca3af" strokeWidth="1.4" />
                                                        <line x1="5" y1="1" x2="5" y2="5" stroke="#9ca3af" strokeWidth="1.4" strokeLinecap="round" />
                                                        <line x1="11" y1="1" x2="11" y2="5" stroke="#9ca3af" strokeWidth="1.4" strokeLinecap="round" />
                                                    </svg>
                                                    {formatDate(notice.date)}
                                                </span>
                                                <a href={notice.link} style={s.readMoreBtn} target="_blank" rel="noopener noreferrer">
                                                    View Notice →
                                                </a>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Regular notices list */}
                <AnimatePresence mode="wait">
                    {regular.length > 0 && (
                        <motion.div key={activeCategory} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            {pinned.length > 0 && (
                                <div style={s.sectionDivider}>
                                    <span style={s.dividerLine} />
                                    <span style={s.dividerText}>All Notices</span>
                                    <span style={s.dividerLine} />
                                </div>
                            )}
                            <div style={s.listCol}>
                                {regular.map((notice, i) => {
                                    const cs = CATEGORY_STYLE[notice.category] || CATEGORY_STYLE.Event;
                                    const open = expanded === notice.id;
                                    return (
                                        <motion.div
                                            key={notice.id}
                                            style={{ ...s.listItem, borderLeft: `3px solid ${cs.dot}` }}
                                            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                                            whileHover={{ x: 3 }}
                                        >
                                            <div style={s.listLeft}>
                                                <div style={s.listDateBlock}>
                                                    <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1a1a1a", lineHeight: 1 }}>
                                                        {new Date(notice.date).getDate()}
                                                    </span>
                                                    <span style={{ fontSize: "0.65rem", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                                        {new Date(notice.date).toLocaleString("default", { month: "short" })}
                                                    </span>
                                                    <span style={{ fontSize: "0.65rem", color: "#9ca3af" }}>
                                                        {new Date(notice.date).getFullYear()}
                                                    </span>
                                                </div>
                                            </div>

                                            <div style={s.listBody}>
                                                <div style={s.listRow}>
                                                    <span style={{ ...s.badge, background: cs.bg, color: cs.text, border: `1px solid ${cs.border}` }}>
                                                        <span style={{ ...s.badgeDot, background: cs.dot }} />
                                                        {notice.category}
                                                    </span>
                                                </div>
                                                <h3 style={s.listTitle}>{notice.title}</h3>
                                                <AnimatePresence>
                                                    {open && (
                                                        <motion.p
                                                            style={s.listDesc}
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.25 }}
                                                        >
                                                            {notice.description}
                                                        </motion.p>
                                                    )}
                                                </AnimatePresence>
                                                <div style={s.listActions}>
                                                    <button
                                                        style={s.expandBtn}
                                                        onClick={() => setExpanded(open ? null : notice.id)}
                                                    >
                                                        {open ? "Show less ↑" : "Show more ↓"}
                                                    </button>
                                                    <a href={notice.link} style={s.listLink} target="_blank" rel="noopener noreferrer">
                                                        View →
                                                    </a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {filtered.length === 0 && (
                    <div style={s.emptyState}>
                        <p style={{ fontSize: "2rem" }}>📭</p>
                        <p style={{ color: "#9ca3af", marginTop: 8 }}>No notices in this category.</p>
                    </div>
                )}

            </div>
        </section>
    );
}

// ─── Styles ────────────────────────────────────────────────────────────────────
const s = {
    section: {
        position: "relative", padding: "88px 24px",
        background: "linear-gradient(155deg,#fff8f8 0%,#ffffff 55%,#f8faff 100%)",
        overflow: "hidden", fontFamily: "'DM Sans',sans-serif",
    },
    blob1: {
        position: "absolute", top: "-120px", right: "-120px",
        width: 480, height: 480, borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle,rgba(220,38,38,0.06) 0%,transparent 70%)",
    },
    blob2: {
        position: "absolute", bottom: "-80px", left: "-80px",
        width: 360, height: 360, borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle,rgba(59,130,246,0.05) 0%,transparent 70%)",
    },
    container: { maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 },

    header: { textAlign: "center", marginBottom: 48 },
    eyebrow: {
        display: "inline-block", fontSize: "11px", fontWeight: 600,
        letterSpacing: "0.15em", textTransform: "uppercase", color: "#dc2626",
        background: "rgba(220,38,38,0.07)", padding: "5px 16px", borderRadius: 100,
        marginBottom: 12,
    },
    title: {
        fontSize: "clamp(1.9rem,4vw,2.9rem)", fontWeight: 800, color: "#111",
        margin: "0 0 12px", fontFamily: "'Lora',Georgia,serif", letterSpacing: "-0.02em",
    },
    titleAccent: { color: "#dc2626", fontStyle: "italic" },
    subtitle: { fontSize: "0.96rem", color: "#777", margin: 0, maxWidth: 520, marginInline: "auto", lineHeight: 1.7 },

    filterRow: {
        display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center",
        marginBottom: 40,
    },
    filterBtn: {
        padding: "7px 18px", borderRadius: 100,
        fontSize: "0.82rem", cursor: "pointer",
        transition: "all 0.18s", fontFamily: "'DM Sans',sans-serif",
    },

    // Pinned
    pinnedSection: { marginBottom: 16 },
    pinnedLabel: {
        display: "flex", alignItems: "center", gap: 8,
        fontSize: "0.78rem", fontWeight: 700, color: "#dc2626",
        textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16,
    },
    pinnedDot: {
        width: 8, height: 8, borderRadius: "50%", background: "#dc2626",
        display: "inline-block",
        boxShadow: "0 0 0 3px rgba(220,38,38,0.2)",
    },
    pinnedGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        gap: 20, marginBottom: 8,
    },
    pinnedCard: {
        background: "#fff", borderRadius: 20,
        border: "1.5px solid rgba(220,38,38,0.13)",
        padding: "24px 24px 20px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        transition: "box-shadow 0.25s, transform 0.25s",
        cursor: "default",
    },
    pinnedTop: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 },
    importantPill: {
        fontSize: "0.7rem", fontWeight: 600, color: "#dc2626",
        background: "#fef2f2", padding: "3px 10px", borderRadius: 100,
        border: "1px solid #fca5a5",
    },
    pinnedTitle: {
        fontSize: "1.05rem", fontWeight: 700, color: "#111",
        margin: "0 0 10px", lineHeight: 1.35, fontFamily: "'Lora',Georgia,serif",
    },
    pinnedDesc: { fontSize: "0.875rem", color: "#555", lineHeight: 1.7, margin: "0 0 16px" },
    pinnedFooter: { display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 },
    dateChip: {
        display: "flex", alignItems: "center",
        fontSize: "0.78rem", color: "#9ca3af",
    },
    readMoreBtn: {
        fontSize: "0.82rem", fontWeight: 700, color: "#dc2626",
        textDecoration: "none", padding: "6px 14px",
        background: "#fef2f2", borderRadius: 8,
        border: "1px solid #fca5a5",
        transition: "background 0.15s",
    },

    // Divider
    sectionDivider: {
        display: "flex", alignItems: "center", gap: 12,
        margin: "28px 0 20px",
    },
    dividerLine: { flex: 1, height: 1, background: "#f3f4f6" },
    dividerText: { fontSize: "0.75rem", color: "#bbb", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" },

    // List
    listCol: { display: "flex", flexDirection: "column", gap: 12 },
    listItem: {
        display: "flex", gap: 16, alignItems: "flex-start",
        background: "#fff", borderRadius: 14,
        padding: "18px 20px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        border: "1px solid #f3f4f6",
        transition: "transform 0.18s",
        cursor: "default",
    },
    listLeft: { flexShrink: 0 },
    listDateBlock: {
        width: 46, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        background: "#fafafa", borderRadius: 10,
        padding: "8px 4px", border: "1px solid #f3f4f6",
        gap: 1,
    },
    listBody: { flex: 1 },
    listRow: { marginBottom: 6 },
    listTitle: {
        fontSize: "0.97rem", fontWeight: 700, color: "#111",
        margin: "0 0 6px", lineHeight: 1.35,
        fontFamily: "'Lora',Georgia,serif",
    },
    listDesc: {
        fontSize: "0.86rem", color: "#666", lineHeight: 1.65,
        margin: "0 0 8px", overflow: "hidden",
    },
    listActions: { display: "flex", alignItems: "center", gap: 12 },
    expandBtn: {
        background: "none", border: "none", cursor: "pointer",
        fontSize: "0.78rem", color: "#9ca3af", padding: 0,
        fontFamily: "'DM Sans',sans-serif", fontWeight: 500,
    },
    listLink: {
        fontSize: "0.8rem", fontWeight: 700, color: "#dc2626",
        textDecoration: "none",
    },

    badge: {
        display: "inline-flex", alignItems: "center", gap: 5,
        fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px",
        borderRadius: 100, letterSpacing: "0.04em",
    },
    badgeDot: { width: 5, height: 5, borderRadius: "50%", display: "inline-block" },

    emptyState: { textAlign: "center", padding: "60px 0" },
};