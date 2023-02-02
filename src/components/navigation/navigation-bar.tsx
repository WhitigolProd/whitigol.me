'use client';
import { Navbar as SrcNav } from '@nextui-org/react';
import React from 'react';
import logo from 'public/img/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const links = [
    {
        href: '/',
        label: 'Home',
        active: 'home',
    },
    {
        href: '/about',
        label: 'About',
        active: 'about',
    },
    {
        href: '/contact',
        label: 'Contact',
        active: 'contact',
    },
    {
        href: '/projects',
        label: 'Projects',
        active: 'projects',
    },
    {
        href: '/resume',
        label: 'Resume',
        active: 'resume',
    },
];

interface activeProps {
    active: 'home' | 'about' | 'contact' | 'projects' | 'resume';
}

export default function Navbar(props: { active?: activeProps['active'] }) {
    return (
        <SrcNav variant={'sticky'} isBordered>
            <SrcNav.Brand>
                <SrcNav.Content>
                    <SrcNav.Link href="/">
                        <Image src={logo} alt="Logo" width={40} height={40} />
                    </SrcNav.Link>
                </SrcNav.Content>
            </SrcNav.Brand>
            <SrcNav.Content
                variant="highlight"
                activeColor={'default'}
                enableCursorHighlight
                hideIn={'xs'}
            >
                {links.map((link) => (
                    <SrcNav.Link
                        key={link.href}
                        href={link.href}
                        isActive={link.active === props.active}
                    >
                        {link.label}
                    </SrcNav.Link>
                ))}
            </SrcNav.Content>
            <SrcNav.Toggle showIn={'xs'} />
            <SrcNav.Collapse>
                {links.map((link, index) => (
                    <SrcNav.CollapseItem
                        key={link.href}
                        isActive={link.active === props.active}
                        activeColor={'default'}
                    >
                        <Link
                            href={link.href}
                            key={link.href}
                            className={
                                link.active !== props.active
                                    ? 'text-white'
                                    : 'text-blue-500'
                            }
                        >
                            {link.label}
                        </Link>
                    </SrcNav.CollapseItem>
                ))}
            </SrcNav.Collapse>
        </SrcNav>
    );
}
