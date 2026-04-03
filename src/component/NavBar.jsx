import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/admission", label: "Admission" },
    { path: "/events", label: "Events" },
    { path: "/gallery", label: "Gallery" },
    { path: "/notices", label: "Notices" },
    { path: "/contact", label: "Contact" },
];

// Inject CSS once for responsive breakpoints + hover states
if (typeof document !== "undefined" && !document.getElementById("ssb-nav-css")) {
    const el = document.createElement("style");
    el.id = "ssb-nav-css";
    el.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Lora:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
    .ssb-desktop-nav { display: flex !important; }
    .ssb-burger-btn  { display: none !important; }
    @media (max-width: 768px) {
      .ssb-desktop-nav { display: none !important; }
      .ssb-burger-btn  { display: flex !important; }
    }
    .ssb-nl:hover { color: #dc2626 !important; background: #fef2f2 !important; }
    .ssb-dl:hover { background: #fef2f2 !important; color: #dc2626 !important; }
    .ssb-login:hover { background: #b91c1c !important; }
  `;
    document.head.appendChild(el);
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", fn, { passive: true });
        return () => window.removeEventListener("scroll", fn);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    const Logo = ({ size = 46, radius = 13, iconSize = 20 }) => (
        <div style={{
            width: size, height: size, borderRadius: radius, flexShrink: 0,
            background: "linear-gradient(135deg,#dc2626,#991b1b)",
            display: "flex", alignItems: "center", justifyContent: "center",
        }}>
            <img src="../../public/photo/logo.png" alt="" />
        </div>
    );

    return (
        <>
            {/* ── Sticky Navbar ── */}
            <nav style={{
                position: "sticky", top: 0, zIndex: 1000,
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(0,0,0,0.07)",
                boxShadow: scrolled ? "0 4px 28px rgba(0,0,0,0.09)" : "none",
                transition: "box-shadow 0.3s",
                fontFamily: "'DM Sans',sans-serif",
            }}>
                <div style={{
                    maxWidth: 1200, margin: "0 auto",
                    padding: "0 24px", height: 68,
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                }}>

                    {/* Logo */}
                    <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }} onClick={() => setIsOpen(false)}>
                        <Logo />
                        <div>
                            <span style={{ display: "block", fontSize: "1.15rem", fontWeight: 800, lineHeight: 1.15, fontFamily: "'Lora',Georgia,serif" }}>
                                <span style={{ color: "#dc2626" }}>Sharada</span>
                                <span style={{ color: "#f97316" }}> Sisne</span>
                            </span>
                            <span style={{ display: "block", fontSize: "0.61rem", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600 }}>
                                Boarding School
                            </span>
                        </div>
                    </Link>

                    {/* Desktop links */}
                    <div className="ssb-desktop-nav" style={{ alignItems: "center", gap: 2 }}>
                        {navItems.map(({ path, label }) => (
                            <NavLink
                                key={path}
                                to={path}
                                className="ssb-nl"
                                style={({ isActive }) => ({
                                    padding: "7px 13px", borderRadius: 8,
                                    fontSize: "0.875rem", fontWeight: isActive ? 700 : 500,
                                    textDecoration: "none", whiteSpace: "nowrap",
                                    color: isActive ? "#dc2626" : "#374151",
                                    background: isActive ? "#fef2f2" : "transparent",
                                    transition: "color 0.15s, background 0.15s",
                                })}
                            >
                                {label}
                            </NavLink>
                        ))}
                        <NavLink
                            to="/login"
                            className="ssb-login"
                            style={{
                                marginLeft: 10,
                                background: "#dc2626", color: "#fff",
                                padding: "8px 22px", borderRadius: 8,
                                fontSize: "0.875rem", fontWeight: 700,
                                textDecoration: "none",
                                transition: "background 0.2s",
                                whiteSpace: "nowrap",
                            }}
                        >
                            Login
                        </NavLink>
                    </div>

                    {/* Hamburger */}
                    <button
                        className="ssb-burger-btn"
                        onClick={() => setIsOpen(v => !v)}
                        aria-label="Toggle menu"
                        style={{
                            background: "none", border: "1px solid #e5e7eb",
                            borderRadius: 9, padding: 7, cursor: "pointer",
                            alignItems: "center", justifyContent: "center",
                        }}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="#374151"
                            strokeWidth="2" strokeLinecap="round" style={{ width: 22, height: 22 }}>
                            {isOpen
                                ? <><path d="M6 18L18 6" /><path d="M6 6l12 12" /></>
                                : <><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>
                            }
                        </svg>
                    </button>
                </div>
            </nav>

            {/* ── Mobile Drawer ── */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            key="bd"
                            style={{ position: "fixed", inset: 0, zIndex: 1100, background: "rgba(0,0,0,0.42)" }}
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.aside
                            key="dr"
                            style={{
                                position: "fixed", top: 0, right: 0, bottom: 0,
                                width: "min(305px,88vw)", zIndex: 1200,
                                background: "#fff", display: "flex", flexDirection: "column",
                                fontFamily: "'DM Sans',sans-serif", overflowY: "auto",
                            }}
                            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 320, damping: 32 }}
                        >
                            {/* Top */}
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 18px 14px", borderBottom: "1px solid #f3f4f6" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                    <Logo size={40} radius={10} iconSize={18} />
                                    <div>
                                        <p style={{ margin: 0, fontSize: "1rem", fontWeight: 800, fontFamily: "'Lora',serif" }}>
                                            <span style={{ color: "#dc2626" }}>Sharada</span>
                                            <span style={{ color: "#f97316" }}> Sisne</span>
                                        </p>
                                        <p style={{ margin: 0, fontSize: "0.6rem", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>Boarding School</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 8, padding: 7, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" style={{ width: 18, height: 18 }}>
                                        <path d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Links */}
                            <div style={{ flex: 1, padding: "10px 12px", display: "flex", flexDirection: "column", gap: 3 }}>
                                {navItems.map(({ path, label }, i) => (
                                    <motion.div key={path} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 + i * 0.048 }}>
                                        <NavLink
                                            to={path}
                                            className="ssb-dl"
                                            onClick={() => setIsOpen(false)}
                                            style={({ isActive }) => ({
                                                display: "block", padding: "13px 16px", borderRadius: 10,
                                                fontSize: "0.95rem", textDecoration: "none",
                                                color: isActive ? "#dc2626" : "#1a1a1a",
                                                fontWeight: isActive ? 700 : 500,
                                                background: isActive ? "#fef2f2" : "transparent",
                                                borderLeft: `3px solid ${isActive ? "#dc2626" : "transparent"}`,
                                                transition: "all 0.15s",
                                            })}
                                        >
                                            {label}
                                        </NavLink>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Footer */}
                            <div style={{ padding: "14px 18px 32px", borderTop: "1px solid #f3f4f6" }}>
                                <NavLink
                                    to="/login"
                                    onClick={() => setIsOpen(false)}
                                    style={{
                                        display: "block", textAlign: "center",
                                        background: "linear-gradient(135deg,#dc2626,#b91c1c)",
                                        color: "#fff", padding: 13, borderRadius: 10,
                                        fontWeight: 700, fontSize: "0.93rem",
                                        textDecoration: "none", marginBottom: 12,
                                    }}
                                >
                                    Login to Portal →
                                </NavLink>
                                <p style={{ textAlign: "center", fontSize: "0.82rem", color: "#9ca3af", margin: 0 }}>
                                    📞 082-521520
                                </p>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}