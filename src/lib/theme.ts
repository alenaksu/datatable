const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

export const isDarkMode = () => {
  return darkModeMediaQuery.matches;
};

export const onDarkModeChange = (fn: (isDarkMode: boolean) => void) => {
  const onChange = (event: MediaQueryListEvent) => {
    fn(event.matches);
  };
  darkModeMediaQuery.addEventListener('change', onChange);

  return () => {
    darkModeMediaQuery.removeEventListener('change', onChange);
  };
};
