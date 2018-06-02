import React from 'react';
import Helmet from 'react-helmet';
import { BlogHeader, BlogPostFull } from '../components/Blog';

const getTitle = title => `Rubberduck blog: ${title}`;

export default function Template({ data }) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  return (
    <div className="main-section blog-main-section">
      <Helmet title={getTitle(post.frontmatter.title)} />
      <BlogHeader />
      <BlogPostFull post={post} />
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
