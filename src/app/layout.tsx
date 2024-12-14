import "./globals.css";
import { Amiri, Poppins } from "next/font/google";
import { Providers } from "@/store/Providers"; 

const amiri = Amiri({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Dental Clinic",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${amiri.className} ${poppins.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
