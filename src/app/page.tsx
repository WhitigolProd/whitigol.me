import DevelopmentModal from '@/components/development-modal';
import MainHero from '@/components/main/main-hero';
import Navbar from '@/components/navigation/navigation-bar';
import React from 'react';

export default function Home() {
    return (
        <>
            <DevelopmentModal />
            <div className="h-screen">
                <Navbar active="home" />
                <main className="w-full h-[calc(100%-76px)]">
                    <MainHero />
                </main>
            </div>
        </>
    );
}
