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
            <div className="snap-start max-w-5xl   mx-auto bg-scroll bg-auto bg-center bg-no-repeat bg-white dark:bg-white h-[844px] text-black dark:text-black">
                
               
            <br></br><br></br><br></br><br></br><br></br><br></br>

            <div className=" rounded-t-full shadow-2xl shadow-black h-full">
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
      className=""> 
                <img className="h-auto max-w-full w-max flex " src="flower3.png" alt="image description"/>
      </motion.div>
</AnimatePresence>


                </div>   
            </div>

                     {/* Landing pages couple */} 
                     <div className="snap-start max-w-5xl z-30 mx-auto bg-scroll bg-auto bg-center bg-no-repeat bg-white dark:bg-white h-[844px] text-black dark:text-black">
                
               
                <br></br><br></br><br></br><br></br><br></br><br></br>
    

                <br></br><br></br><br></br>
                <div className='flex flex-row mx-auto my-auto bg-gray-50   dark:bg-gray-800 text-black dark:text-white rounded-lg mr-5 ml-5'>
                   
                   <div className='text-center mx-auto my-auto'>  <p className='text-3xl'>We invite you to celeberate out marriage</p></div>
                
                </div>
                
                <br></br><br></br><br></br>
                <div className='flex flex-row mx-auto my-auto bg-gray-50   dark:bg-gray-800 text-black dark:text-white rounded-lg mr-5 ml-5'>
                <div className="basis-1/2 text-center  border-black-500 m-2 "> 
                <img className="rounded-lg drop-shadow-lg  h-auto" src="https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=712&q=80" alt="image description"/>
                <br></br>

                <p>Pim</p>
                  </div>

                  <div className="basis-1/2 text-center  border-black-500 m-2 "> 
                <img className="rounded-lg drop-shadow-lg  h-auto" src="https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=712&q=80" alt="image description"/>
                    
                <br></br>
                    <p>Boom</p>
                  </div>
  
  
                
                </div>



                </div>

                      {/* DATE and Location and dress code */} 
            <div className="snap-start max-w-5xl mx-auto py-16 bg-scroll bg-white bg-auto bg-center bg-no-repeat h-[844px] p-3">
            <br></br>

    


            <AnimatePresence>
            <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity:1.0 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring" , duration : 2 , delay:0.1 }}
      viewport={{ once: false }}
      className=""> 
           <div className='flex flex-row mx-auto my-auto bg-gray-50 drop-shadow-lg  dark:bg-white text-black dark:text-black rounded-2xl mr-5 ml-5'>
                        
                    <div className="basis-1/2 text-center border-r-4 border-black-500 m-2 "> วันเสาร์ที่ <p className='text-7xl text-gray-900 dark:text-black'>26</p> สิงหาคม <br></br> 2566  <br></br>  </div>
                    
                    <div className="basis-1/2 text-center pr-2 mx-auto my-auto">&nbsp;ณ CDC ballroom&nbsp; &nbsp;(&nbsp;เลียบด่วนรามอินทรา&nbsp;) <br></br>
                    <Link href="https://goo.gl/maps/gEdgGKYYx3oSPhfi8">
                        <img className=" animate-pulse h-12 mt-3 mx-auto max-w-xs rounded-lg drop-shadow-xl dark:shadow-gray-800 " src="https://img.freepik.com/premium-vector/google-maps-logo_578229-304.jpg" alt="image description"/>
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
      viewport={{ once: false }}
      className="">  <div className='space-x-6 flex flex-row mx-auto bg-gray-50 drop-shadow-lg my-auto  dark:bg-white text-black dark:text-black rounded-2xl mr-5 ml-5 h-20 '>
                <div className="basis-1/3 text-center  drop-shadow-xl rounded-lg  m-2 mx-auto my-auto">
                <p className=''>แห่ขันหมาก</p>  <p className=''>13.15</p>
                </div>

             

                <div className="basis-1/3 text-center = drop-shadow-xl  rounded-3xl  m-2 mx-auto my-auto">
                <p>ยกน้ำชา</p>  <p className=' '>14.35</p>
                </div>

            
                <div className="basis-1/3 text-center =drop-shadow-xl  rounded-lg  m-2 mx-auto my-auto" >
                <p className=''>พิธีฉลอง</p>   <p className=' '>18.30</p>
                </div> 
                 
                 
              
                </div> </motion.div>
</AnimatePresence>


                

                
                <br></br>

                <AnimatePresence>
            <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity:1.0 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring" , duration : 2 , delay:0.5 }}
      viewport={{ once: false }}
      className="">  <div className='space-x-6 flex flex-row mx-auto  my-auto text-black dark:text-white rounded-2xl mr-5 ml-5 '>

                      
                        
               <div className="basis-1/2 text-center   drop-shadow-xl rounded-lg  text-black dark:text-white h-20">

             <img className="rounded-2xl drop-shadow-lg  h-auto" src="https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=712&q=80" alt="image description"/>
 
                </div>
            
                <div className="basis-1/2 text-center  drop-shadow-xl rounded-lg  text-white dark:text-white ">
                    
                    
                    <div className='pt-4  rounded-2xl bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500'> 
                    <br></br>
                    hashtag <br></br> <p className='text-2xl'># PRIMOOB</p> <br></br> <br></br>
                    </div>

                    <br></br>
                    <div className='space-x-6 flex flex-row mx-auto  my-auto text-black dark:text-white rounded-lg  '>
                    <div className="basis-1/2 text-center  bg-green-500	  drop-shadow-xl rounded-2xl  text-white dark:text-white h-16 w-15">
                   
                    <Link href="tel:0959508301">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 mx-auto my-auto mt-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>

                        Boom
                    </Link>

                    </div>

                    <div className="basis-1/2 text-center  bg-green-500	  drop-shadow-xl rounded-2xl  text-white dark:text-white h-16 w-15">
                    <Link href="tel:0839128184">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 mx-auto my-auto mt-3">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                       </svg>
                    
                        Pim
                   </Link>
                   </div>
                   
                      
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
      transition={{ type: "spring" , duration : 2 , delay:0.7}}
      viewport={{ once: false }}
      className="">  <div className='space-x-6 flex flex-row mx-auto bg-gray-50 drop-shadow-lg my-auto text-black dark:text-black   rounded-2xl mr-5 ml-5 h-28 p-3'>



                <div className="basis-1/3 text-center ">

                    <div className='bg-slate-900 rounded-t-full shadow-md shadow-slate-900 h-3/4'></div> <p className='pt-2'>ดำ</p>
                
                </div>

                <div className="basis-1/3 text-center ">

                    <div className='bg-blue-950  rounded-t-full shadow-md shadow-blue-950 h-3/4'></div> <p className='pt-2'>กรม</p>

                    </div>


                    <div className="basis-1/3 text-center ">

                        <div className='bg-orange-100 rounded-t-full drop-shadow-md h-3/4'></div> <p className='pt-2'>ครีม</p>

                        </div>

             

         
                
               
              
                 
              
                </div>  
                </motion.div>
</AnimatePresence>

               

              


              
            
            </div>

      
                  {/* form input */} 
            <div className="snap-start max-w-5xl  py-16 bg-center bg-no-repeat bg-my_bg_image h-[844px] " id="formInput">
              
              <br></br>
              <br></br>
              <br></br>
              
              
              
              <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="">
                    <div className="">
                    
                     
                    <form className=" justify-center space-y-4 " onSubmit={handleSubmit}>
                       
                                  <div className="flex items-center justify-center ">
                                      <label htmlFor="name" className="sr-only">ชื่อ นามสกุล *</label>
                                      <input required   autoComplete="off" value={name} onChange={e => setName(e.target.value)} type="text" name="name" id="name" className="
                                      shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-xl font-sans md:font-serif" placeholder="ชื่อ นามสกุล *" />
                                  </div>
                                
                                  <div className="flex items-center justify-center">
                                      <label htmlFor="phone" className="sr-only">เบอร์ติดต่อ *</label>
                                      <input value={phone} required autoComplete="off" onChange={e => setPhone(e.target.value)} type="tel" name="phone" id="phone" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-xl" placeholder="เบอร์ติดต่อ *" />
                                  
                                  </div>
              
                                  <div className="flex items-center justify-center">
                                      <label htmlFor="license_plate" className="sr-only">ทะเบียนรถ</label>
                                      <input value={license_plate}  autoComplete="off" onChange={e => setlicense_plate(e.target.value)} type="text" name="license_plate" id="license_plate" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-xl" placeholder="ทะเบียนรถยนต์" />
                                  </div>
              
                                  <div className="flex items-center justify-center">
                                  <label htmlFor="countries" className="sr-only">Select an option</label>
                                  <select id="follow" defaultValue={'default'} onChange={e => setFollow(e.target.value)}  name="follow" className="text-slate-500 shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-xl">
                                  <option value="default">จำนวนผู้ติดตาม</option>
                                  <option value="0">ไม่มี</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  </select>
                                  </div>
              
                                  <div className="flex items-center justify-center">
                               
                                    <h3 className="sr-only">Identification</h3>
                                    <ul className=" space-x-4 text-slate-500 shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 ">
                                        <li className=" w-1/2 inline-block  border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 bg-white rounded-xl">
                                            <div className="flex items-center pl-3">
                                                <input id="radioGirl" type="radio" value="girl" onChange={e => setTeam('girl')}  name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                                <label htmlFor="radioGirl" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 text-slate-500">ทีมเจ้าสาว </label>
                                            </div>
                                        </li>
                                        <li className=" w-39  inline-block border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 bg-white   rounded-xl">
                                            <div className="flex items-center pl-3 ">
                                                <input id="radioBoy"  type="radio" value="boy" onChange={e => setTeam('boy')}  name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                                <label htmlFor="radioBoy" className="w-full py-3 ml-2 text-sm font-medium text-gray-900  text-slate-500">ทีมเจ้าบ่าว&nbsp;&nbsp;&nbsp;</label>
                                            </div>
                                        </li>
                                        
                                    </ul>
                                    
              
              
                              </div>
                                 
              
              
              
              
              
              
                                  <div className="flex items-center justify-center">
                                      <label htmlFor="message" className="sr-only">อวยพร</label>
                                      <textarea value={message}  autoComplete="off" onChange={e => setMessage(e.target.value)} id="message" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-xl" placeholder="อวยพรบ่าวสาว" />
                               
                                  </div>
                                  <div className="flex items-center justify-center  ">
              
              
                                  <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" value="" className="sr-only peer" required />
                                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        <span className="ml-3 text-sm font-medium text-gray-300 dark:text-gray-300">ยินดีให้ใช้และเปิดเผยข้อมูลส่วนบุคคล</span> 
                                        
                                    </label>
              
              
                                
                                  </div>
              
                                  <div className="flex items-center justify-center">
                                  {/*    <button type="submit" className="flex items-center justify-center text-sm w-64 rounded-xl shadow py-3 px-2 text-white bg-indigo-600">ยืนยัน</button>  */}
                                     {/*<ButtonLoading2 /> */}
              
                                  
                                     
                  <button 
                   type="submit"
                   
                    onClick={handleClickLoad}
                    className={`flex items-center justify-center text-sm w-64 rounded-xl shadow py-3 px-2 text-white bg-primary-600 ${
                      isLoading ? 'opacity-50 cursor-not-allowed rounded-xl' : ''
                    }`}
                    disabled={isLoading}
                  >
                      {/* {isLoading ? (isSuccess ? 'สำเร็จแล้ว' : 'กำลังส่งข้อมูล...') : 'ยืนยัน'} */}      
                    
                    
                    {isLoading ? 'กำลังส่งข้อมูล...': 'ยืนยัน'}
              
                    <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
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
                    <div className=" content-center">
                    <div className="content-center p-4 mb-4 m-5 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                          <span className="font-medium">ลงทะเบียนสำเร็จ !</span> แล้วพบกันในงานวันที่ <u>26/28/2023</u>
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

