'use client';

import { Menu } from 'lucide-react';

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';
import { ThemeModeToggles } from './theme-mode-toggles';
import { Fragment } from 'react';

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
                  <Fragment key={menu.href}>
                    <Link href={menu.href}>{menu.title}</Link>
                    {/* <Separator /> */}
                  </Fragment>
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
