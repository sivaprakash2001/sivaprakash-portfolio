import React from "react";
import Footer from "../components/Footer";
import Heroimage from "../components/Heroimage";
import Navbar from "../components/Navbar";
import Work from "../components/work";
function Home() {
   return(
    <div>
<Navbar/>
<Heroimage/>  
<Work/>
<Footer/>
    </div>
   )
}
export default Home;
