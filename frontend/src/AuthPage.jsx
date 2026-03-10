import React, { useState } from 'react';
import { useAuth } from './contexts/AuthContext';
import { Code2, ArrowRight } from 'lucide-react';

export default function AuthPage({ onLoginSuccess }) {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login, register } = useAuth();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (isLogin) {
                await login(username, password);
            } else {
                await register(username, email, password);
            }
            onLoginSuccess();
        } catch (err) {
            setError(err.response?.data?.detail || 'An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-8 bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-500 mb-6">
                <Code2 size={32} />
            </div>

            <h2 className="text-2xl font-black text-slate-800 mb-2">
                {isLogin ? 'Welcome Back!' : 'Start Your Quest!'}
            </h2>
            <p className="text-slate-500 mb-8 text-center text-sm">
                {isLogin ? 'Log in to continue learning Python.' : 'Create an account to save your progress.'}
            </p>

            <form onSubmit={handleSubmit} className="w-full space-y-4">
                {error && (
                    <div className="p-3 bg-red-50 text-red-600 text-sm font-medium rounded-xl border border-red-100">
                        {error}
                    </div>
                )}

                <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1 ml-1">USERNAME</label>
                    <input
                        type="text"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-emerald-400 focus:outline-none transition-colors bg-slate-50 font-medium text-slate-700"
                        placeholder="python_master_99"
                    />
                </div>

                {!isLogin && (
                    <div>
                        <label className="block text-xs font-bold text-slate-500 mb-1 ml-1">EMAIL</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-emerald-400 focus:outline-none transition-colors bg-slate-50 font-medium text-slate-700"
                            placeholder="you@email.com"
                        />
                    </div>
                )}

                <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1 ml-1">PASSWORD</label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-emerald-400 focus:outline-none transition-colors bg-slate-50 font-medium text-slate-700"
                        placeholder="••••••••"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-300 text-white font-black py-4 rounded-xl shadow-lg shadow-emerald-200 transition-all flex items-center justify-center gap-2 mt-4"
                >
                    {loading ? 'PROCESSING...' : (isLogin ? 'LOGIN' : 'CREATE ACCOUNT')}
                    {!loading && <ArrowRight size={18} />}
                </button>
            </form>

            <button
                onClick={() => setIsLogin(!isLogin)}
                className="mt-6 text-sm font-bold text-slate-400 hover:text-emerald-500 transition-colors"
            >
                {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
            </button>
        </div>
    );
}
