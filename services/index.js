import {request, gql } from 'graphql-request';
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getAllArticles = async () => {
    const query = gql`query MyQuery {
        posts(orderBy : createdAt_DESC) {
          slug
          title
          excerpt
          classification
          categories {
            slug
            name
          }
          content {
            html
          }
          createdAt
          featuredImage {
            url
          }
          author {
            name
          }
        }
      }
      `

      const result = await request(graphqlAPI,query)
      return result.posts;
}


export const getOneArticle = async (slug) => {
    const query = gql`query articleDetails($slug: String!) {
        post(where:{slug:$slug}) {
          slug
          title
          excerpt
          classification
          categories {
            slug
            name
          }
          content {
            html
          }
          createdAt
          featuredImage {
            url
          }
          author {
            name
            photo{
                url
            }
            bio
          }
        }
      }
      `

      const result = await request(graphqlAPI,query,{slug})
      return result.post;
}


export const getRecentPosts = async () => {
    const query = gql`query articleDetails {
        posts(orderBy : createdAt_ASC
                last: 3) {
          slug
          title
          createdAt
          featuredImage {
            url
          }
        }
      }
      `

      const result = await request(graphqlAPI,query)
      return result.posts;
}


export const getCategories = async () => {
  const query = gql`query getCategories {
      categories {
        name
        slug
      }
  }
  `
  const result = await request(graphqlAPI,query)
      return result.categories;
}




export const getOneCategory = async (slug) => {
  const query = gql`
      query category_details($slug: String!) {
        category(where:{slug:$slug}) {
          name
      }
    }
  `
  const result = await request(graphqlAPI,query,{slug})
      return result.category;
}


export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};


export const getCategoryPost = async (slug) => {
  const query = gql`
  query GetCategoryPost($slug: String!) {
    posts(where: {categories_some: {slug: $slug}}
      orderBy : createdAt_DESC) {
      
        slug
        title
        excerpt
        classification
        categories {
          slug
          name
        }
        content {
          html
        }
        createdAt
        featuredImage {
          url
        }
        author {
          name
        }
      }
    }
  
  `;
  const result = await request(graphqlAPI, query, { slug });
   
  return result.posts;
};


