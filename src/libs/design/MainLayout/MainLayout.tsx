import type { ReactNode } from "react";

import React from "react";

import Navigation from "../Navigation/Navigation";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <main className="mx-auto flex w-full max-w-[1280px] flex-col px-4 py-6 md:px-8">
      <Navigation />
      {children}
    </main>
  );
};

export default MainLayout;
