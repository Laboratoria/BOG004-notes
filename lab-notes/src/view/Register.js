import {Link} from 'react-router-dom'
import React from "react";

const SingIn = [];
export default function Register() {
    return (
    <div>
     <form>
      <label>
        Name:
        <input type="text" name="name" placeholder="name complet" />
      </label>
      <label>
        Email:
        <input type="email" name="email" placeholder="email" />
      </label>
      <label>
        Password:
        <input type="new-password" name="new-password" placeholder="password" />
      </label>
      <label>
        Confirmation:
        <input type="new-password" name="new-password" placeholder="confirm password" />
      </label>
      <input type="submit" value="SIGN IN"/> <Link to={`/notes/${SingIn}`}></Link> 
      <h4> Do you already have an account?</h4> <Link to= "/">Enter</Link>
    </form>
    </div>
    );
  }