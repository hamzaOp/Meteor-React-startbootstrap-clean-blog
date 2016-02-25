const {
  Styles
} = mui;
const ThemeManager = Styles.ThemeManager;
App = React.createClass({

  childContextTypes : {
   muiTheme: React.PropTypes.object
 },


 getChildContext() {
   return {
     muiTheme: ThemeManager.getMuiTheme(Styles.LightRawTheme)
   };
 },
    render(){
       let style {
         position : "relative"
       };
        return (<div>
                {this.props.navigation}
                {this.props.header}
                <main>
                <div className="container">
                <div className="row">
                <div style={style} className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                 {this.props.content()}
                    </div>
                    </div>
                    </div>
                </main>
                {this.props.footer}
                </div>);
    }
});
