import { useState } from 'react'
import { getCsrfToken, getProviders, getSession, signIn } from "next-auth/react"
import { FcGoogle } from 'react-icons/fc' 

export default function SignIn({ csrfToken, providers }) {
  const [placeholder, setPlaceholder] = useState('Enter your email')

  const focusHandler = () => {
    setPlaceholder("")
  }

  return ( 
    <div className="flex flex-col justify-center items-center rounded-3xl w-1/5 m-auto mt-20">
      <h1 className="p-8 mt-10 text-3xl uppercase font-medium">Sign In</h1>
      <form method="post" action="/api/auth/signin/email"
        className="p-8 flex flex-col justify-center items-center ">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <input 
          onFocus={focusHandler}
          type="email" id="email" name="email" placeholder={placeholder}
          className="w-96 h-10 text-2xl"/>

        <button type="submit" 
        className="text-2xl px-7 py-3 w-50 mt-10 text-white bg-green-700 font-medium leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex justify-center items-center mb-3">
          Submit
        </button>
      </form>
      <div className="flex justify-center">
        <h1>OR</h1>
      </div>
      <div className="mt-20">
        {providers && Object.values(providers).filter(e=>e.name!=="Email").map((provider) => (
          <div key={provider.name} className="flex flex-col justify-center items-center">
            <div className="pb-10">
              <button onClick={() => signIn(provider.id,process.env.NEXT_AUTH_URL)} className="text-2xl px-7 py-3 text-white bg-blue-500 font-medium leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3">
              <FcGoogle className="mr-5"/>Sign in with {provider.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context)
  const { req } = context
  const session = await getSession({ req })
  const providers = await getProviders()
  if(session){
    return{
      redirect: {destination: "/"}
    }
  } 
  return {
    props: { csrfToken, providers }
  }
}