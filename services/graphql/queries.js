import { gql } from "@apollo/client";

export const BLOG_POSTS = gql`
  query {
    posts {
      id
      tag {
        id
        name
      }
      details
      image
      status
      title
      createdAt
      updatedAt
      createdBy {
        fullname
      }
    }
    postsLength
  }
`;

export const BLOG_POST = gql`
  query GetPost($id: ID!) {
    post(postId: $id) {
      id
      tag {
        id
        name
      }
      details
      image
      status
      title
      createdAt
      updatedAt
      createdBy {
        fullname
      }
    }
  }
`;
