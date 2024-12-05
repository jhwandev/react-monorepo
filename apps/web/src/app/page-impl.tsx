"use client";

import { Button } from "@atomic/ui";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(true);
  }, []);
  return (
    <>
      {state && <Button>AfterRender</Button>}
      <br />
      <br />
      <Button>Web</Button>
    </>
  );
}
