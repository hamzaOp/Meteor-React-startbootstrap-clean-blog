Meteor.publish('posts', function (arg) {
  check(arg,Number);
  posts = PostsCollection.find({},{skip: arg, limit: 4});
  return posts;

});

Meteor.publish('post', function (_id) {
  check(_id,String);
  return PostsCollection.find({
    _id: _id
  });
});
