// eslint-disable-next-line no-unused-vars
import React from 'react';

const Resume = () => {
    return (
    
    
        <div className='   flex-col md:flex-row justify-center  dark:bg-slate-950  '>
        <div className=" mb-4 md:mb-0 text-center p-10 ">
          <h1 className=" text-8xl font-bold underline font-serif dark:text-white  ">Juan Figueroa</h1>
        </div>
      
        <div className="md:ml-4 text-center m-4 p-4 pt-10 ">
          <h2 className="text-4xl font-bold underline font-serif dark:text-white ">Web Developer</h2>
          
          <div className=" flex justify-center gap-2 mt-2 m-5 p-5 pt-10 ">
            <img src='../../public/HTML.png' alt='HTML5logo' ></img>
            <img src='../../public/CSS.png' alt='csslogo' ></img>
            <img src='../../public/javascript.png' alt='javascriptlogo' ></img>
            <img src='../../public/typescript.png' alt='typescriptlogo' ></img>
            <img src='../../public/React JS.png' alt='Reactlogo' ></img>
            <img src='../../public/angular JS.png' alt='Angularjslogo' ></img>
            <img src='../../public/NodeJS.png' alt='nodejslogo' ></img>
            
          </div>
        </div>
      
        <div className="mt-4 md:ml-4 pt-5 pb-8 text-center  ">
          <a href='https://drive.google.com/file/d/1udyLFLfZGYYdWKAn1EllJDgJbY7NpsIp/view?usp=drive_link' target="_blank" rel="noopener noreferrer" >
          <button className=" mr-2 mb-2 md:mb-0 px-2 py-3 w-40 h-14 
          border-none rounded-3xl  font-semibold text-base 
          bg-gradient-to-r from-green-800 to-green-500 text-white shadow-md 
          hover:shadow-2xl hover:bg-gradient-to-l hover:from-green-800 hover:via-green-500 hover:to-green-400 hover:transition duration-500 ease-linear">
            Descargar CV
          </button>
        </a>
        
        <a href='https://www.linkedin.com/in/juan-jose-figueroa-garcia-95a366175/' target="_blank" rel="noopener noreferrer" >
          <button className=" w-40 h-14 border-none rounded-3xl  font-semibold text-base  bg-gradient-to-r from-blue-800 via-blue-500 to-blue-400 text-white font-serif shadow-md hover:shadow-2xl hover:bg-gradient-to-l hover:from-blue-800 hover:via-blue-500 hover:to-blue-400 hover:transition duration-500 ease-linear">
            LinkedIn
          </button>
        </a>
      
  </div>
    </div>
    );
}

export default Resume;
