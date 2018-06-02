import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { Row, Col } from 'reactstrap';
import 'devicon/devicon.css';
import './posts.css';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="main-section">
      <BlogHeader />
      {posts.map(
        ({ node: post }) =>
          post.frontmatter.type === 'changelog' ? (
            <ChangelogEntry post={post} />
          ) : null
      )}
    </div>
    // TODO(arjun) add blog post preview
  );
}

const BlogHeader = props => (
  <div className="head-container blog-header">
    <h1>Blog</h1>{' '}
    <div>
      <a href="https://twitter.com/getrubberduck">
        Follow us on Twitter <i className="devicon-twitter-plain" />
      </a>
    </div>
  </div>
);

const BlogPostPreview = ({ post }) => (
  <div className="container blog-preview" key={post.id}>
    <h3>
      <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
    </h3>
    <h5>{post.frontmatter.date}</h5>
    <p>{post.excerpt}</p>
    <div>
      <Link to={post.frontmatter.path}>Read more</Link>
    </div>
  </div>
);

const ChangelogEntry = ({ post }) => (
  <div className="sub-container blog-changelog" key={post.id}>
    <h3>
      <span>{post.frontmatter.title}</span> · {post.frontmatter.date}
    </h3>
    <Row>
      <Col md="2" xs="12" className="product-col">
        <span>{post.frontmatter.version}</span>
      </Col>
      <Col md="10" xs="12">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Col>
    </Row>
  </div>
);

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            type
            version
          }
        }
      }
    }
  }
`;
