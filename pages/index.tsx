import type { NextPage } from 'next'
import {FormEvent, useState} from "react";
import Navbar from './component/Navbar';
import Footbar from './component/Footbar';
import MotionX from './component/MotionX';

import { version } from 'react';


const Home: NextPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');




    const [follow, setFollow] = useState('');
    const [message, setMessage] = useState('');


    
    const [team, setTeam] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let form = {
            name,
            email,
            phone,
            message,
            follow,
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
        alert(content.data.tableRange)

        // Reset the form fields
        setMessage('')
        setPhone('')
        setName('')
        setEmail('')
        setFollow('')
        setTeam('')
    }

    return (

        
        <main className="bg-gray-100 min-h-screen ">

<Navbar />

            <div className="max-w-5xl mx-auto py-16 bg-scroll bg-auto bg-center bg-no-repeat bg-my_bg_image h-[844px] ">
                
<br></br>
<br></br>
<br></br>
<br></br>

<br></br>
<br></br>
<br></br>


                <form className="py-4 space-y-4" onSubmit={handleSubmit}>
                    <div className="flex items-center justify-center">
                        <label htmlFor="name" className="sr-only">ชื่อ นามสกุล</label>
                        <input  autoComplete="new-password" value={name} onChange={e => setName(e.target.value)} type="text" name="name" id="name" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="ชื่อ นามสกุล" />
                    </div>
                  
                    <div className="flex items-center justify-center">
                        <label htmlFor="phone" className="sr-only">เบอร์ติดต่อ</label>
                        <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" name="phone" id="phone" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="เบอร์ติดต่อ" />
                    </div>

                    <div className="flex items-center justify-center">
                    <label htmlFor="countries" className="sr-only">Select an option</label>
                    <select id="follow" value='none' onChange={e => setFollow(e.target.value)}  name="follow" className="text-slate-500 shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md">
                    <option value="none">จำนวนผู้ติดตาม</option>
                    <option value="0">ไม่มี</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    </select>
                    </div>

                    <div className="flex items-center justify-center">
                 
<h3 className="sr-only">Identification</h3>
<ul className=" space-x-4 text-slate-500 shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md">
    <li className=" w-1/2 inline-block  border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 bg-white rounded-md">
        <div className="flex items-center pl-3">
            <input id="radioGirl" type="radio" value="girl" onChange={e => setTeam('girl')}  name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label htmlFor="radioGirl" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 text-slate-500">ทีมเจ้าสาว </label>
        </div>
    </li>
    <li className=" w-39  inline-block border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 bg-white   rounded-md">
        <div className="flex items-center pl-3 ">
            <input id="radioBoy" type="radio" value="boy" onChange={e => setTeam('boy')}  name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label htmlFor="radioBoy" className="w-full py-3 ml-2 text-sm font-medium text-gray-900  text-slate-500">ทีมเจ้าบ่าว&nbsp;&nbsp;&nbsp;</label>
        </div>
    </li>
   
</ul>



                </div>
                   






                    <div className="flex items-center justify-center">
                        <label htmlFor="message" className="sr-only">อวยพร</label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)} id="message" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="อวยพรบ่าวสาว" />
                    </div>
                    <div className="flex items-center justify-center">
                        <button type="submit" className="flex items-center justify-center text-sm w-64 rounded-md shadow py-3 px-2 text-white bg-indigo-600">ยืนยัน</button>
                    </div>
                </form>




            </div>

           
           
            <Footbar />


            
        </main>
    )
}

export default Home

