'use client';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import React from 'react';

const theme = createTheme({
    type: 'dark',
});

export default function NextUIWrapper(props: { children: React.ReactNode }) {
    return <NextUIProvider theme={theme}>{props.children}</NextUIProvider>;
}
