import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

interface Props {
    children: React.ReactNode;
}

export default function Providers(props: Props) {
    return (
        <MantineProvider defaultColorScheme="dark">
            <Notifications />
            {props.children}
        </MantineProvider>
    );
}
