import React from 'react';
import Link from 'gatsby-link';
import { Row, Col } from 'reactstrap';
import 'devicon/devicon.css';
import './index.css';

export const BlogHeader = props => (
  <div className="head-container blog-header">
    <h1>Blog</h1>{' '}
    <div>
      <a href="https://twitter.com/getrubberduck">
        Follow us on Twitter <i className="devicon-twitter-plain" />
      </a>
    </div>
  </div>
);

const BlogPostHeader = ({ post }) => (
  <div className="blog-post-header">
    <h3>
      <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
    </h3>
    <h5>{post.frontmatter.date}</h5>
  </div>
);

export const BlogPostPreview = ({ post }) => (
  <div className="container blog-preview" key={post.id}>
    <BlogPostHeader post={post} />
    <p>{post.excerpt}</p>
    <div>
      <Link to={post.frontmatter.path}>Read more</Link>
    </div>
  </div>
);

export const BlogPostFull = ({ post }) => (
  <div className="container blog-preview" key={post.id}>
    <BlogPostHeader post={post} />
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
  </div>
);

export const ChangelogEntry = ({ post }) => (
  <div className="sub-container blog-changelog" key={post.id}>
    <h3>
      <span>changelog</span> · {post.frontmatter.title} ·{' '}
      <span>{post.frontmatter.date}</span>
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

export const MiniSection = ({ title, content }) => (
  <div className="mini-container blog-preview">
    <div className="blog-post-header">
      <h3>{title}</h3>
    </div>
    {content}
  </div>
);
