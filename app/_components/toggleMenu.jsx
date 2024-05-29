import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../../@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 p-2 dark:bg-gray-200 bg-blue/70 rounded-full transition-all duration-300"
    >
      {theme === "dark" ? (
        <Sun className="text-yellow-500" />
      ) : (
        <Moon className="text-blue-500" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
