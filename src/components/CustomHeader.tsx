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
import { handleContactClick } from '@/handlers/handleContactClick';

const SiteLogo = () => (
  <Link
    className="flex items-center justify-center text-white transition-opacity hover:opacity-90"
    to="/"
  >
    <DevLire />
  </Link>
);

const DesktopNav = ({ items }: { items: NavItem[] }) => {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="gap-1">
        {items.map((item) => (
          <NavigationMenuItem key={item.to || item.text} className="relative">
            {item.children && item.children.length > 0 ? (
              <>
                <NavigationMenuTrigger
                  className={cn(
                    'bg-transparent font-medium text-white transition-all duration-300',
                    'rounded-full border border-transparent px-4 py-2',
                    'hover:border-white/10 hover:bg-white/5 hover:text-emerald-400 hover:shadow-sm hover:backdrop-blur-md',
                    'data-[state=open]:border-white/10 data-[state=open]:bg-white/5 data-[state=open]:text-emerald-400 data-[state=open]:backdrop-blur-md'
                  )}
                >
                  {item.text}
                </NavigationMenuTrigger>

                <NavigationMenuContent
                  className={cn(
                    'left-1/2 mt-2 min-w-[180px] -translate-x-1/2 overflow-hidden',
                    'rounded-2xl border border-white/10 !bg-[#0a0a0a]/60 shadow-2xl !backdrop-blur-xl'
                  )}
                >
                  <ul className="flex min-w-[180px] flex-col space-y-1 p-2">
                    {item.children.map((child) => (
                      <li key={child.to ?? child.text}>
                        <NavigationMenuLink asChild>
                          <Link
                            className={cn(
                              'block w-full rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 outline-none',
                              'text-gray-300 hover:text-emerald-400',
                              'hover:!bg-white/5'
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
              <Link
                className={cn(
                  'cursor-pointer bg-transparent text-sm font-medium text-white transition-all duration-300',
                  'inline-flex items-center justify-center rounded-full border border-transparent px-4 py-2',
                  'hover:border-white/10 hover:bg-white/5 hover:text-emerald-400 hover:shadow-sm hover:backdrop-blur-md',
                  'focus-visible:ring-ring/30 outline-none focus:bg-white/5 focus-visible:ring-3 focus-visible:outline-1'
                )}
                to={item.to ?? '/'}
              >
                {item.text}
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
  const handleMobileContactClick = () => {
    handleContactClick();
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          className="rounded-full text-gray-300 transition-all duration-300 hover:bg-white/5 hover:text-emerald-400 md:hidden"
          size="icon"
          variant="ghost"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        className={cn(
          'flex w-[300px] flex-col p-0 sm:w-[380px]',
          'border-l border-white/10 !bg-[#0a0a0a]/80 shadow-2xl !backdrop-blur-2xl'
        )}
        side="right"
      >
        {/* SHEET HEADER */}
        <SheetHeader className="border-b border-white/10 bg-transparent px-6 pt-8 pb-6">
          <SheetTitle className="sr-only">Navegación principal</SheetTitle>
          <div className="mb-2 flex justify-center">
            <div className="scale-100">
              <SiteLogo />
            </div>
          </div>
          <p className="text-center text-xs font-semibold tracking-wider text-emerald-500/70 uppercase">
            Menú de Navegación
          </p>
        </SheetHeader>

        {/* SHEET NAV */}
        <nav className="custom-scrollbar flex flex-1 flex-col gap-6 overflow-y-auto px-6 py-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              {item.children ? (
                <div className="space-y-3">
                  <h4 className="flex items-center gap-2 text-lg font-bold text-white">
                    {item.text}
                    <span className="ml-2 h-px flex-1 bg-white/10"></span>
                  </h4>

                  <div className="ml-1 grid grid-cols-1 gap-1 border-l border-white/10 pl-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.to ?? child.text}
                        className={cn(
                          'group flex items-center justify-between rounded-xl px-3 py-2.5 text-base font-medium text-gray-300 transition-all duration-300',
                          'hover:bg-white/5 hover:text-emerald-400 hover:shadow-sm hover:backdrop-blur-md'
                        )}
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
                  className={cn(
                    'border-b border-transparent py-2 text-lg font-bold text-white transition-all duration-300',
                    'block w-full hover:border-emerald-500/30 hover:text-emerald-400'
                  )}
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
        <div className="mt-auto space-y-6 border-t border-white/10 bg-transparent p-6">
          <div className="flex flex-col items-center gap-3">
            <Button
              className={cn(
                'w-auto min-w-[160px] rounded-full transition-all duration-300',
                'border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 backdrop-blur-md',
                'hover:border-emerald-400/40 hover:bg-emerald-500/20 hover:text-emerald-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]'
              )}
              onClick={handleMobileContactClick}
            >
              Contáctame
            </Button>
          </div>

          <div className="flex justify-center gap-4">
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
                className={cn(
                  'group flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300',
                  'border border-white/10 bg-white/5 backdrop-blur-md',
                  'hover:border-emerald-500/40 hover:bg-emerald-500/20'
                )}
                href={social.href}
                target="_blank"
              >
                <img
                  alt={social.label}
                  className="h-5 w-5 object-contain opacity-70 brightness-0 invert filter transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/5 shadow-lg shadow-black/20 backdrop-blur-xl backdrop-saturate-150">
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
            className={cn(
              'hidden rounded-full transition-all duration-300 md:flex',
              'border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 backdrop-blur-md',
              'hover:border-emerald-400/40 hover:bg-emerald-500/20 hover:text-emerald-300'
            )}
            onClick={handleContactClick}
          >
            Contáctame
          </Button>
          <MobileSheet items={routesList} />
        </div>
      </div>
    </header>
  );
};
