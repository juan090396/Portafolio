// eslint-disable-next-line no-unused-vars
import React from 'react';
import ToggleThemeButton  from "./toggleBtn";

// eslint-disable-next-line react/prop-types
const Header = ( { mostrarEsp, cambiarAespanol, cambiarAingles }) => {

    return (

    
        <header className="dark:bg-slate-950 p-4 ">
        <div className=" mx-auto flex items-center justify-between">

        <div> {mostrarEsp ? (
          <div className="text-black font-bold text-lg dark:text-white">Mi Portafolio</div>
      ) : (
          <div className="text-black font-bold text-lg dark:text-white">My Portfolio</div>
      )} 
        </div>

          <ul className="flex space-x-4">
        
          <button onClick={cambiarAespanol} className='hover: cursor-pointer' >
            {mostrarEsp? (<li className='cursor-pointer  border-b-2 border-green-400 ' >
            <img src="https://flagicons.lipis.dev/flags/4x3/es.svg"
            alt="Bandera de España"
            width="30"
            height="30"/>
            </li>)
            :(<li className='cursor-pointer' >
            <img src="https://flagicons.lipis.dev/flags/4x3/es.svg"
            alt="Bandera de España"
            width="30"
            height="30"/>
            </li>)}
          </button>


          <button  onClick={cambiarAingles} className='hover: cursor-pointer ' >
            {mostrarEsp? (<li className='cursor-pointer  '>
              <img src="https://flagicons.lipis.dev/flags/4x3/us.svg"
              alt="Bandera de Estados Unidos"
              width="30"
              height="30"/>
            </li>)
            :(<li className='cursor-pointer border-b-2 border-green-400 '>
            <img src="https://flagicons.lipis.dev/flags/4x3/us.svg"
            alt="Bandera de Estados Unidos"
            width="30"
            height="30"/>
          </li>)}
          </button>
            

            <li className="relative block items-right cursor-pointer">
            <ToggleThemeButton/>
            </li>

          </ul>
        </div>
      </header>
    
          
        
    );
}

export default Header;
