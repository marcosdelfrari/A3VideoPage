import Card from "@/components/card";
import Controls from "@/components/controls";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Video from "@/components/video";

export default function Home() {
  return (
    <main className="max-w-[1440px] m-auto min-h-[100vh] flex flex-col justify-center">
      <div className="">
        <Header></Header>
        <Controls></Controls>
      </div>
    </main>
  );
}
