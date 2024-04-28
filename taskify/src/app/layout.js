// src/app/layout.js

import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <Head>
        <title>Taskify</title>
        <meta name="description" content="Your task management application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </Layout>
  );
};

export default AppLayout;
