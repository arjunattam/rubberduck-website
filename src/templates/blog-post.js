import React from 'react';
import Helmet from 'react-helmet';

const getTitle = title => `Rubberduck blog: ${title}`;

export default function Template({ data }) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  return (
    <div className="main-section">
      <Helmet title={getTitle(post.frontmatter.title)} />
      <div className="container blog-preview">
        <h3>{post.frontmatter.title}</h3>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
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
