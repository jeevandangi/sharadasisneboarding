import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Inject CSS once ──────────────────────────────────────────────────────────
if (typeof document !== "undefined" && !document.getElementById("contact-css")) {
    const el = document.createElement("style");
    el.id = "contact-css";
    el.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,700;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');
    .ct-input {
      width: 100%; padding: 11px 14px; border-radius: 10px;
      border: 1.5px solid #e5e7eb; font-size: 0.92rem;
      font-family: 'DM Sans', sans-serif; background: #fafafa;
      color: #111; outline: none; transition: border-color 0.2s, box-shadow 0.2s;
      box-sizing: border-box;
    }
    .ct-input:focus {
      border-color: #dc2626;
      box-shadow: 0 0 0 3px rgba(220,38,38,0.1);
      background: #fff;
    }
    .ct-input::placeholder { color: #bbb; }
    .ct-submit:hover { background: #b91c1c !important; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(220,38,38,0.3) !important; }
    .ct-submit:active { transform: translateY(0); }
    .ct-info-item:hover .ct-info-icon { background: #dc2626 !important; color: #fff !important; }
  `;
    document.head.appendChild(el);
}

const INFO = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
        label: "Address",
        value: "Tulsipur-5, Dang, Lumbini Province, Nepal",
        href: "https://maps.google.com/?q=Tulsipur+Dang+Nepal",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.72a16 16 0 006.36 6.36l1.08-1.34a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
        ),
        label: "Phone",
        value: "+977-9841891130",
        href: "tel:+9779841891130",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.72a16 16 0 006.36 6.36l1.08-1.34a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
        ),
        label: "Office",
        value: "082-521520",
        href: "tel:082521520",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
        label: "Email",
        value: "sharadasisneboardingschool@gmail.com",
        href: "mailto:sharadasisneboardingschool@gmail.com",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        label: "Office Hours",
        value: "Sun – Fri: 9:00 AM – 4:00 PM",
        href: null,
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.1, duration: 0.48, ease: "easeOut" },
    }),
};

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | sending | success | error
    const [focused, setFocused] = useState(null);

    const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        // Simulate network delay — replace with real API call
        await new Promise(r => setTimeout(r, 1400));
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
    };

    return (
        <section id="contact" style={s.section}>
            {/* BG decorations */}
            <div style={s.blob1} /><div style={s.blob2} />
            <div style={s.dotGrid} />

            <div style={s.container}>

                {/* Header */}
                <motion.div style={s.header} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <span style={s.eyebrow}>Get in Touch</span>
                    <h2 style={s.title}>Contact <span style={s.titleAccent}>Us</span></h2>
                    <p style={s.subtitle}>We'd love to hear from you. Reach out for admissions, enquiries, or general information.</p>
                </motion.div>

                <div style={s.grid}>

                    {/* ── Left: Info + Map ── */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                        {/* Info cards */}
                        <motion.div style={s.infoCard} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
                            <p style={s.infoCardTitle}>School Information</p>
                            <div style={s.infoSchoolName}>
                                <div style={s.infoSchoolIcon}>
                                    <svg viewBox="0 0 36 36" fill="none" style={{ width: 18, height: 18 }}>
                                        <circle cx="18" cy="18" r="15" stroke="white" strokeWidth="2.2" />
                                        <path d="M11 25 L18 10 L25 25" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                        <line x1="13.5" y1="20.5" x2="22.5" y2="20.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p style={{ fontWeight: 800, color: "#111", fontSize: "1rem", margin: 0, fontFamily: "'Lora',serif" }}>Sharada Sisne Boarding School</p>
                                    <p style={{ fontSize: "0.75rem", color: "#9ca3af", margin: 0, marginTop: 2 }}>Est. Tulsipur, Dang · Nepal</p>
                                </div>
                            </div>

                            <div style={s.infoList}>
                                {INFO.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="ct-info-item"
                                        style={s.infoItem}
                                        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.5 + 1.5}
                                    >
                                        <div className="ct-info-icon" style={s.infoIcon}>{item.icon}</div>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <p style={s.infoLabel}>{item.label}</p>
                                            {item.href ? (
                                                <a href={item.href} style={s.infoValue} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p style={s.infoValue}>{item.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Map */}
                        <motion.div style={s.mapWrap} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
                            <div style={s.mapLabel}>
                                <svg viewBox="0 0 16 16" fill="none" stroke="#dc2626" strokeWidth="1.6" style={{ width: 13, height: 13 }}>
                                    <circle cx="8" cy="6" r="3" /><path d="M8 16 C8 16 2 10 2 6a6 6 0 0112 0c0 4-6 10-6 10z" />
                                </svg>
                                Tulsipur-5, Dang, Nepal
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1684.1216489102137!2d82.30004564343588!3d28.142235380887822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1746960628837!5m2!1sen!2snp"
                                style={s.mapIframe}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="School Location"
                            />
                        </motion.div>
                    </div>

                    {/* ── Right: Form ── */}
                    <motion.div style={s.formCard} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
                        <div style={s.formHeader}>
                            <p style={s.formTitle}>Send us a Message</p>
                            <p style={s.formSub}>We typically respond within 1 business day.</p>
                        </div>

                        <form onSubmit={handleSubmit} style={s.form}>
                            {/* Name + Phone row */}
                            <div style={s.formRow}>
                                <div style={{ flex: 1 }}>
                                    <label style={s.label}>Full Name <span style={{ color: "#dc2626" }}>*</span></label>
                                    <input
                                        name="name" type="text" required
                                        placeholder="Your full name"
                                        value={form.name} onChange={handleChange}
                                        onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                                        className="ct-input"
                                    />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <label style={s.label}>Phone</label>
                                    <input
                                        name="phone" type="tel"
                                        placeholder="+977-98XXXXXXXX"
                                        value={form.phone} onChange={handleChange}
                                        onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)}
                                        className="ct-input"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label style={s.label}>Email Address <span style={{ color: "#dc2626" }}>*</span></label>
                                <input
                                    name="email" type="email" required
                                    placeholder="you@example.com"
                                    value={form.email} onChange={handleChange}
                                    onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                                    className="ct-input"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label style={s.label}>Message <span style={{ color: "#dc2626" }}>*</span></label>
                                <textarea
                                    name="message" required rows={5}
                                    placeholder="Write your message here..."
                                    value={form.message} onChange={handleChange}
                                    onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                                    className="ct-input"
                                    style={{ resize: "vertical", minHeight: 120 }}
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={status === "sending" || status === "success"}
                                className="ct-submit"
                                style={{
                                    ...s.submitBtn,
                                    background: status === "success" ? "#16a34a" : "#dc2626",
                                    cursor: status === "sending" ? "wait" : "pointer",
                                    opacity: status === "sending" ? 0.85 : 1,
                                    transition: "all 0.25s",
                                }}
                            >
                                <AnimatePresence mode="wait">
                                    {status === "idle" && (
                                        <motion.span key="idle" style={s.btnContent} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 17, height: 17 }}>
                                                <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                                            </svg>
                                            Send Message
                                        </motion.span>
                                    )}
                                    {status === "sending" && (
                                        <motion.span key="sending" style={s.btnContent} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                            <span style={s.spinner} />
                                            Sending...
                                        </motion.span>
                                    )}
                                    {status === "success" && (
                                        <motion.span key="success" style={s.btnContent} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ width: 17, height: 17 }}>
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            Message Sent!
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>

                            {/* Success note */}
                            <AnimatePresence>
                                {status === "success" && (
                                    <motion.div
                                        style={s.successNote}
                                        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                    >
                                        ✅ Thank you! We'll get back to you within 1 business day.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>

                        {/* Quick contact chips */}
                        <div style={s.quickChips}>
                            <a href="tel:+9779841891130" style={s.chip}>
                                📞 Call Now
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100063692702730" target="_blank" rel="noopener noreferrer" style={s.chip}>
                                📘 Facebook
                            </a>
                            <a href="mailto:sharadasisneboardingschool@gmail.com" style={s.chip}>
                                ✉️ Email
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const s = {
    section: {
        position: "relative", padding: "88px 24px 80px",
        background: "linear-gradient(155deg,#fff8f8 0%,#ffffff 50%,#f8faff 100%)",
        overflow: "hidden", fontFamily: "'DM Sans',sans-serif",
    },
    blob1: {
        position: "absolute", top: "-100px", right: "-120px",
        width: 460, height: 460, borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle,rgba(220,38,38,0.07) 0%,transparent 70%)",
    },
    blob2: {
        position: "absolute", bottom: "-80px", left: "-100px",
        width: 380, height: 380, borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle,rgba(59,130,246,0.05) 0%,transparent 70%)",
    },
    dotGrid: {
        position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.35,
        backgroundImage: "radial-gradient(circle,rgba(220,38,38,0.08) 1.5px,transparent 1.5px)",
        backgroundSize: "36px 36px",
    },
    container: { maxWidth: 1120, margin: "0 auto", position: "relative", zIndex: 1 },

    header: { textAlign: "center", marginBottom: 52 },
    eyebrow: {
        display: "inline-block", fontSize: "11px", fontWeight: 600,
        letterSpacing: "0.15em", textTransform: "uppercase", color: "#dc2626",
        background: "rgba(220,38,38,0.07)", padding: "5px 16px", borderRadius: 100, marginBottom: 12,
    },
    title: {
        fontSize: "clamp(1.9rem,4vw,2.9rem)", fontWeight: 800, color: "#111",
        margin: "0 0 12px", fontFamily: "'Lora',Georgia,serif", letterSpacing: "-0.02em",
    },
    titleAccent: { color: "#dc2626", fontStyle: "italic" },
    subtitle: { fontSize: "0.95rem", color: "#777", margin: 0, maxWidth: 480, marginInline: "auto", lineHeight: 1.7 },

    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
        gap: 28, alignItems: "start",
    },

    // Info card
    infoCard: {
        background: "#fff", borderRadius: 22,
        border: "1px solid rgba(220,38,38,0.1)",
        padding: "28px 28px 20px",
        boxShadow: "0 4px 28px rgba(0,0,0,0.07)",
    },
    infoCardTitle: {
        fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.13em",
        textTransform: "uppercase", color: "#dc2626",
        marginBottom: 18, paddingBottom: 12,
        borderBottom: "1px solid rgba(220,38,38,0.12)",
    },
    infoSchoolName: { display: "flex", alignItems: "center", gap: 12, marginBottom: 20 },
    infoSchoolIcon: {
        width: 44, height: 44, borderRadius: 12, flexShrink: 0,
        background: "linear-gradient(135deg,#dc2626,#991b1b)",
        display: "flex", alignItems: "center", justifyContent: "center",
    },
    infoList: { display: "flex", flexDirection: "column", gap: 12 },
    infoItem: {
        display: "flex", alignItems: "flex-start", gap: 12,
        padding: "10px 12px", borderRadius: 12,
        transition: "background 0.15s",
        cursor: "default",
    },
    infoIcon: {
        width: 36, height: 36, borderRadius: 10, flexShrink: 0,
        background: "#fef2f2", color: "#dc2626",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "background 0.2s, color 0.2s",
    },
    infoLabel: { fontSize: "0.7rem", fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 2px" },
    infoValue: { fontSize: "0.875rem", color: "#1a1a1a", fontWeight: 500, margin: 0, wordBreak: "break-word", textDecoration: "none" },

    // Map
    mapWrap: {
        background: "#fff", borderRadius: 22,
        border: "1px solid rgba(0,0,0,0.07)",
        overflow: "hidden",
        boxShadow: "0 4px 28px rgba(0,0,0,0.07)",
    },
    mapLabel: {
        display: "flex", alignItems: "center", gap: 6,
        fontSize: "0.78rem", fontWeight: 600, color: "#374151",
        padding: "10px 16px",
        borderBottom: "1px solid #f3f4f6",
    },
    mapIframe: { width: "100%", height: 220, border: "none", display: "block" },

    // Form card
    formCard: {
        background: "#fff", borderRadius: 22,
        border: "1px solid rgba(0,0,0,0.07)",
        padding: "32px 28px 24px",
        boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
    },
    formHeader: { marginBottom: 24 },
    formTitle: { fontSize: "1.15rem", fontWeight: 800, color: "#111", margin: "0 0 4px", fontFamily: "'Lora',Georgia,serif" },
    formSub: { fontSize: "0.83rem", color: "#9ca3af", margin: 0 },

    form: { display: "flex", flexDirection: "column", gap: 18 },
    formRow: { display: "flex", gap: 12, flexWrap: "wrap" },
    label: {
        display: "block", fontSize: "0.78rem", fontWeight: 600,
        color: "#374151", marginBottom: 6, letterSpacing: "0.02em",
    },

    submitBtn: {
        width: "100%", padding: "13px",
        borderRadius: 11, border: "none",
        color: "#fff", fontSize: "0.93rem", fontWeight: 700,
        fontFamily: "'DM Sans',sans-serif",
        display: "flex", alignItems: "center", justifyContent: "center",
        gap: 8, boxShadow: "0 4px 16px rgba(220,38,38,0.25)",
    },
    btnContent: { display: "flex", alignItems: "center", gap: 8 },
    spinner: {
        width: 16, height: 16, borderRadius: "50%",
        border: "2px solid rgba(255,255,255,0.35)",
        borderTopColor: "#fff",
        display: "inline-block",
        animation: "spin 0.7s linear infinite",
    },

    successNote: {
        background: "#f0fdf4", border: "1px solid #bbf7d0",
        borderRadius: 10, padding: "10px 14px",
        fontSize: "0.84rem", color: "#16a34a", textAlign: "center",
    },

    quickChips: {
        display: "flex", gap: 8, flexWrap: "wrap",
        marginTop: 20, paddingTop: 18,
        borderTop: "1px solid #f3f4f6",
    },
    chip: {
        fontSize: "0.78rem", fontWeight: 600,
        padding: "6px 14px", borderRadius: 100,
        background: "#fafafa", border: "1px solid #e5e7eb",
        color: "#374151", textDecoration: "none",
        transition: "all 0.15s",
    },
};

// spinner keyframe
if (typeof document !== "undefined" && !document.getElementById("spin-css")) {
    const el = document.createElement("style");
    el.id = "spin-css";
    el.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`;
    document.head.appendChild(el);
}