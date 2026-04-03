import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Nepali (BS) Calendar Engine ──────────────────────────────────────────────
// Days in each month of BS years 2079–2086
const BS_MONTHS_DATA = {
    2079: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    2080: [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    2081: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2082: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2083: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    2084: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2085: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2086: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
};

const BS_MONTHS = ["बैशाख", "जेठ", "आषाढ", "श्रावण", "भाद्र", "आश्विन", "कार्तिक", "मंसिर", "पौष", "माघ", "फाल्गुन", "चैत्र"];
const BS_MONTHS_EN = ["Baisakh", "Jestha", "Ashadh", "Shrawan", "Bhadra", "Ashwin", "Kartik", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra"];
const WEEKDAYS_NP = ["आइत", "सोम", "मंगल", "बुध", "बिही", "शुक्र", "शनि"];
const NEPALI_DIGITS = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

function toNepaliDigits(n) {
    return String(n).split("").map(d => NEPALI_DIGITS[parseInt(d)] ?? d).join("");
}

// Convert AD date to BS
function adToBS(adYear, adMonth, adDay) {
    // Reference: 1 Baisakh 2000 BS = 14 April 1943 AD
    const refAD = new Date(1943, 3, 14); // April 14 1943
    const given = new Date(adYear, adMonth - 1, adDay);
    let diffDays = Math.round((given - refAD) / 86400000);

    let bsYear = 2000, bsMonth = 1, bsDay = 1;
    for (let y = 2000; y <= 2090; y++) {
        const months = BS_MONTHS_DATA[y] || BS_MONTHS_DATA[2086];
        for (let m = 0; m < 12; m++) {
            if (diffDays <= months[m]) { bsDay = diffDays; return { year: y, month: m + 1, day: bsDay }; }
            diffDays -= months[m];
        }
    }
    return { year: bsYear, month: bsMonth, day: bsDay };
}

// Get day-of-week for 1st of a BS month (0=Sun)
function bsMonthStartDay(bsYear, bsMonth) {
    // Find AD date of 1 Baisakh of given BS year by reverse mapping
    // We use a known reference: 1 Baisakh 2080 BS = 14 April 2023 AD
    const ref = { bsYear: 2080, bsMonth: 1, adYear: 2023, adMonth: 4, adDay: 14 };
    let days = 0;
    if (bsYear > ref.bsYear || (bsYear === ref.bsYear && bsMonth > ref.bsMonth)) {
        for (let y = ref.bsYear; y <= bsYear; y++) {
            const months = BS_MONTHS_DATA[y] || BS_MONTHS_DATA[2086];
            const startM = y === ref.bsYear ? ref.bsMonth - 1 : 0;
            const endM = y === bsYear ? bsMonth - 2 : 11;
            for (let m = startM; m <= endM; m++) days += months[m];
        }
    } else {
        for (let y = bsYear; y <= ref.bsYear; y++) {
            const months = BS_MONTHS_DATA[y] || BS_MONTHS_DATA[2086];
            const startM = y === bsYear ? bsMonth - 1 : 0;
            const endM = y === ref.bsYear ? ref.bsMonth - 2 : 11;
            for (let m = startM; m <= endM; m++) days -= months[m];
        }
    }
    const refDate = new Date(ref.adYear, ref.adMonth - 1, ref.adDay);
    refDate.setDate(refDate.getDate() + days);
    return refDate.getDay();
}

// ─── Event Data (BS dates) ─────────────────────────────────────────────────────
const ALL_EVENTS = [
    { bsDate: "2082-01-01", title: "New Year / Naya Barsha", type: "Holiday" },
    { bsDate: "2082-01-15", title: "Science Exhibition", type: "Event" },
    { bsDate: "2082-01-22", title: "Unit Test Begins", type: "Exam" },
    { bsDate: "2082-02-01", title: "Buddha Jayanti", type: "Holiday" },
    { bsDate: "2082-02-10", title: "Teacher Training Day", type: "Event" },
    { bsDate: "2082-02-21", title: "School Picnic", type: "Event" },
    { bsDate: "2082-03-15", title: "Final Exam Starts", type: "Exam" },
    { bsDate: "2082-03-22", title: "Final Exam Ends", type: "Exam" },
    { bsDate: "2082-04-05", title: "Summer Vacation Begins", type: "Holiday" },
    { bsDate: "2082-04-25", title: "School Reopens", type: "Event" },
    { bsDate: "2082-05-10", title: "Janai Purnima", type: "Holiday" },
    { bsDate: "2082-05-18", title: "Gai Jatra", type: "Holiday" },
    { bsDate: "2082-06-01", title: "Indra Jatra", type: "Holiday" },
    { bsDate: "2082-06-18", title: "Dashain Begins", type: "Holiday" },
    { bsDate: "2082-07-03", title: "Tihar / Deepawali", type: "Holiday" },
    { bsDate: "2082-07-20", title: "Annual Sports Day", type: "Event" },
    { bsDate: "2082-08-10", title: "Winter Exam", type: "Exam" },
    { bsDate: "2082-09-01", title: "Maghe Sankranti", type: "Holiday" },
    { bsDate: "2082-10-10", title: "Shivaratri", type: "Holiday" },
    { bsDate: "2082-10-25", title: "Holi Celebration", type: "Holiday" },
    { bsDate: "2082-11-15", title: "Graduation Ceremony", type: "Event" },
    { bsDate: "2082-12-10", title: "Academic Year Ends", type: "Event" },
];

const TYPE_STYLES = {
    Holiday: { bg: "#fef2f2", text: "#dc2626", border: "#fca5a5", dot: "#dc2626" },
    Exam: { bg: "#fff7ed", text: "#c2410c", border: "#fed7aa", dot: "#f97316" },
    Event: { bg: "#eff6ff", text: "#1d4ed8", border: "#bfdbfe", dot: "#3b82f6" },
};

function getTodayBS() {
    const today = new Date();
    return adToBS(today.getFullYear(), today.getMonth() + 1, today.getDate());
}

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.45, ease: "easeOut" } }),
};

// ─── Main Component ────────────────────────────────────────────────────────────
export default function Events() {
    const todayBS = getTodayBS();
    const [viewYear, setViewYear] = useState(todayBS.year);
    const [viewMonth, setViewMonth] = useState(todayBS.month);
    const [selectedDay, setSelectedDay] = useState(null);

    const monthDays = (BS_MONTHS_DATA[viewYear] || BS_MONTHS_DATA[2086])[viewMonth - 1];
    const startDow = bsMonthStartDay(viewYear, viewMonth);

    const eventsThisMonth = ALL_EVENTS.filter(e => {
        const [y, m] = e.bsDate.split("-").map(Number);
        return y === viewYear && m === viewMonth;
    });

    const eventMap = {};
    eventsThisMonth.forEach(e => {
        const d = parseInt(e.bsDate.split("-")[2]);
        if (!eventMap[d]) eventMap[d] = [];
        eventMap[d].push(e);
    });

    const selectedEvents = selectedDay ? (eventMap[selectedDay] || []) : [];

    // Upcoming holidays (next 3) from today
    const todayStr = `${todayBS.year}-${String(todayBS.month).padStart(2, "0")}-${String(todayBS.day).padStart(2, "0")}`;
    const upcomingHolidays = ALL_EVENTS
        .filter(e => e.type === "Holiday" && e.bsDate >= todayStr)
        .sort((a, b) => a.bsDate.localeCompare(b.bsDate))
        .slice(0, 3);

    function prevMonth() {
        if (viewMonth === 1) { setViewYear(y => y - 1); setViewMonth(12); }
        else setViewMonth(m => m - 1);
        setSelectedDay(null);
    }
    function nextMonth() {
        if (viewMonth === 12) { setViewYear(y => y + 1); setViewMonth(1); }
        else setViewMonth(m => m + 1);
        setSelectedDay(null);
    }

    const isToday = (d) => d === todayBS.day && viewMonth === todayBS.month && viewYear === todayBS.year;

    // Build calendar grid
    const cells = [];
    for (let i = 0; i < startDow; i++) cells.push(null);
    for (let d = 1; d <= monthDays; d++) cells.push(d);

    return (
        <section style={s.section}>
            <div style={s.bgBlob1} /><div style={s.bgBlob2} />

            <div style={s.container}>
                {/* Header */}
                <motion.div style={s.header} variants={fadeUp} initial="hidden" animate="visible">
                    <span style={s.eyebrow}>विद्यालय पात्रो · Academic Calendar</span>
                    <h2 style={s.title}>School Calendar <span style={s.titleRed}>2082</span></h2>
                    <p style={s.subtitle}>Nepali Bikram Sambat calendar with events, exams & holidays</p>
                </motion.div>

                <div style={s.grid}>
                    {/* ── LEFT: Nepali Calendar ── */}
                    <motion.div style={s.calCard} variants={fadeUp} initial="hidden" animate="visible" custom={1}>
                        {/* Month nav */}
                        <div style={s.monthNav}>
                            <button style={s.navBtn} onClick={prevMonth}>‹</button>
                            <div style={s.monthLabel}>
                                <span style={s.monthNP}>{BS_MONTHS[viewMonth - 1]}</span>
                                <span style={s.monthEN}>{BS_MONTHS_EN[viewMonth - 1]} {viewYear}</span>
                            </div>
                            <button style={s.navBtn} onClick={nextMonth}>›</button>
                        </div>

                        {/* Weekday headers */}
                        <div style={s.weekRow}>
                            {WEEKDAYS_NP.map((d, i) => (
                                <div key={d} style={{ ...s.weekDay, color: i === 6 ? "#dc2626" : "#888" }}>{d}</div>
                            ))}
                        </div>

                        {/* Days grid */}
                        <div style={s.daysGrid}>
                            {cells.map((day, i) => {
                                if (!day) return <div key={`e-${i}`} />;
                                const hasEvent = !!eventMap[day];
                                const eventTypes = hasEvent ? [...new Set(eventMap[day].map(e => e.type))] : [];
                                const today = isToday(day);
                                const selected = selectedDay === day;
                                const isSat = (startDow + day - 1) % 7 === 6;

                                return (
                                    <motion.button
                                        key={day}
                                        style={{
                                            ...s.dayCell,
                                            background: selected ? "#dc2626" : today ? "#fff1f1" : "transparent",
                                            border: today && !selected ? "1.5px solid #fca5a5" : selected ? "none" : "1px solid transparent",
                                            color: selected ? "#fff" : isSat ? "#dc2626" : "#1a1a1a",
                                        }}
                                        whileHover={{ scale: 1.1, background: selected ? "#b91c1c" : "#f9f9f9" }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setSelectedDay(selected ? null : day)}
                                    >
                                        <span style={{ fontSize: "0.9rem", fontWeight: today || selected ? 700 : 400 }}>
                                            {toNepaliDigits(day)}
                                        </span>
                                        {hasEvent && (
                                            <div style={s.dotRow}>
                                                {eventTypes.slice(0, 3).map(t => (
                                                    <span key={t} style={{ ...s.dot, background: selected ? "#fff" : TYPE_STYLES[t].dot }} />
                                                ))}
                                            </div>
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Legend */}
                        <div style={s.legend}>
                            {Object.entries(TYPE_STYLES).map(([type, st]) => (
                                <span key={type} style={s.legendItem}>
                                    <span style={{ ...s.dot, background: st.dot }} />
                                    {type}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── RIGHT: Events Panel ── */}
                    <motion.div style={s.rightPanel} variants={fadeUp} initial="hidden" animate="visible" custom={2}>

                        {/* Upcoming Holidays */}
                        <div style={s.upcomingCard}>
                            <div style={s.panelHeader}>
                                <span style={s.panelIcon}>🗓️</span>
                                <span style={s.panelTitle}>Upcoming Holidays</span>
                            </div>
                            {upcomingHolidays.length === 0 ? (
                                <p style={s.emptyMsg}>No upcoming holidays</p>
                            ) : (
                                upcomingHolidays.map((ev, i) => {
                                    const [y, m, d] = ev.bsDate.split("-").map(Number);
                                    const daysLeft = ALL_EVENTS.indexOf(ev); // rough
                                    return (
                                        <motion.div key={i} style={s.upcomingItem} variants={fadeUp} initial="hidden" animate="visible" custom={i}>
                                            <div style={{ ...s.upcomingDate, background: TYPE_STYLES.Holiday.bg }}>
                                                <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#dc2626" }}>{toNepaliDigits(d)}</span>
                                                <span style={{ fontSize: "0.65rem", color: "#888", marginTop: 1 }}>{BS_MONTHS_EN[m - 1].slice(0, 3)}</span>
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <p style={s.upcomingTitle}>{ev.title}</p>
                                                <span style={{ ...s.typeBadge, background: TYPE_STYLES.Holiday.bg, color: TYPE_STYLES.Holiday.text, border: `1px solid ${TYPE_STYLES.Holiday.border}` }}>
                                                    {ev.type}
                                                </span>
                                            </div>
                                        </motion.div>
                                    );
                                })
                            )}
                        </div>

                        {/* Monthly Events */}
                        <div style={s.eventsCard}>
                            <div style={s.panelHeader}>
                                <span style={s.panelIcon}>📋</span>
                                <span style={s.panelTitle}>
                                    {selectedDay
                                        ? `${toNepaliDigits(selectedDay)} ${BS_MONTHS[viewMonth - 1]} का कार्यक्रम`
                                        : `${BS_MONTHS_EN[viewMonth - 1]} Events`}
                                </span>
                                {selectedDay && (
                                    <button style={s.clearBtn} onClick={() => setSelectedDay(null)}>× Clear</button>
                                )}
                            </div>

                            <AnimatePresence mode="wait">
                                {(selectedDay ? selectedEvents : eventsThisMonth).length === 0 ? (
                                    <motion.p key="empty" style={s.emptyMsg} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                        No events {selectedDay ? "on this day" : "this month"}.
                                    </motion.p>
                                ) : (
                                    <motion.ul key="list" style={s.eventList} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                        {(selectedDay ? selectedEvents : eventsThisMonth)
                                            .sort((a, b) => a.bsDate.localeCompare(b.bsDate))
                                            .map((ev, i) => {
                                                const [, m, d] = ev.bsDate.split("-").map(Number);
                                                const st = TYPE_STYLES[ev.type] || TYPE_STYLES.Event;
                                                return (
                                                    <motion.li
                                                        key={i}
                                                        style={{ ...s.eventItem, borderLeft: `3px solid ${st.dot}` }}
                                                        variants={fadeUp}
                                                        initial="hidden"
                                                        animate="visible"
                                                        custom={i}
                                                    >
                                                        <div style={s.eventMeta}>
                                                            <span style={s.eventDateNum}>{toNepaliDigits(d)}</span>
                                                            <span style={s.eventDateMonth}>{BS_MONTHS_EN[m - 1].slice(0, 3)}</span>
                                                        </div>
                                                        <div style={s.eventInfo}>
                                                            <p style={s.eventTitle}>{ev.title}</p>
                                                            <span style={{ ...s.typeBadge, background: st.bg, color: st.text, border: `1px solid ${st.border}` }}>
                                                                {ev.type}
                                                            </span>
                                                        </div>
                                                    </motion.li>
                                                );
                                            })}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ─── Styles ────────────────────────────────────────────────────────────────────
const s = {
    section: {
        position: "relative",
        padding: "80px 24px",
        background: "linear-gradient(150deg,#fff8f8 0%,#ffffff 55%,#f8f8ff 100%)",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
    },
    bgBlob1: {
        position: "absolute", top: "-150px", right: "-150px",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle,rgba(220,38,38,0.07) 0%,transparent 70%)",
        pointerEvents: "none",
    },
    bgBlob2: {
        position: "absolute", bottom: "-100px", left: "-100px",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle,rgba(59,130,246,0.06) 0%,transparent 70%)",
        pointerEvents: "none",
    },
    container: { maxWidth: "1120px", margin: "0 auto", position: "relative", zIndex: 1 },
    header: { textAlign: "center", marginBottom: "52px" },
    eyebrow: {
        display: "inline-block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em",
        textTransform: "uppercase", color: "#dc2626", marginBottom: "12px",
        background: "rgba(220,38,38,0.07)", padding: "5px 16px", borderRadius: "100px",
    },
    title: { fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "#111", margin: "0 0 12px", fontFamily: "'Lora',Georgia,serif", letterSpacing: "-0.02em" },
    titleRed: { color: "#dc2626" },
    subtitle: { fontSize: "0.95rem", color: "#777", margin: 0 },

    grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px", alignItems: "start" },

    // Calendar card
    calCard: {
        background: "#fff", borderRadius: "24px", padding: "28px",
        boxShadow: "0 4px 32px rgba(0,0,0,0.08)", border: "1px solid rgba(220,38,38,0.1)",
    },
    monthNav: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" },
    navBtn: {
        width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #e5e7eb",
        background: "#fff", fontSize: "1.2rem", cursor: "pointer", display: "flex",
        alignItems: "center", justifyContent: "center", color: "#374151",
        transition: "all 0.2s",
    },
    monthLabel: { textAlign: "center" },
    monthNP: { display: "block", fontSize: "1.4rem", fontWeight: 700, color: "#111", lineHeight: 1.2 },
    monthEN: { display: "block", fontSize: "0.8rem", color: "#888", marginTop: "2px" },
    weekRow: { display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: "4px", marginBottom: "6px" },
    weekDay: { textAlign: "center", fontSize: "0.75rem", fontWeight: 600, padding: "4px 0" },
    daysGrid: { display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: "4px" },
    dayCell: {
        aspectRatio: "1", borderRadius: "10px", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", cursor: "pointer",
        fontSize: "0.85rem", transition: "all 0.15s", padding: "2px",
        background: "transparent", outline: "none",
    },
    dotRow: { display: "flex", gap: "2px", marginTop: "2px" },
    dot: { width: "4px", height: "4px", borderRadius: "50%" },
    legend: { display: "flex", gap: "16px", marginTop: "18px", paddingTop: "14px", borderTop: "1px solid #f3f4f6" },
    legendItem: { display: "flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", color: "#666" },

    // Right panel
    rightPanel: { display: "flex", flexDirection: "column", gap: "20px" },

    upcomingCard: {
        background: "#fff", borderRadius: "20px", padding: "22px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)", border: "1px solid rgba(220,38,38,0.09)",
    },
    eventsCard: {
        background: "#fff", borderRadius: "20px", padding: "22px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)", border: "1px solid rgba(59,130,246,0.09)",
        minHeight: "240px",
    },
    panelHeader: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" },
    panelIcon: { fontSize: "16px" },
    panelTitle: { fontSize: "0.95rem", fontWeight: 700, color: "#111", flex: 1 },
    clearBtn: {
        fontSize: "0.75rem", color: "#dc2626", background: "#fef2f2",
        border: "none", borderRadius: "6px", padding: "3px 10px", cursor: "pointer",
    },
    upcomingItem: { display: "flex", gap: "12px", alignItems: "center", marginBottom: "12px" },
    upcomingDate: {
        minWidth: "44px", height: "44px", borderRadius: "10px",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
    },
    upcomingTitle: { fontSize: "0.875rem", fontWeight: 600, color: "#111", margin: "0 0 4px" },
    typeBadge: {
        fontSize: "0.7rem", fontWeight: 600, padding: "2px 8px", borderRadius: "100px",
        display: "inline-block",
    },
    eventList: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" },
    eventItem: {
        display: "flex", gap: "12px", alignItems: "center",
        padding: "10px 12px", borderRadius: "10px", background: "#fafafa",
    },
    eventMeta: {
        minWidth: "36px", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
    },
    eventDateNum: { fontSize: "1rem", fontWeight: 700, color: "#111", lineHeight: 1 },
    eventDateMonth: { fontSize: "0.65rem", color: "#999", marginTop: "2px" },
    eventInfo: { flex: 1 },
    eventTitle: { fontSize: "0.875rem", fontWeight: 600, color: "#111", margin: "0 0 4px" },
    emptyMsg: { fontSize: "0.85rem", color: "#aaa", textAlign: "center", padding: "20px 0" },
};