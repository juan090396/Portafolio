// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Experience = ({mostrarEsp}) => {
    return (
    
    <section  className=' bg-slate-200 flex-col md:flex-row justify-center text-center dark:bg-slate-800'>
       
       <div className=' p-28 pt-5 pb-12 ' >
            {mostrarEsp?(<h2 className="text-4xl text-center m-2 p-2 font-bold underline mb-8 dark:text-white">Experiencia Laboral</h2>)
            :(<h2 className="text-4xl text-center m-2 p-2 font-bold underline mb-8 dark:text-white">Work Experience</h2>)}    
        <div className=" flex items-center justify-start text-left gap-12 ">
            
            <img className=' w-36 h-20 border-2 rounded-full mb-48' src='../../public/logoprovectis.png' alt='logo provectis' ></img>

            <div  >
                {mostrarEsp?(<h3 className=" text-2xl font-bold dark:text-white underline mb-2 " >Agente Mesa de ayuda</h3>)
                :(<h3 className=" text-2xl font-bold dark:text-white underline mb-2 " >Help Desk Agent</h3>)}
            <div className='' >
                <p>
                    <a href='https://www.provectis.cl/' target="_blank" rel="noopener noreferrer" className='font-bold text-blue-500 underline text-base '>Provectis SPA</a>
                </p>
                
                 {mostrarEsp?(<p className='dark:text-white text-sm mb-2' >Febrero-2023 - Presente</p>)
                 :(<p className='dark:text-white text-sm mb-2' >February-2023 - Present</p>)}

                 {mostrarEsp ?(<p className='dark:text-white text-base' >Trabajo en Provectis como agente de mesa de ayuda, brindo soporte IT de primer nivel a usuarios que requieren asistencia. </p>)
                 :(<p className='dark:text-white text-base'>I work at Provectis as a help desk agent, providing first-level IT support to users who require assistance. </p>)}

                 {mostrarEsp? (<p className='dark:text-white text-base mb-4' >Responsabilidades y Tecnologias Usadas:</p>)
                 :(<p className='dark:text-white text-base mb-4' >Responsibilities and Technologies Used:</p>)}
                 

                    {mostrarEsp? (<div className=' flex flex-wrap items-left justify-start gap-2 ' >
                        <ul className=' dark:text-white list-disc pl-2 '>
                            <li>Responder Llamadas</li>
                            <li>Responder Correos</li>
                            <li>Instalacion de Sofware</li>
                            <li>Creacion de Cuentas</li>
                            <li>Asignacion de Usuarios, Roles Y Permisos</li>
                            <li>Soporte a Computares y Sofware empresarial</li>
                            <li>Conexion y Soporte a Impresoras</li>
                        </ul>
                        
                        <div className='ml-10' >
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
                    ):(
                    <div className=' flex flex-wrap items-left justify-start gap-2 ' >
                        <ul className=' dark:text-white list-disc '>
                            <li>Answer Calls</li>
                            <li>Answer Mails</li>
                            <li>Software installation</li>
                            <li>Account Creation</li>
                            <li>Assignment of Users, Roles and Permissions</li>
                            <li>Computer and Business Software Support</li>
                            <li>Connection and Support to Printers</li>
                        </ul>
                    <div className='ml-10' >
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
                )}
                    
                 
            </div>
            
            </div>
        
        </div>

        <div className=" flex items-center justify-start text-left gap-12 mt-8  ">
            
            <img className=' w-60 h-20 border-2 rounded-full mb-24 mr-5 ' src='../../public/imaturlogo.PNG' alt='logo imatur' ></img>

            <div  className='pl-10' >
                {mostrarEsp? (<h3 className=" text-2xl font-bold dark:text-white underline mb-2 " >Traductor</h3>)
                :(<h3 className=" text-2xl font-bold dark:text-white underline mb-2 " >Translator</h3>)}
            <div className='' >
                <p>
                    <a href='https://web.facebook.com/imatur.cumana.9?locale=es_LA' target="_blank" rel="noopener noreferrer" className='font-bold text-blue-500 underline '>IMATUR</a>
                </p>
                 {mostrarEsp?( <p className='dark:text-white text-sm mb-2 ' >Enero-2021 - Diciembre 2022</p>)
                 :(<p className='dark:text-white text-sm mb-2 ' >January 2021 - December 2022</p>)}
                 { mostrarEsp? (<p className='dark:text-white text-base'> Trabaje como miembro del equipo de traduccion del Instituto municipal autonomo de turismo (Imatur), encargado de traducir publicaciones para redes sociales y todo el material audiovisual proporcionado por la institucion para promover el turismo en cumana, estado sucre, venezuela. Otra de mis funciones era trabajar como interprete en caso de algun visitante que necesita comunicarse.</p>)
                 :(<p className='dark:text-white text-base'>I worked as a member of the translation team at the Autonomous Municipal Institute of Tourism (IMATUR), responsible for translating social media publications and all audiovisual material provided by the institution to promote tourism in Cumaná, Sucre State, Venezuela. Another of my responsibilities was to work as an interpreter in case of any visitors needing communication assistance.</p>)}
            </div>
            
            </div>
        
        </div>

        </div>   
        
    </section >
    
  
    );
}

export default Experience;
