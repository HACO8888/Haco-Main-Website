import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    return (
        <>
            <div className="border-white border-b-5 navbar bg-base-100">
                <div className="flex-1">
                    <p className="text-xl normal-case btn btn-ghost" onClick={() => router.push("/")}>Haco Developer</p>
                </div>
                <div className="flex-none ">
                    <ul className="px-1 menu menu-horizontal max-md:hidden">
                        <li><p onClick={() => router.push("/")} className="menu-hover">HOME</p></li>
                        <li><p onClick={() => router.push("/project")} className="menu-hover">PROJECT</p></li>
                        <li><p onClick={() => router.push("/resume")} className="menu-hover">RESUME</p></li>
                        <li><p onClick={() => router.push("/contact")} className="menu-hover">CONTACT</p></li>
                        <li><p href="https://tech.haco.tw/" target="_blank" className="menu-hover">OLD SITE</p></li>
                    </ul>
                </div>

            </div>
            <hr className="border-[#C4C7E7]" />
        </>
    );
}