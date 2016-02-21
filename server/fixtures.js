Meteor.startup(function () {
  if (PostsCollection.find().count() === 0) {
      for(var i=0;i<100;i++){
      PostsCollection.insert({
      author: faker.name.findName(),
      title : faker.lorem.sentence(),
      subTitle : faker.lorem.sentence() ,
      date : faker.date.between(2015,2016),
      postText: faker.lorem.paragraph(),
    });
        }
  }

});
