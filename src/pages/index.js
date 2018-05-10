import React from 'react';
import { Lead } from '../components/Lead';
import LanguagesRow from '../components/LanguagesRow';
import { VideoContainer } from '../components/FeaturesSection';
import ProductContainer from '../components/Products';
import ContactSection from '../components/Contact';

const IndexPage = () => (
  <div>
    <Lead />
    <VideoContainer />
    <LanguagesRow />
    <ProductContainer />
    <ContactSection />
  </div>
);

export default IndexPage;
