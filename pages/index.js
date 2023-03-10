import Head from 'next/head'
import Link from 'next/link'
import CatGenerator from '../components/CatGenerator'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cat Generator</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex flex-col justify-center items-center space-y-10">
        <div className="flex justify-center items-center space-x-10">
          <h1 className="text-3xl">Cat generator</h1>
          <a href="https://www.instagram.com/elsquinte23/" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="34" height="34" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="4" y="4" width="16" height="16" rx="4"></rect>
              <circle cx="12" cy="12" r="3"></circle>
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
            </svg>
          </a>
        </div>

        <CatGenerator />
        <Footer />
      </main>
    </>
  )
}
