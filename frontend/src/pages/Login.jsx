import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GoArrowRight } from 'react-icons/go';
import { HiOutlineEye, HiOutlineEyeSlash, HiOutlineLockClosed, HiOutlineUser } from 'react-icons/hi2';
import { HiBuildingLibrary } from "react-icons/hi2";


export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [focused, setFocused] = useState('');

    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 relative overflow-hidden">

            {/* Background dot grid */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
            />

            {/* Ambient glow blobs */}
            <div className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-orange-500/8 blur-3xl pointer-events-none" />

            {/* Left accent stripe */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-amber-400 via-orange-500 to-transparent" />

            {/* Card */}
            <motion.div
                className="relative z-10 w-full max-w-md"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="bg-gray-900 rounded-3xl border border-white/8 shadow-2xl shadow-black/60 overflow-hidden">

                    {/* Top accent bar */}
                    <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-orange-500 to-transparent" />

                    <div className="px-8 pt-10 pb-10">

                        {/* School branding */}
                        <motion.div
                            className="flex flex-col items-center mb-10"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.5 }}
                        >
                            <div className="w-14  h-14 rounded-full bg-white border border-amber-500/30 flex items-center justify-center mb-4">
                                <img src="../../public/photo/logo.png" alt="" className=" rounded-full" />
                            </div>
                            <h1 className="text-white font-black text-xl tracking-tight text-center">
                                Sharada Sisne
                            </h1>
                            <p className="text-amber-400 text-sm font-medium tracking-wide mt-0.5">
                                Boarding School
                            </p>
                            <div className="mt-4 w-8 h-px bg-amber-400/50" />
                        </motion.div>

                        {/* Heading */}
                        <motion.div
                            className="mb-8 text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.25 }}
                        >
                            <h2 className="text-2xl font-black text-white">Welcome back</h2>
                            <p className="text-gray-500 text-sm mt-1">Sign in to your staff account</p>
                        </motion.div>

                        {/* Form */}
                        <motion.div
                            className="space-y-5"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.5 }}
                        >
                            {/* Username */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                                    Username
                                </label>
                                <div className={`flex items-center gap-3 bg-white/5 border rounded-xl px-4 py-3 transition-all duration-200 ${focused === 'user'
                                    ? 'border-amber-400/60 bg-amber-500/5'
                                    : 'border-white/10 hover:border-white/20'
                                    }`}>
                                    <HiOutlineUser size={16} className={`flex-shrink-0 transition-colors ${focused === 'user' ? 'text-amber-400' : 'text-gray-500'}`} />
                                    <input
                                        type="text"
                                        name="username"
                                        required
                                        autoComplete="username"
                                        placeholder="Enter your username"
                                        onFocus={() => setFocused('user')}
                                        onBlur={() => setFocused('')}
                                        className="bg-transparent flex-1 text-sm text-white placeholder-gray-600 outline-none"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest">
                                        Password
                                    </label>
                                    <a href="#" className="text-xs text-amber-400 hover:text-amber-300 font-medium transition-colors">
                                        Forgot password?
                                    </a>
                                </div>
                                <div className={`flex items-center gap-3 bg-white/5 border rounded-xl px-4 py-3 transition-all duration-200 ${focused === 'pass'
                                    ? 'border-amber-400/60 bg-amber-500/5'
                                    : 'border-white/10 hover:border-white/20'
                                    }`}>
                                    <HiOutlineLockClosed size={16} className={`flex-shrink-0 transition-colors ${focused === 'pass' ? 'text-amber-400' : 'text-gray-500'}`} />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        required
                                        placeholder="Enter your password"
                                        onFocus={() => setFocused('pass')}
                                        onBlur={() => setFocused('')}
                                        className="bg-transparent flex-1 text-sm text-white placeholder-gray-600 outline-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(v => !v)}
                                        className="text-gray-500 hover:text-gray-300 transition-colors flex-shrink-0"
                                        tabIndex={-1}
                                    >
                                        {showPassword
                                            ? <HiOutlineEyeSlash size={16} />
                                            : <HiOutlineEye size={16} />
                                        }
                                    </button>
                                </div>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="group w-full flex items-center justify-center gap-2 py-3.5 bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/20 mt-2"
                            >
                                Sign In
                                <GoArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>

                        {/* Footer note */}
                        <motion.p
                            className="mt-8 text-center text-xs text-gray-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Access is restricted to school staff and administrators.
                            <br />
                            Contact the office for account issues.
                        </motion.p>

                    </div>
                </div>

                {/* Bottom school name */}
                <p className="text-center text-gray-700 text-xs mt-6 tracking-wide">
                    © {new Date().getFullYear()} Sharada Sisne Boarding School · Tulsipur, Dang
                </p>
            </motion.div>
        </div>
    );
}