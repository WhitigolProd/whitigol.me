'use client';
import NextUIWrapper from '@/components/util/ui-wrapper';
import { useSSR } from '@nextui-org/react';
import './globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isBrowser } = useSSR();
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body className="h-screen">
                {isBrowser && <NextUIWrapper>{children}</NextUIWrapper>}
            </body>
        </html>
    );
}
