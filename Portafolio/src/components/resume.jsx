// eslint-disable-next-line no-unused-vars
import React from 'react';

const Resume = () => {
    return (
    
    
        <div className=' bg-green-300  flex-col md:flex-row justify-center p-4   '>
        <div className="mb-4 md:mb-0 text-center m-4 p-4 ">
          <h1 className="text-3xl font-bold underline">Juan Figueroa</h1>
        </div>
      
        <div className="md:ml-4 text-center m-4 p-4 ">
          <h2 className="text-2xl font-bold underline">Web Developer</h2>
          
          <div className=" flex justify-center gap-2 mt-2 m-2 p-2 ">
            <p>html</p>
            <p>css</p>
            <p>js</p>
          </div>
        </div>
      
        <div className="mt-4 md:ml-4 mb-4 text-center ">
    <button className="mr-2 mb-2 md:mb-0 px-4 py-3 bg-blue-500 text-white rounded">boton para descargar cv</button>
    <button className="px-4 py-3 bg-green-500 text-white rounded">boton para ver LinkedIn</button>
  </div>
     
     
    <hr/>
    </div>
    );
}

export default Resume;
