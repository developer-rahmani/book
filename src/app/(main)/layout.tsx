import type { ReactNode } from "react";

import MainLayout from "@/libs/design/MainLayout/MainLayout";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return <MainLayout>{children}</MainLayout>;
}
