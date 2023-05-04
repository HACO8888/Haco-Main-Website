import Image from "next/image";

export default function HomeBanner() {

    return (
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
    );
}