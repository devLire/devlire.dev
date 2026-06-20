import { UserRound } from 'lucide-react';
import { SectionTitle } from '@/components/SectionTitle';
import { CustomCard } from '@/components/CustomCard';

interface Props {
  id?: string;
}

export const AboutMe = ({ id }: Props) => {
  return (
    <section
      className="relative flex w-full scroll-mt-20 items-center justify-center overflow-hidden py-20 text-white md:py-12 2xl:py-32"
      id={id}
    >
      <div className="relative z-10 container mx-auto px-4 lg:px-12">
        <div className="flex flex-col items-center justify-center gap-10">
          <SectionTitle icon={UserRound} text="Sobre mí" />
          <div className="grid max-w-5xl grid-cols-1 justify-items-center gap-2 lg:grid-cols-4">
            <CustomCard className="flex w-full max-w-xl flex-col px-2 py-4 text-center md:max-w-2xl md:px-4 md:py-6 lg:col-span-3">
              <div className="grid h-full justify-between gap-4 font-medium text-white lg:p-8">
                <h3 className="text-xl md:text-5xl">Baruc Alejandria</h3>
                <div className="font-red-hat-display mx-auto text-justify text-base leading-relaxed text-gray-300 md:text-xl">
                  <p>
                    Estudiante de Ing. de Software con IA en el SENATI,
                    actualmente culminé mi 5to ciclo. Apasionado por la
                    programación desde los 14 años, empecé a programar con
                    Python y Java, luego me aventuré al desarrollo Frontend y
                    decidí enfocarme a ello. Me gusta trabajar con TypeScript y
                    React.
                  </p>
                  <p>
                    Soy un desarrollador autodidacta y proactivo, enfocado en
                    crear soluciones eficientes, escalables y con un alto
                    estándar de rendimiento. Me motiva profundamente resolver
                    problemas complejos de arquitectura, migración de código y
                    automatización de procesos. Disfruto del trabajo en equipo,
                    la mejora continua y el aprendizaje constante ante las
                    nuevas tecnologías del ecosistema.
                  </p>
                </div>
              </div>
            </CustomCard>

            <img
              alt="Avatar"
              className="self-center"
              src="/avatar.png"
              width={240}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
