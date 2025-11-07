import React, { useContext } from "react";
import { Link } from "react-router";
import Authcontext from "../Authcontext/Authcontext";

const Regester = () => {
    const {singupuser, singinwithgoogle , updateprofile ,  setUser} = useContext(Authcontext)


    const handleregedter = (e) => {
        e.preventDefault()

        const name  = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
       
        
        // console.log(name, email, photo, password);

       singupuser(email, password)
  .then(result => {
    const userr = result.user; // ✅ Get the actual Firebase user
    console.log(userr);

    updateprofile({ displayName: name, photoURL: photo })
      .then(() => {
        console.log("Profile updated");

        const userdata = {
          name: name,
          photo: photo,
          email: email,
        };

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userdata),
        })
          .then((res) => res.json())
          .then((data) => console.log("Saved user:", data));

        // ✅ Update React Context state
        setUser({ ...userr, displayName: name, photoURL: photo });
      })
      .catch((error) => console.log("Profile update error:", error.message));
  })
  .catch((error) => console.log("Signup error:", error.message));

        // update and show detail users info

    }


     const singingoogle = () => {
        singinwithgoogle()
        .then(res => {
            console.log(res.user)
            alert('sinig sucessfull!!')
            const newuser = {
                name: res.user.displayName,
                email: res.user.email,
                photUrl: res.user.photoURL,
            }
            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers:{
                     'Content-Type': 'application/json',
                },
                body: JSON.stringify(newuser)
                
            })
            .then(res => res.json())
            .then(data => console.log(data))


           
        })
        .catch(error  => console.log(error.message))
    
     
    }
  return (
    <div>
      <div>
        <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-xl shadow-md mx-auto mt-20">
          <h2 className="text-2xl font-bold text-center text-gray-900">
            Register
          </h2>
          <p className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-600 hover:underline">
              Login Here
            </Link>
          </p>

          <form onSubmit={handleregedter}  className="mt-6 space-y-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>

            {/* Image URL */}
            <div>
              <label
                htmlFor="img"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Profile Image URL
              </label>
              <input
                type="text"
                id="img"
                name="photo"
                placeholder="Paste your image URL"
                className="w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>

            {/* Password */}
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

            {/* Confirm Password */}
            {/* <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="********"
              className="w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div> */}

            {/* Register Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 text-white bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg hover:from-purple-600 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Register
            </button>
          </form>

          <div className="flex items-center justify-center mt-4 space-x-2">
            <span className="text-sm text-gray-500">OR</span>
          </div>

          {/* Google Register Button */}
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
            Sign Up With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Regester;
