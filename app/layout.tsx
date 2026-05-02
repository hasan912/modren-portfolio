import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "../data/provider";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://www.hasanbaig.me";
const siteName = "Muhammad Hasan Baig - Next.js Developer Portfolio";
const siteDescription = "Experienced Next.js & React Developer from Pakistan specializing in building blazing-fast, responsive, and SEO-optimized web applications. Expert in Next.js 14, React, TypeScript, Tailwind CSS, Node.js, and modern web technologies. Available for freelance projects and full-time opportunities.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Muhammad Hasan Baig",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer Pakistan",
    "Web Developer Karachi",
    "TypeScript Expert",
    "Tailwind CSS Developer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "JavaScript Developer",
    "Freelance Web Developer",
    "Next.js 14",
    "React 18",
    "Portfolio Website",
    "Web Development Services",
    "Responsive Web Design",
    "Modern Web Applications",
    "UI/UX Developer",
    "API Integration",
    "Firebase Developer",
    "Vercel Deployment",
    "SEO Optimization",
    "Performance Optimization",
    "Progressive Web Apps",
    "Pakistan Web Developer",
    "Hire Next.js Developer",
    "React.js Expert",
    "AI Integration Developer",
    "PIAIC Student",
    "Artificial Intelligence Developer",
  ],
  authors: [{ name: "Muhammad Hasan Baig", url: siteUrl }],
  creator: "Muhammad Hasan Baig",
  publisher: "Muhammad Hasan Baig",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Muhammad Hasan Baig - Next.js Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    creator: "@hasanbaig",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "s-bpVlYeZLaApWTGFFzT6Pauv6jr8GU4dlpKhTpsaJc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Hasan Baig",
    url: siteUrl,
    image: `${siteUrl}/profile.jpg`,
    jobTitle: "Next.js Developer | Full Stack Web Developer",
    description: siteDescription,
    sameAs: [
      "https://github.com/hasan912",
      "https://www.linkedin.com/in/muhammadhasanbaig/",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressCountry: "Pakistan",
    },
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Bachelor of Science in Artificial Intelligence (BSAI)",
    },
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Web Development",
      "UI/UX Design",
      "SEO Optimization",
      "Artificial Intelligence",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="canonical" href={siteUrl} />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
