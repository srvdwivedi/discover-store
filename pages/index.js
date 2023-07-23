import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/Banner";
// import Card from "../components/card";

export default function Home(props) {
  const { useEffect, useState, useContext } = React;

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="allows you to discover coffee stores"
        />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
        />

        <div className={styles.heroImage}>
          <Image
            src="/hero-image.png"
            width={700}
            height={400}
            alt="hero image"
          />
        </div>
      </main>
    </div>
  );
}
