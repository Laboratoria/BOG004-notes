import {Link} from 'react-router-dom'
import {signInWithGoogle} from '../controler/firebase-init'

export default function Home() {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" placeholder="name" />
      </label>
      <label>
        Password:
        <input type="current-password" name="password" placeholder="password" />
      </label>
      <input type="submit" value="LOGIN" /> 
      <input type="submit" value="GOOGLE" onClick={signInWithGoogle}/>
      <h4> You do not have an account?</h4> <Link to= "/register">Sign up</Link>
    </form>
  );
}
