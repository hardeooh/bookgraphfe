import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
 return (
   <div>
     <Navbar/>
     <Hero/>
     <Component {...pageProps}/>
   </div>
 );
}

export default MyApp;


// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
