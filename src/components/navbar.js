import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    return (
        <div className="border-white border-b-5 navbar bg-base-100">
            <div className="flex-1">
                <a className="text-xl normal-case btn btn-ghost">Haco Developer</a>
            </div>
            <div className="flex-none">
                <ul className="px-1 menu menu-horizontal">
                    <li><a onClick={() => router.push("/")} className="focus:bg-none">HOME</a></li>
                    <li><a className="focus:bg-none">Item 1</a></li>
                    <li><a className="focus:bg-none">Item 1</a></li>
                    <li><a className="focus:bg-none">Item 1</a></li>
                    <li className="focus:bg-none"><a href="https://tech.haco.tw/" target="_blank" className="focus:bg-none">Old Site</a></li>
                </ul>
            </div>
        </div>
    );
}