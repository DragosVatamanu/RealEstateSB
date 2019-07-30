import { Meteor } from 'meteor/meteor';
import Articles from './collection';
import Security from '../security';

Meteor.methods({
    'article.create'(data) {
        Security.checkLoggedIn(this.userId);
        Articles.insert(data);
    },
    'article.remove'(_id) {
        Security.checkLoggedIn(this.userId);
        Article.remove({_id: _id, userId: this.userId});
      }
});