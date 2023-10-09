import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-24">
      <Nav />
      <section className="py-12 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl font-bold">Shadcn is awesome</h1>
        <p className="text-2xl text-muted-foreground">
          {" "}
          Hand-picked themes that you can copy amd paste into your apps.
        </p>
      </section>
      <div className="flex gap-6 items-center justify-center">
        <Button>Learn more</Button>
        <Button>Enroll now</Button>
      </div>
    </main>
  );
}
