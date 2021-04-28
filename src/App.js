import { useRef } from "react";
import Input from "./Input";

function App() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const validate = () => {
    if(!emailRef.current.value) {
      emailRef.current.setError('Email is required!');
      return false;
    }
    if(!passwordRef.current.value) {
      passwordRef.current.setError('Password is required!');
      return false;
    }
    return true;
  }

  const onSubmit = () => {
    const validInput = validate();
    const body = {
      email: emailRef.current.value, 
      password: passwordRef.current.value, 
    };
    if(!validInput) return;
    console.log(body, validInput);

    setTimeout(() => {
      emailRef.current.clear('');
      passwordRef.current.clear('');
    }, 800);
  }
  
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="card" style={{ width: '25rem' }}>
          <div className="card-header">Login - {console.count()}</div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <Input 
                  type="email" 
                  id="exampleInputEmail1" 
                  aria-describedby="emailHelp" 
                  ref={emailRef}
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <Input 
                  type="password" 
                  id="exampleInputPassword1" 
                  ref={passwordRef}
                />
              </div>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={onSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
