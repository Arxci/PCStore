import { NextUIProvider } from "@nextui-org/react";

import { Outlet, useHref, useNavigate } from "react-router-dom";

import { SiteHeader } from "./components/layout/header/site-header";
import { ThemesProvider } from "./lib/themes-provider";

function App() {
  const navigate = useNavigate();

  return (
    <main>
      <ThemesProvider>
        <NextUIProvider navigate={navigate} useHref={useHref}>
          <SiteHeader />
          <Outlet />
        </NextUIProvider>
      </ThemesProvider>
    </main>
  );
}

export default App;
