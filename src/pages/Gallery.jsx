import React, { useState, useMemo, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// ─── Inject CSS once ──────────────────────────────────────────────────────────
if (typeof document !== "undefined" && !document.getElementById("gallery-css")) {
    const el = document.createElement("style");
    el.id = "gallery-css";
    el.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,700;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');
    .gal-filter:hover { background: #fef2f2 !important; color: #dc2626 !important; border-color: #fca5a5 !important; }
    .gal-card:hover .gal-overlay { opacity: 1 !important; }
    .gal-card:hover .gal-img { transform: scale(1.05); }
    .gal-card .gal-img { transition: transform 0.4s ease; }
    .gal-pg:hover:not(:disabled) { background: #dc2626 !important; color: #fff !important; border-color: #dc2626 !important; }
    .modal-nav:hover { background: rgba(255,255,255,0.25) !important; }
    .gal-close:hover { background: rgba(220,38,38,0.8) !important; }
  `;
    document.head.appendChild(el);
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const galleryImages = [
    { src: "/photo/Picnic/IMG_4378.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4379.JPG", event: "Picnic", year: 2024 },
    { src: "/photo/Picnic/IMG_4380.JPG", event: "Picnic", year: 2024 },
    { src: "/photo/Picnic/IMG_4381.JPG", event: "Picnic", year: 2024 },
    { src: "/photo/Picnic/IMG_4382.JPG", event: "Picnic", year: 2024 },
    { src: "/photo/Picnic/IMG_4386.JPG", event: "Picnic", year: 2024 },
    { src: "/photo/Picnic/IMG_4387.JPG", event: "Picnic", year: 2024 },
    { src: "/photo/Picnic/IMG_4388.JPG", event: "Picnic", year: 2024 },
    { src: "/photo/Picnic/IMG_4390.JPG", event: "Picnic", year: 2024 },
    { src: "/photo/Picnic/IMG_4391.JPG", event: "Picnic", year: 2024 },
    { src: "/photo/Picnic/IMG_4396.JPG", event: "Picnic", year: 2024 },
    { src: "/photo/Picnic/IMG_4397.JPG", event: "Picnic", year: 2024 },
    { src: "/photo/Picnic/IMG_4398.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4399.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4400.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4405.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4406.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4407.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4408.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4409.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4413.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4414.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4415.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4416.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4417.JPG", event: "Picnic", year: 2023 },
];

const EVENTS = [
    { name: "All", emoji: "🌄" },
    { name: "Batch", emoji: "🎓" },
    { name: "Farewell", emoji: "👋" },
    { name: "Picnic", emoji: "🧺" },
    { name: "Parents Day", emoji: "👪" },
    { name: "Holi", emoji: "🎨" },
];

const IMAGES_PER_PAGE = 12;

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Gallery() {
    const [activeEvent, setActiveEvent] = useState("All");
    const [activeYear, setActiveYear] = useState("All");
    const [modalIndex, setModalIndex] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    // Derive all years present
    const allYears = useMemo(() => {
        const ys = [...new Set(galleryImages.map(i => i.year))].sort((a, b) => b - a);
        return ["All", ...ys];
    }, []);

    // Filtered flat list
    const filtered = useMemo(() => {
        return galleryImages.filter(img => {
            const eventMatch = activeEvent === "All" || img.event === activeEvent;
            const yearMatch = activeYear === "All" || img.year === Number(activeYear);
            return eventMatch && yearMatch;
        });
    }, [activeEvent, activeYear]);

    const totalPages = Math.ceil(filtered.length / IMAGES_PER_PAGE);
    const paginated = filtered.slice((currentPage - 1) * IMAGES_PER_PAGE, currentPage * IMAGES_PER_PAGE);

    const handleFilter = (event) => { setActiveEvent(event); setCurrentPage(1); };
    const handleYear = (year) => { setActiveYear(year); setCurrentPage(1); };

    // Keyboard navigation for lightbox
    const handleKey = useCallback((e) => {
        if (modalIndex === null) return;
        if (e.key === "ArrowRight") setModalIndex(i => Math.min(i + 1, filtered.length - 1));
        if (e.key === "ArrowLeft") setModalIndex(i => Math.max(i - 1, 0));
        if (e.key === "Escape") setModalIndex(null);
    }, [modalIndex, filtered.length]);

    useEffect(() => {
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [handleKey]);

    useEffect(() => {
        document.body.style.overflow = modalIndex !== null ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [modalIndex]);

    return (
        <section style={s.section}>
            <div style={s.blob1} /><div style={s.blob2} />
            <div style={s.container}>

                {/* ── Header ── */}
                <motion.div style={s.header} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
                    <span style={s.eyebrow}>Memories & Moments</span>
                    <h2 style={s.title}>School <span style={s.titleAccent}>Gallery</span></h2>
                    <p style={s.subtitle}>Capturing the spirit of Sharada Sisne — from classrooms to adventures.</p>
                </motion.div>

                {/* ── Sticky filters ── */}
                <div style={s.stickyBar}>
                    {/* Event tabs */}
                    <div style={s.filterRow}>
                        {EVENTS.map(ev => (
                            <button
                                key={ev.name}
                                className="gal-filter"
                                style={{
                                    ...s.filterBtn,
                                    background: activeEvent === ev.name ? "#dc2626" : "#fff",
                                    color: activeEvent === ev.name ? "#fff" : "#555",
                                    border: `1.5px solid ${activeEvent === ev.name ? "#dc2626" : "#e5e7eb"}`,
                                    fontWeight: activeEvent === ev.name ? 700 : 500,
                                }}
                                onClick={() => handleFilter(ev.name)}
                            >
                                <span style={{ marginRight: 5 }}>{ev.emoji}</span>{ev.name}
                            </button>
                        ))}
                    </div>
                    {/* Year pills */}
                    <div style={s.yearRow}>
                        {allYears.map(y => (
                            <button
                                key={y}
                                className="gal-filter"
                                style={{
                                    ...s.yearBtn,
                                    background: activeYear === String(y) ? "#1a1a1a" : "#f9f9f9",
                                    color: activeYear === String(y) ? "#fff" : "#555",
                                    border: `1.5px solid ${activeYear === String(y) ? "#1a1a1a" : "#e5e7eb"}`,
                                }}
                                onClick={() => handleYear(String(y))}
                            >
                                {y}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Count ── */}
                <div style={s.countRow}>
                    <span style={s.countText}>{filtered.length} photo{filtered.length !== 1 ? "s" : ""}</span>
                    {(activeEvent !== "All" || activeYear !== "All") && (
                        <button style={s.clearBtn} onClick={() => { setActiveEvent("All"); setActiveYear("All"); setCurrentPage(1); }}>
                            × Clear filters
                        </button>
                    )}
                </div>

                {/* ── Grid ── */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeEvent + activeYear + currentPage}
                        style={s.grid}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {paginated.length === 0 ? (
                            <div style={s.emptyState}>
                                <p style={{ fontSize: "2.5rem" }}>📷</p>
                                <p style={{ color: "#9ca3af", marginTop: 8 }}>No photos found for this filter.</p>
                            </div>
                        ) : (
                            paginated.map((img, i) => (
                                <ImageCard
                                    key={img.src}
                                    img={img}
                                    index={i}
                                    onClick={() => setModalIndex(filtered.indexOf(img))}
                                />
                            ))
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* ── Pagination ── */}
                {totalPages > 1 && (
                    <div style={s.pagination}>
                        <button
                            className="gal-pg"
                            style={{ ...s.pgBtn, opacity: currentPage === 1 ? 0.4 : 1 }}
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(p => p - 1)}
                        >
                            ← Prev
                        </button>
                        <div style={s.pgNumbers}>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                                <button
                                    key={p}
                                    style={{
                                        ...s.pgNum,
                                        background: p === currentPage ? "#dc2626" : "transparent",
                                        color: p === currentPage ? "#fff" : "#555",
                                        fontWeight: p === currentPage ? 700 : 400,
                                    }}
                                    onClick={() => setCurrentPage(p)}
                                >
                                    {p}
                                </button>
                            ))}
                        </div>
                        <button
                            className="gal-pg"
                            style={{ ...s.pgBtn, opacity: currentPage === totalPages ? 0.4 : 1 }}
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(p => p + 1)}
                        >
                            Next →
                        </button>
                    </div>
                )}
            </div>

            {/* ── Lightbox ── */}
            <AnimatePresence>
                {modalIndex !== null && (
                    <motion.div
                        style={s.lightbox}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setModalIndex(null)}
                    >
                        {/* Close */}
                        <button className="gal-close" style={s.closeBtn} onClick={() => setModalIndex(null)}>✕</button>

                        {/* Counter */}
                        <div style={s.lightboxCounter}>
                            {modalIndex + 1} / {filtered.length}
                        </div>

                        {/* Prev */}
                        <button
                            className="modal-nav"
                            style={{ ...s.navBtn, left: 16, opacity: modalIndex === 0 ? 0.3 : 1 }}
                            disabled={modalIndex === 0}
                            onClick={e => { e.stopPropagation(); setModalIndex(i => i - 1); }}
                        >
                            ‹
                        </button>

                        {/* Image */}
                        <motion.div
                            key={modalIndex}
                            style={s.lightboxInner}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.22 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <img
                                src={filtered[modalIndex]?.src}
                                alt={filtered[modalIndex]?.event}
                                style={s.lightboxImg}
                            />
                            <div style={s.lightboxCaption}>
                                <span style={s.captionEvent}>{filtered[modalIndex]?.event}</span>
                                <span style={s.captionSep}>·</span>
                                <span style={s.captionYear}>{filtered[modalIndex]?.year}</span>
                            </div>
                        </motion.div>

                        {/* Next */}
                        <button
                            className="modal-nav"
                            style={{ ...s.navBtn, right: 16, opacity: modalIndex === filtered.length - 1 ? 0.3 : 1 }}
                            disabled={modalIndex === filtered.length - 1}
                            onClick={e => { e.stopPropagation(); setModalIndex(i => i + 1); }}
                        >
                            ›
                        </button>

                        {/* Keyboard hint */}
                        <div style={s.keyHint}>← → arrow keys to navigate · Esc to close</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

// ─── Image Card ───────────────────────────────────────────────────────────────
function ImageCard({ img, index, onClick }) {
    return (
        <motion.div
            className="gal-card"
            style={s.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (index % 12) * 0.04, duration: 0.38 }}
            onClick={onClick}
        >
            <div style={s.cardImgWrap}>
                <LazyLoadImage
                    src={img.src}
                    alt={img.event}
                    effect="blur"
                    className="gal-img"
                    style={s.cardImg}
                    wrapperStyle={{ width: "100%", height: "100%", display: "block" }}
                />
                {/* Overlay */}
                <div className="gal-overlay" style={s.overlay}>
                    <div style={s.overlayInner}>
                        <div style={s.zoomIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" style={{ width: 22, height: 22 }}>
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                <line x1="11" y1="8" x2="11" y2="14" />
                                <line x1="8" y1="11" x2="14" y2="11" />
                            </svg>
                        </div>
                        <p style={s.overlayEvent}>{img.event}</p>
                        <p style={s.overlayYear}>{img.year}</p>
                    </div>
                </div>
            </div>
            {/* Card footer */}
            <div style={s.cardFooter}>
                <span style={s.cardEvent}>{img.event}</span>
                <span style={s.cardYear}>{img.year}</span>
            </div>
        </motion.div>
    );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const s = {
    section: {
        position: "relative", padding: "80px 24px 60px",
        background: "linear-gradient(155deg,#fff8f8 0%,#ffffff 55%,#f8faff 100%)",
        minHeight: "100vh", overflow: "hidden",
        fontFamily: "'DM Sans',sans-serif",
    },
    blob1: {
        position: "absolute", top: "-120px", right: "-100px",
        width: 460, height: 460, borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle,rgba(220,38,38,0.06) 0%,transparent 70%)",
    },
    blob2: {
        position: "absolute", bottom: "-80px", left: "-80px",
        width: 360, height: 360, borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle,rgba(59,130,246,0.05) 0%,transparent 70%)",
    },
    container: { maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 },

    header: { textAlign: "center", marginBottom: 44 },
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
    subtitle: { fontSize: "0.96rem", color: "#777", margin: 0, lineHeight: 1.7 },

    stickyBar: {
        position: "sticky", top: 68, zIndex: 50,
        background: "rgba(255,255,255,0.94)",
        backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
        padding: "12px 0 10px",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        marginBottom: 24,
    },
    filterRow: { display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 8 },
    filterBtn: {
        display: "flex", alignItems: "center",
        padding: "7px 16px", borderRadius: 100,
        fontSize: "0.82rem", cursor: "pointer",
        transition: "all 0.18s", fontFamily: "'DM Sans',sans-serif",
        outline: "none",
    },
    yearRow: { display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" },
    yearBtn: {
        padding: "4px 14px", borderRadius: 100,
        fontSize: "0.78rem", cursor: "pointer",
        transition: "all 0.18s", fontFamily: "'DM Sans',sans-serif",
        fontWeight: 500, outline: "none",
    },

    countRow: { display: "flex", alignItems: "center", gap: 12, marginBottom: 20 },
    countText: { fontSize: "0.82rem", color: "#9ca3af", fontWeight: 500 },
    clearBtn: {
        fontSize: "0.78rem", color: "#dc2626", background: "#fef2f2",
        border: "1px solid #fca5a5", borderRadius: 8, padding: "3px 10px",
        cursor: "pointer", fontFamily: "'DM Sans',sans-serif",
    },

    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: 16,
    },

    // Card
    card: {
        borderRadius: 16, overflow: "hidden",
        background: "#fff",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        border: "1px solid rgba(0,0,0,0.06)",
        cursor: "pointer",
        transition: "box-shadow 0.25s",
    },
    cardImgWrap: { position: "relative", width: "100%", paddingBottom: "72%", overflow: "hidden" },
    cardImg: {
        position: "absolute", inset: 0,
        width: "100%", height: "100%", objectFit: "cover",
        display: "block",
    },
    overlay: {
        position: "absolute", inset: 0,
        background: "linear-gradient(160deg,rgba(220,38,38,0.7),rgba(0,0,0,0.6))",
        display: "flex", alignItems: "center", justifyContent: "center",
        opacity: 0, transition: "opacity 0.3s ease",
    },
    overlayInner: { textAlign: "center" },
    zoomIcon: {
        width: 44, height: 44, borderRadius: "50%",
        background: "rgba(255,255,255,0.18)", border: "1.5px solid rgba(255,255,255,0.4)",
        display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 8px",
    },
    overlayEvent: { color: "#fff", fontWeight: 700, fontSize: "0.9rem", margin: "0 0 2px" },
    overlayYear: { color: "rgba(255,255,255,0.75)", fontSize: "0.78rem", margin: 0 },
    cardFooter: {
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "10px 14px",
    },
    cardEvent: { fontSize: "0.82rem", fontWeight: 600, color: "#374151" },
    cardYear: { fontSize: "0.75rem", color: "#9ca3af" },

    // Pagination
    pagination: { display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: 40 },
    pgBtn: {
        padding: "9px 20px", borderRadius: 9,
        border: "1.5px solid #e5e7eb", background: "#fff",
        fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
        transition: "all 0.18s", fontFamily: "'DM Sans',sans-serif",
        color: "#374151",
    },
    pgNumbers: { display: "flex", gap: 4 },
    pgNum: {
        width: 34, height: 34, borderRadius: 8,
        border: "none", cursor: "pointer", fontSize: "0.85rem",
        transition: "all 0.15s", fontFamily: "'DM Sans',sans-serif",
    },

    // Lightbox
    lightbox: {
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(0,0,0,0.92)",
        display: "flex", alignItems: "center", justifyContent: "center",
    },
    closeBtn: {
        position: "absolute", top: 18, right: 18,
        width: 40, height: 40, borderRadius: "50%",
        background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
        color: "#fff", fontSize: "1.1rem", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "background 0.2s", zIndex: 10,
    },
    lightboxCounter: {
        position: "absolute", top: 22, left: "50%", transform: "translateX(-50%)",
        color: "rgba(255,255,255,0.7)", fontSize: "0.82rem", fontWeight: 500,
        background: "rgba(255,255,255,0.1)", padding: "4px 14px", borderRadius: 100,
        zIndex: 10,
    },
    navBtn: {
        position: "absolute", top: "50%", transform: "translateY(-50%)",
        width: 48, height: 48, borderRadius: "50%",
        background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
        color: "#fff", fontSize: "1.8rem", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 10, transition: "background 0.2s", outline: "none",
        lineHeight: 1,
    },
    lightboxInner: {
        maxWidth: "min(860px,90vw)",
        maxHeight: "90vh",
        display: "flex", flexDirection: "column",
        alignItems: "center",
    },
    lightboxImg: {
        maxWidth: "100%", maxHeight: "78vh",
        objectFit: "contain", borderRadius: 12,
        boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
        display: "block",
    },
    lightboxCaption: {
        display: "flex", alignItems: "center", gap: 10,
        marginTop: 16,
        background: "rgba(255,255,255,0.08)",
        padding: "8px 20px", borderRadius: 100,
        border: "1px solid rgba(255,255,255,0.12)",
    },
    captionEvent: { color: "#fff", fontWeight: 700, fontSize: "0.9rem" },
    captionSep: { color: "rgba(255,255,255,0.4)", fontSize: "0.9rem" },
    captionYear: { color: "rgba(255,255,255,0.7)", fontSize: "0.85rem" },
    keyHint: {
        position: "absolute", bottom: 18, left: "50%", transform: "translateX(-50%)",
        color: "rgba(255,255,255,0.35)", fontSize: "0.72rem",
        whiteSpace: "nowrap",
    },

    emptyState: { gridColumn: "1/-1", textAlign: "center", padding: "60px 0" },
};