'use client';

import * as React from 'react';
import {
  Menu,
  Minus,
  Plus,
  Bold,
  Italic,
  Underline,
  SunMoon,
  Sun,
  Moon,
} from 'lucide-react';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { ThemeModeMenu } from './theme-mode-menu';
import { ThemeModeToggles } from './theme-mode-toggles';

const menus = [
  {
    title: 'Introduction',
    href: '#intro',
  },
  {
    title: 'About me',
    href: '#about',
  },
  {
    title: 'Contacts',
    href: '#contacts',
  },
];

export default function AppDrawer(props: { className?: string }) {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <div className={props.className}>
      <Drawer>
        <DrawerTrigger asChild>
          <Menu />
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full">
            <DrawerHeader>
              <DrawerTitle>Menu</DrawerTitle>
              <DrawerDescription>maxchu92 | portfolio</DrawerDescription>
            </DrawerHeader>

            <ScrollArea className="h-72 w-full">
              <div className="p-4 flex flex-col gap-6">
                {menus.map((menu) => (
                  <React.Fragment key={menu.href}>
                    <Link href={menu.href}>{menu.title}</Link>
                    {/* <Separator /> */}
                  </React.Fragment>
                ))}
              </div>
            </ScrollArea>
            <div className="p-4 flex flex-col gap-2 items-center">
              <p className="text-xs text-muted-foreground">Switch mode</p>
              <ThemeModeToggles />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
