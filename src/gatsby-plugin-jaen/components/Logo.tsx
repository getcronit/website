import { Logo } from "@/components/Logo";
import { IconProps } from "@chakra-ui/react";

const LogoComponent: React.FC<IconProps> = (props) => {
  return <Logo {...props} className="h-full w-full py-2" />;
};

export default LogoComponent;
