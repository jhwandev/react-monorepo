"use client";

import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sheet = new ServerStyleSheet();

  useServerInsertedHTML(() => sheet.getStyleElement());

  return (
    <html lang="en">
      <body>
        <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>
      </body>
    </html>
  );
}
