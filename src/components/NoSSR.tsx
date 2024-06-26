import { useEffect, useState } from "react";

export interface NoSSRProps {
  children: React.ReactNode;
}

export const NoSSR: React.FC<NoSSRProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <>{children}</>;
};
