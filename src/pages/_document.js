import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        {/*<!-- Primary Meta Tags -->*/}
        <meta name="title" content="Haco Developer" />
        <meta
          name="description"
          content="Hi, I am  Haco.A full web developer from Taiwan. I am the founder of Lazco and also a technician of Taiwan Discord Guild【∞ 遊玩】. By the way, I also work on some cool website project like Avery and Lipoic."
        />

        {/*<!-- Open Graph / Facebook -->*/}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.haco.tw/" />
        <meta property="og:title" content="Haco Developer" />
        <meta
          property="og:description"
          content="Hi, I am  Haco.A full web developer from Taiwan. I am the founder of Lazco and also a technician of Taiwan Discord Guild【∞ 遊玩】. By the way, I also work on some cool website project like Avery and Lipoic."
        />
        <meta property="og:image" content="/images/banner.png" />

        {/*<!-- Twitter -->*/}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.haco.tw/" />
        <meta property="twitter:title" content="Haco Developer" />
        <meta
          property="twitter:description"
          content="Hi, I am  Haco.A full web developer from Taiwan. I am the founder of Lazco and also a technician of Taiwan Discord Guild【∞ 遊玩】. By the way, I also work on some cool website project like Avery and Lipoic."
        />
        <meta property="twitter:image" content="/images/banner.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
