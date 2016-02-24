HeaderData = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {

    var Id = FlowRouter.getParam('id');
    var subscription = Meteor.subscribe('post', Id);
      return {
        post: PostsCollection.find({
          _id: Id
        },{title : true , author : true}).fetch()
      };

    },
    render(){
      let author = this.data.post.map((post) => {
        return 'Posted by '+ post.author;
      });
      let title = this.data.post.map((post) => {
        return post.title;
      });
        return (<Header sub={true} heading={title} subHeading={author} bg='home'/>);
    }
})
