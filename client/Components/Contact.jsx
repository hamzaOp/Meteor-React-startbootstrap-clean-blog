const {
  Divider,
  TextField,
  FlatButton
} = mui;

Contact = React.createClass({

  getInitialState(){
    return {
      name : '',
      email : '',
      message : ''
    }
  },

  submit(e){
        e.preventDefault();
        obj = this.state;
        for(var prop in this.state){
          if(obj[prop] != 'valid'){
            Bert.alert( 'Your form has errors !', 'danger', 'growl-top-right' );
            return;
          }
        }
        var email = $("#email").val();
        var name = 'Message from ' + $("#name").val();
        var message = $("#message").val();
        Meteor.call('sendEmail',
            'your email',
             email,
            name,
            message,function (error, result) { if(!error){Bert.alert( 'Your email was sent !', 'success', 'growl-top-right' ); }

            else{Bert.alert( 'Internal server error !', 'danger', 'growl-top-right' );}});
       $("#form")[0].reset();

  },


   validateName(e){
     var name = /[A-Za-z]/;
     if(!name.test(e.target.value)) {
       this.setState(Object.assign({}, this.state,{name : 'Please enter your name'}));
     }else{this.setState(Object.assign({}, this.state,{name : 'valid'}));} },

     validateEmail(e){
       var email=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if(!email.test(e.target.value)) {
         this.setState(Object.assign({}, this.state,{email : 'Please enter an email adress'}));
       }else{this.setState(Object.assign({}, this.state,{email : 'valid'}));}

   },

   validateMessage(e){
     if(e.target.value == '') {
       this.setState(Object.assign({}, this.state,{message : 'Please enter a message'}));
     }else{this.setState(Object.assign({}, this.state,{message : 'valid'}));}

 },

    render(){

  let style = {
  marginLeft: "20",
};


  return(<form id="form">
    <TextField hintText="Name" id="name" errorText={this.state.name == 'valid' ? '' : this.state.name} id="name" onBlur={this.validateName}  style={style} underlineShow={false} floatingLabelText="Name"
      multiLine={true} />
    <Divider />
    <TextField hintText="Email" id="email" onBlur={this.validateEmail} errorText={this.state.email == 'valid' ? '' : this.state.email} style={style} underlineShow={false}  floatingLabelText="Email"
      multiLine={true}  />
    <Divider />
    <TextField hintText="Message" id="message"  onBlur={this.validateMessage} errorText={this.state.message == 'valid' ? '' : this.state.message} multiLine={true} floatingLabelText="Your Message" underlineShow={false} style={style}  />
    <Divider /><FlatButton  onClick={this.submit}  style={{marginTop : "20"}} label="Send" primary={true} /></form>
  );
    }
})
