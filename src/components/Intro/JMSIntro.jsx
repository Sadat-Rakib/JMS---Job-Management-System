import React, { useState, useEffect } from 'react';

const JobberIntro = ({ onGetStarted }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 flex items-center justify-center p-4 overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                {/* Logo/Brand */}
                <div className="mb-8">
                    <h1 className="text-7xl md:text-8xl font-bold text-white mb-4 tracking-tight">
                        <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                            JMS
                        </span>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full"></div>
                </div>

                {/* Tagline */}
                <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
                    Streamline your workflow, manage tasks effortlessly, and boost productivity with our modern task management platform
                </p>

                {/* Feature Highlights */}
                <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Task Management</h3>
                        <p className="text-gray-400 text-sm">Organize and track tasks with intuitive dashboards</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Team Collaboration</h3>
                        <p className="text-gray-400 text-sm">Connect teams and streamline communication</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9z"></path>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Real-time Analytics</h3>
                        <p className="text-gray-400 text-sm">Track progress with detailed insights and reports</p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="space-y-4">
                    <button
                        onClick={onGetStarted}
                        className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-emerald-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25"
                    >
                        Get Started
                    </button>

                    <p className="text-gray-500 text-sm">
                        Ready to transform your workflow? Let's begin your journey.
                    </p>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-2000"></div>
                <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></div>
            </div>


        </div>
    );
};

export default JobberIntro;