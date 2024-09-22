import { NextUIProvider } from "@nextui-org/react";

import { Outlet, useHref, useNavigate } from "react-router-dom";

import { SiteHeader } from "./components/layout/navigation/site-header";

function App() {
  const navigate = useNavigate();

  return (
    <main>
      <NextUIProvider navigate={navigate} useHref={useHref}>
        <SiteHeader />
        <Outlet />
      </NextUIProvider>
    </main>
  );
}

export default App;
