Sub = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {

    var Id = FlowRouter.getParam('id');
    var subscription = Meteor.subscribe('post', Id);
      return {
        post: PostsCollection.find({
          _id: Id
        },{subTitle : true}).fetch()
      };

    },
    render(){
      let subTitle = this.data.post.map((post) => {
        return post.subTitle;
      });
        return (<h2 className="subheading">{subTitle}</h2>);
    }
})
