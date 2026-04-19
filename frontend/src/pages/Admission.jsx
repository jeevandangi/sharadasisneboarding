import React, { useEffect, useRef, useState } from 'react';

const useInView = (threshold = 0.15) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, inView];
};

const steps = [
    {
        number: '01',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
            </svg>
        ),
        title: 'Get the Form',
        description: 'Visit our school or contact us to receive the admission form and all detailed information about our programs.',
    },
    {
        number: '02',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
                <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
            </svg>
        ),
        title: 'Submit Documents',
        description: 'Fill in the form and hand it over at our office along with the required supporting documents.',
    },
    {
        number: '03',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
        title: 'Interaction & Confirmation',
        description: 'Attend the interaction session for parents and students, followed by official admission confirmation.',
    },
];

const documents = [
    { icon: '🪪', label: 'Birth Certificate' },
    { icon: '📋', label: 'Transfer Certificate (if applicable)' },
    { icon: '📊', label: 'Progress Report / Marksheet' },
    { icon: '📷', label: 'Passport-size Photos (2 copies)' },
    { icon: '🪪', label: "Copy of Parent's Citizenship" },
];

export default function Admission() {
    const [heroRef, heroInView] = useInView(0.1);
    const [stepsRef, stepsInView] = useInView(0.1);
    const [docsRef, docsInView] = useInView(0.1);
    const [ctaRef, ctaInView] = useInView(0.1);

    return (
        <section id="admission" style={styles.section}>
            {/* Background decorative elements */}
            <div style={styles.bgCircle1} />
            <div style={styles.bgCircle2} />
            <div style={styles.bgDots} />

            <div style={styles.container}>

                {/* Header */}
                <div
                    ref={heroRef}
                    style={{
                        ...styles.header,
                        opacity: heroInView ? 1 : 0,
                        transform: heroInView ? 'translateY(0)' : 'translateY(40px)',
                        transition: 'opacity 0.7s ease, transform 0.7s ease',
                    }}
                >
                    <div style={styles.badge}>
                        <span style={styles.badgeDot} />
                        Enrollments Open · 2083/84
                    </div>
                    <h2 style={styles.title}>
                        Begin Your Child's{' '}
                        <span style={styles.titleAccent}>Journey</span>{' '}
                        With Us
                    </h2>
                    <p style={styles.subtitle}>
                        Admissions are open from <strong>Playgroup to Class 9</strong>. We welcome new students into our warm, enriching, and growth-focused learning environment.
                    </p>
                </div>

                {/* Steps */}
                <div ref={stepsRef} style={styles.stepsGrid}>
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            style={{
                                ...styles.stepCard,
                                opacity: stepsInView ? 1 : 0,
                                transform: stepsInView ? 'translateY(0)' : 'translateY(50px)',
                                transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-6px)';
                                e.currentTarget.style.boxShadow = '0 24px 60px rgba(194,44,44,0.14)';
                                e.currentTarget.style.borderColor = '#dc2626';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)';
                                e.currentTarget.style.borderColor = 'rgba(220,38,38,0.12)';
                            }}
                        >
                            <div style={styles.stepNumber}>{step.number}</div>
                            <div style={styles.stepIconWrap}>
                                <span style={styles.stepIcon}>{step.icon}</span>
                            </div>
                            <h3 style={styles.stepTitle}>{step.title}</h3>
                            <p style={styles.stepDesc}>{step.description}</p>
                            <div style={styles.stepLine} />
                        </div>
                    ))}
                </div>

                {/* Documents */}
                <div
                    ref={docsRef}
                    style={{
                        ...styles.docsWrap,
                        opacity: docsInView ? 1 : 0,
                        transform: docsInView ? 'translateY(0)' : 'translateY(40px)',
                        transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
                    }}
                >
                    <div style={styles.docsLeft}>
                        <p style={styles.docsEyebrow}>Checklist</p>
                        <h3 style={styles.docsTitle}>Required Documents</h3>
                        <p style={styles.docsNote}>Please ensure all documents are available before submitting the form.</p>
                    </div>
                    <ul style={styles.docsList}>
                        {documents.map((doc, i) => (
                            <li
                                key={i}
                                style={{
                                    ...styles.docItem,
                                    opacity: docsInView ? 1 : 0,
                                    transform: docsInView ? 'translateX(0)' : 'translateX(20px)',
                                    transition: `opacity 0.5s ease ${0.2 + i * 0.08}s, transform 0.5s ease ${0.2 + i * 0.08}s`,
                                }}
                            >
                                <span style={styles.docCheck}>
                                    <svg viewBox="0 0 12 12" fill="none" style={{ width: 12, height: 12 }}>
                                        <polyline points="2,6 5,9 10,3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                {doc.label}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CTA */}
                <div
                    ref={ctaRef}
                    style={{
                        ...styles.ctaWrap,
                        opacity: ctaInView ? 1 : 0,
                        transform: ctaInView ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'opacity 0.7s ease, transform 0.7s ease',
                    }}
                >
                    <div style={styles.ctaInner}>
                        <div style={styles.ctaText}>
                            <p style={styles.ctaHeading}>Still have questions?</p>
                            <p style={styles.ctaSub}>Our admission team is happy to guide you through the process.</p>
                        </div>
                        <a
                            href="tel:+9779841891130"
                            style={styles.ctaBtn}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = '#991b1b';
                                e.currentTarget.style.transform = 'scale(1.04)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = '#dc2626';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.72a16 16 0 006.36 6.36l1.08-1.34a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                            </svg>
                            Call Us Now
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

const styles = {
    section: {
        position: 'relative',
        padding: '96px 24px',
        background: 'linear-gradient(160deg, #fff8f8 0%, #ffffff 50%, #fff5f5 100%)',
        overflow: 'hidden',
        fontFamily: "'Lora', Georgia, serif",
    },
    bgCircle1: {
        position: 'absolute',
        top: '-120px',
        right: '-120px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
    },
    bgCircle2: {
        position: 'absolute',
        bottom: '-80px',
        left: '-80px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(220,38,38,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
    },
    bgDots: {
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(220,38,38,0.08) 1.5px, transparent 1.5px)',
        backgroundSize: '36px 36px',
        opacity: 0.4,
        pointerEvents: 'none',
    },
    container: {
        maxWidth: '1100px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
    },

    /* Header */
    header: {
        textAlign: 'center',
        marginBottom: '72px',
    },
    badge: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(220,38,38,0.08)',
        color: '#b91c1c',
        fontSize: '12px',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        padding: '6px 18px',
        borderRadius: '100px',
        marginBottom: '20px',
        fontFamily: "'DM Sans', sans-serif",
    },
    badgeDot: {
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: '#dc2626',
        display: 'inline-block',
        animation: 'pulse 2s infinite',
    },
    title: {
        fontSize: 'clamp(2rem, 5vw, 3.4rem)',
        fontWeight: 700,
        color: '#1a1a1a',
        lineHeight: 1.2,
        margin: '0 0 20px',
        letterSpacing: '-0.02em',
    },
    titleAccent: {
        color: '#dc2626',
        fontStyle: 'italic',
    },
    subtitle: {
        fontSize: '1.05rem',
        color: '#555',
        maxWidth: '540px',
        margin: '0 auto',
        lineHeight: 1.75,
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 400,
    },

    /* Steps */
    stepsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        marginBottom: '64px',
    },
    stepCard: {
        background: '#fff',
        borderRadius: '20px',
        border: '1.5px solid rgba(220,38,38,0.12)',
        padding: '36px 28px',
        position: 'relative',
        cursor: 'default',
        boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
    },
    stepNumber: {
        position: 'absolute',
        top: '20px',
        right: '24px',
        fontSize: '4.5rem',
        fontWeight: 800,
        color: 'rgba(220,38,38,0.07)',
        lineHeight: 1,
        fontFamily: "'Lora', serif",
        userSelect: 'none',
    },
    stepIconWrap: {
        width: '60px',
        height: '60px',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
        color: '#dc2626',
    },
    stepTitle: {
        fontSize: '1.15rem',
        fontWeight: 700,
        color: '#1a1a1a',
        margin: '0 0 10px',
        fontFamily: "'Lora', serif",
    },
    stepDesc: {
        fontSize: '0.9rem',
        color: '#666',
        lineHeight: 1.7,
        margin: 0,
        fontFamily: "'DM Sans', sans-serif",
    },
    stepLine: {
        width: '32px',
        height: '3px',
        background: 'linear-gradient(90deg, #dc2626, #f87171)',
        borderRadius: '2px',
        marginTop: '20px',
    },

    /* Documents */
    docsWrap: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        background: '#fff',
        borderRadius: '24px',
        border: '1.5px solid rgba(220,38,38,0.1)',
        padding: '48px',
        marginBottom: '56px',
        boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
        alignItems: 'flex-start',
    },
    docsLeft: {
        flex: '0 0 220px',
    },
    docsEyebrow: {
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: '#dc2626',
        marginBottom: '10px',
        fontFamily: "'DM Sans', sans-serif",
    },
    docsTitle: {
        fontSize: '1.6rem',
        fontWeight: 700,
        color: '#1a1a1a',
        margin: '0 0 12px',
        lineHeight: 1.25,
        fontFamily: "'Lora', serif",
    },
    docsNote: {
        fontSize: '0.85rem',
        color: '#888',
        lineHeight: 1.6,
        margin: 0,
        fontFamily: "'DM Sans', sans-serif",
    },
    docsList: {
        flex: 1,
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        minWidth: '240px',
    },
    docItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        fontSize: '0.9375rem',
        color: '#333',
        fontFamily: "'DM Sans', sans-serif",
    },
    docCheck: {
        width: '22px',
        height: '22px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #dc2626, #f87171)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },

    /* CTA */
    ctaWrap: {
        borderRadius: '24px',
        background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
        padding: '48px',
        position: 'relative',
        overflow: 'hidden',
    },
    ctaInner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '24px',
        position: 'relative',
        zIndex: 1,
    },
    ctaText: {},
    ctaHeading: {
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#fff',
        margin: '0 0 6px',
        fontFamily: "'Lora', serif",
    },
    ctaSub: {
        fontSize: '0.9375rem',
        color: 'rgba(255,255,255,0.78)',
        margin: 0,
        fontFamily: "'DM Sans', sans-serif",
    },
    ctaBtn: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        background: '#dc2626',
        color: '#fff',
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '0.9375rem',
        fontWeight: 600,
        padding: '14px 28px',
        borderRadius: '100px',
        textDecoration: 'none',
        border: '2px solid rgba(255,255,255,0.5)',
        transition: 'background 0.2s ease, transform 0.2s ease',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
    },
};