"use client";

import { Button } from "@monorepo/ui";
import { useEffect, useState } from "react";

export default function Home() {
  const [test, setTest] = useState<string>("test loading...");
  const [test2, setTest2] = useState<string>("test2 loading...");

  const getTestData = async () => {
    const res = await fetch("/api/test?test=1234", {
      method: "GET",
    });
    const data = await res.json();
    setTest(data.message);
  };

  const postTestData = async () => {
    const res = await fetch("/api/test", {
      method: "POST",
      body: JSON.stringify({ name: "JHWAN" }),
    });
    const data = await res.json();
    setTest2(data.youSent);
  };

  const getCoinData = async () => {
    const res = await fetch("/api/coinPrice", {
      method: "POST",
      body: JSON.stringify({ symbol: "BTC" }),
    });
    const data = await res.json();
    console.log(data.price);
  };

  useEffect(() => {
    getTestData();
    postTestData();
    getCoinData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
        <div className="space-y-4">
          <div className="space-x-4">
            <Button onClick={() => console.log("Primary clicked")}>
              {test}
            </Button>
            <Button
              variant="secondary"
              onClick={() => console.log("Secondary clicked")}
            >
              {test2}
            </Button>
          </div>

          <div className="space-x-4">
            <Button size="small">Small Button</Button>
            <Button size="medium">Medium Button</Button>
            <Button size="large">Large Button</Button>
          </div>

          <div className="space-x-4">
            <Button disabled>Disabled Button</Button>
            <Button fullWidth>Full Width Button</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
