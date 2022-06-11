import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import {Hero} from '../components/hero/Hero';

const Home: NextPage = () => {
  return (
    <div className="app">
      <Head>
        <title>Next.js 100</title>
        <meta
          name="Description"
          content="Build a PWA with Next.js to achieve 100 lighthouse score."
        />
      </Head>
      <Hero />
      
    </div>
  );
};

export default Home;
