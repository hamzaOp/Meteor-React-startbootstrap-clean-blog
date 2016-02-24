Header = React.createClass({
    render(){
        var bg = 'url("/'+this.props.bg+'.jpg")';
        let headerStyle = {
            backgroundImage : bg
        };
        return (<header className="intro-header" style={headerStyle}>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div className="site-heading">
                        <h1>{this.props.heading}</h1>
                        {this.props.sub ? <Sub/> : <Rule/>}
                        <span className="subheading">{this.props.subHeading}</span>
                    </div>
                </div>
            </div>
        </div>
    </header>);
    }
})
