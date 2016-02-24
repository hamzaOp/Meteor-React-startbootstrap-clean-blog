Nav = React.createClass({

  currentRoute(route){
  FlowRouter.watchPathChange();
  return FlowRouter.current().route.name === route ? 'active' : '';
  },

    render(){

      var home = FlowRouter.path('/');
      var about = FlowRouter.path('/about');
      var contact = FlowRouter.path('/contact');

        return (<nav className="navbar navbar-default navbar-custom navbar-fixed-top">
        <div className="container-fluid">

            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="https://github.com/hamzaOp/meteor-react-blog">Github repository</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li className={this.currentRoute('home')}>
                        <a href={home}>Home</a>
                    </li>
                    <li className={this.currentRoute('about')}>
                        <a href={about}>About</a>
                    </li>
                    <li className={this.currentRoute('contact')}>
                        <a href={contact}>Contact</a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>);
    }
})
