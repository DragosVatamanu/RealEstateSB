import { Mongo } from 'meteor/mongo';
import ArticlesSchema from './schema';

const Articles = new Mongo.Collection('articles');

Articles.attachSchema(ArticlesSchema);

export default Articles;