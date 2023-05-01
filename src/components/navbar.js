import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const router = useRouter();
    const [menuShow, setMenuShow] = useState(false);

    return (
        <>
            <div className="mt-5 border-white border-b-5 navbar bg-base-100">
                <div className="flex-1">
                    <div className="flex">
                        <div className="flex-initial m-auto">
                            <Image src="/images/logo.png" width={40} height={40} alt="logo" priority="true"  />
                        </div>
                        <button className="text-xl normal-case btn btn-ghost" onClick={() => router.push("/")}>Haco Developer</button>
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
                    <button type="button" className="w-6 h-6 py-1 ml-1 mr-1 rounded" aria-label="Toggle Menu" onClick={() => setMenuShow(!menuShow)}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars fa-xl text-text" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
                        </svg>
                    </button>
                    <div className={"fixed top-0 left-0 z-10 w-full h-full duration-300 ease-in-out transform bg-base-300 opacity-95 translate-x-" + (menuShow ? "0" : "full")}>
                        <div className="flex justify-end">
                            <button type="button" className="w-6 h-6 mr-5 rounded mt-11" aria-label="Toggle Menu" onClick={() => setMenuShow(!menuShow)}>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" className="svg-inline--fa fa-xmark fa-xl text-text" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path fill="currentColor" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"></path>
                                </svg>
                            </button>
                        </div>
                        <nav className="fixed flex flex-col w-full h-full mt-8">
                            {/* <button className="text-2xl font-bold tracking-widest text-text" onClick={() => router.push("/")}>
                                <div className="w-full px-12 py-4">
                                    HOME
                                </div>
                            </button> */}
                            <button className="text-2xl font-bold tracking-widest text-text" onClick={() => router.push("/projects")}>
                                <div className="w-full px-12 py-4">
                                    PROJECTS
                                </div>
                            </button>
                            <button className="text-2xl font-bold tracking-widest text-text" onClick={() => router.push("/resumes")}>
                                <div className="w-full px-12 py-4">
                                    RESUMES
                                </div>
                            </button>
                            <button className="text-2xl font-bold tracking-widest text-text" onClick={() => router.push("/contact")}>
                                <div className="w-full px-12 py-4">
                                    CONTACT
                                </div>
                            </button>
                            <button>
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