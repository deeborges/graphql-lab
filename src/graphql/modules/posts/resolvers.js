import Post from "../../../models/post";

export default {
  Query: {
    posts: () => Post.find(),
    post: (_, { id }) => Post.findById(id),
  },

  Mutation: {
    createPost: (_, { data }) => {
      return Post.create(data);
    },
    updatePost: (_, { id, data }) => Post.findByIdAndUpdate(id, data, { new: true }),
    deleteUser: async (_, { id }) => {
      const deleted = await Post.findByIdAndDelete(id);
      return !!deleted;
    },
  },
};
