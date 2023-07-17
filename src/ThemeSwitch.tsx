import { ColorScheme, SegmentedControl } from '@mantine/core';

interface ThemeSwitchProps {
    colorScheme: ColorScheme,
    setColorScheme: (colorScheme: ColorScheme) => void,
}

export default function ThemeSwitch({ colorScheme, setColorScheme }: ThemeSwitchProps) {
    return (
        <SegmentedControl
            value={colorScheme}
            data={['light', 'dark']}
            onChange={setColorScheme}
        />
    );
}
