import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const post = createApi({
  reducerPath: "post",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.1.37:8000" }), // Replace with your API URL
  tagTypes: ["Post"],
  
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/api/posts",
      providesTags: ["Post"],
      pollingInterval: 10000,
    }),
    addPost: builder.mutation({
      query: (newPost) => {
        const formData = new FormData();
        formData.append("description", newPost.description);
        formData.append("image", newPost.image, newPost.image.name);
        return {
          url: "/api/posts",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["Post"],
    }),
    editPost: builder.mutation({
      query: (post) => ({
        url: `/api/posts/${post.id}`,
        method: "PUT",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
    deletePost: builder.mutation({
      query: (postId) => ({
        url: `/api/posts/${postId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostMutation,
  useEditPostMutation,
  useDeletePostMutation,
} = post;
