import gsap from 'gsap';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { close, menu } from "../assets";
import vulks from '../assets/vulks.png';
import { navLinks } from "../constants";
import { styles } from "../styles.js";

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {

    const tl = gsap.timeline();

    tl.fromTo(
      '.logoEffectGsap',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1 },
      { delay: 0.7, ease: 'expo.inOut' }, '-=0.5')

      .fromTo(
        '.menuEffectGsap',
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1 },
        { delay: 0.7, ease: 'expo.inOut' }, '-=0.5')

      .fromTo(
        '.textHomeEffectGsap-1',
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1 },
        { delay: 0.7, ease: 'expo.inOut' }, '-=0.5')

      .fromTo(
        '.textHomeEffectGsap-2',
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1 },
        { delay: 0.7, ease: 'expo.inOut' }, '-=0.5')

      .fromTo(
        '.textHomeEffectGsap-3',
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1 },
        { delay: 0.7, ease: 'expo.inOut' }, '-=0.5')

      .fromTo(
        '.moonEffectGsap',
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1 },
        { delay: 0.7, ease: 'expo.inOut' }, '-=0.5')
  }, [])


  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}>
          <img src={vulks} alt="logo da aplicação" className="w-10 h-10 object-contain logoEffectGsap" />
          <p className="text-white text-[18] font-bold cursor-pointer flex logoEffectGsap">
            Vulquimar Silva
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 menuEffectGsap">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{`${link.title}`}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-x1`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{`${link.title}`}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar