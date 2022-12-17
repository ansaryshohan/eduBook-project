import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaLaptopCode, FaMoon, FaRegHandPointLeft, FaSun, FaUserGraduate } from 'react-icons/fa';
import './Header.css'
import { AuthContext } from '../../Context/ContextProvider';
import { toast } from 'react-hot-toast';

const Header = () => {
  const [darkmode, setDarkmode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);

  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleStickyNav = () => {
    if (window.scrollY >= 300) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  }
  window.addEventListener('scroll', handleStickyNav)

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('Ready to welcome again.')
        navigate('/login')
      })
      .then(error =>console.error(error) )
  }

  return (
    <div className="sm:max-w-full md:max-w-full lg:w-full">
    <div className={stickyNav ? "sticky-nav" : "navbar-background"}>
      <div className=" navbar relative flex items-center justify-around  p-6 text-white" >
        <div className="flex items-center">
          <Link
            to="/"
            aria-label="Learning website"
            title="Learning website"
            className="inline-flex items-center mr-8"
          >
            <FaLaptopCode className='text-4xl text-orange-300 mr-1' />
            <span className="ml-2 text-3xl font-bold tracking-wide text-white">
              edu<span className='text-orange-300'>BOOK</span>
            </span>
          </Link>
        </div>
        <div>
          <ul className="sm:flex items-center hidden space-x-8 lg:flex lg:px-8 lg:justify-between lg:gap-6 text-2xl">
            <li>
              <NavLink
                to="/home"
                aria-label="Home"
                title="Home"
                className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses/1"
                aria-label="Courses"
                title="Courses"
                className="font-medium tracking-wide text-text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                aria-label="Blog"
                title="Blog"
                className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                aria-label="Frequently asked questions"
                title="Frequently asked questions"
                className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                FAQ
              </NavLink>
            </li>
            {/*dark mode button toggle  */}
            <div onClick={() => setDarkmode(!darkmode)}
              className="text-[#D6DFFF]">
              {
                !darkmode ?
                  <button className='flex items-center gap-2'> <FaSun /> light</button>
                  :
                  <button className='flex items-center gap-2'><FaMoon /> dark</button>
              }
            </div>
          </ul>
        </div>

        {/* the sign in and signOut toggle starts */}
        {
          user?.email ?
            <div className="sm:flex items-center hidden space-x-8 lg:flex lg:justify-center ">
              <div>
                <button          
                aria-label="Sign out"
                  title="Sign out"
                  className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400 text-center"
                  onClick={handleLogOut}
                >
                  Sign out
                </button>
               
              </div>
              <div>
              {
                  user?.photoURL ?
                    <div className="avatar">
                      <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 grid place-items-center tooltip tooltip-open tooltip-warning" title={user.displayName}>
                        <img src={user.photoURL} alt=''  className='w-5 h-5'/>
                      </div>
                    </div>
                  :
                    <FaUserGraduate />
                }
              </div>
            </div>
            :
            <NavLink 
            to="/login"
            className="sm:flex items-center hidden space-x-8 lg:flex lg:justify-center ">
            <div className='flex justify-evenly items-center gap-2'>
              <button          
              aria-label="Sign In"
                title="Sign In"
                className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400 text-center"
                
              >
                Sign In
              </button>
             <FaRegHandPointLeft/>
            </div>
            </NavLink>
        }
        {/* {
        user.photURL? <img src={user.photoURL} alt="" />:
        <img src={profilepic} alt="" className='border bottom-3' />
      } */}

        <div className="lg:hidden">

          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>

          {isMenuOpen && (
            <div className="absolute top-0 left-0 z-10 w-full">
              <div className="p-5 bg-[#00858F] border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="Learning website"
                      title="Learning website"
                      className="inline-flex items-center mr-8"
                    >
                      <FaLaptopCode className='text-4xl text-orange-300 mr-1' />
                      <span className="ml-2 text-3xl font-bold tracking-wide text-white">
                        E<span className='text-orange-300'>Learner</span>
                      </span>
                    </Link>
                  </div>
                  <div>

                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <NavLink
                        to="/home"
                        aria-label="Home"
                        title="Home"
                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses"
                        aria-label="Courses"
                        title="Courses"
                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Courses
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog"
                        aria-label="Blog"
                        title="Blog"
                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/faq"
                        aria-label="Frequently asked questions"
                        title="Frequently asked questions"
                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        FAQ
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/login"
                        aria-label="Sign in"
                        title="Sign in"
                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Sign in
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Header;