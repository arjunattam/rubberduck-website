import React from 'react';
import Helmet from 'react-helmet';
import {
  BlogHeader,
  ChangelogEntry,
  BlogPostPreview,
} from '../components/Blog';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="main-section blog-main-section">
      <Helmet title={'Rubberduck: Blog'} />
      <BlogHeader />
      {posts.map(
        ({ node: post }) =>
          post.frontmatter.type === 'changelog' ? (
            <ChangelogEntry post={post} />
          ) : (
            <BlogPostPreview post={post} />
          )
      )}
    </div>
  );
}

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
