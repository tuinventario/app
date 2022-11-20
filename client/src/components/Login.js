import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";
class Login extends Component {
constructor() {
super();
this.state = {
email: "",
password: "",
errors: {}
};
}
componentDidMount() {
  // If logged in and user navigates to Login page, should redirect them to dashboard
  if (this.props.auth.isAuthenticated) {
    this.props.history.push("/");
  }
}

componentWillReceiveProps(nextProps) {
  if (nextProps.auth.isAuthenticated) {
    this.props.history.push("/"); // push user to dashboard when they login
    
  }
if (nextProps.errors) {
    this.setState({
      errors: nextProps.errors
    });
  }
}
onChange = e => {
this.setState({ [e.target.id]: e.target.value });
};
onSubmit = e => {
e.preventDefault();
const userData = {
email: this.state.email,
password: this.state.password
};
console.log(userData);
this.props.loginUser(userData);
};
render() {
const { errors } = this.state;
return (
    <div class="container-fluid p-0 mb-5" >
      <div class="text-center hero my-5 p position-relative" >
        <img class="d-block w-100" src="../img/papeleria.png" alt=""/>
        <div class="carousel-caption">
          <div class="row col-12 h-100">
<div className="col-8 offset-2">
<Link to="/" className="btn btn-primary btn-flat">
<i className="left">Ir a inicio</i>
</Link>
<div className="col-12" style={{ paddingLeft: "11.250px"}}>
<h4>
<b>Login</b>
</h4>
<p className="grey-text text-darken-1">
No tiene una cuenta
<Link to="/register"> Registrese</Link>
</p>
</div>
<form noValidate onSubmit={this.onSubmit}>
<div className="input-field col-12">
<input 
onChange={this.onChange}
value={this.state.email}
error={errors.email}
id="email"
type="email"
className={classnames("form-control ", {invalid: errors.email || errors.emailnotfound})}
/>
<label htmlFor="email">Email</label>
<br/>
<span className="text-danger">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
</div>
<div className="input-field col-12">
<input 
onChange={this.onChange}
value={this.state.password}
error={errors.password}
id="password"
type="password"
className={classnames("form-control ", {invalid: errors.password || errors.passwordincorrect})}
/>
<label htmlFor="password">Password</label>
<br/>
<span className="text-danger">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
</div>
<div className="col-12" style={{ paddingLeft:"11.250px" }}>
<button
style={{
width: "150px",
borderRadius: "3px",
letterSpacing: "1.5px",
marginTop: "1rem"
}}
type="submit"
className="btn btn-primary btn-large ">
Login
</button>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
   
);
}
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);