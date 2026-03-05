import React, { useState, useEffect, useMemo } from 'react';
import {
    Flame,
    Coins,
    ChevronRight,
    RotateCcw,
    Play,
    ExternalLink,
    CheckCircle2,
    XCircle,
    Award,
    BookOpen,
    LayoutGrid,
    Map,
    Code2,
    Variable,
    Hash,
    Type,
    Terminal,
    Split,
    ListOrdered,
    RefreshCw,
    Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIGURATION ---
const QUESTIONS_PER_SESSION = 5;

// --- ICONS MAP ---
const getLessonIcon = (id) => {
    switch(id) {
        case 1: return <Terminal className="text-emerald-500" />;
        case 2: return <Variable className="text-blue-500" />;
        case 3: return <Type className="text-purple-500" />;
        case 4: return <Hash className="text-orange-500" />;
        case 5: return <Code2 className="text-pink-500" />;
        case 6: return <Zap className="text-yellow-500" />;
        case 7: return <Split className="text-indigo-500" />;
        case 8: return <ListOrdered className="text-cyan-500" />;
        case 9: return <RefreshCw className="text-rose-500" />;
        case 10: return <Zap className="text-amber-500" />;
        default: return <Terminal className="text-emerald-500" />;
    }
};

// --- UTILS ---
const playSound = (type) => {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        if (type === 'success') {
            osc.frequency.setValueAtTime(523, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(1046, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
        } else {
            osc.frequency.setValueAtTime(200, ctx.currentTime);
            osc.frequency.linearRampToValueAtTime(50, ctx.currentTime + 0.2);
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
        }
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
    } catch (e) { }
};

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

// --- COMPONENTS ---

const PixelThePython = ({ mood }) => {
    const animations = {
        idle: { y: [0, -10, 0], transition: { duration: 3, repeat: Infinity } },
        happy: { scale: [1, 1.2, 1], rotate: [0, 5, -5, 0], transition: { duration: 0.5 } },
        thinking: { x: [0, 5, -5, 0], transition: { duration: 2, repeat: Infinity } },
    };

    return (
        <motion.div className="relative w-24 h-24" animate={animations[mood] || animations.idle}>
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
                <path d="M40,140 C40,100 80,60 100,60 C120,60 160,100 160,140 C160,180 120,180 100,180 C80,180 40,180 40,140" fill="#4ADE80" stroke="#166534" strokeWidth="8" />
                <circle cx="85" cy="110" r="8" fill="white" />
                <circle cx="115" cy="110" r="8" fill="white" />
                <circle cx={mood === 'thinking' ? 88 : 85} cy="110" r="4" fill="black" />
                <circle cx={mood === 'thinking' ? 118 : 115} cy="110" r="4" fill="black" />
                {mood === 'happy' ? (
                    <path d="M85,130 Q100,145 115,130" fill="none" stroke="#166534" strokeWidth="4" strokeLinecap="round" />
                ) : (
                    <line x1="90" y1="135" x2="110" y2="135" stroke="#166534" strokeWidth="4" strokeLinecap="round" />
                )}
            </svg>
        </motion.div>
    );
};

const CodeBlock = ({ code }) => (
    <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm text-slate-300 relative overflow-hidden shadow-inner">
        <div className="flex gap-2 mb-2 border-b border-slate-800 pb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50"></div>
        </div>
        <pre className="whitespace-pre-wrap">
            {code ? code.split('\n').map((line, i) => (
                <div key={i} className="flex">
                    <span className="text-slate-600 mr-4 w-4 text-right select-none">{i + 1}</span>
                    <span>
                        {line.split(' ').map((word, j) => {
                            let color = "text-slate-300";
                            const cleanWord = word.replace(/[()_]/g, '');
                            if (['if', 'print', 'type', 'int', 'str', 'def', 'for', 'in', 'range', 'return'].includes(cleanWord)) color = "text-purple-400";
                            if (word.startsWith("'") || word.endsWith("'") || word.startsWith('"') || word.endsWith('"')) color = "text-emerald-400";
                            if (!isNaN(word) && word !== '') color = "text-amber-400";
                            if (word.startsWith('#')) color = "text-slate-500 italic";
                            if (word.includes('____')) color = "text-white bg-slate-700 rounded px-1";
                            return <span key={j} className={color}>{word} </span>;
                        })}
                    </span>
                </div>
            )) : <div className="italic text-slate-500">No code snippet provided</div>}
        </pre>
    </div>
);

export default function App() {
    const [gameState, setGameState] = useState('welcome');
    const [coins, setCoins] = useState(0);
    const [streak, setStreak] = useState(0);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [mascotMood, setMascotMood] = useState('idle');
    const [lessonsData, setLessonsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/data/python-questions.json')
            .then(res => res.json())
            .then(data => {
                setLessonsData(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch questions:", err);
                setIsLoading(false);
            });
    }, []);

    const startLesson = (lesson) => {
        setSelectedLesson(lesson);
        const pool = shuffleArray(lesson.questions).slice(0, QUESTIONS_PER_SESSION);
        setShuffledQuestions(pool);
        setCurrentQuestionIdx(0);
        setGameState('quiz');
        setMascotMood('idle');
        playSound('click');
    };

    const handleAnswer = (option) => {
        const question = shuffledQuestions[currentQuestionIdx];
        setSelectedOption(option);
        const correct = option === question.correctAnswer;
        setIsCorrect(correct);

        if (correct) {
            playSound('success');
            setCoins(prev => prev + 10);
            setStreak(prev => prev + 1);
            setMascotMood('happy');
        } else {
            playSound('error');
            setMascotMood('thinking');
        }
        setGameState('feedback');
    };

    const nextAction = () => {
        if (currentQuestionIdx < shuffledQuestions.length - 1) {
            setCurrentQuestionIdx(prev => prev + 1);
            setGameState('quiz');
            setSelectedOption(null);
            setIsCorrect(null);
            setMascotMood('idle');
        } else {
            setGameState('complete');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col items-center p-4">
            <header className="w-full max-w-2xl flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setGameState('welcome')}>
                    <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-black text-xl">P</div>
                    <h1 className="text-xl font-black text-slate-800 hidden sm:block">PyQuest</h1>
                </div>

                <div className="flex gap-3">
                    <div className="flex items-center gap-1.5 bg-white border px-3 py-1.5 rounded-full shadow-sm">
                        <Flame size={16} className="text-orange-500 fill-orange-500" />
                        <span className="font-bold text-sm">{streak}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white border px-3 py-1.5 rounded-full shadow-sm">
                        <Coins size={16} className="text-amber-500" />
                        <span className="font-bold text-sm">{coins}</span>
                    </div>
                </div>
            </header>

            <main className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden min-h-[500px] flex flex-col">
                {(gameState === 'quiz' || gameState === 'feedback') && (
                    <div className="w-full h-1.5 bg-slate-100">
                        <motion.div
                            className="h-full bg-emerald-400"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentQuestionIdx + 1) / shuffledQuestions.length) * 100}%` }}
                        />
                    </div>
                )}

                <div className="flex-1 p-6 sm:p-8">
                    <AnimatePresence mode="wait">
                        {gameState === 'welcome' && (
                            <motion.div key="welcome" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center py-8">
                                <PixelThePython mood="idle" />
                                <h2 className="text-3xl font-black text-slate-800 mt-6 mb-2">Welcome, Explorer!</h2>
                                <p className="text-slate-500 mb-8 max-w-sm mx-auto">Master Python bit by bit. Pick a quest and start your journey.</p>
                                <button
                                    onClick={() => !isLoading && setGameState('selection')}
                                    disabled={isLoading}
                                    className={`font-black px-10 py-4 rounded-2xl shadow-lg transition-all flex items-center gap-2 mx-auto ${isLoading ? 'bg-slate-300 text-slate-500 cursor-not-allowed' : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-200'}`}
                                >
                                    {isLoading ? 'LOADING...' : <>OPEN QUEST MAP <Map size={20} /></>}
                                </button>
                            </motion.div>
                        )}

                        {gameState === 'selection' && (
                            <motion.div key="selection" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <LayoutGrid className="text-emerald-500" />
                                    <h2 className="text-xl font-black text-slate-800">Your Quests</h2>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {lessonsData.map((lesson) => (
                                        <motion.button
                                            whileHover={{ y: -2 }}
                                            key={lesson.id}
                                            onClick={() => startLesson(lesson)}
                                            className="text-left p-4 rounded-2xl border-2 border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all flex items-start gap-4 group"
                                        >
                                            <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                                                {getLessonIcon(lesson.id)}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-800 leading-none mb-1">Quest {lesson.id}</h4>
                                                <p className="font-bold text-slate-600 text-sm mb-1">{lesson.title}</p>
                                                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{lesson.description}</p>
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {(gameState === 'quiz' || gameState === 'feedback') && (
                            <motion.div key="quiz" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex-1">
                                        <button
                                            onClick={() => setGameState('selection')}
                                            className="text-xs font-bold text-slate-400 hover:text-emerald-500 transition-colors mb-2 flex items-center gap-1"
                                        >
                                            <RotateCcw size={12} /> EXIT TO MAP
                                        </button>
                                        <h3 className="text-lg font-bold text-slate-800 leading-tight">
                                            {shuffledQuestions[currentQuestionIdx].question}
                                        </h3>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <PixelThePython mood={mascotMood} />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <CodeBlock code={shuffledQuestions[currentQuestionIdx].codeSnippet} />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {shuffledQuestions[currentQuestionIdx].options.map((option, idx) => (
                                        <button
                                            key={idx}
                                            disabled={gameState === 'feedback'}
                                            onClick={() => handleAnswer(option)}
                                            className={`
                        text-left p-4 rounded-2xl border-2 transition-all font-bold text-sm relative
                        ${selectedOption === option
                                                    ? (isCorrect ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-red-500 bg-red-50 text-red-700')
                                                    : 'border-slate-100 hover:border-emerald-200 hover:bg-slate-50 text-slate-700'
                                                }
                        ${gameState === 'feedback' && option === shuffledQuestions[currentQuestionIdx].correctAnswer && 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm'}
                      `}
                                        >
                                            {option}
                                            {gameState === 'feedback' && option === shuffledQuestions[currentQuestionIdx].correctAnswer && (
                                                <CheckCircle2 size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500" />
                                            )}
                                        </button>
                                    ))}
                                </div>

                                <AnimatePresence>
                                    {gameState === 'feedback' && (
                                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 pt-6 border-t border-slate-100">
                                            <div className={`p-5 rounded-2xl ${isCorrect ? 'bg-emerald-50 border-emerald-100' : 'bg-amber-50 border-amber-100'} border-2`}>
                                                <div className="flex items-center gap-2 mb-2">
                                                    {isCorrect ? <Award className="text-emerald-500" size={18} /> : <BookOpen className="text-amber-500" size={18} />}
                                                    <h4 className={`font-black text-sm ${isCorrect ? 'text-emerald-700' : 'text-amber-700'}`}>
                                                        {isCorrect ? "BRILLIANT!" : "KEEP LEARNING!"}
                                                    </h4>
                                                </div>
                                                <p className="text-slate-600 text-xs mb-4 leading-relaxed">
                                                    {shuffledQuestions[currentQuestionIdx].explanation}
                                                </p>
                                                <div className="flex justify-between items-center">
                                                    {!isCorrect && (
                                                        <a
                                                            href={shuffledQuestions[currentQuestionIdx].youtubeLink}
                                                            target="_blank"
                                                            className="text-xs font-bold text-amber-700 hover:underline flex items-center gap-1"
                                                        >
                                                            WATCH LESSON <ExternalLink size={12} />
                                                        </a>
                                                    )}
                                                    <button
                                                        onClick={nextAction}
                                                        className={`ml-auto flex items-center gap-1.5 px-6 py-2 rounded-xl font-black text-white text-sm shadow-md transition-all
                              ${isCorrect ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-slate-800 hover:bg-slate-900'}
                            `}
                                                    >
                                                        {currentQuestionIdx < shuffledQuestions.length - 1 ? 'NEXT' : 'FINISH'} <ChevronRight size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )}

                        {gameState === 'complete' && (
                            <motion.div key="complete" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                                <div className="w-20 h-20 bg-amber-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                                    <Award size={40} className="text-amber-500" />
                                </div>
                                <h2 className="text-3xl font-black text-slate-800 mb-2">Quest Complete!</h2>
                                <p className="text-slate-500 mb-8">You've mastered {selectedLesson.title}</p>
                                <div className="bg-slate-50 rounded-2xl p-6 flex justify-around mb-8 border border-slate-100">
                                    <div className="text-center">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">XP Earned</p>
                                        <p className="text-xl font-black text-emerald-500">+100</p>
                                    </div>
                                    <div className="w-px h-full bg-slate-200"></div>
                                    <div className="text-center">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">New Streak</p>
                                        <p className="text-xl font-black text-orange-500">{streak}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setGameState('selection')}
                                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-black px-10 py-4 rounded-2xl shadow-lg transition-all flex items-center gap-2 mx-auto"
                                >
                                    RETURN TO MAP <Map size={20} />
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>

            <footer className="mt-8 text-slate-400 text-xs font-medium flex gap-4 opacity-50">
                <span>Curriculum 1.0</span>
                <span>•</span>
                <span>20 Questions per Lesson</span>
            </footer>
        </div>
    );
}