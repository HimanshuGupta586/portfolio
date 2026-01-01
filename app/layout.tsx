// app/layout.tsx
import type { Metadata } from "next"
import "./globals.css"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Himanshu Gupta | Full-Stack Developer",
  description:
    "Himanshu Gupta - Full-stack developer (MERN, Next.js, TailwindCSS, ShadCN UI). Building modern, interactive and 3D-enhanced web experiences.",
  metadataBase: new URL("https://your-portfolio-domain.vercel.app"),
  openGraph: {
    title: "Himanshu Gupta | Full-Stack Developer",
    description:
      "Portfolio of Himanshu Gupta, a full-stack web developer specializing in MERN, Next.js, TailwindCSS & ShadCN UI.",
    url: "https://your-portfolio-domain.vercel.app",
    siteName: "Himanshu Gupta's Portfolio",
    images: [
      {
        url: "/og-image.png", // create this later in /public
        width: 1200,
        height: 630,
        alt: "Himanshu Gupta Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Gupta | Full-Stack Developer",
    description:
      "Full-stack developer portfolio (MERN, Next.js, TailwindCSS, ShadCN UI).",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
