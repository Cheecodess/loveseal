import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // <main
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    // >

    <div>
      <div className="bg-hero bg-no-repeat bg-top-center bg-cover bg-green fixed -z-1 inset-0"></div>
      <div className="relative flex pt-8"></div>
    </div>

    // </main>
  );
}
