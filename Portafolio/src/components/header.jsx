// eslint-disable-next-line no-unused-vars
import React from 'react';

const Header = () => {
    return (
        

        <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white font-bold text-lg">Mi Portafolio</div>
          <ul className="flex space-x-4">
          
            <li>
              <a href="#" className="text-white">Bandera españa</a>
            </li>
            <li>
              <a href="#" className="text-white">Bandera usa</a>
            </li>

            <li>
                
                <div> 
                <label className="relative inline-flex items-right cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer"/>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ms-3 text-sm font-medium text-white dark:text-gray-900">Toggle me</span>
                </label>

                </div>
            </li>

          </ul>
        </div>
      </nav>
    
          
        
    );
}

export default Header;
