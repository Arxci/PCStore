import { useTheme } from "next-themes";
import { Button, VisuallyHidden, useSwitch } from "@nextui-org/react";
import { Icons } from "../icons";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };

  return (
    <Button
      onClick={handleThemeChange}
      className="flex flex-col gap-2"
      isIconOnly
      variant="faded"
    >
      {theme == "dark" ? <Icons.moon /> : <Icons.sun />}
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
};

export { ThemeToggle };
