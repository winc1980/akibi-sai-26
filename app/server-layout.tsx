import { ReactNode } from "react";
import { ClientLayout } from "./client-layout";

import imageRegistry from "@/public/webp/registry.json";
import * as v from "valibot";

const schema = v.array(
  v.tuple([
    v.pipe(v.string(), v.url()),
    v.pipe(v.string(), v.endsWith(".webp")),
  ]),
);

const parsedRegistry = Object.fromEntries(v.parse(schema, imageRegistry));

export default async function ServerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <ClientLayout registry={parsedRegistry}>{children}</ClientLayout>;
}
