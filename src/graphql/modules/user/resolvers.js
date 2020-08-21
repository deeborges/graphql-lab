import User from "../../../models/user";

export default {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id),
  },

  Mutation: {
    createUser: (_, { data }) => User.create(data),
    updateUser: (_, { id, data }) => User.findByIdAndUpdate(id, data, { new: true }),
    deleteUser: async (_, { id }) => {
      const deleted = await User.findByIdAndDelete(id);
      return !!deleted;
    },
  },
};
