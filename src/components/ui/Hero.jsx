import Link from "next/link";

const Hero = () => {
  return (
    <div className="rounded-lg">
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage:
            "url(https://i.ibb.co/Hz8tV8k/wepik-export-20230901161829tk-LT.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <div className="mb-5">
              Want to build your dream pc. You are just in the right place.
              Build your custom pc with branded component
            </div>
            <Link href={"/pc-builder"} className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
