import React from 'react';
import NftCard from './components/NftCard';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Visual from './components/Visual';
import Footer from './layouts/Footer';
import Header from './layouts/Header';

function Main() {
  return (
    <main className='mainWrap'>
      <Header />
      <Visual />
      <NftCard />
      <Page3 />
      <Page4 />
      <Page5 />
      <Footer />
    </main>
  );
}
// npm install test

export default Main;
