const About = () => {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-4">
        {" "}
        <div>
          My interest is building, creating, and improving software systems and applications. I am a committed software engineer. I have a solid background in engineering and computer information
          systems, and my areas of expertise are developing reliable system architectures, troubleshooting intricate programs, and designing effective code. I work in a variety of fields, including as
          enterprise software, mobile applications, and web development. I enjoy working collaboratively with stakeholders, other engineers, and developers to comprehend needs and provide scalable,
          high-quality solutions.
        </div>
        <div>
          I'm dedicated to lifelong learning and development, therefore I keep up with the newest innovations in technology and business practices to keep my contributions at the forefront of the
          field.
        </div>
      </div>
      <div className="mt-14 flex gap-2 flex-col">
        <div className="font-semibold text-2xl">What I'm Doing</div>

        <div className="w-full flex flex-col items-center justify-center gap-4 mt-4">
          <div className="flex justify-center items-center w-full gap-4 h-full">
            {" "}
            <div className="w-1/2 h-40 flex items-center justify-center bg-zinc-700 border-zinc-600 border rounded-xl">Something</div>
            <div className="w-1/2 h-40 flex items-center justify-center bg-zinc-700 border-zinc-600 border rounded-xl">Something</div>
          </div>
          <div className="flex justify-center items-center w-full gap-4 h-full">
            {" "}
            <div className="w-1/2 h-40 flex items-center justify-center bg-zinc-700 border-zinc-600 border rounded-xl">Something</div>
            <div className="w-1/2 h-40 flex items-center justify-center bg-zinc-700 border-zinc-600 border rounded-xl">Something</div>
          </div>
        </div>
      </div>

      <div className="mt-14 flex gap-2 flex-col">
        <div className="font-semibold text-2xl">Clients</div>

        <div className="w-full flex flex-col items-center justify-center gap-4 mt-4">
          <div className="flex justify-center items-center w-full gap-4 h-full">
            {" "}
            <div className="w-1/2 h-40 flex items-center justify-center bg-zinc-700 border-zinc-600 border rounded-xl">Something</div>
            <div className="w-1/2 h-40 flex items-center justify-center bg-zinc-700 border-zinc-600 border rounded-xl">Something</div>
          </div>
          <div className="flex justify-center items-center w-full gap-4 h-full">
            {" "}
            <div className="w-1/2 h-40 flex items-center justify-center bg-zinc-700 border-zinc-600 border rounded-xl">Something</div>
            <div className="w-1/2 h-40 flex items-center justify-center bg-zinc-700 border-zinc-600 border rounded-xl">Something</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
