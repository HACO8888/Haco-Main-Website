import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <div className="flex flex-col max-w-full m-auto rounded-xl bg-neutral">
        <div className="w-full rounded-xl">
          <Image
            src="/images/banner_t.png"
            alt="banner"
            width={0}
            height={0}
            sizes="100%"
            style={{ width: '100%', height: 'auto' }}
            className="rounded-b-none rounded-xl"
          />
        </div>
        <div className="p-5">
          <div className="flex">
            <Image src="/images/logo_c.png"
              width={0}
              height={0}
              sizes="40%"
              style={{ width: '20%', height: 'auto', "max-width": '128px' }}
              alt="logo"
              priority="true"
              className="flex-initial"
            />
            <div className="flex flex-col max-w-full gap-3 m-auto ml-5 align-middle">
              <h1 className="text-5xl text-left max-md:text-3xl">HACO</h1>
              <Link href="mailto:jasonytonlinecomeandsee@gmail.com" target="_blank">
                <p className="underline opacity-50 decoration-dashed hover:opacity-80 max-sm:hidden">
                  jasonytonlinecomeandsee@gmail.com
                </p>
                <p className="underline opacity-50 decoration-dashed hover:opacity-80 sm:hidden">
                  jasonytonlinecomeandsee......
                </p>
              </Link>
            </div>
            <div className="items-center flex-initial m-auto text-center align-middle max-md:flex-none max-md:hidden">
              <div className="flex flex-col gap-3">
                <button className="w-auto px-4 py-3 text-white rounded-lg bg-info">📩 合作邀約</button>
                <button className="px-4 py-3 text-white rounded-lg bg-success">🗂️ 專案製作</button>
              </div>
            </div>
          </div>
          <div className="items-center m-auto mt-10 text-center align-middle md:hidden">
            <div className="flex flex-col gap-3">
              <button className="w-auto px-4 py-3 text-white rounded-lg bg-info" onClick={() => router.push('mailto:jasonytonlinecomeandsee@gmail.com')}>📩 合作邀約</button>
              <button className="px-4 py-3 text-white rounded-lg bg-success">🗂️ 專案製作</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
