const HeroSection = () => {
  return (
    <section className="bg-black text-white h-screen flex flex-col items-center justify-center text-center px-6 md:px-12">
      <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide">
        Elevate Your Game
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl">
        Step into the future of performance with our cutting-edge gear, built
        for champions.
      </p>
      <div className="mt-6 flex space-x-4">
        <a
          href="#"
          className="px-6 py-3 bg-white text-black font-bold uppercase rounded-full hover:bg-gray-200 transition"
        >
          Shop Now
        </a>
        <a
          href="#"
          className="px-6 py-3 border-2 border-white text-white font-bold uppercase rounded-full hover:bg-white hover:text-black transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
