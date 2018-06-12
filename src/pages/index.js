import React from 'react';
import { Lead } from '../components/Lead';
import LanguagesRow from '../components/LanguagesRow';
import { VideoContainer } from '../components/FeaturesSection';
import ProductContainer from '../components/Products';

const IndexPage = () => (
  <div>
    <Lead />
    <VideoContainer />
    <LanguagesRow />
    <ProductContainer />
  </div>
);

export default IndexPage;
