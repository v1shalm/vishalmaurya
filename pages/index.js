import Head from 'next/head'
import About from '../components/About'

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>V1shal Maurya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-5xl mx-auto mt-16 antialiased">
        <About />
      </main>


    </div>
  )
}
