import Link from 'next/link'

export default function Navbar() {
    return <header classNames=' w-full h-16  border-gray-200 dark:bg-gray-800  fixed flex text-white text-2xl'>
    <nav classNames="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 ">
 
        <div classNames="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
           
            <a classNames="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" classNames="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span classNames="self-center text-xl font-semibold whitespace-nowrap dark:text-white">PB wedding</span>
            </a>
            <div classNames="flex items-center lg:order-2">
            <a classNames="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"></a>
            <a  classNames="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"></a>
            <a  classNames="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"></a>
            <Link href="/">
            <a  classNames="float-right text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">ลงชื่อ</a>
            </Link>
            </div>
          
         
        </div>
        
    </nav>
</header>
;
  }