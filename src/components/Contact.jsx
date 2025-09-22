import {Github, Mail} from "lucide-react"


function Contact(){
    const TwitterIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.932 4.932 0 002.163-2.723 9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616 3c-2.717 0-4.924 2.206-4.924 4.924 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.216 2.19 4.099a4.904 4.904 0 01-2.229-.616v.06c0 2.385 1.693 4.374 3.946 4.827a4.935 4.935 0 01-2.224.085c.63 1.963 2.445 3.393 4.6 3.435A9.867 9.867 0 012 19.54a13.94 13.94 0 007.548 2.209c9.056 0 14.01-7.496 14.01-13.986 0-.21-.004-.423-.014-.633A9.935 9.935 0 0024 4.59z" />
    </svg>
);




    return (
        <div id= "contact" className="text-white mt-40 mb-20">
            <h2 className="text-5xl font-extrabold text-teal-400 tracking-tight text-center" >Let's Connect!</h2>
            <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto text-center">
                Whether you have a question, a project idea, or just want to say hi, 
                    my inbox is always open. I’ll try my best to get back to you!
            </p>
            
            <div className="flex justify-center items-center gap-8 p-6">
                <div>
                    <a href="mailto:rohitsinghnegi910@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-400 transition-colors">
                    <Mail size={40} />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/techyyrohit07" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-400 transition-colors"> 
                        <Github size={40} />
                    </a>
                     
                </div>
                <div>
                    <a href="https://x.com/7Kratox" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-400 transition-colors">
                        <TwitterIcon className="w-10 h-10" />
                    </a>
                </div>
            </div>

        </div>
    )
}


export default Contact