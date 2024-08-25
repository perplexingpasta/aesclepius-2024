import Hero2 from "@/components/Hero2";
import dynamic from "next/dynamic";

// const DynamicGrid = dynamic(() => import("@/components/Grid"), { ssr: false });
const DynamicSubscribe = dynamic(() => import("@/components/SubscribeToUs"), {
  ssr: false,
});
const DynamicServices = dynamic(() => import("@/components/Services"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <main>
        <section className="mt-40">
          {/* <DynamicServices /> */}
        </section>
        {/* <section className="relative mb-16 mt-12 border-b-2 border-t-2 md:mb-20 md:mt-40 md:rounded-3xl md:border-2 md:border-black-100">
          <DynamicSubscribe />
        </section> */}
      </main>
    </>
  );
}
