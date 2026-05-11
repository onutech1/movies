import { ThemeProvider, useTheme } from "next-themes";

export function ColorModeProvider(props) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleColorMode = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return {
    colorMode: resolvedTheme,
    toggleColorMode,
  };
}
