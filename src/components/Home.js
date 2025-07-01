import React from 'react';
import BannerSlider from './BannerSlider';
import Catalog from './Catalog';
import PromoBanner from './PromoBanner';
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <BannerSlider />
      <Catalog />
      <PromoBanner />
    </>
  );
}
