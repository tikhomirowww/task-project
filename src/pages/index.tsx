import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout/Layout";
import Home from "@/components/Home/Home";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/union.svg" />
      </Head> */}
      <Home />
    </>
  );
}
