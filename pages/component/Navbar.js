import Link from 'next/link'
import Head from 'next/head';

export default function Navbar() {
    return <>



    <header className=' w-full h-16  border-gray-200 dark:bg-white drop-shadow-2xl z-40

 fixed  text-white text-2xl'>

    
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5  dark:bg-white ">
 
        <div className="flex flex-wrap justify-between items-center  mx-auto max-w-screen-xl">
           
            <a className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center text-xl text-black font-semibold whitespace-nowrap dark:text-black">PB wedding</span>
            </a>
            <div className="flex items-center lg:order-2">
            <a className="text-gray-800 dark:text-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"></a>
            <a  className="text-gray-800 dark:text-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"></a>
          
         

            <Link href="#formInput">
            <p  className="justify-items-end float-right text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">ลงชื่อร่วมงาน</p>
            </Link>
            </div>
          
         
        </div>
        
    </nav>
</header>

</>
;
  }