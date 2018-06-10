import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

// TODO(arjun): where does this go?
const price = (
  <span>
    {'Get early access at '}
    <span className="strikethrough">{'$119'}</span>
    {' $59'}
  </span>
);

const Pricing = props => (
  <div className="container blog-preview">
    <h3>Self-hosted for private repositories</h3>
    <ul>
      <li>Single user license. Unlimited repositories.</li>
      <li>Supports GitHub.com and Bitbucket Cloud.</li>
      <li>Coming soon: GitHub Enterprise, Bitbucket Server, Gitlab</li>
      <li>14 day free trial.</li>
      <li>
        Year of free upgrades. See <Link to="blog">changelog</Link>.
      </li>
      <li>Link to buy now</li>
    </ul>
    <p>
      Two columns: one for browser extension button, the other for menu bar app
      download - with screenshots of both, and download buttons.
    </p>
    <p>
      Questions? <Link to="support">Contact us</Link> for instant support.
    </p>
  </div>
);

const Security = props => (
  <div className="container blog-preview">
    <h3>Security</h3>
    <p>
      <strong>Code</strong>. With self-hosted Rubberduck for macOS, your code
      does not leave your machine. Rubberduck communicates directly with your
      remote git servers, and does not contact any intermediary servers.
    </p>
    <p>
      <strong>Authorization</strong>. Rubberduck uses personal app tokens for
      authorization against your remote git servers. These tokens are stored
      locally on your machine.
    </p>
    <p>
      <strong>Telemetry</strong>. Rubberduck for macOS collects crash reporting
      data and polls for auto-updates. These will be made optional with the
      0.2.0 release. You can track{' '}
      <a href="https://github.com/karigari/rubberduck-issues/issues/3">
        this issue
      </a>{' '}
      here.
    </p>
    <p>
      We encourage you to use a network monitor like Little Snitch, in case you
      have further concerns. Or contact us for a security review.
    </p>
  </div>
);

const OpenSource = props => (
  <div className="container blog-preview">
    <h3>Basic for open source</h3>
    <p>
      Rubberduck is completely free of charge for open source repositories.
      Install the browser extension here.
    </p>
  </div>
);

export default function Index({ data }) {
  return (
    <div className="main-section blog-main-section">
      <Helmet title={'Rubberduck: Pricing'} />
      <div className="head-container blog-header">
        <h1>Pricing</h1>
      </div>
      <Pricing />
      <Security />
      <OpenSource />
    </div>
  );
}
