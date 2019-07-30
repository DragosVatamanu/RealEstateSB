import Articles from './collection'

Articles.before.insert(function (userId, doc) {
    doc.userId = userId;
    doc.createdAt = Date.now();
});
