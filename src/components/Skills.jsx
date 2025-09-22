function Skills(){
    return(
        <div className="w-full h-full flex flex-col">
            <h2 className=" text-center text-4xl font-extrabold tracking-tight text-teal-400 mb-2 ">TECHSTACK</h2>
            <div className=" gap-8 grid grid-cols-2 lg:grid-cols-6 sm:grid-cols-3 sm:gap-6 place-items-center p-10">
                <div>
                <img  className="hover:-translate-y-2 transition-all duration-200 ease-in" src="https://skillicons.dev/icons?i=html,css,js" alt="icons" />
                <p className="text-center mt-1">HTML,CSS,JS</p>
            </div>
            <div>
                <img className="hover:-translate-y-2 transition-all duration-200 ease-in" src="https://skillicons.dev/icons?i=react,express" alt="icons" />
                <p className="text-center mt-1">React,Express</p>
            </div>
            <div>
                <img className="hover:-translate-y-2 transition-all duration-200 ease-in" src="https://skillicons.dev/icons?i=mongodb,mysql" alt="icons" />
                <p className="text-center mt-1">MongoDB,MySQL</p>
            </div>
            <div>
                <img className="hover:-translate-y-2 transition-all duration-200 ease-in" src="https://skillicons.dev/icons?i=nodejs,python" alt="icons" />
                <p className="text-center mt-1">Nodejs,Python</p>
            </div>
            <div>
                <img className="hover:-translate-y-2 transition-all duration-200 ease-in" src="https://skillicons.dev/icons?i=bootstrap,tailwind" alt="icons" />
                <p className="text-center mt-1">Bootstrap,Tailwind</p>
            </div>
            <div>
                <img className="hover:-translate-y-2 transition-all duration-200 ease-in" src="https://skillicons.dev/icons?i=git,github" alt="icons" />
                <p className="text-center mt-1">Git,Github</p>
            </div>
            </div>

        </div>
    )
}

export default Skills