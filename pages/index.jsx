import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import ProductList from '../components/Product/ProductList'
import Footer from '../components/Footer/Footer'
import ProductFeature from '../components/Product/ProductFeature'
import ProductNew from '../components/Product/ProductNew'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>KILLER</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <>
        <Navbar />
        <Hero />
        <ProductFeature />
        <ProductNew />
        <ProductList />
        <Footer />
        </>
    </div>
  )
}
