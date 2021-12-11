import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
         <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet"/>
        <meta name="description" content="I am a creative frontend developer, writing code and moving pixels in the www. I design and build custom web experiences for growing brands." />
        <meta itemprop="name" content="V1shal Maurya - Frontend Developer" />
         <meta itemprop="description" content="I am a creative frontend developer, writing code and moving pixels in the www. I design and build custom web experiences for growing brands." />
          <meta itemprop="image" content="https://res.cloudinary.com/v1shalm/image/upload/v1639256324/portfolio_oq2y2n.png" />
         <meta property="og:url" content="https://v1shal.vercel.app"/>
          <meta property="og:type" content="website"/>
            <meta property="og:title" content="V1shal Maurya - Frontend Developer"/>
          <meta property="og:description" content="I am a creative frontend developer, writing code and moving pixels in the www. I design and build custom web experiences for growing brands." />
           <meta property="og:image" content="https://res.cloudinary.com/v1shalm/image/upload/v1639256324/portfolio_oq2y2n.png" />

            <meta name="twitter:card" content="summary_large_image"/>
             <meta name="twitter:title" content="V1shal Maurya - Frontend Developer"/>
            <meta name="twitter:description" content="I am a creative frontend developer, writing code and moving pixels in the www. I design and build custom web experiences for growing brands." />
             <meta name="twitter:image" content="https://res.cloudinary.com/v1shalm/image/upload/v1639256324/portfolio_oq2y2n.png"/>

       </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument