import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Phone, Mail, MapPin, ExternalLink, ChevronRight } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' }
    }),
};

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/aboutus' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Academic Calendar', href: '/events' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact Us', href: '/contact' },
];

const Footer = () => {
    return (
        <footer style={s.footer}>
            {/* Decorative top wave */}
            <div style={s.wave}>
                <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: '100%', height: '60px', display: 'block' }}>
                    <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#fff" />
                </svg>
            </div>

            <div style={s.inner}>
                <div style={s.grid}>

                    {/* Brand */}
                    <motion.div style={s.brandCol} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
                        <div style={s.logoWrap}>
                            <div style={s.logoIcon}>
                                <svg viewBox="0 0 40 40" fill="none" style={{ width: 28, height: 28 }}>
                                    <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2" />
                                    <path d="M12 26 L20 10 L28 26" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                    <line x1="14.5" y1="21" x2="25.5" y2="21" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div>
                                <h2 style={s.brandName}>Sharada Sisne</h2>
                                <span style={s.brandSub}>Boarding School</span>
                            </div>
                        </div>
                        <p style={s.brandDesc}>
                            Empowering young minds from Playgroup to Class 10 with excellence in academics, character building, and holistic development since its founding in Tulsipur, Dang.
                        </p>
                        <div style={s.socialRow}>
                            <motion.a
                                href="https://www.facebook.com/profile.php?id=100063692702730"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={s.socialBtn}
                                whileHover={{ scale: 1.12, background: '#1877f2' }}
                                whileTap={{ scale: 0.95 }}
                                title="Facebook"
                            >
                                <Facebook size={18} />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
                        <h3 style={s.colTitle}>Quick Links</h3>
                        <ul style={s.linkList}>
                            {quickLinks.map((item, i) => (
                                <li key={i}>
                                    <a href={item.href} style={s.linkItem}
                                        onMouseEnter={e => { e.currentTarget.style.color = '#dc2626'; e.currentTarget.style.paddingLeft = '6px'; }}
                                        onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.paddingLeft = '0'; }}
                                    >
                                        <ChevronRight size={13} style={{ marginRight: '6px', flexShrink: 0, opacity: 0.6 }} />
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
                        <h3 style={s.colTitle}>Contact Info</h3>
                        <ul style={s.contactList}>
                            <li style={s.contactItem}>
                                <span style={s.contactIcon}><MapPin size={15} /></span>
                                <span>Tulsipur-5, Dang, Lumbini Province, Nepal</span>
                            </li>
                            <li style={s.contactItem}>
                                <span style={s.contactIcon}><Phone size={15} /></span>
                                <a href="tel:082521520" style={s.contactLink}>082-521520</a>
                            </li>
                            <li style={s.contactItem}>
                                <span style={s.contactIcon}><Phone size={15} /></span>
                                <a href="tel:+9779841891130" style={s.contactLink}>+977 9841891130</a>
                            </li>
                            <li style={s.contactItem}>
                                <span style={s.contactIcon}><Mail size={15} /></span>
                                <a href="mailto:sharadasisneboardingschool@gmail.com" style={s.contactLink}>
                                    sharadasisne<wbr />boardingschool<wbr />@gmail.com
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Map / Location card */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
                        <h3 style={s.colTitle}>Find Us</h3>
                        <div style={s.mapCard}>
                            <div style={s.mapPlaceholder}>
                                <svg viewBox="0 0 80 80" fill="none" style={{ width: 40, height: 40, opacity: 0.35 }}>
                                    <circle cx="40" cy="34" r="14" stroke="#dc2626" strokeWidth="2.5" />
                                    <circle cx="40" cy="34" r="4" fill="#dc2626" />
                                    <path d="M40 48 C40 48 22 62 22 70" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
                                    <path d="M40 48 C40 48 58 62 58 70" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
                                </svg>
                                <p style={{ fontSize: '0.8rem', color: '#6b7280', margin: '8px 0 0', textAlign: 'center' }}>Tulsipur-5, Dang</p>
                            </div>
                            <a
                                href="https://maps.google.com/?q=Tulsipur+Dang+Nepal"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={s.mapBtn}
                                onMouseEnter={e => e.currentTarget.style.background = '#b91c1c'}
                                onMouseLeave={e => e.currentTarget.style.background = '#dc2626'}
                            >
                                <ExternalLink size={13} style={{ marginRight: '6px' }} />
                                View on Google Maps
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Bottom bar */}
            <motion.div
                style={s.bottomBar}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
            >
                <div style={s.bottomInner}>
                    <span style={s.bottomText}>
                        © {new Date().getFullYear()} Sharada Sisne Boarding School. All rights reserved.
                    </span>
                    <span style={s.bottomRight}>
                        Tulsipur, Dang · Nepal 🇳🇵
                    </span>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;

// ─── Styles ────────────────────────────────────────────────────────────────────
const s = {
    footer: {
        background: 'linear-gradient(160deg, #1a1a2e 0%, #16162a 50%, #1a0a0a 100%)',
        fontFamily: "'DM Sans', sans-serif",
        position: 'relative',
        overflow: 'hidden',
    },
    wave: {
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1, pointerEvents: 'none',
    },
    inner: {
        maxWidth: '1200px', margin: '0 auto',
        padding: '72px 32px 48px',
        position: 'relative', zIndex: 2,
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '40px',
    },

    // Brand
    brandCol: { maxWidth: '280px' },
    logoWrap: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' },
    logoIcon: {
        width: '48px', height: '48px', borderRadius: '14px',
        background: 'linear-gradient(135deg,#dc2626,#991b1b)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
    },
    brandName: {
        fontSize: '1.25rem', fontWeight: 800, color: '#fff',
        margin: 0, lineHeight: 1.2, fontFamily: "'Lora',Georgia,serif",
    },
    brandSub: { fontSize: '0.7rem', color: '#f87171', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 },
    brandDesc: { fontSize: '0.85rem', color: '#9ca3af', lineHeight: 1.75, margin: '0 0 20px' },
    socialRow: { display: 'flex', gap: '10px' },
    socialBtn: {
        width: '38px', height: '38px', borderRadius: '10px',
        background: 'rgba(255,255,255,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff', textDecoration: 'none',
        transition: 'background 0.2s, transform 0.2s',
        border: '1px solid rgba(255,255,255,0.1)',
        cursor: 'pointer',
    },

    // Column
    colTitle: {
        fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em',
        textTransform: 'uppercase', color: '#dc2626',
        marginBottom: '20px', paddingBottom: '10px',
        borderBottom: '1px solid rgba(220,38,38,0.25)',
    },

    // Links
    linkList: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' },
    linkItem: {
        display: 'flex', alignItems: 'center',
        fontSize: '0.875rem', color: '#9ca3af',
        textDecoration: 'none', transition: 'color 0.2s, padding-left 0.2s',
        cursor: 'pointer',
    },

    // Contact
    contactList: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' },
    contactItem: { display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.85rem', color: '#9ca3af', lineHeight: 1.5 },
    contactIcon: {
        width: '28px', height: '28px', borderRadius: '8px',
        background: 'rgba(220,38,38,0.12)', color: '#f87171',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
    },
    contactLink: { color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s', wordBreak: 'break-all' },

    // Map
    mapCard: {
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '16px', overflow: 'hidden',
    },
    mapPlaceholder: {
        height: '110px', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        background: 'rgba(220,38,38,0.05)',
    },
    mapBtn: {
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#dc2626', color: '#fff',
        fontSize: '0.78rem', fontWeight: 600,
        padding: '10px', textDecoration: 'none',
        transition: 'background 0.2s',
    },

    // Bottom bar
    bottomBar: {
        borderTop: '1px solid rgba(255,255,255,0.07)',
        background: 'rgba(0,0,0,0.3)',
        position: 'relative', zIndex: 2,
    },
    bottomInner: {
        maxWidth: '1200px', margin: '0 auto',
        padding: '16px 32px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '8px',
    },
    bottomText: { fontSize: '0.8rem', color: '#6b7280' },
    bottomRight: { fontSize: '0.8rem', color: '#6b7280' },
};