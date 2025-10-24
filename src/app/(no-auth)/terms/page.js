import Link from 'next/link'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  style: 'normal',
  weight: ['400', '500', '600'],
  display: 'swap',
  fallback: ['sans-serif'],
})

export default async function Page() {
  return (
    <main
      className={`z-20 mt-28 md:mb-10 md:mt-32 w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] h-full min-h-screen px-8 py-10 bg-white text-Black flex flex-col items-center gap-4 md:rounded-xl`}
    >
      <div className=" w-full lg:max-w-4xl flex flex-col items-center gap-8">
        <section className="w-full flex flex-col gap-4">
          <TitleStyled>Términos y Condiciones</TitleStyled>
          <ParagraphStyled>
            Id minim incididunt aliquip id. Ea dolor occaecat enim ea commodo
            esse minim anim commodo amet Lorem dolor in eu. Mollit elit laboris
            sint qui labore dolore exercitation officia esse consequat.
          </ParagraphStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>EL SERVICIO: EPA MUJER</Title2Styled>
          <ParagraphStyled>
            Id minim incididunt aliquip id. Ea dolor occaecat enim ea commodo
            esse minim anim commodo amet Lorem dolor in eu. Mollit elit laboris
            sint qui labore dolore exercitation officia esse consequat.
          </ParagraphStyled>
          <ParagraphStyled>
            Id minim incididunt aliquip id. Ea dolor occaecat enim ea commodo
            esse minim anim commodo amet Lorem dolor in eu. Mollit elit laboris
            sint qui labore dolore exercitation officia esse consequat.
          </ParagraphStyled>
          <ParagraphStyled>
            Al enviar la palabra{' '}
            <span className=" font-semibold">
              ALTA, o el comando que se comunique para esta acción, al número
              123
            </span>
            , el cliente recibirá un SMS con el enlace e instrucciones de acceso
            al portal, precio del servicio, frecuencia de cobro y un pin para
            acceder a la opción de entretenimiento. Una vez que ingresa, podrá
            disfrutar sin límites de todo el contenido que ofrece Team Gamers.
            Los cargos por navegación y transmisión de datos no están incluidos
            en el servicio. Los usuarios también podrán suscribirse a través de
            la página web de Movistar, en la sección opciones de entretenimiento
            digital, seleccionando la opción de Team Gamers, a través del URL
            propio del servicio{' '}
            <Link
              className=" text-sky-600 "
              href="http://ve.digitel.epamujer.club/"
              target="_blank"
            >
              http://ve.digitel.epamujer.club/
            </Link>{' '}
            o desde cualquier otra sección que la operadora disponga para ello.
          </ParagraphStyled>
          <ParagraphStyled>
            El Servicio es prestado mediante la modalidad de suscripción de
            renovación diaria, es decir, en forma continua desde la activación
            del servicio por parte del usuario, y hasta el momento en el que
            este desea solicitar la desactivación del servicio. Para darse de
            baja el usuario debe enviar la palabra{' '}
            <span className=" font-semibold">BAJA al número 123</span> y este
            recibirá un mensaje de confirmación.
          </ParagraphStyled>
          <ParagraphStyled>
            Eiusmod quis ex nostrud voluptate Lorem. Dolor veniam fugiat
            proident ullamco proident proident excepteur cupidatat. Sunt ipsum
            ut irure aliquip magna proident fugiat. Voluptate cupidatat ea est
            veniam do culpa incididunt culpa pariatur incididunt ad culpa magna
            tempor. Sint reprehenderit non nostrud et in proident velit sit. Id
            nisi dolor esse proident mollit nulla deserunt.
          </ParagraphStyled>
          <ParagraphStyled>
            Eiusmod quis ex nostrud voluptate Lorem. Dolor veniam fugiat
            proident ullamco proident proident excepteur cupidatat. Sunt ipsum
            ut irure aliquip magna proident fugiat. Voluptate cupidatat ea est
            veniam do culpa incididunt culpa pariatur incididunt ad culpa magna
            tempor. Sint reprehenderit non nostrud et in proident velit sit. Id
            nisi dolor esse proident mollit nulla deserunt.
          </ParagraphStyled>
          <ParagraphStyled>
            Eiusmod quis ex nostrud voluptate Lorem. Dolor veniam fugiat
            proident ullamco proident proident excepteur cupidatat. Sunt ipsum
            ut irure aliquip magna proident fugiat. Voluptate cupidatat ea est
            veniam do culpa incididunt culpa pariatur incididunt ad culpa magna
            tempor. Sint reprehenderit non nostrud et in proident velit sit. Id
            nisi dolor esse proident mollit nulla deserunt.
          </ParagraphStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>Alcance del servicio</Title2Styled>
          <ParagraphStyled>
            Eiusmod quis ex nostrud voluptate Lorem. Dolor veniam fugiat
            proident ullamco proident proident excepteur cupidatat. Sunt ipsum
            ut irure aliquip magna proident fugiat. Voluptate cupidatat ea est
            veniam do culpa incididunt culpa pariatur incididunt ad culpa magna
            tempor. Sint reprehenderit non nostrud et in proident velit sit. Id
            nisi dolor esse proident mollit nulla deserunt.
          </ParagraphStyled>
          <ParagraphStyled>
            Eiusmod quis ex nostrud voluptate Lorem. Dolor veniam fugiat
            proident ullamco proident proident excepteur cupidatat. Sunt ipsum
            ut irure aliquip magna proident fugiat. Voluptate cupidatat ea est
            veniam do culpa incididunt culpa pariatur incididunt ad culpa magna
            tempor. Sint reprehenderit non nostrud et in proident velit sit. Id
            nisi dolor esse proident mollit nulla deserunt.
          </ParagraphStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>Condiciones de uso. Propiedad intelectual</Title2Styled>
          <ParagraphStyled>
            Eiusmod quis ex nostrud voluptate Lorem. Dolor veniam fugiat
            proident ullamco proident proident excepteur cupidatat. Sunt ipsum
            ut irure aliquip magna proident fugiat. Voluptate cupidatat ea est
            veniam do culpa incididunt culpa pariatur incididunt ad culpa magna
            tempor. Sint reprehenderit non nostrud et in proident velit sit. Id
            nisi dolor esse proident mollit nulla deserunt.
          </ParagraphStyled>
          <ParagraphStyled>
            Eiusmod quis ex nostrud voluptate Lorem. Dolor veniam fugiat
            proident ullamco proident proident excepteur cupidatat. Sunt ipsum
            ut irure aliquip magna proident fugiat. Voluptate cupidatat ea est
            veniam do culpa incididunt culpa pariatur incididunt ad culpa magna
            tempor. Sint reprehenderit non nostrud et in proident velit sit. Id
            nisi dolor esse proident mollit nulla deserunt.
          </ParagraphStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>Responsabilidad</Title2Styled>
          <ParagraphStyled>
            La responsabilidad y obligación de pago por el envío o recepción de
            mensajes de texto relacionados a la Suscripción será responsabilidad
            del titular del número móvil utilizado a tal fin, y no podrá
            oponerse por{' '}
            <span className=" font-semibold">
              pérdida, hurto, robo, extravío o avería de dicho equipo móvil
            </span>
            , salvo denuncia previa a cualquier envío o recepción de estos
            mensajes, efectuada a la Operadora través de los centros de atención
            de esta última.
          </ParagraphStyled>
          <ParagraphStyled>
            El Prestador y la Operadora no podrán ser considerados responsables
            por ningún daño o perjuicio ocasionado o que pudiera ocasionarse a
            los Usuarios o a terceros, en sus personas o bienes, por la
            contratación o utilización del Servicio. Tampoco serán responsables
            en caso de insatisfacción por el contenido del servicio. Para estos
            casos, los usuarios serán libres de darse de baja, enviando a
            palabra <span className=" font-semibold">BAJA al número 335</span>.
          </ParagraphStyled>
          <ParagraphStyled>
            Eiusmod quis ex nostrud voluptate Lorem. Dolor veniam fugiat
            proident ullamco proident proident excepteur cupidatat. Sunt ipsum
            ut irure aliquip magna proident fugiat. Voluptate cupidatat ea est
            veniam do culpa incididunt culpa pariatur incididunt ad culpa magna
            tempor. Sint reprehenderit non nostrud et in proident velit sit. Id
            nisi dolor esse proident mollit nulla deserunt.
          </ParagraphStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>Jurisdicción</Title2Styled>
          <ParagraphStyled>
            Eiusmod quis ex nostrud voluptate Lorem. Dolor veniam fugiat
            proident ullamco proident proident excepteur cupidatat. Sunt ipsum
            ut irure aliquip magna proident fugiat. Voluptate cupidatat ea est
            veniam do culpa incididunt culpa pariatur incididunt ad culpa magna
            tempor. Sint reprehenderit non nostrud et in proident velit sit. Id
            nisi dolor esse proident mollit nulla deserunt.
          </ParagraphStyled>
          <ParagraphStyled>
            Eiusmod quis ex nostrud voluptate Lorem. Dolor veniam fugiat
            proident ullamco proident proident excepteur cupidatat. Sunt ipsum
            ut irure aliquip magna proident fugiat. Voluptate cupidatat ea est
            veniam do culpa incididunt culpa pariatur incididunt ad culpa magna
            tempor. Sint reprehenderit non nostrud et in proident velit sit. Id
            nisi dolor esse proident mollit nulla deserunt.
          </ParagraphStyled>
        </section>
      </div>
    </main>
  )
}

const TitleStyled = ({ children }) => (
  <h1
    className={
      poppins.className +
      ' w-full uppercase italic font-bold pointer-events-none cursor-default text-[1.8rem] leading-[2rem] md:text-3xl lg:text-4xl text-Black text-left  '
    }
  >
    {children}
  </h1>
)

const Title2Styled = ({ children }) => (
  <h2
    className={
      poppins.className +
      ` w-screen md:max-w-full italic font-semibold uppercase  text-Black text-xl md:text-lg lg:text-2xl`
    }
  >
    {children}
  </h2>
)

const ParagraphStyled = ({ children }) => (
  <p
    className={
      poppins.className +
      ' font-normal text-sm md:text-base lg:text-lg text-Black'
    }
  >
    {children}
  </p>
)
