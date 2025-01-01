import { ThemeProvider } from '@/components/theme-provider';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function MultiProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider>{children}</TooltipProvider>
        <SpeedInsights />
      </ThemeProvider>
    </>
  );
}
