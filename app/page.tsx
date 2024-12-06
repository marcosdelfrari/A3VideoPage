import Card from "@/components/card";
import Controls from "@/components/controls";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Video from "@/components/video";

export default function Home() {
  return (
    <main className="max-w-[1440px]">
      <div className="">
        <Header></Header>
        <Controls></Controls>
      </div>
    </main>
  );
}
