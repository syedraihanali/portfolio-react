import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillFacebook } from "react-icons/ai";

function Footer() {
  const links = [
    {
      id: 1,
      child: (
        <>
         Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/syedraihanali",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://www.github.com/syedraihanali",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:syedraihanali65@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
           Facebook <AiFillFacebook size={30} />
        </>
      ),
      href: "https://www.facebook.com/syedraihan0",
      style: "rounded-br-md",
    },
    {
      id: 5,
      child: (
        <>
           <BsFillTelephoneFill size={30} />+8801996032307
        </>
      ),
      href: "tel:+8801996032307",
      style: "rounded-br-md",
    },
  ];
  return (
    <div
    className="w-full h-full bg-gray-800 p-4 text-white"
  >
    <footer className='flex justify-center items-center'>
  <ul className='flex md:flex-row flex-col'>
    {links.map(({ id, child, href, style }) => (
      <li
        key={id}
        className={
          "flex  items-center px-4 py-2 hover:scale-110 hover:rounded-md duration-300 " +
          " " +
          style
        }
      >
        <a
          href={href}
          className="flex justify-between items-center w-full text-white"
          target="_blank"
          rel="noreferrer"
        >
          {child}
        </a>
      </li>
    ))}
  </ul>
</footer>

    </div>
  )
}

export default Footer;