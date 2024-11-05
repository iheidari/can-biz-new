import Link from "next/link";
import React, { Suspense } from "react";

export interface Props {
  title: string;
  slug: string;
  small?: boolean;
}

const Thumb = (props: Props) => {
  const IconComponent =
    iconMapping[props.title] ?? React.lazy(() => import("../icons/Unknown"));

  return (
    <Link
      href={props.slug}
      className="w-32 h-32 border-2 border-white flex flex-col items-center justify-between p-2 transition-all duration-300 hover:w-36 hover:h-36 hover:border-red-500 hover:border-4"
    >
      <Suspense fallback={<div>Loading...</div>}>
        <IconComponent height={64} width={64} />
      </Suspense>
      <div
        className={`text-center ${
          props.small ? "text-l" : "text-2xl"
        } text-white truncate overflow-hidden whitespace-nowrap w-full`}
      >
        {props.title}
      </div>
    </Link>
  );
};

export default Thumb;

export const iconMapping: {
  [key: string]: React.LazyExoticComponent<React.ComponentType<any>>;
} = {
  Art: React.lazy(() => import("../icons/Art")),
  "Health Care": React.lazy(() => import("../icons/HealthCare")),
  Lawyer: React.lazy(() => import("../icons/Lawyer")),
};
