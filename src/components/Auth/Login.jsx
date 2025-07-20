import React, { useState } from 'react'

const Login = ({ handleLogin, onSwitchToSignup }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        // Add slight delay for better UX
        setTimeout(() => {
            handleLogin(email, password)
            setEmail("")
            setPassword("")
            setIsLoading(false)
        }, 1000)
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 flex items-center justify-center p-4 relative overflow-hidden'>

            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Back to Intro Link */}
            <div className="absolute top-6 left-6">
                <button
                    onClick={() => window.location.reload()}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group"
                >
                    <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    <span>Back to Home</span>
                </button>
            </div>

            <div className='relative z-10 w-full max-w-md'>

                {/* Logo */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">
                        <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                            JMS
                        </span>
                    </h1>
                    <p className="text-gray-400">Welcome back! Please sign in to your account.</p>
                </div>

                {/* Login Form */}
                <div className='bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl'>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-2">Sign In</h2>
                        <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full"></div>
                    </div>

                    <div className='space-y-6'>

                        {/* Email Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                                    </svg>
                                </div>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className='w-full bg-white/5 border-2 border-white/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300'
                                    type="email"
                                    placeholder='admin@example.com'
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                    </svg>
                                </div>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className='w-full bg-white/5 border-2 border-white/20 rounded-xl py-3 pl-12 pr-12 text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300'
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Enter your password'
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
                                >
                                    {showPassword ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Login Button */}
                        <button
                            onClick={submitHandler}
                            disabled={isLoading}
                            className={`w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25 focus:outline-none focus:ring-2 focus:ring-emerald-400 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:from-emerald-600 hover:to-blue-600'
                                }`}
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center space-x-2">
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    <span>Signing In...</span>
                                </div>
                            ) : (
                                'Sign In'
                            )}
                        </button>

                        {/* Demo Credentials */}
                        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 mt-6">
                            <h3 className="text-emerald-400 font-medium text-sm mb-2">Demo Credentials:</h3>
                            <div className="space-y-1 text-xs text-gray-300">
                                <p><span className="text-emerald-400">Admin:</span> admin@example.com / 123</p>
                                <p><span className="text-blue-400">Employee:</span> e@e.com / 123</p>
                            </div>
                        </div>

                        {/* Sign Up Link */}
                        <div className="text-center pt-4 border-t border-white/10">
                            <p className="text-gray-400">
                                Don't have an account?{' '}
                                <button
                                    onClick={onSwitchToSignup}
                                    className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors duration-300 hover:underline"
                                >
                                    Sign up here
                                </button>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-8">
                    <p className="text-gray-500 text-sm">
                        © 2025 JMS. Streamline your workflow.
                    </p>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-2000"></div>
            <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></div>
        </div>
    )
}

export default Login