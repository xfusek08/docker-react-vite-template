import { ColorScheme, MantineProvider, Text } from '@mantine/core';
import { useState } from 'react';
import ThemeSwitch from './ThemeSwitch';

export default function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
    return (
        <MantineProvider
            withNormalizeCSS
            withGlobalStyles
            theme={{
                colorScheme,
                globalStyles: (theme) => ({
                    body: {
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.white,
                    },
                }),
            }}
        >
            <Text>Welcome to Mantine!</Text>
            <ThemeSwitch colorScheme={colorScheme} setColorScheme={setColorScheme} />
        </MantineProvider>
    );
}
