import { MantineProvider, Text } from '@mantine/core';

export default function App() {
    return (
        <MantineProvider withNormalizeCSS withGlobalStyles>
            <Text>Welcome to Mantine!</Text>
        </MantineProvider>
    );
}
