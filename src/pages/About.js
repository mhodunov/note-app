import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation.js"

const About = () => {
  return (
    <>
    <h1>About</h1>
    <div className="jumbotron">
  <h1 className="display-4">Hello!</h1>
  <p className="lead">This is a simple React app for making some notes and todos.</p>
  <p className="lead">
    <NavLink className="btn btn-primary btn-lg" to={"/"} exact>Use app</NavLink>
  </p>
</div>
    </>
  )
}

export default About;