import SimpleSchema from 'simpl-schema';

const ArticleSchema = new SimpleSchema({
    title: {
        type: String,
        max: 150,
        required: true
    },
  
    description: {
        type: String,
        max: 500,
        required: true
    },
  
    numberOfRooms: {
        type: Number,
        min: 1,
        required: true
    },
  
    address: {
        type: String,
        required: true
    },
  
    price: {
        type: Number,
        required: true
    },
  
    phoneNumber: {
        type: Number,
        required: true
    }
});

export default ArticleSchema;