import type { NextPage } from 'next'
import {FormEvent, useState} from "react";
import Navbar from './component/Navbar';
import Footbar from './component/Footbar';

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

        
        <main className="bg-gray-100 min-h-screen main">

<Navbar />



            <div className="max-w-5xl mx-auto py-16 bg-scroll bg-auto bg-center bg-no-repeat bg-my_bg_image h-[844px] ">
              
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
  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">ยินดีให้ใช้และเปิดเผยข้อมูลส่วนบุคคล</span> 
  
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

