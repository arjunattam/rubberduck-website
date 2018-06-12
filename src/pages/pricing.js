import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { MiniSection } from '../components/Blog';
import { PricingContainer } from '../components/Pricing';
import { InstallButton, DownloadButton } from '../components/Buttons';

const Security = props => (
  <MiniSection
    title="Security"
    content={
      <div>
        <p>
          <strong>Code</strong>. With Rubberduck for macOS queries on your code
          run locally, and code does not leave your machine. Rubberduck
          communicates directly with your remote git servers, without any
          intermediary servers.
        </p>
        <p>
          <strong>Authorization</strong>. Rubberduck for macOS uses personal app
          tokens for authorization against your remote git servers. These tokens
          are stored locally on your machine.
        </p>
        <p>
          <strong>Telemetry</strong>. Rubberduck for macOS collects crash
          reporting data and polls for auto-updates. These will be made optional
          with the next minor release. You can track{' '}
          <a href="https://github.com/karigari/rubberduck-issues/issues/3">
            this issue here
          </a>.
        </p>
        <p>
          Questions? Feel free to <Link to="support">contact us</Link>.
        </p>
      </div>
    }
  />
);

const OpenSource = props => (
  <MiniSection
    title={'For open source'}
    content={
      <div>
        <p>
          Rubberduck is completely free for open source repositories. Use our
          hosted analyzer server with the browser extension.
        </p>
        <p style={{ textAlign: 'center' }}>
          <InstallButton />
        </p>
      </div>
    }
  />
);

export default function Index({ data }) {
  return (
    <div className="main-section blog-main-section">
      <Helmet title={'Rubberduck: Pricing'} />
      <div className="head-container blog-header">
        <h1>Self-hosted</h1>
      </div>
      <PricingContainer />
      <Security />
      <OpenSource />
    </div>
  );
}
