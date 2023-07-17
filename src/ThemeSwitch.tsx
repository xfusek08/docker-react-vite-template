import {
    ColorScheme, Group, SegmentedControl, Text,
} from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { FiMoon, FiSun } from 'react-icons/fi';

interface ThemeSwitchProps {
    colorScheme: ColorScheme,
    setColorScheme: (colorScheme: ColorScheme) => void,
}

export default function ThemeSwitch({ colorScheme, setColorScheme }: ThemeSwitchProps) {
    const { t } = useTranslation();
    return (
        <SegmentedControl
            value={colorScheme}
            data={[
                {
                    value: 'light',
                    label: (
                        <Group noWrap>
                            <FiSun />
                            <Text>{t`Light`}</Text>
                        </Group>
                    ),
                },
                {
                    value: 'dark',
                    label: (
                        <Group noWrap>
                            <FiMoon />
                            <Text>{t`Dark`}</Text>
                        </Group>
                    ),
                },
            ]}
            onChange={setColorScheme}
        />
    );
}
