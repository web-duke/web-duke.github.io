import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface ScrolledContextValue {
  scrolled: boolean;
}

const ScrolledContext = createContext<ScrolledContextValue>({
  scrolled: false,
});

export const useScrolled = () => useContext(ScrolledContext);

interface ScrolledProviderProps {
  children: ReactNode;
}

export const ScrolledProvider = ({ children }: ScrolledProviderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled((prev) => prev || window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ScrolledContext.Provider value={{ scrolled }}>
      {children}
    </ScrolledContext.Provider>
  );
};
