"use client";

import { Button } from '@monorepo/ui';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
        <div className="space-y-4">
          <div className="space-x-4">
            <Button onClick={() => console.log('Primary clicked')}>
              Primary Button
            </Button>
            <Button variant="secondary" onClick={() => console.log('Secondary clicked')}>
              Secondary Button
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
