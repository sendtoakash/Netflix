import { useState } from "react"
import Header from "../Header/Header"

const Body = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleCLick = () => {
    setIsSignIn(!isSignIn)
  }
  return (
    <>
      <Header />
      <div>
        <img className='w-full h-screen' src="https://assets.nflxext.com/ffe/siteui/vlv3/7ea4545e-42d3-4ebf-82fd-0e1984dc6375/web/IN-en-20260316-TRIFECTA-perspective_789c5633-3949-4708-8e6c-8ddfd22ed696_large.jpg" alt="background-image" />
        <form className="absolute inset-0 flex justify-center items-center">
          <div className="bg-black/70 p-8 rounded cursor-pointer">
            <h1 className="text-white my-10 font-bold">{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
            <input
              className="block m-2 p-2 w-64"
              type="text"
              placeholder="Email ID"
            />
            <input
              className="block m-2 p-2 w-64"
              type="password"
              placeholder="Password"
            />{ !isSignIn ?
              <input
                className="block m-2 p-2 w-64"
                type="password"
                placeholder="Confirm Password"
              /> : ''
            }
            <button className="block mx-2 my-10 p-2 w-64 bg-red-600">{isSignIn ? 'Sign In' : 'Sign Up'}</button>
            <h3 className="text-white" onClick={handleCLick}>{isSignIn ? 'New to Netfilx- Sign Up' : 'Existing User - Sign In'}</h3>
          </div>
        </form>
      </div>
    </>
  )
}

export default Body
