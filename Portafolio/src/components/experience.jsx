// eslint-disable-next-line no-unused-vars
import React from 'react';

const Experience = () => {
    return (
    
    <section  className=' bg-slate-200 flex-col md:flex-row justify-center text-center dark:bg-slate-800'>
       
       <div className=' p-28 pt-8  ' >
            <h2 className="text-4xl text-center m-2 p-2 font-bold underline mb-8 dark:text-white">Experiencia</h2>    
        
        <div className=" flex items-center justify-start text-left gap-12 ">
            
            <img className=' w-36 h-20 border-2 rounded-full mb-48' src='../../public/logoprovectis.png' alt='logo provectis' ></img>

            <div  >
                <h3 className=" text-2xl font-bold dark:text-white underline mb-2 " >Agente mesa de ayuda</h3>
            
            <div className='' >
                <p>
                    <a href='https://www.provectis.cl/' target="_blank" rel="noopener noreferrer" className='font-bold text-blue-500 underline text-base '>Provectis SPA</a>
                </p>
                 <p className='dark:text-white text-sm mb-2' >Febrero-2023 - Presente</p>
                 <p className='dark:text-white text-base' >Trabajo en Provectis como agente de mesa de ayuda, brindo soporte IT de primer nivel a usuarios que requieren asistencia. </p>
                 <p className='dark:text-white text-base mb-4' >Responsabilidades y Tecnologias Usadas:</p>
                 

                    <div className=' flex flex-wrap items-left justify-start gap-2 ' >
                        <ul className=' dark:text-white list-disc '>
                            <li>Responder Llamadas</li>
                            <li>Responder Correos</li>
                            <li>Instalacion de Sofware</li>
                            <li>Creacion de Cuentas</li>
                            <li>Asignacion de Usuarios, Roles Y Permisos</li>
                            <li>Soporte a Computares y Sofware empresarial</li>
                            <li>Conexion y Soporte a Impresoras</li>
                        </ul>
                        
                        <div className='ml-5' >
                            <ul className=' dark:text-white list-disc '>
                                <li>Windows Server</li>
                                <li>Active Directory</li>
                                <li>Escritorio Remoto</li>
                                <li>Outlook</li>
                                <li>Anydesk</li>
                                <li>Jira</li>
                                <li>Vpn</li>
                            </ul>
                        </div>

                    
                    
                    </div>
                    
                 
            </div>
            
            </div>
        
        </div>

        <div className=" flex items-center justify-start text-left gap-12 mt-8  ">
            
            <img className=' w-36 h-20 border-2 rounded-full mb-24 ' src='../../public/logoprovectis.png' alt='logo provectis' ></img>

            <div  >
                <h3 className=" text-2xl font-bold dark:text-white underline mb-2 " >Traductor</h3>
            
            <div className='' >
                <p>
                    <a href='' target="_blank" rel="noopener noreferrer" className='font-bold text-blue-500 underline '>IMATUR</a>
                </p>
                 <p className='dark:text-white text-sm mb-2 ' >Enero-2021 - Diciembre 2022</p>
                 <p className='dark:text-white text-base'> Trabaje como miembro del equipo de traduccion del Instituto municipal autonomo de turismo (Imatur), encargado de traducir publicaciones para redes sociales y todo el material audiovisual proporcionado por la institucion para promover el turismo en cumana, estado sucre, venezuela. Otra de mis funciones era trabajar como interprete en caso de algun visitante que necesita comunicarse.</p>
            </div>
            
            </div>
        
        </div>

        </div>   
        
    </section >
    
  
    );
}

export default Experience;
