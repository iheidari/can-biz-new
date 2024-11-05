import React from "react";

interface IProps extends React.SVGProps<SVGSVGElement> {
  children: React.ReactNode;
}

const Svg = (props: IProps) => {
  const { children, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 24 24"
      fill={"white"}
      {...rest}
    >
      {children}
    </svg>
  );
};

export default Svg;
