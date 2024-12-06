import "./globals.css";
import { Montserrat } from "next/font/google"; // Importando apenas o Montserrat
import Image from "next/image";
// Aplicando a fonte Montserrat
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Simple Landing Page",
  description: "Video Page A3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.className} bg-gray-50 text-gray-950 relative dark:bg-[#32794F] dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* Efeito de fundo fixo (não afeta o scroll) */}
        <div
          className="fixed top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
      sm:w-[68.75rem] sm:bg-[#32794F]"
        ></div>
        <div
          className="fixed top-[-4rem] -z-10 left-[-35rem] sm:h-[15.25rem] sm:w-[50rem] h-[5.25rem] w-[42rem] rounded-full sm:blur-[12rem] blur-[3rem]
      bg-[#DDF7E3]"
        ></div>
        <div
          className="fixed bottom-[-4rem] -z-10 right-[-35rem] sm:h-[15.25rem] sm:w-[50rem] h-[5.25rem] w-[42rem] rounded-full sm:blur-[8rem] blur-[3rem]
      bg-[#DDF7E3]"
        ></div>
        <Image
          src="/grid.png"
          alt=""
          width={900}
          height={900}
          className="absolute sm:top-[90px] md:top-0 left-1/2 transform -translate-x-1/2 -z-10"
        />

        {/* Seu conteúdo */}
        {children}
      </body>
    </html>
  );
}
