
import Navbar from '../component/Navbar';
import Footbar from '../component/Footbar';
import React from 'react';
import Link from 'next/link'
import styles from '../../styles/Home.module.css'


function index(){
  return (
    <>

<main className="bg-gray-900 min-h-screen  ">
    <Navbar />
    <Footbar />
    <div>
    <br></br>   <br></br>   <br></br>   <br></br>   <br></br>
       

        
<p className="m-5 max-w-lg text-3xl font-semibold leading-loose text-gray-900 dark:text-white text-center mx-auto"> สถานที่จัดงาน  <br></br> Grand Ballrom CDC <br></br> เลียบด่วนรามอินทรา</p>
<br></br>
<Link href="https://goo.gl/maps/gEdgGKYYx3oSPhfi8">
<img className=" animate-pulse h-20 mx-auto max-w-xs rounded-lg shadow-xl dark:shadow-gray-800" src="https://img.freepik.com/premium-vector/google-maps-logo_578229-304.jpg" alt="image description"/>
</Link>


      
    </div>
    

    </main>
    </>
  )
}


export default index 
  