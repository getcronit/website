import { LayoutProps, useAuth } from "@atsnek/jaen";

import { RootLayout } from "@/components/RootLayout";

const Layout: React.FC<LayoutProps> = ({ children, pageProps }) => {
  const auth = useAuth();

  return (
    <div className="h-full bg-neutral-950 text-base antialiased">
      <RootLayout pathname={pageProps.location.pathname}>{children}</RootLayout>
    </div>
  );
};

export default Layout;
