import type { NextPage } from 'next'
import {FormEvent, useState ,useEffect } from "react";
import Navbar from './component/Navbar';
import Footbar from './component/Footbar';
import Link from 'next/link'
import FootbarFlower from './component/FootbarFlower';
import ButtonLoading2 from './component/ButtonLoading2';
import localFont from  'next/font/local'
import { motion , AnimatePresence  } from 'framer-motion';
import { version } from 'react';

import styles from '../styles/Home.module.css'

const poppins = localFont({
    src: [
      {
        path: '../public/Bacalisties.woff2',
        weight: '400'
      }
    ],
    variable: '--font-poppins'
  })
  const myFont = localFont({ src: '../public/Bacalisties.woff2' })



const Home: NextPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [license_plate, setlicense_plate] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const handleClickLoad = () => {
     
    };
    const [follow, setFollow] = useState('');
    const [message, setMessage] = useState('');
    const [team, setTeam] = useState('');

  

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);
  
        console.log(Date.now())
        const timestamp = new Date().toLocaleString() + ""

        let form = {
            timestamp,
            name,
            email,
            phone,
            message,
            follow,
            license_plate,
            team
        }

        const rawResponse = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
        const content = await rawResponse.json();

        // print to screen
        //alert(content.data.tableRange)
        setIsSuccess(true);

        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(false);
          }, 5000);



       
          
        // Reset the form fields
        setMessage('')
        setPhone('')
        setName('')
        setEmail('')
        setFollow('default')
        setTeam('')
        setlicense_plate('')
    }

    return (

        
        <main className="bg-gray-100 min-h-screen main h-screen  snap-y snap-mandatory overflow-scroll overflow-x-hidden">

<Navbar />


                         {/* Landing pages */} 
            <div className="snap-start max-w-xl  pb-28   mx-auto bg-scroll bg-auto bg-center bg-no-repeat bg-white dark:bg-[#BDC1A3] h-[844px] text-black dark:text-black">
                
               
            <br></br><br></br><br></br><br></br><br></br><br></br>

            <div className=" rounded-t-full shadow-2xl shadow-black h-full bg-[#F4F3EE] ">
            <br></br><br></br>
            <AnimatePresence>
            <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity:1.0 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring" , duration : 5 ,delay:0 }}
      viewport={{ once: true }}
      className=""> 
                  <img className="h-72 my-auto mx-auto flex " src="logo.png" alt="image description"/>   
                {/* <div className='text-center mx-auto my-auto  pt-28'> <p className='text-5xl font-sans lg:font-serif rotate-350'>Pimchanok</p>
                <p className={styles.testFont}  >abcd</p>
                <p className='text-md mt-3 font-sans md:font-serif '>&</p>
                <p className='text-5xl font-sans md:font-serif rotate-350'>Passakorn</p></div>*/} 
      </motion.div>
</AnimatePresence>

            

                <AnimatePresence>
            <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity:1.0 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring" , duration : 5 ,delay:0.25 }}
      viewport={{ once: true }}
      className=""> 
               <div className='text-center mx-auto my-auto mt-2 '> 26 . 08 . 2023</div>
                    </motion.div>
</AnimatePresence>
               
<AnimatePresence>
            <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity:1.0 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring" , duration : 5 , delay:0.5 }}
      viewport={{ once: true }}
      className=""> 
              <div className='text-center mx-auto my-auto tracking-wide'> # P R I M O O B</div>
                  </motion.div>
</AnimatePresence>
                


                <AnimatePresence>
            <motion.div
      initial={{ y: 100 , opacity:0 }}
      whileInView={{ y: 0 , opacity:100 }}
      exit={{ y: 0 , opacity:0 }}
      transition={{ type: "spring" , duration : 5 }}
      viewport={{ once: true }}
      className="bg-[#F4F3EE]"> 
                <img className="h-auto max-w-full w-max flex " src="flower4.png" alt="image description"/>
      </motion.div>
</AnimatePresence>


                </div>   
            </div>

                     {/* Landing pages couple */} 
                     <div className="snap-start max-w-xl bg-cover  mx-auto bg-scroll bg-auto bg-my_bg3 bg-center h-[844px] text-black dark:text-black  ">
                
               
              


  {/*
                <video autoPlay muted className="w-full">
    <source
      src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>

 */} 









<br></br><br></br><br></br><br></br><br></br>
                <div className='flex flex-row mx-auto my-auto bg-gray-50   dark:bg-white text-black dark:text-black rounded-lg  mr-10 ml-10'>
                   
                   <div className='text-center mx-auto my-auto'> 
                    <p className='text-2xl  pr-5 text-[#8B6D5D] mt-10'>
                        &nbsp;&nbsp;&nbsp;&nbsp;WITH GREAT JOY, WE INVITE YOU TO CELEBRATE OUR MARRIAGE&nbsp;
                        </p>
                   
                   </div>
                
                </div>


                <div className='flex flex-row mx-auto my-auto bg-gray-50   dark:bg-white text-black dark:text-black   mr-10 ml-10 '>
                   
                   <div className='text-center mx-auto my-auto'> 
                   <AnimatePresence>
            <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity:1.0 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring" , duration : 5 ,delay:0 }}
      viewport={{ once: true }}
      className=" "> 
                  <img className="h-20 my-auto " src="ring.png" alt="image description"/>   
                {/* <div className='text-center mx-auto my-auto  pt-28'> <p className='text-5xl font-sans lg:font-serif rotate-350'>Pimchanok</p>
                <p className={styles.testFont}  >abcd</p>
                <p className='text-md mt-3 font-sans md:font-serif '>&</p>
                <p className='text-5xl font-sans md:font-serif rotate-350'>Passakorn</p></div>*/} 
      </motion.div>
</AnimatePresence>

                   
                   </div>
                
                </div>


                <div className='flex flex-row mx-auto my-auto bg-gray-50 dark:bg-white text-black dark:text-black rounded-lg mr-10 ml-10  '>
                   
                <div className="basis-1/2 text-center  border-black-500 m-2 "> 
              
                    <p className='text-xl'>BOOM</p>
                  </div>
                  <div className="basis-1/2 text-center  border-black-500 m-2 "> 
              
              <p className='text-xl'>PIM</p>
            </div>


                
                </div>


                
                <br></br>
                <br></br>
                <div className='flex flex-row mx-auto my-auto  text-black dark:text-black rounded-lg  mr-10 ml-10'>
                <div className="basis-1/2 text-center  border-black-500 mr-1 "> 
                <img className="rounded-lg drop-shadow-lg h-auto" src="https://i.imgur.com/qsXg4fK.png" alt="image description"/>
            

                <p></p>
                  </div>

                  <div className="basis-1/2 text-center  border-black-500 ml-1 "> 
                <img className="rounded-lg drop-shadow-lg  h-auto" src="https://i.imgur.com/FAhWiCU.png" alt="image description"/>
                    
                    <p></p>
                  </div>
  
  
                
                </div>



                </div>  

                      {/* DATE and Location and dress code */} 
            <div className="snap-start max-w-xl mx-auto py-16 bg-scroll bg-[#F4F3EE] bg-auto bg-center bg-no-repeat h-[844px] p-3">
            <br></br>

    


            <AnimatePresence>
            <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity:1.0 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring" , duration : 2 , delay:0.1 }}
      viewport={{ once: true }}
      className=""> 
           <div className=' flex-row mx-auto my-auto flex bg-gray-50 drop-shadow-lg  dark:bg-white text-black dark:text-black rounded-2xl mr-5 ml-5'>
                        
                    <div className="basis-1/12 text-center "> 


                    
                   
                  
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 ml-6 mt-3 mb-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                    </svg>
                    
                    </div>
                    


                    <div className="basis-11/12 text-center my-auto"> 

                     <span className='text-xl text-gray-900 dark:text-black text-black '>วันเสาร์ที่ </span> <span className='text-4xl b'>&nbsp;26&nbsp;</span><span className='text-xl'>สิงหาคม 2566</span>   


                    


                     </div>
                    
                
                            

        
                </div>
    </motion.div>
  </AnimatePresence>


<br></br>


<AnimatePresence>
            <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity:1.0 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring" , duration : 2 , delay:0.1 }}
      viewport={{ once: true }}
      className=""> 
           <div className=' flex-row mx-auto my-auto flex bg-gray-50 drop-shadow-lg  dark:bg-white text-black dark:text-black rounded-2xl mr-5 ml-5'>
                        
                    <div className="basis-1/12 text-center "> 


                    
                   

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 ml-6 mt-8 mb-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>

                    
                    </div>
                    


                    <div className="basis-11/12 text-center my-auto"> 

                    



                     <span className='text-md text-gray-900 dark:text-black text-black '> CDC Ballroom 2nd floor (Building E) </span>  <br></br>
                     <span className='text-md b'>@ Crystal Design Center CDC </span> <br></br>
                     <span className='text-md'>(Praditmanutham Road)</span>   


                    


                     </div>
                    
                
                            

        
                </div>
    </motion.div>
  </AnimatePresence>




           
                
                
                <br></br>
                



                <AnimatePresence>
            <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity:1.0 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring" , duration : 2 , delay:0.1 }}
      viewport={{ once: true }}
      className=""> 
           <div className=' flex-row mx-auto my-auto    rounded-2xl mr-5 ml-5'>
     
                    


                    <div className="basis-1 text-center my-auto "> 

                     
            <Link href="https://goo.gl/maps/u6BUnCyKnZ88fEPs7"> <button type="button" className=" w-50  rounded-full 
                    text-[#16243C] hover:text-white border 
                     border-[#16243C] hover:bg-[#16243C] focus:ring-4 
                     focus:outline-none focus:ring-[#16243C] font-medium 
                      text-sm px-5 py-1 text-center mr-2  
                     dark:border-[#16243C] dark:text-[#16243C] dark:hover:text-white
                      dark:hover:bg-[#16243C] dark:focus:ring-[#16243C]">Get direction &gt;</button>
</Link>
                   
                    


                     </div>
                    
                
                            

        
                </div>
    </motion.div>
  </AnimatePresence>




                <br></br>
         
              


                <AnimatePresence>
            <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity:1.0 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring" , duration : 2 , delay:0.3 }}
      viewport={{ once: true }}
      className="">  
              <div className=' mx-auto bg-gray-50 drop-shadow-lg my-auto   dark:bg-white text-black dark:text-black rounded-2xl mr-5 ml-5 pt-2'>
            
             
                <div className=" m-2 mx-auto my-auto ml-10 ">
                  
                <div className="flex flex-row ">
                  <div className="basis-2/5">
                
                  <img className="h-16 w-16 my-auto" src="timeline1.png" alt="image description"/>   
                  </div>
                  <div className="basis-2/5 mt-6 ">13.29</div>
                  <div className="basis-2/5 mt-6 mr-10">แห่ขันหมาก</div>
                </div>

                </div>

                <div className=" m-2 mx-auto my-auto ml-10 ">
                  
                  <div className="flex flex-row ">
                    <div className="basis-2/5">
                  
                    <img className="h-16 w-16 my-auto " src="timeline2.png" alt="image description"/>   
                    </div>
                    <div className="basis-2/5 mt-5">14.35</div>
                    <div className="basis-2/5 mr-10 mt-5">ยกน้ำชา</div>
                  </div>
  
                  </div>

                  <div className=" m-2 mx-auto my-auto ml-10">
                  
                  <div className="flex flex-row ">
                    <div className="basis-2/5">
                  
                    <img className="h-16 w-16 my-auto" src="timeline3.png" alt="image description"/>   
                    </div>
                    <div className="basis-2/5  mt-5">18.30</div>
                    <div className="basis-2/5 mr-10">พิธีฉลองมงคลสมรส</div>
                  </div>
  
                  </div>

                 


            
                 
                 
              
                </div> 
                </motion.div>

              </AnimatePresence>

<br></br>
                
              <AnimatePresence>
            <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity:1.0 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring" , duration : 2 , delay:0.1 }}
      viewport={{ once: true }}
      className=""> 
           <div className=' flex-row mx-auto my-auto flex bg-gray-50 drop-shadow-lg  dark:bg-white text-black dark:text-black rounded-2xl mr-5 ml-5'>
                        
                    <div className="basis-5/12 text-center ml-5"> 


                    <div className='flex-row flex  p-4'>

                    <div className=""> 

                    <img className="h-10 my-auto m-5  " src="fb.png" alt="image description"/>   
                    </div>
                    <div className=""> 

                    <img className="h-10 my-auto m-5 mr-2" src="ig.png" alt="image description"/>   
                    </div>

                    </div>
                   



                    </div>
                    


                    <div className="basis-8/12 text-center my-auto pr-5"> 

                    

                  


                     <span className='text-md text-gray-900 dark:text-black text-black '> # PRIMOOB </span>  


                    


                     </div>
                    
                
                            

        
                </div>
    </motion.div>
  </AnimatePresence>
                
        


<br></br>

<AnimatePresence>
            <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity:1.0 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring" , duration : 2 , delay:0.7}}
      viewport={{ once: true }}
      className="">  <div className='space-x-6 flex flex-row mx-auto bg-gray-50 drop-shadow-lg my-auto text-black dark:text-black   rounded-2xl mr-5 ml-5 h-24 p-3 pr-8 pt-5 pb-2'>

                    
                <div className="basis-2/5 text-center my-auto mt-5 ">

                  

                  <span className='text-md text-gray-900 dark:text-black text-black ml-5 '> THEME </span>  
                </div>



                <div className="basis-1/5 text-center">

                    <div className='bg-slate-900 rounded-t-full shadow-md shadow-slate-900 h-3/4'></div> 
                
                </div>

                <div className="basis-1/5 text-center ">

                    <div className='bg-blue-950  rounded-t-full shadow-md shadow-blue-950 h-3/4'></div> 

                    </div>


                    <div className="basis-1/5 text-center ">

                        <div className='bg-gray-400 rounded-t-full drop-shadow-md h-3/4'></div> 

                        </div>

             

         
                
               
              
                 
              
                </div>  
                </motion.div>
</AnimatePresence>

               

              


              
            
            </div>

      
                  {/* form input */} 
            <div className="snap-start max-w-xl mx-auto py-16 [background-position-x:-120px] [background-position-y:60px] bg-no-repeat bg-my_bg2 h-[844px] bg-cover " id="formInput">
              
              <br></br>
              <br></br>
              
              
              
              <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="">
                    <div className="">
                    
                  <img className="h-36 my-auto mx-auto" src="rspv.png" alt="image description"/>   

                  <br></br>   <br></br>
                


                     
                    <form className=" justify-center space-y-4 " onSubmit={handleSubmit}>
                       
                                  <div className="flex items-center justify-center ">
                                      <label htmlFor="name" className="sr-only">Name *</label>
                                      <input required   autoComplete="off" value={name} onChange={e => setName(e.target.value)} type="text" name="name" id="name" className="
                                      shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-full font-sans md:font-serif" placeholder="Name *" />
                                  </div>
                                
                                  <div className="flex items-center justify-center">
                                      <label htmlFor="phone" className="sr-only">Phone number *</label>
                                      <input value={phone} required autoComplete="off" onChange={e => setPhone(e.target.value)} type="tel" name="phone" id="phone"
                                       className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-full" placeholder="Phone number *" />
                                  
                                  </div>
              
                                  <div className="flex items-center justify-center">
                                      <label htmlFor="license_plate" className="sr-only">ทะเบียนรถ</label>
                                      <input value={license_plate}  autoComplete="off" onChange={e => setlicense_plate(e.target.value)} type="text" 
                                      name="license_plate" id="license_plate" 
                                      className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-full" placeholder="ทะเบียนรถยนต์" />
                                  </div>
              
                                  <div className="flex items-center justify-center">
                                  <label htmlFor="countries" className="sr-only">Select an option</label>
                                  <select id="follow" defaultValue={'default'} onChange={e => setFollow(e.target.value)}  name="follow" className="text-slate-500 shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-full">
                                  <option value="default">Number of guest</option>
                                  <option value="0">ไม่มี</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  </select>
                                  </div>
              
                                  <div className="flex items-center justify-center">
                               
                                    <h3 className="sr-only">Identification</h3>
                                    <ul className=" space-x-4 text-slate-500 focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 ">
                                        <li className=" w-1/2 inline-block  border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-300 shadow-md  bg-white rounded-full">
                                            <div className="flex items-center pl-3">
                                                <input id="radioGirl" type="radio" value="girl" onChange={e => setTeam('girl')}  name="list-radio"
                                                 className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                                <label htmlFor="radioGirl" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 text-slate-500">Bride </label>
                                            </div>
                                        </li>
                                        <li className=" w-39  inline-block border-b border-gray-200 sm:border-b-0  sm:border-r dark:border-gray-300 shadow-md bg-white   rounded-full">
                                            <div className="flex items-center pl-3 ">
                                                <input id="radioBoy"  type="radio" value="boy" onChange={e => setTeam('boy')}  name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                                <label htmlFor="radioBoy" className="w-full py-3 ml-2 text-sm font-medium text-gray-900  text-slate-500">Groove&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                            </div>
                                        </li>
                                        
                                    </ul>
                                    
              
              
                              </div>
                                 
              
              
              
              
              
                                {/*
                                  <div className="flex items-center justify-center">
                                      <label htmlFor="message" className="sr-only">อวยพร</label>
                                      <textarea value={message}  autoComplete="off" onChange={e => setMessage(e.target.value)} id="message" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-xl" placeholder="อวยพรบ่าวสาว" />
                               
                                  </div>

                                  */}


                                  {/*  <div className="flex items-center justify-center  ">
              
              
                                  <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" value="" className="sr-only peer" required />
                                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-700">ยินดีให้ใช้และเปิดเผยข้อมูลส่วนบุคคล</span> 
                                        
                                    </label>
              
              
                                
                                  </div>*/}

<br></br>
                                  <br></br>
                                  <br></br>
              
                                  <div className="flex items-center justify-center">
                                  {/*    <button type="submit" className="flex items-center justify-center text-sm w-64 rounded-xl shadow py-3 px-2 text-white bg-indigo-600">ยืนยัน</button>  */}
                                     {/*<ButtonLoading2 /> */}
                                    
                  <button 
                   type="submit"
                   
                    onClick={handleClickLoad}
                    className={`flex items-center justify-center text-sm w-64 rounded-full shadow py-3 px-2 text-white bg-[#16243C] ${
                      isLoading ? 'opacity-50 cursor-not-allowed rounded-full' : ''
                    }`}
                    disabled={isLoading}
                  >
                      {/* {isLoading ? (isSuccess ? 'สำเร็จแล้ว' : 'กำลังส่งข้อมูล...') : 'ยืนยัน'} */}      
                    
                    
                    {isLoading ? 'กำลังส่งข้อมูล...': 'ลงทะเบียนร่วมงาน >'}
              
                      </button>
              
              
              
                                  </div>
                    </form>
              
                    </div>
              
              
              {isSuccess ?  <>
              <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className=""
                  >
                    <div className=" content-center ">
                    <div className="content-center p-4 w-64 mb-4 m-5 text-sm text-green-900 rounded-lg bg-green-50 dark:bg-gray-100 dark:text-green-900" role="alert">
                          <span className="font-medium pl-6">ลงทะเบียนสำเร็จ !</span> แล้วพบกันในงานวันที่ <u>26.08.2023</u>
                          </div>
                              
                    </div>
                  </motion.div>
                 
                  
              
              </>
              : 
              
              
              ''}
              
                  </motion.div>
                    
              
              
              
              
              
              
              
             </div>

                        {/* stop scroll*/} 
             <div className="snap-stop max-w-5xl mx-auto py-16 bg-scroll bg-white bg-auto bg-center bg-no-repeat h-[844px] p-3 " id="">
                </div>     
            
        </main>
    )
}

export default Home

