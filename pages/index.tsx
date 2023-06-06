import type { NextPage } from 'next'
import {FormEvent, useState} from "react";
import Navbar from './component/Navbar';
import Footbar from './component/Footbar';

import Link from 'next/link'
import FootbarFlower from './component/FootbarFlower';
import ButtonLoading2 from './component/ButtonLoading2';

import { motion } from 'framer-motion';
import { version } from 'react';


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

        
        <main className="bg-gray-100 min-h-screen main h-screen  snap-y snap-mandatory overflow-scroll">

<Navbar />



            <div className="snap-start max-w-5xl mx-auto bg-scroll bg-auto bg-center bg-no-repeat bg-white dark:bg-gray-800 h-[844px] text-black dark:text-white">
                
                <img className="h-auto max-w-full flex pt-12" src="https://apis.xogrp.com/media-api/images/ffb7a7cf-7b69-4533-bce0-a6a5b1f0a687" alt="image description"/>
                <br></br><br></br>
                <div className='text-center mx-auto my-auto'> Primoob got engagement.</div>
                <div className='text-center mx-auto my-auto'> We invite you to out ceremony.</div>
                
            </div>
            <div className="snap-start max-w-5xl mx-auto py-16 bg-scroll bg-auto bg-center bg-no-repeat bg-my_bg_image h-[844px] flex">

                <div className='flex flex-row mx-auto my-auto bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg mr-5 ml-5'>
                        
  <div className="basis-1/2 text-center border-r-4 border-black-500 m-2 "> วันเสาร์ที่ <p className='text-7xl text-gray-900 dark:text-white'>26</p> สิงหาคม <br></br> 2566  <br></br>  </div>
  
  <div className="basis-1/2 text-center m-2 mx-auto my-auto">&nbsp;ณ CDC ballroom ชั้น 2&nbsp; &nbsp; (&nbsp;เลียบด่วนรามอินทรา&nbsp;) <br></br>
  <Link href="https://goo.gl/maps/gEdgGKYYx3oSPhfi8">
       <img className=" animate-pulse h-12 mt-3 mx-auto max-w-xs rounded-lg shadow-xl dark:shadow-gray-800 " src="https://img.freepik.com/premium-vector/google-maps-logo_578229-304.jpg" alt="image description"/>
       </Link>
  
  </div>
        
                </div>



            
            </div>

            <div className="snap-start max-w-5xl mx-auto bg-scroll bg-auto bg-center bg-no-repeat bg-white dark:bg-gray-800 h-[844px] ">
            <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="h-screen flex items-center justify-center"
    >
      <div className="text-white text-3xl">
      
       
    <section className="bg-white dark:bg-gray-800 antialiased">
  <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
        Schedule
      </h2>

      <div className="mt-4">
        <a href="#" title=""
          className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
           &nbsp;
        
        </a>
      </div>
    </div>

    
    <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
    <li className="mb-10 ml-6">            
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">งานสมรสเช้า<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">26/08/2023</span></h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">14.29-15.39</time>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">พิธีแห่ขันหมาก สู่ขอเจ้าสาวและรับตัวเจ้าสาว ฝ่ายหญิงกั้นประตูจำนวน 9 ประตู</p>

        <Link href="https://goo.gl/maps/gEdgGKYYx3oSPhfi8">
        <a  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
          <svg className="w-4 h-4 mr-2" strokeWidth="1.5"  fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>   </svg> 
            สถานที่</a>
            </Link>
    </li>
    <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">พิธีโชว์สอนสอดและสวมแหวน</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">15.09-16.00</time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">สวมแหวน ยกน้ำชา คู่  ถ่ายภาพครอบครัว</p>
    </li>
    <li className="ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">after party</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">18.00-22.00</time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">งานฉลองมงคงสมรส และเชิญร่วมรับประทานอาหาร</p>
    </li>
    
</ol>


  </div>
</section>

      </div>
    </motion.div>
    
            </div>
           

            <div className="snap-start max-w-5xl mx-auto py-16 bg-scroll bg-auto bg-center bg-no-repeat bg-my_bg_image h-[844px] " id="formInput">
              
              <br></br>
              <br></br>
              <br></br>
              
              
              
              <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="">
                    <div className="ิ">
                    
                     
                    <form className="py-4 space-y-4" onSubmit={handleSubmit}>
                                  <div className="flex items-center justify-center">
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
                         

            <FootbarFlower />
            
        </main>
    )
}

export default Home

