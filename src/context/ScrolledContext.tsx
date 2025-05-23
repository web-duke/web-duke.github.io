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

const ScrolledContext = createContext<ScrolledContextValue | undefined>(
  undefined
);

export const useScrolled = () => {
  const context = useContext(ScrolledContext);
  return context?.scrolled ?? false;
};

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
