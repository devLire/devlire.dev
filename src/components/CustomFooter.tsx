import { useState } from 'react';
import { Mail, ChevronDown, Briefcase, Code2 } from 'lucide-react';
import { routesList } from '@/constants/routes.ts';
import { Link } from 'react-router';
import { DevLire } from './DevLire';

export const CustomFooter = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (text: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [text]: !prev[text],
    }));
  };

  return (
    <footer className="relative overflow-hidden border-t border-emerald-900/50 bg-emerald-950 font-sans text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* COLUMNA 1: Resumen */}
          <div className="flex flex-col space-y-6 lg:col-span-4">
            <div className="flex animate-pulse cursor-default items-center justify-center gap-3 text-6xl">
              <DevLire />
            </div>
            <p className="max-w-sm text-sm leading-relaxed">
              Desarrollador{' '}
              <span className="font-medium text-emerald-500">Frontend</span>{' '}
              enfocado en construir aplicaciones web y móviles{' '}
              <span className="font-medium text-emerald-500">eficientes, </span>
              <span className="font-medium text-emerald-500">escalables</span> y
              con excelente{' '}
              <span className="font-medium text-emerald-500">
                experiencia de usuario
              </span>
              .
            </p>
          </div>

          {/* COLUMNA 2: EXPLORAR */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
              Explorar
            </h3>
            <ul className="space-y-3">
              {routesList.map((link) => (
                <li key={link.to || link.text}>
                  {link.children ? (
                    <div className="space-y-1">
                      <button
                        className="group flex w-full cursor-pointer items-center justify-between text-left text-sm font-medium text-emerald-200/80 transition-colors hover:text-emerald-400"
                        type="button"
                        onClick={() => toggleSection(link.text)}
                      >
                        {link.text}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            openSections[link.text] ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                          openSections[link.text]
                            ? 'grid-rows-[1fr] opacity-100'
                            : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <ul className="mt-2 mb-2 space-y-2 border-l border-emerald-800 pl-3">
                            {link.children.map((sub) => (
                              <li key={sub.to ?? sub.text}>
                                <Link
                                  className="block py-0.5 text-sm transition-colors hover:text-white"
                                  to={sub.to ?? '#'}
                                >
                                  {sub.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      className="flex w-full py-0.5 text-sm transition-all duration-200 hover:translate-x-1 hover:text-emerald-400"
                      to={link.to ?? '/'}
                    >
                      {link.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3: Tecnologías */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-sm font-semibold tracking-wide uppercase">
              Tecnologías
            </h3>
            <ul className="space-y-3">
              {[
                'React / React Native',
                'Node.js',
                'Typescript',
                'Tailwind CSS',
              ].map((item) => (
                <li key={item} className="text-sm">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 4: CONTACTO */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-sm font-semibold tracking-wide uppercase">
              Contáctame
            </h3>

            <div className="space-y-6">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-emerald-500" />
                    <span className="text-gray-300">contacto@devlire.dev</span>
                  </li>
                  <li>
                    <a
                      className="flex items-center gap-3 text-sm hover:opacity-70"
                      href="https://www.linkedin.com/in/baruc-alejandria/"
                      target="_blank"
                    >
                      <Briefcase className="h-4 w-4 text-emerald-500" />
                      <span className="text-gray-300">LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center gap-3 text-sm hover:opacity-70"
                      href="https://github.com/devLire"
                      target="_blank"
                    >
                      <Code2 className="h-4 w-4 text-emerald-500" />
                      <span className="text-gray-300">GitHub</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
