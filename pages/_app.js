import '../styles/globals.css';
import "../Components/navbar.js";
import NavBar from '../Components/navbar.js';
import Footer  from '../Components/footer';
// import Blog from '../Components/Blogs';

function MyApp({ Component, pageProps }) {
  return ( <>
  <NavBar/>,
  <Component {...pageProps} />,
  
  <Footer/>
  </>)
}

export default MyApp
