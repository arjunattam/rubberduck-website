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

const MiniSection = ({ title, content }) => (
  <div className="mini-container blog-preview">
    <div className="blog-post-header">
      <h3>{title}</h3>
    </div>
    {content}
  </div>
);

const ContactUs = props => (
  <MiniSection
    title={'Contact us'}
    content={
      <div>
        <p>
          For any enquiries, you can{' '}
          <a href="#" onClick={triggerChat}>
            chat with us now
          </a>. You can also email us at <a href={mailto}>{email}</a>.
        </p>
        <p>
          We are also available on <a href={twitter}>Twitter</a>, and you can
          join us and other users on <a href={slack}>Slack</a>.
        </p>
      </div>
    }
  />
);

const IssueReport = props => (
  <MiniSection
    title={'Issue tracker'}
    content={
      <p>
        Please use our <a href={github}>issue tracker</a> to report bugs, or
        file feature requests.
      </p>
    }
  />
);

const ViewDocs = props => (
  <MiniSection
    title={'Knowledge base'}
    content={
      <div>
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
    }
  />
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
