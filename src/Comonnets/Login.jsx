import React, { useContext } from 'react';
import { Link } from 'react-router';
import Authcontext from '../Authcontext/Authcontext';

const Login = () => {
    const {loginuser, singinwithgoogle} = useContext(Authcontext);   /* here should be having the usecintext not the usestare */
    
    const handlelogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
         console.log("here the function was called succesfully !!!");

        // console.log(email, password)
        // auth login here
        loginuser(email, password)
        .then(result => console.log(result.user) )
        .catch(error => console.log(error))


    }

    const singingoogle = () => {
        singinwithgoogle()
        .then(res => console.log(res.user))
        .catch(error  => console.log(error.message))
    
     
    }




    return (
        <div>
              <div>
      <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-xl shadow-lg mx-auto mt-20">
        <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
        <p className="text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <Link to='/regester' href="#" className="text-purple-600 hover:underline">
            Register Now
          </Link>
        </p>

        <form onSubmit={handlelogin}  className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              className="w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div className="text-right">
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg hover:from-purple-600 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center justify-center mt-4 space-x-2">
          <span className="text-sm text-gray-500">OR</span>
        </div>

        <button
          type="button"
          onClick={singingoogle}
          className="flex items-center justify-center w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Sign In With Google
        </button>
      </div>
    </div>
        </div>
    );
};

export default Login;