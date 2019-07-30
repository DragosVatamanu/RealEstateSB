import SimpleSchema from 'simpl-schema';

const ArticleSchema = new SimpleSchema({
      title: {
        type: String
    },

    description: {
        type: String
    },
    
    address: {
        type: String
    },

    typeOfApartment: {
        type: String
    },

    price: {
        type: Number
    },

    phoneNumber: {
        type: Number
    }
});

export default ArticleSchema;