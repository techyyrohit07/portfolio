function Navbar(){
    return (
        <nav className="fixed top-0 left-0 w-full bg-[#0a0d1a] text-white flex justify-center font-medium text-md py-4 ">
            <ul className="flex flex-row gap-10 mt-2 ">
                <li ><a href="#" className="hover:text-gray-500">Home</a></li>
                <li><a href="#about" className="hover:text-gray-500">About</a></li>
                <li><a href="#projects" className="hover:text-gray-500">Projects</a></li>
                <li><a href="#contact" className="hover:text-gray-500">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar