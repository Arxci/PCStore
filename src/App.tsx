import { NextUIProvider } from "@nextui-org/react";

import { Outlet, useHref, useNavigate } from "react-router-dom";

import { SiteHeader } from "./components/layout/header/site-header";
import { ThemesProvider } from "./lib/themes-provider";
import { SiteFooter } from "./components/layout/footer/site-footer";

function App() {
  const navigate = useNavigate();

  return (
    <ThemesProvider>
      <NextUIProvider navigate={navigate} useHref={useHref}>
        <SiteHeader />
        <main>
          <Outlet />
        </main>

        <SiteFooter />
      </NextUIProvider>
    </ThemesProvider>
  );
}

export default App;
