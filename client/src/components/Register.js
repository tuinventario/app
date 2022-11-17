import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";
class Register extends Component {
constructor() {
super();
this.state = {
name: "",
email: "",
password: "",
password2: "",
errors: {}
};
}
componentDidMount() {
  // If logged in and user navigates to Register page, should redirect them to dashboard
  if (this.props.auth.isAuthenticated) {
    this.props.history.push("/");
    this.props.history.push("/product");
  }
}
componentWillReceiveProps(nextProps) {
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
const newUser = {
name: this.state.name,
email: this.state.email,
password: this.state.password,
password2: this.state.password2
};
console.log(newUser);
this.props.registerUser(newUser, this.props.history); 
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
    <Link to="/" className="btn btn-primary btn-flat waves-effect">
    <i className=" left">Ir al inicio</i>
    </Link>
    <div className="col-12" style={{ paddingLeft: "11.250px" }}>
    <h4>
    <b>Registrese</b>
    </h4>
    <p className="grey-text text-darken-1">
    Ya tiene cuenta? <Link to="/login">Inicie sesion</Link>
    </p>
    </div>
<form noValidate onSubmit={this.onSubmit}>
<div className="input-field col-12">
<input 
onChange={this.onChange}
value={this.state.name}
error={errors.name}
id="name"
type="text"
className={classnames("form-control ", {invalid: errors.name})}
/>
<label htmlFor="name">Nombre</label>
<br/>
<span className="text-danger">{errors.name}</span>
</div>
<div className="input-field col s12">
<input 
onChange={this.onChange}
value={this.state.email}
error={errors.email}
id="email"
type="email"
className={classnames("form-control ", {invalid: errors.email})}

/>
<label htmlFor="email">Email</label>
<br/>
<span className="text-danger">{errors.email}</span>
</div>
<div className="input-field col-12">
<input c
onChange={this.onChange}
value={this.state.password}
error={errors.password}
id="password"
type="password"
className={classnames("form-control ", {invalid: errors.password})}

/>
<label htmlFor="password">Contraseña</label>
<br/>
<span className="text-danger">{errors.password}</span>
</div>
<div className="input-field col-12">
<input 
onChange={this.onChange}
value={this.state.password2}
error={errors.password2}
id="password2"
type="password"
className={classnames("form-control ", {invalid: errors.password2})}

/>
<label htmlFor="password2">Confirme Contraseña</label>
<br/>
<span className="text-danger">{errors.password2}</span>
</div>
<div className="col-12" style={{ paddingLeft: "11.250px" }}>
<button
style={{
width: "150px",
borderRadius: "3px",
letterSpacing: "1.5px",
marginTop: "1rem"
}}
type="submit"
className="btn btn-primary "
>
Registrase
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
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
