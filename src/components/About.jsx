function About(){
    return (
        <div className="mb-30 text-justify p-6" id="about" >
            <h2 className="text-center text-4xl font-extrabold tracking-tight text-teal-400 ">ABOUT</h2>
            <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                I'm a full-stack developer with a strong focus on <span className="text-white font-medium">backend 
                engineering</span> and building scalable systems. I specialize in creating 
                robust APIs and server-side applications using 
                <span className="text-white font-medium"> Node.js</span>, 
                <span className="text-white font-medium">Express</span>, and 
                <span className="text-white font-medium"> MongoDB</span>, with experience in 
                <span className="text-white font-medium"> SQL databases</span> as well.
            </p>

            <p className="mt-4 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            While I enjoy designing responsive front-ends with 
            <span className="text-white font-medium"> React</span> and 
            <span className="text-white font-medium"> Tailwind CSS</span>, my real passion 
            lies in architecting backend systems that are secure, performant, and easy 
            to maintain. I focus on writing clean, modular code and designing APIs that 
            power seamless user experiences.
            </p>
        </div>
    )
}

export default About