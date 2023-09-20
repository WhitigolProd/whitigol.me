'use client';

import { AppShell } from '@mantine/core';
import { IconClock, IconHeartCode } from '@tabler/icons-react';
import Header from './Header';
import { useHeader } from '@/hooks/useHeader';
import { useLocalStorage } from '@mantine/hooks';

interface Props {
    children: React.ReactNode;
}

export default function Shell(props: Props) {
    const { navOpen } = useHeader();
    const [progressDismissed, setProgressDismissed] = useLocalStorage({
        key: 'w-progress-dismissed',
        defaultValue: false,
    });

    return (
        <AppShell
            layout="default"
            padding={'md'}
            header={{
                height: 60,
            }}
            footer={{
                height: 60,
            }}
        >
            <AppShell.Header>
                <Header />
            </AppShell.Header>
            <AppShell.Main>{props.children}</AppShell.Main>
            <AppShell.Footer className="flex items-center justify-center gap-1">
                <span>Created with</span>
                <IconHeartCode size={16} className="text-rose-500" />
                <span>&</span>
                <IconClock size={16} className="text-sky-500" />
                <span>by Whitigol.</span>
            </AppShell.Footer>
        </AppShell>
    );
}
