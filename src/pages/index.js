import HomeBanner from "@/components/home/banner";
import HomeIntro from "@/components/home/intro";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col max-w-full m-auto rounded-xl bg-neutral">
        <HomeBanner />
        <div className="p-5">
          <HomeIntro />
        </div>
      </div>
    </main>
  )
}
