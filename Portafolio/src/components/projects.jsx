// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Projects = () => {
    return (
    
        <section className=' dark:bg-slate-950 p-4'>
        
            <div className="text-center ">
            
                <h2 className="text-3xl font-bold underline p-5 m-2 dark:text-white ">Proyectos Personales</h2>
            
            <div className=' flex flex-wrap min:flex-col  justify-center'>

                <div className=' mb-4 md:mb-0 text-center m-4 p-5 border-4 rounded-lg hover:opacity-80 hover:border-green-600  '>
               
                <Card sx={{ maxWidth: 345 }}>
                    <div className='  flex items-center justify-center p-5 m-5 ml-10  w-60 h-40' >
                    <CardMedia
                    className='border-2 rounded-full'
                    component="img"
                    alt="ztypelogo"
                    image="../../public/ztypeclon.png"/>
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Z Type Game
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Clon de juego z type para mejorar velocidad de typeo en teclado con palabras en español e ingles.
                        Listado de tecnologias utilizadas: React.
                        </Typography>
                    </CardContent>

                    <div className='flex items-center justify-center' >
                        <CardActions>
                            <a className='border-4 rounded-full bg-green-50 '  href='' target="_blank" rel="noopener noreferrer"  > <Button size="small">Probar</Button> </a>
                        </CardActions>
                    </div>
                </Card>

            </div>

            <div className=' mb-4 md:mb-0 text-center m-4 p-5 border-4 rounded-lg  hover:opacity-80  hover:border-green-600   '>
               
                <Card sx={{ maxWidth: 345 }}>
                    <div className=' flex items-center justify-center p-5 m-5 ml-10  w-60 h-48' >
                    <CardMedia
                    className='border-2 rounded-full'
                    component="img"
                    alt="Ecommerse"
                    image="../../public/ecommerse.PNG"/>
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Ecommerse
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Proyecto Ecommerse con Angular. 
                        </Typography>
                    </CardContent>

                    <div className='flex items-center justify-center' >
                        <CardActions>
                            <a className='border-4 rounded-full bg-green-50 ' href='' target="_blank" rel="noopener noreferrer"  > <Button size="small">Probar</Button> </a>
                        </CardActions>
                    </div>
                </Card>

            </div>

            <div className='mb-4 md:mb-0 text-center m-4 p-5 border-4 rounded-lg  hover:opacity-80 hover:border-green-600  '>
               
               <Card sx={{ maxWidth: 345 }}>
                   <div className=' flex items-center justify-center p-5 m-5 ml-10  w-60 h-40' >
                   <CardMedia
                   className='border-2 rounded-full'
                   component="img"
                   alt="spotify logo"
                   image="../../public/copia spotify.PNG"/>
                   </div>
                   <CardContent>
                       <Typography gutterBottom variant="h5" component="div">
                       Clon de Spotify
                       </Typography>
                       <Typography variant="body2" color="text.secondary">
                       Clon de spotify creado con react y que es funcional.
                       </Typography>
                   </CardContent>

                   <div className='flex items-center justify-center' >
                       <CardActions>
                           <a className='border-4 rounded-full bg-green-50 ' href='' target="_blank" rel="noopener noreferrer"  > <Button size="small">Probar</Button> </a>
                       </CardActions>
                   </div>
               </Card>

           </div>

            </div>
            </div>
         
        </section>
    );
}

export default Projects;
