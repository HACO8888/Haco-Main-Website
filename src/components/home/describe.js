import Image from "next/image";
import Link from "next/link"

export default function HomeDescribe() {

    return (
        <div className="bg-[#2B2D31] rounded-lg">
            <div className="p-5 pb-2">
                <pre className="block w-full overflow-auto leading-6">
                    <div className="pb-5 overflow-visible">
                        <code className="inline w-full">
                            <b>Hi, I am  Haco.</b>
                            <br />
                            <b>A full web developer from Taiwan.</b>
                            <br />
                            <b>I am the founder of Lazco and also a technician of Taiwan Discord Guild</b>
                            &thinsp;
                            <Link href="https://play.haco.tw/" target="_blank" className="text-[#06e3b2]">
                                ∞ 遊玩
                            </Link>
                            .
                            <br />
                            By the way, I also work on some cool website project like
                            &thinsp;
                            <Link href="https://www.averybot.xyz/" target="_blank" className="text-white ">
                                Avery
                            </Link>
                            &thinsp;
                            and
                            &thinsp;
                            <Link href="https://lipoic.org/" target="_blank" className="text-[#7bc1fe]">
                                Lipoic
                            </Link>
                            .
                            <br />
                            {"If you have any question just DM me in Discord => HACO#8888."}
                        </code>
                    </div>
                </pre>
            </div>
        </div >
    );
}

