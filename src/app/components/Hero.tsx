// components/Hero.tsx
const Hero = () => {
    return (
      <section
        className="flex flex-col items-center justify-center h-screen m-0 p-0 text-white">
        <h2 className="text-4xl font-bold p-4 rounded">Welcome to My Website</h2>
        < p className="mt-4 text-lg text-white">This is a simple home page built with Next.Js.</p>
        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Get Started
      </button>
      </section>
    );
  };
  
  export default Hero;
  