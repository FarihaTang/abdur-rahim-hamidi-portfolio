import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import './globals.css';
// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  title: 'Abdur Rahim Hamidi | Climate & Disaster Risk Researcher',
  description:
    'Portfolio of Abdur Rahim Hamidi – Priestley Climate Scholar and DRR researcher focusing on social vulnerability, resilience and flood risk governance.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
