Pager = React.createClass({

  render(){
    return (<ul className="pager">
        <li className={this.props.counter == 96 ?  'previous hidden' : 'previous'} onClick={this.props.callbacks.Prev}>
            <a href=""><strong>&lt;</strong> Older Posts</a>
        </li>
        <li className={this.props.counter == 0 ?  'next hidden' : 'next'} onClick={this.props.callbacks.Next}>
            <a href="">Newer Posts <strong>&gt;</strong></a>
        </li>
    </ul>);
  }
})
