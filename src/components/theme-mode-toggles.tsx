'use client';

import * as React from 'react';
import { Moon, SunMoon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export function ThemeModeToggles(props: { className?: string }) {
  const { setTheme, theme } = useTheme();
  console.log(theme);
  return (
    <div className={props.className}>
      <ToggleGroup type="single" defaultValue={theme}>
        <ToggleGroupItem
          value="light"
          aria-label="Toggle light"
          onClick={() => setTheme('light')}
        >
          <Sun className="h-4 w-4" /> Light
        </ToggleGroupItem>
        <ToggleGroupItem
          value="dark"
          aria-label="Toggle dark"
          onClick={() => setTheme('dark')}
        >
          <Moon className="h-4 w-4" /> Dark
        </ToggleGroupItem>
        <ToggleGroupItem
          value="system"
          aria-label="Toggle system"
          onClick={() => setTheme('system')}
        >
          <SunMoon className="h-4 w-4" /> System
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
