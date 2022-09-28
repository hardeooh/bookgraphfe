import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
 return (
  <SessionProvider session={session}>
    {/* <Navbar/>
    <Hero/> */}
    <Component {...pageProps}/>
  </SessionProvider>
 );
}

export default MyApp;
