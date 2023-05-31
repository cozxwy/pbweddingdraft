import Navbar from '../component/Navbar';
import Footbar from '../component/Footbar';
import React from 'react';
import Link from 'next/link'
import styles from '../../styles/Home.module.css'


function index(){
  return (
    <>

<main classNames="bg-gray-900 min-h-screen ">
    <Navbar />
    <div>
    <br></br>   <br></br>   <br></br>   <br></br>   <br></br>
        <p>Locations</p>  
      
    </div>
    <Footbar />

    </main>
    </>
  )
}


export default index 
  