import Image from 'next/image';

import logo from '../../../../public/img/whitigol-prod.png';
import { Burger, Button, Drawer, NavLink, useMantineTheme } from '@mantine/core';
import { Pages, useHeader } from '@/hooks/useHeader';
import Link from 'next/link';
import { useMediaQuery } from '@mantine/hooks';

const menuItems = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'About',
        href: '/about',
    },
    {
        name: 'Projects',
        href: '/projects',
    },
    {
        name: 'Contact',
        href: '/contact',
    },
];

interface Props {}

export default function Header(props: Props) {
    const { navOpen, setNavOpen } = useHeader();
    const theme = useMantineTheme();
    const breakpoint = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);

    return (
        <>
            <div className="mx-2 flex h-full items-center justify-between">
                <Link href="/">
                    <div className="flex items-center justify-center gap-1 pr-3 text-white">
                        <Image src={logo} alt="Whitigol" width={28}></Image>
                        <span className="text-lg font-bold no-underline">Whitigol</span>
                    </div>
                </Link>
                <div
                    className="flex h-full items-center justify-center gap-1"
                    style={{
                        display: breakpoint ? 'flex' : 'none',
                    }}
                >
                    <MenuItems />
                </div>
                <Burger hiddenFrom="sm" opened={navOpen} onClick={() => setNavOpen(!navOpen)} />
            </div>
            <Drawer opened={navOpen} onClose={() => setNavOpen(false)} size="xs" padding="md">
                <div className="flex flex-col gap-5">
                    <MenuItems full />
                </div>
            </Drawer>
        </>
    );
}

function MenuItems(props: { full?: boolean }) {
    const { current, setCurrent, setNavOpen } = useHeader();
    return menuItems.map((item, i) => (
        <Link
            href={item.href}
            key={i}
            className={`${props.full && 'w-full'}`}
            onClick={() => {
                setCurrent(item.name as Pages);
                setNavOpen(false);
            }}
        >
            <Button
                className={`text-sm transition-colors ${current !== item.name && '!text-white hover:!bg-white/20'} ${
                    props.full && '!w-full'
                }`}
                variant={current === item.name ? 'light' : 'transparent'}
                color="blue"
            >
                {item.name}
            </Button>
        </Link>
    ));
}
