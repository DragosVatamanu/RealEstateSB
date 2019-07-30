import SimpleSchema from 'simpl-schema';

const ArticlesSchema = new SimpleSchema({
  title: {
      type: String
  },

  description: {
      type: String
  },

  typeOfApartment: {
      type: String
  },

  address: {
      type: String
  },

  price: {
      type: Number
  },

  phoneNumber: {
      type: Number
  },

  createdAt: {
      type: Date,
      optional: true
  },

  userId: {
      type: String,
      optional: true
  }
});

export default ArticlesSchema;