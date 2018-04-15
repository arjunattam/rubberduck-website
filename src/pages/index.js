import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'reactstrap'

import Lead from '../components/Lead'
import LanguagesRow from '../components/LanguagesRow'
import FeaturesSection from '../components/FeaturesSection'
import ProductContainer from '../components/Products'
import ContactSection from '../components/Contact'

const IndexPage = () => (
  <div>
    <Lead />
    <FeaturesSection />
    <LanguagesRow />
    <ProductContainer />
    <ContactSection />
  </div>
)

export default IndexPage
