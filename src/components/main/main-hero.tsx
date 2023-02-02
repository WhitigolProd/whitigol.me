import React from 'react';

export default function MainHero() {
    return (
        // Hero Section that tells the user about me. Using TailwindCSS and NextUI
        <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-b from-black to-gray-900">
            <div className="flex flex-col items-center justify-center w-full h-1/2">
                <h1 className="text-5xl font-bold text-white">
                    Hi, I'm <span className="text-blue-500">Jared</span>
                </h1>
                <h2 className="text-2xl font-bold text-white">
                    I'm a{' '}
                    <span className="text-blue-500">
                        Frontend Web Developer
                    </span>
                </h2>
            </div>
        </div>
    );
}
