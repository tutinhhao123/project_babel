import Navbar_thesus from './navBar.js'
import Topnavbar from './topnavbar.js'
import Footer from './footer.js'
import Main_content from './main_content.js'
import Front_navbar from './font-navbar.js'
export default function Trangchu()
{
    return(
        <>
        <Topnavbar/>
        <Navbar_thesus/>
        <Main_content/>
        <Footer/>
        {/* test front-navbar  */}
        <Front_navbar/>
        </>
    );
}