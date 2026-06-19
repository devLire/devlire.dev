import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { routesList } from '@/constants/routes.ts';
import type { NavItem } from '@/constants/routes.ts';
import { DevLire } from './DevLire';

const SiteLogo = () => (
  <Link
    className="flex items-center justify-center transition-opacity hover:opacity-90"
    to="/"
  >
    <DevLire />
  </Link>
);

const DesktopNav = ({ items }: { items: NavItem[] }) => {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem key={item.to || item.text} className="relative">
            {item.children && item.children.length > 0 ? (
              <>
                <NavigationMenuTrigger className="text-muted-foreground hover:text-primary data-[state=open]:text-primary bg-transparent font-medium">
                  {item.text}
                </NavigationMenuTrigger>

                <NavigationMenuContent className="left-1/2 min-w-[180px] -translate-x-1/2">
                  <ul className="min-w-[180px] space-y-1 p-2">
                    {item.children.map((child) => (
                      <li key={child.to ?? child.text}>
                        <NavigationMenuLink asChild>
                          <Link
                            className={cn(
                              'block rounded-md px-3 py-2 text-sm leading-none font-medium no-underline transition-colors outline-none select-none',
                              'text-muted-foreground hover:text-primary focus:text-primary hover:bg-slate-100 focus:bg-slate-100'
                            )}
                            to={child.to ?? '#'}
                          >
                            {child.text}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link to={item.to ?? '/'}>
                <NavigationMenuLink
                  className={cn(
                    'text-muted-foreground hover:text-primary cursor-pointer bg-transparent font-medium'
                  )}
                >
                  {item.text}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const MobileSheet = ({ items }: { items: NavItem[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleContactClick = () => {
    window.open('https://www.linkedin.com/in/baruc-alejandria/', '_blank');
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          className="text-muted-foreground hover:text-primary md:hidden"
          size="icon"
          variant="ghost"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        className="flex w-[300px] flex-col p-0 sm:w-[380px]"
        side="right"
      >
        {/* SHEET HEADER */}
        <SheetHeader className="border-border/40 border-b bg-slate-50/50 px-6 pt-8 pb-6">
          <SheetTitle className="sr-only">Navegación principal</SheetTitle>
          <div className="mb-2 flex justify-center">
            <div className="scale-100">
              <SiteLogo />
            </div>
          </div>
          <p className="text-muted-foreground text-center text-xs font-medium tracking-wider uppercase">
            Menú de Navegación
          </p>
        </SheetHeader>

        {/* SHEET NAV */}
        <nav className="flex flex-1 flex-col gap-6 overflow-y-auto px-6 py-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              {item.children ? (
                <div className="space-y-3">
                  <h4 className="text-foreground flex items-center gap-2 text-lg font-bold">
                    {item.text}
                    <span className="bg-border/60 ml-2 h-px flex-1"></span>
                  </h4>

                  <div className="border-primary/10 ml-1 grid grid-cols-1 gap-2 border-l-2 pl-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.to ?? child.text}
                        className="group text-muted-foreground hover:text-primary flex items-center justify-between rounded-md px-3 py-2 text-base transition-all hover:bg-slate-50"
                        to={child.to ?? '#'}
                        onClick={() => setIsOpen(false)}
                      >
                        {child.text}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  className="text-foreground hover:text-primary hover:border-border border-b border-transparent py-2 text-lg font-bold transition-colors"
                  to={item.to ?? '/'}
                  onClick={() => setIsOpen(false)}
                >
                  {item.text}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* SHEET FOOTER */}
        <div className="border-border/40 mt-auto space-y-6 border-t bg-slate-50/50 p-6">
          <div className="flex flex-col items-center gap-3">
            <Button
              className="w-auto min-w-[160px] rounded-full bg-emerald-600 px-8 text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700"
              onClick={handleContactClick}
            >
              Contáctame
            </Button>
          </div>

          <div className="flex justify-center gap-3">
            {[
              {
                src: '/svgs/linkedin.svg',
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/baruc-alejandria/',
              },
              {
                src: '/svgs/github.svg',
                label: 'GitHub',
                href: 'https://github.com/devLire',
              },
            ].map((social, idx) => (
              <a
                key={idx}
                aria-label={social.label}
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-800 bg-emerald-900 text-emerald-100 transition-all duration-300 hover:bg-emerald-600 hover:text-white"
                href={social.href}
                target="_blank"
              >
                <img
                  alt={social.label}
                  className="h-5 w-5 object-contain brightness-0 grayscale invert filter transition-transform group-hover:scale-110"
                  src={social.src}
                />
              </a>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export const CustomHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/80 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <SiteLogo />
        </div>

        {/* Navegación de escritorio */}
        <div className="hidden md:flex">
          <DesktopNav items={routesList} />
        </div>

        {/* Acciones */}
        <div className="flex items-center gap-4">
          <Button
            className="hidden bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 md:flex"
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/baruc-alejandria/',
                '_blank'
              )
            }
          >
            Contáctame
          </Button>
          <MobileSheet items={routesList} />
        </div>
      </div>
    </header>
  );
};
