import Image from "next/image";
import Link from "next/link"

export default function HomeIntro() {

    return (
        <>
            <div className="flex w-full">
                <Image src="/images/logo_c.png"
                    width={0}
                    height={0}
                    sizes="40%"
                    style={{ width: '20%', height: 'auto', "maxWidth": '128px', minWidth: '76px' }}
                    alt="logo"
                    priority="true"
                    className="flex-initial sm:ml-5"
                />
                <div className="flex flex-col max-w-full gap-3 m-auto ml-5 align-middle">
                    <h1 className="text-5xl text-left max-md:text-3xl">HACO</h1>
                    <Link href="mailto:jasonytonlinecomeandsee@gmail.com" target="_blank">
                        <p className="opacity-80 hover:opacity-100 max-sm:hidden">
                            jasonytonlinecomeandsee@gmail.com
                        </p>
                        <p className="opacity-80 hover:opacity-100 sm:hidden">
                            jasonytonlinecomeandsee...
                        </p>
                    </Link>
                </div>
                <div className="items-center flex-initial m-auto text-center align-middle max-md:flex-none max-md:hidden">
                    <div className="flex flex-col gap-3">
                        <Link href="mailto:jasonytonlinecomeandsee@gmail.com" className="w-auto px-4 py-3 text-black rounded-lg bg-info" target="_blank">📩 Cooperation</Link>
                        <Link href="https://www.lazco.dev/contact" className="px-4 py-3 text-black rounded-lg bg-success" target="_blank">🗂️ Contact Lazco</Link>
                    </div>
                </div>
            </div>

            <div className="items-center m-auto mt-10 text-center align-middle md:hidden">
                <div className="flex flex-col gap-3">
                    <Link href="mailto:jasonytonlinecomeandsee@gmail.com" className="w-auto px-4 py-3 text-black rounded-lg bg-info" target="_blank">📩 Cooperatione</Link>
                    <Link href="https://www.lazco.dev/contact" className="px-4 py-3 text-black rounded-lg bg-success" target="_blank">🗂️ Contact Lazco</Link>
                </div>
            </div>
        </>
    );
}

