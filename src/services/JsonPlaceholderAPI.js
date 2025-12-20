// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const jsonPlaceholderApi = createApi({
//         reducerPath: 'jsonPlaceholderApi',
//         baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
//         endpoints: (builder) => ({
//             getPosts: builder.query({
//                 query: () => 'posts',
//         }),
//         createPosts: builder.mutation({
//             query: (newPost) => ({
//                 url: 'posts',  
//                 method: 'POST',
//                 body: newPost,
//             }),
//         }),     
//     }),
// })

// export const { useGetPostsQuery, useCreatePostsMutation } = jsonPlaceholderApi; 

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonPlaceholderApi = createApi({
  reducerPath: "jsonPlaceholderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),

  refreshOnFocus: true, 
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "posts",
      transformResponse: (response) => response.posts, // ✅ extract array
    }),
    createPosts: builder.mutation({
      query: (newPost) => ({
        url: "posts/add",
        method: "POST",
        body: newPost,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostsMutation } =jsonPlaceholderApi;