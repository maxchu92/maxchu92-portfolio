'use client';

import { Menu } from 'lucide-react';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';
import { ThemeModeToggles } from './theme-mode-toggles';
import Contacts from './contacts';
import { Button } from './ui/button';
import menus from '@/data/menus.json';

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
              <DrawerTitle className="text-center">Menu</DrawerTitle>
              <DrawerDescription className="text-center">
                maxchu92 | portfolio
              </DrawerDescription>
            </DrawerHeader>

            <ScrollArea className="h-[70vh] w-full">
              <div className="p-4 flex flex-col gap-6 text-center">
                {menus.map((menu) => (
                  <DrawerClose key={menu.href} asChild>
                    <Link target={menu.target} href={menu.href}>
                      {menu.title}
                    </Link>
                  </DrawerClose>
                ))}
              </div>
              <div className="p-4 flex flex-col gap-2 items-center">
                <p className="text-xs text-muted-foreground">Contact me via</p>
                <Contacts />
              </div>
              <div className="p-4 flex flex-col gap-2 items-center">
                <p className="text-xs text-muted-foreground">Switch mode</p>
                <ThemeModeToggles />
              </div>
              <div className="p-4 flex flex-col gap-2 items-center underline">
                <Button
                  type="button"
                  variant="link"
                  className="text-primary-foreground"
                  asChild
                >
                  <Link
                    target="_blank"
                    href="https://github.com/maxchu92/maxchu92-portfolio/"
                  >
                    Available on Github
                  </Link>
                </Button>
              </div>
            </ScrollArea>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
