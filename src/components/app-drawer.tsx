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
import Contacts from './contacts';

const menus = [
  {
    title: 'Introduction',
    href: '#intro',
    target: '',
  },
  {
    title: 'About me',
    href: '#about',
    target: '',
  },
  {
    title: 'Personal Skills',
    href: '#personalSkills',
    target: '',
  },
  {
    title: 'Work Experiences',
    href: '#workExperiences',
    target: '',
  },
  {
    title: 'Education',
    href: '#education',
    target: '',
  },
  {
    title: 'Projects',
    href: '#projects',
    target: '',
  },
  {
    title: 'Available on GitHub',
    href: 'https://github.com/maxchu92/maxchu92-portfolio/',
    target: '_blank',
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
                    <Link target={menu.target} href={menu.href}>
                      {menu.title}
                    </Link>
                    {/* <Separator /> */}
                  </Fragment>
                ))}
              </div>
            </ScrollArea>
            <div className="p-4 flex flex-col gap-2 items-center">
              <p className="text-xs text-muted-foreground">Contact me via</p>
              <Contacts />
            </div>
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
