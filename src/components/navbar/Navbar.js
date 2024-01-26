import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { Menu } from "lucide-react"
import SideNavbar from '../sideNav/SideNavbar'
function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)
    const [ShowSideNAvbar,setShowSideNAvbar]=useState(false)
    useEffect(() => {
        const handleResize = () => {
            // Set isNavbarVisible to false when the screen width is less than 600 pixels
            setShowNavbar(window.innerWidth);
        };

        // Initial check on component mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const handleSideNavbar = () => {
        setShowSideNAvbar(!ShowSideNAvbar)
    }
    return (
        <div className='navbar-main'>
            <nav className='nav'>
                <div className="logo">Dev.Nishant</div>
                {showNavbar >= 630 ?
                    <div className='navbar-itmes'>
                        <ul className='unordered-list '>
                            <li><a href='#home'>Home</a></li>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#contact'>Contact</a></li>
                            <li><a href='#work'>Work</a></li>
                        </ul>
                    </div> : <Menu className='hover:cursor-pointer' color='#9EC8B9' onClick={handleSideNavbar} />}
                {ShowSideNAvbar && showNavbar <= 630 && <SideNavbar />}
            </nav>
            <div className='top-left-gradient'></div>
            <div className='middle'></div>
            <div className='right'></div>
            <div className='bottom-right'></div>
        </div>
    )
}
export default Navbar