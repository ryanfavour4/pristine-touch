/* eslint-disable @typescript-eslint/no-explicit-any */
// app/course/[id]/page.tsx
"use client";
import { useState } from "react";

const courses = [
    {
        id: "nextjs-101",
        title: "Modern Web Development with Next.js",
        lessons: [
            {
                title: "Introduction to App Router",
                videoUrl: "https://www.youtube.com/embed/wm5gMKuwSYk", // Placeholder
                quiz: [
                    {
                        text: "Which folder is the entry point for Next.js App Router?",
                        options: [
                            { label: "src/pages", isCorrect: false },
                            { label: "app/", isCorrect: true },
                            { label: "public/", isCorrect: false },
                            { label: "components/", isCorrect: false },
                        ],
                    },
                ],
            },
            {
                title: "Server Components vs Client Components",
                videoUrl: "https://www.youtube.com/embed/rG_UleS6SVs",
                quiz: [
                    {
                        text: "By default, are components in the 'app' directory Server or Client components?",
                        options: [
                            { label: "Client Components", isCorrect: false },
                            { label: "Server Components", isCorrect: true },
                        ],
                    },
                ],
            },
        ],
    },
];

export default function CoursePage({ params }: { params: { id: string } }) {
    const course = courses.find((c) => c.id === params.id);
    const [activeLessonIdx, setActiveLessonIdx] = useState(0);
    const [showQuiz, setShowQuiz] = useState(false);

    const currentLesson = course?.lessons[activeLessonIdx];

    return (
        <div className="flex h-screen bg-slate-50 dark:bg-slate-950">
            {/* Sidebar - Navigation */}
            <CourseSidebar
                lessons={course?.lessons}
                activeIdx={activeLessonIdx}
                onSelect={(idx: any) => {
                    setActiveLessonIdx(idx);
                    setShowQuiz(false);
                }}
            />

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto p-6 lg:p-10">
                <div className="max-w-5xl mx-auto space-y-6">
                    <header>
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                            {currentLesson?.title}
                        </h1>
                        <p className="text-slate-500 mt-2">
                            {course?.title} • Module {activeLessonIdx + 1}
                        </p>
                    </header>

                    {/* Video or Quiz Toggle */}
                    <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl transition-all">
                        {!showQuiz ? (
                            <VideoPlayer
                                url={currentLesson?.videoUrl}
                                onEnded={() => setShowQuiz(true)}
                            />
                        ) : (
                            <Quiz
                                questions={currentLesson?.quiz}
                                onComplete={() => setShowQuiz(false)}
                            />
                        )}
                    </div>

                    <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                        <button
                            onClick={() => setShowQuiz(!showQuiz)}
                            className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
                        >
                            {showQuiz ? "Back to Video" : "Take Quiz"}
                        </button>
                        <button
                            className="px-6 py-2 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                            onClick={() =>
                                setActiveLessonIdx((prev) =>
                                    Math.min(
                                        prev + 1,
                                        course?.lessons.length || 0 - 1,
                                    ),
                                )
                            }
                        >
                            Next Lesson →
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

// components/CourseSidebar.tsx
export function CourseSidebar({
    lessons,
    activeIdx,
    onSelect,
}: {
    lessons: any;
    activeIdx: any;
    onSelect: any;
}) {
    return (
        <aside className="w-80 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-y-auto hidden md:block">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                <h2 className="font-bold text-xl dark:text-white">
                    Course Content
                </h2>
            </div>
            <nav className="p-2">
                {lessons.map((lesson: any, idx: any) => (
                    <button
                        key={idx}
                        onClick={() => onSelect(idx)}
                        className={`w-full text-left p-4 rounded-lg mb-1 transition-colors ${
                            activeIdx === idx
                                ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-semibold"
                                : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-mono opacity-50">
                                {String(idx + 1).padStart(2, "0")}
                            </span>
                            <span className="truncate">{lesson.title}</span>
                        </div>
                    </button>
                ))}
            </nav>
        </aside>
    );
}

export function Quiz({
    questions,
    onComplete,
}: {
    questions: any;
    onComplete: any;
}) {
    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) setScore(score + 1);

        if (currentQ + 1 < questions.length) {
            setCurrentQ(currentQ + 1);
        } else {
            setFinished(true);
        }
    };

    if (finished) {
        return (
            <div className="h-full flex flex-col items-center justify-center bg-indigo-900 text-white p-8">
                <h2 className="text-4xl font-bold mb-4">Quiz Complete! 🎉</h2>
                <p className="text-xl opacity-90">
                    You scored {score} out of {questions.length}
                </p>
                <button
                    onClick={onComplete}
                    className="mt-8 px-8 py-3 bg-white text-indigo-900 rounded-full font-bold hover:scale-105 transition"
                >
                    Return to Lesson
                </button>
            </div>
        );
    }

    return (
        <div className="h-full bg-slate-900 p-10 flex flex-col justify-center">
            <span className="text-indigo-400 font-mono text-sm mb-2">
                Question {currentQ + 1} of {questions.length}
            </span>
            <h3 className="text-2xl text-white font-semibold mb-8">
                {questions[currentQ].text}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[currentQ].options.map((opt: any, i: any) => (
                    <button
                        key={i}
                        onClick={() => handleAnswer(opt.isCorrect)}
                        className="p-4 bg-slate-800 border border-slate-700 rounded-xl text-left text-slate-200 hover:bg-indigo-600 hover:border-indigo-400 transition"
                    >
                        {opt.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

// components/VideoPlayer.tsx
export function VideoPlayer({ url }: { url: any; onEnded: any }) {
    return (
        <div className="relative w-full h-full bg-black">
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={url}
                title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            {/* Note: Detecting 'onEnded' via iframe requires the YouTube IFrame API. 
         For a simple version, we'll rely on the user clicking "Take Quiz" 
         under the video for now.
      */}
        </div>
    );
}
