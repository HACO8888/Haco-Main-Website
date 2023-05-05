import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Haco Developer</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keyword" content="haco developer" />
            </Head>
            <div className="select-none">
                <Navbar />
                <div className="mt-5 max-h-[calc(100vh-125px)] min-h-[calc(100vh-125px)]">
                    {children}
                </div>
                {/* <Footer /> */}
            </div>
        </>
    );
}