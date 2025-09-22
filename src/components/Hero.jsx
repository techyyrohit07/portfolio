import { useState, useEffect } from "react";

function Hero() {

  const names = ["Rohit Singh", "Singh Rohit" , "Rohit Singh"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 500); // change every 2 seconds

    return () => clearInterval(interval); // cleanup
  }, []);


  return (
    <section className="min-h-screen text-white flex justify-center px-6 w-full">
  <div className="text-center max-w-3xl flex flex-col justify-center gap-4">
    <p className="text-teal-400 sm:text-xl lg:text-3xl">Hi! I'm</p>
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold">
      {names[index]}
    </h1>
    <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
      I build things for the web.
    </p>
    <p className="mt-4 text-gray-400 text-base sm:text-lg md:text-xl">
      Full-stack developer specializing in backend systems, APIs, and modern web applications with Node.js,  
      Express, MongoDB, and React.
    </p>
  </div>
</section>

  );
}

export default Hero;
