import React from 'react';
import Helmet from 'react-helmet';

const email = 'team@rubberduck.io';
const mailto = `mailto:${email}`;
const github =
  'https://github.com/karigari/rubberduck-issues/issues/new/choose';
const twitter = 'https://twitter.com/getrubberduck';
const slack =
  'https://join.slack.com/t/karigarihq/shared_invite/enQtMzM5NzQxNjQxNTA1LTM0ZDFhNWQ3YmEyYmExZTY1ODJmM2U3NzExM2E0YmQxODcxYTgwYzczOTVkOGY5ODk2MWE0MzE2ODliNGU1ZDc';

const triggerChat = () => {
  drift.on('ready', api => {
    api.sidebar.open();
  });
};

const ContactUs = props => (
  <div className="container blog-preview">
    <h3>Contact us</h3>
    <p>
      <a href="#" onClick={triggerChat}>
        Chat with us now
      </a>.
    </p>
    <p>
      For any enquiries, you can email us at <a href={mailto}>{email}</a>.
    </p>
    <p>
      If you prefer, you can also reach us through <a href={twitter}>Twitter</a>.
      Or, perhaps you would like to join our team and user community on{' '}
      <a href={slack}>Slack</a>?
    </p>
  </div>
);

const IssueReport = props => (
  <div className="container blog-preview">
    <h3>Issue tracker</h3>
    <p>
      To report bugs, or file feature requests, please use our{' '}
      <a href={github}>issue tracker.</a>
    </p>
  </div>
);

const ViewDocs = props => (
  <div className="container blog-preview">
    <h3>Knowledge base</h3>
    <p>
      Our <a href="https://support.rubberduck.io">knowledge base</a> answers
      some frequently asked questions.
    </p>
    <ul>
      <li>
        <a href="https://support.rubberduck.io/articles/26915">
          Getting started with self-hosted
        </a>
      </li>
      <li>
        <a href="https://support.rubberduck.io/articles/26916">
          Setup authorization on self-hosted
        </a>
      </li>
      <li>
        <a href="https://support.rubberduck.io/articles/26922">
          Supported languages
        </a>
      </li>
    </ul>
  </div>
);

export default function Index({ data }) {
  return (
    <div className="main-section blog-main-section">
      <Helmet title={'Rubberduck: Support'} />
      <div className="head-container blog-header">
        <h1>Support</h1>
      </div>
      <ContactUs />
      <IssueReport />
      <ViewDocs />
    </div>
  );
}
