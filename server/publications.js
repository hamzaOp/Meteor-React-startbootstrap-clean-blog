Meteor.publish('posts', function (arg) {
  check(arg,Number);
  posts = PostsCollection.find({},{skip: arg, limit: 4});
  return posts;

});
