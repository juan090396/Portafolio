// eslint-disable-next-line no-unused-vars
import React from 'react';
import ToggleThemeButton  from "./toggleBtn";
const Header = () => {
    return (
        

        <header className="dark:bg-slate-950 p-4 ">
        <div className=" mx-auto flex items-center justify-between">
          <div className="text-black font-bold text-lg dark:text-white">Mi Portafolio</div>

          
          <ul className="flex space-x-4">
          
            <li className='cursor-pointer  hover:border-b-2 hover:border-green-400 ' >
            <img src="https://flagicons.lipis.dev/flags/4x3/es.svg"
              alt="Bandera de Estados españa"
              width="30"
              height="30"/>
            </li>

            <li className='cursor-pointer hover:border-b-2 hover:border-green-400 '>

              <img src="https://flagicons.lipis.dev/flags/4x3/us.svg"
              alt="Bandera de Estados Unidos"
              width="30"
              height="30"/>
            </li>

            <li className="relative block items-right cursor-pointer">
            <ToggleThemeButton/>
            </li>

          </ul>
        </div>
      </header>
    
          
        
    );
}

export default Header;
