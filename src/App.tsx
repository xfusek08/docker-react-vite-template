import { MantineProvider, Text } from '@mantine/core';

export default function App() {
    return (
        <MantineProvider
            withNormalizeCSS
            withGlobalStyles
            theme={{
                colorScheme: 'dark',
                globalStyles: (theme) => ({
                    body: {
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
                    },
                }),
            }}
        >
            <Text>Welcome to Mantine!</Text>
        </MantineProvider>
    );
}
