import HomeBanner from "@/components/home/banner";
import HomeDescribe from "@/components/home/describe";
import HomeIntro from "@/components/home/intro";
import HomeSocials from "@/components/home/socials";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col max-w-full m-auto rounded-xl bg-neutral">
        <HomeBanner />
        <div className="p-5">
          <HomeIntro />
        </div>
        <div className="p-5 pt-0">
          <HomeDescribe />
        </div>
        <div className="p-5 pt-0">
          <HomeSocials />
        </div>
      </div>
    </main>
  )
}
