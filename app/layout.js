import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "@/app/_components/Header";
import { ReservationProvider } from "@/app/_components/ReservationContext";
import { Analytics } from "@vercel/analytics/react";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the hearft of the Italian Dolomites, surrounded by beautiful mountains and dark forest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${josefin.className} flex min-h-screen flex-col bg-primary-950 text-primary-100`}
      >
        <Header />
        <div className="grid flex-1 px-8 py-12">
          <main className="mx-auto w-full max-w-7xl">
            <ReservationProvider>
              {children}
              <Analytics />
            </ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
