import "./globals.css"
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title:
    "EPC & Retrofit Assessment for the Midlands | Certified Energy Expert | Fast & Affordable",
  description:
    "Get your EPC or retrofit assessment in and around Birmingham from a trusted local professional. Fast turnaround, expert guidance, and affordable pricing on all energy services.",
  icons: {
    icon: "/assets/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
