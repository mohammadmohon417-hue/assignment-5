import hero from "../banner-stack.png";

export function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-16 lg:px-8 lg:py-20">

        {/* Hero Text */}
        <div className="w-full lg:w-1/2">

          <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl lg:text-6xl">
            Build Your Ideal
            <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Your tech stack can make or break your project. Explore, compare,
            and choose the right tools for your next build.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="btn btn-medium rounded-md bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 text-sm font-semibold text-white transition hover:opacity-90">Explore Technologies</button>

            <button className="btn btn-medium text-gray-700 rounded-b-md">Learn More</button>
          </div>

        </div>

        {/* Hero Image */}
        <div className="mt-12 flex w-full items-center justify-center lg:mt-0 lg:w-1/2">
          <img
            src={hero}
            alt="Development Stack"
            className="w-full max-w-xl object-contain"
          />
        </div>

      </div>
    </section>
  );
}