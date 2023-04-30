import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    return (
        <>
            <div className="border-white border-b-5 navbar bg-base-100">
                <div className="flex-1">
                    <a className="text-xl normal-case btn btn-ghost" onClick={() => router.push("/")}>Haco Developer</a>
                </div>
                <div className="flex-none">
                    <ul className="px-1 menu menu-horizontal">
                        <li><a onClick={() => router.push("/")} className="menu-hover">HOME</a></li>
                        <li><a onClick={() => router.push("/")} className="menu-hover">PROJECT</a></li>
                        <li><a onClick={() => router.push("/")} className="menu-hover">RESUME</a></li>
                        <li><a onClick={() => router.push("/")} className="menu-hover">CONTACT</a></li>
                        <li><a href="https://tech.haco.tw/" target="_blank" className="menu-hover">OLD SITE</a></li>
                    </ul>
                </div>

            </div>
            <hr className="border-[#C4C7E7]" />
            <div className="mt-5 shadow-lg alert alert-warning">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span>This Website is Still On Develope Mode.</span>
                </div>
            </div>
        </>
    );
}