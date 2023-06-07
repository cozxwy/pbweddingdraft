import Link from 'next/link'
import Head from 'next/head';

export default function Navbar() {
    return <>
    <Head>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" cossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet">

</link>



</Head>


    <header className=' w-full h-16  border-gray-200 dark:bg-gray-800 drop-shadow-2xl z-40

 fixed  text-white text-2xl'>

    
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5  dark:bg-gray-800 ">
 
        <div className="flex flex-wrap justify-between items-center  mx-auto max-w-screen-xl">
           
            <a className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center text-xl text-black font-semibold whitespace-nowrap dark:text-white">PB wedding</span>
            </a>
            <div className="flex items-center lg:order-2">
            <a className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"></a>
            <a  className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"></a>
          
         

  <Link href="#formInput">
            <a  className="justify-items-end float-right text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">ลงชื่อร่วมงาน</a>
            </Link>
            </div>
          
         
        </div>
        
    </nav>
</header>

</>
;
  }