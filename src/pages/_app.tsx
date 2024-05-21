import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { api } from "~/utils/api";

import { Analytics } from "@vercel/analytics/react";

import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import "~/styles/globals.css";

import Navbar from "~/components/Navbar";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <ThemeProvider attribute="class">
        <SessionProvider session={session}>
          <Navbar />
          <Component {...pageProps} />
          <Toaster />
        </SessionProvider>
      </ThemeProvider>
      <Analytics />
    </>
  );
};

export default api.withTRPC(MyApp);
