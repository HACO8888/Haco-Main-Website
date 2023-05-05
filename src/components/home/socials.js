import { SocialIcon } from "react-social-icons";

export default function HomeSocials() {
    return (
        <>
            <h1 className="m-auto mt-5 mb-5 text-3xl text-center">Social Links</h1>
            <pre className="block w-full overflow-auto leading-6">
                <div className="pb-5 overflow-visible text-center">
                    <code className="inline w-full gap-6 leading-6">
                        <SocialIcon url="mailto:jasonytonlinecomeandsee@gmail.com" target="_blank" />
                        &ensp;
                        <SocialIcon url="https://www.youtube.com/c/HACO8888/" target="_blank" />
                        &ensp;
                        <SocialIcon url="https://discord.com/users/508964901415550976/" target="_blank" />
                        &ensp;
                        <SocialIcon url="https://www.facebook.com/Jasonlindino/" target="_blank" />
                        &ensp;
                        <SocialIcon url="https://www.instagram.com/jason_lin_0222/" target="_blank" />
                        &ensp;
                        <SocialIcon url="https://twitter.com/MRHACO8888/" target="_blank" />
                        &ensp;
                        <SocialIcon url="https://www.reddit.com/user/HacoDeveloper/" target="_blank" />
                        &ensp;
                        <SocialIcon url="https://open.spotify.com/user/31bph3i2ybq5mzicui3cxvfghpmu/" target="_blank" />
                    </code>
                </div>
            </pre>
        </>
    );
}

