const {
  RaisedButton
} = mui;

Pager = React.createClass({

  render(){
    let style = {marginLeft : "10%",marginRight:"10%",marginTop: "5%",marginBottom: "5%"};
    return (<ul className="pager">
    <li><RaisedButton disabled={this.props.counter == 96 ?  true : false} onClick={this.props.callbacks.Prev} label="Previous" style={style}  /></li>
    <li><RaisedButton disabled={this.props.counter == 0 ?   true : false} onClick={this.props.callbacks.Next} label="Next" style={style} /></li>

    </ul>);
  }
})
