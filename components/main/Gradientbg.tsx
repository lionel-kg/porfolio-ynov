import React, { ReactNode } from "react";

interface GradientBgProps {
  children: ReactNode;
}

const GradientBg: React.FC<GradientBgProps> = ({ children }) => {
  return <div className="gradient-bg">{children}</div>;
};

export default GradientBg;
