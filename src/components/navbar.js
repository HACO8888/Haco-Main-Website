import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const router = useRouter();
    const [menuShow, setMenuShow] = useState(false);

    return (
        <>
            <div className="border-white border-b-5 navbar bg-base-100">
                <div className="flex-1">
                    <div className="flex">

                        <button className="text-xl normal-case btn btn-ghost" onClick={() => router.push("/")}>
                            <div className="flex-initial m-auto">
                                <Image src="/images/logo.png" width={40} height={40} alt="logo" priority="true" />
                            </div>
                            <p className="ml-2">Haco Developer</p>
                        </button>
                    </div>
                </div>
                <div className="flex-none">
                    <ul className="px-1 menu menu-horizontal max-md:hidden">
                        {/* <li><button onClick={() => router.push("/")} className="menu-hover">HOME</button></li> */}
                        <li><button onClick={() => router.push("/projects")} className="menu-hover">PROJECTS</button></li>
                        <li><button onClick={() => router.push("/resumes")} className="menu-hover">RESUMES</button></li>
                        <li><button onClick={() => router.push("/contact")} className="menu-hover">CONTACT</button></li>
                        <li><Link href="https://tech.haco.tw/" target="_blank" className="menu-hover">OLD SITE</Link></li>
                    </ul>
                </div>
                <div className="md:hidden">
                    <button type="button" className="w-6 h-6 py-1 mt-auto ml-1 mr-1 rounded" aria-label="Toggle Menu" onClick={() => setMenuShow(!menuShow)}>
                        <AiOutlineMenu className="m-auto text-xl" />
                    </button>
                    <div className={"fixed top-0 left-0 z-10 w-full h-full duration-300 ease-in-out transform bg-base-300 opacity-95 " + (!menuShow ? "hidden" : "")}>
                        <div className="flex justify-end">
                            <button type="button" className="mr-8 rounded mt-7" aria-label="Toggle Menu" onClick={() => setMenuShow(!menuShow)}>
                                <AiOutlineClose className="m-auto text-xl" />
                            </button>
                        </div>
                        <nav className="fixed flex flex-col w-full h-full mt-8">
                            <button className="text-2xl font-bold tracking-widest text-text" onClick={(() => router.push("/"), () => setMenuShow(!menuShow))}>
                                <div className="w-full px-12 py-4">
                                    HOME
                                </div>
                            </button>
                            <button className="text-2xl font-bold tracking-widest text-text" onClick={(() => router.push("/projects"), () => setMenuShow(!menuShow))}>
                                <div className="w-full px-12 py-4">
                                    PROJECTS
                                </div>
                            </button>
                            <button className="text-2xl font-bold tracking-widest text-text" onClick={(() => router.push("/resumes"), () => setMenuShow(!menuShow))}>
                                <div className="w-full px-12 py-4">
                                    RESUMES
                                </div>
                            </button>
                            <button className="text-2xl font-bold tracking-widest text-text" onClick={(() => router.push("/contact"), () => setMenuShow(!menuShow))}>
                                <div className="w-full px-12 py-4">
                                    CONTACT
                                </div>
                            </button>
                            <button onClick={() => setMenuShow(!menuShow)}>
                                <Link href="https://tech.haco.tw/" target="_blank" className="text-2xl font-bold tracking-widest text-text">
                                    <div className="w-full px-12 py-4">
                                        OLD SITE
                                    </div>
                                </Link>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
            <hr className="border-[#C4C7E7]" />
        </>
    );
}