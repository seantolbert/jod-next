"use client";

import Link from "next/link";
import React from "react";

function ClientSideRoute({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) {
  console.log(route);

  return (
    <Link
      // target={route[0] == '/' && route.length > 1 ? "" : "_blank"}
      // className={route.length > 1 ? "cursor-pointer" : "cursor-auto"}
      href={route}
    >
      {children}
    </Link>
  );
}
export default ClientSideRoute;
