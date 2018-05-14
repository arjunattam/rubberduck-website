import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import Title from '../components/Title';
import Footer from '../components/Footer';
import { leadDescription as description } from '../components/Lead';
import favicon from '../static/icon-16.png';

const title = `Rubberduck | ${description}`;
const meta = [
  { name: 'description', content: description },
  { name: 'keywords', content: 'github, code, reviews, sidebar' },
];
const chromeLink =
  'https://chrome.google.com/webstore/detail/nopekhgebkpkbjoclackdlofmcpokgmc';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title={title} meta={meta}>
      <link rel="icon" href={favicon} type="image/x-icon" />
      <link rel="chrome-webstore-item" href={chromeLink} />
    </Helmet>
    <div>
      <Title />
      {children()}
      <Footer />
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
