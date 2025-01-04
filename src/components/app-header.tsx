import * as React from 'react';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { ThemeModeMenu } from './theme-mode-menu';
import AppDrawer from './app-drawer';
import Link from 'next/link';
import Image from 'next/image';
import menus from '@/data/menus.json';
import projects from '@/data/projects.json';
import { ScrollArea } from './ui/scroll-area';

export default function AppHeader() {
  return (
    <>
      <div className="fixed top-0 border-b bg-background w-screen z-50 pr-4">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h2>
              <Link href="/">maxchu92 | portfolio</Link>
            </h2>
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Nagivate</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      {/* <li className="row-span-6">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <PiIcon className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Max Chu | portfolio
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components built with Radix
                              UI and Tailwind CSS.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li> */}
                      {menus.map((menu, i) => (
                        <ListItem
                          key={`menu_${i}`}
                          target={menu.target}
                          href={menu.href}
                          title={menu.title}
                        >
                          {menu.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ScrollArea type="always" className="h-[70vh]">
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {projects
                          .sort((n1, n2) => +n1.yearFrom - +n2.yearFrom)
                          .map((pr, i) => (
                            <ListItem
                              key={`pr_${i}`}
                              title={pr.name}
                              href={`#proj-${pr.key}`}
                            >
                              {pr.description}
                            </ListItem>
                          ))}
                      </ul>
                    </ScrollArea>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    target="_blank"
                    href="https://github.com/maxchu92/maxchu92-portfolio/"
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      target="_blank"
                      className={navigationMenuTriggerStyle()}
                    >
                      Available on GitHub
                      <Image
                        className="dark:invert ml-2"
                        height={20}
                        width={20}
                        src="/icons/github.svg"
                        alt="Available on Github"
                      />
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <AppDrawer className="md:hidden" />
          <div className="hidden md:flex gap-2 items-center">
            {/* <Button type="button" variant="outline" size="icon" asChild>
              <Link
                href="https://github.com/maxchu92/maxchu92-portfolio/"
                target="_blank"
              >
                <Image
                  className="dark:invert"
                  height={20}
                  width={20}
                  src="/icons/github.svg"
                  alt="Available on Github"
                />
              </Link>
            </Button> */}
            <ThemeModeMenu />
          </div>
        </div>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
