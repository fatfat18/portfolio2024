const Portfolio = () => {
  return (
    <div className="h-full w-full ">
      <div className="w-full flex flex-col items-center justify-center  gap-4">
        <div className="w-full flex  flex-col xl:flex-row items-center justify-start  gap-6">
          <div className="xl:w-1/3 w-full ">
            {" "}
            <div className="xl:h-60 h-48 w-full  rounded-xl bg-zinc-600 mb-2">
              <img src="/coopcollege.png" className="w-full h-full" />
            </div>
            <div className="font-semibold xl:text-xl text-base">Co-op College PH</div>
            <div className=" text-zinc-500 text-sm">Marketing Website with own CRM</div>
          </div>
          <div className="xl:w-1/3 w-full ">
            {" "}
            <div className="xl:h-60 h-48 w-full  rounded-xl bg-zinc-600 mb-2">
              <img src="/ga-registration-admin.png" className="w-full h-full" />
            </div>
            <div className="font-semibold xl:text-xl text-base">Online Registration with Admin</div>
            <div className=" text-zinc-500 text-sm">Web App Admin for a registration portal</div>
          </div>
          <div className="xl:w-1/3 w-full ">
            {" "}
            <div className="xl:h-60 h-48 w-full  rounded-xl bg-zinc-600 mb-2">
              <img src="/ga-voting-admin.png" className="w-full h-full" />
            </div>
            <div className="font-semibold xl:text-xl text-base">Online Voting Admin</div>
            <div className=" text-zinc-500 text-sm">Web App Admin for a voting mobile and web app portal</div>
          </div>
        </div>
        <div className="w-full flex flex-col xl:flex-row  items-center justify-start  gap-6">
          <div className="xl:w-1/3 w-full ">
            {" "}
            <div className="xl:h-60 h-48 w-full  rounded-xl bg-zinc-600 mb-2">
              <img src="/ga-app.png" className="w-full h-full object-cover" />
            </div>
            <div className="font-semibold xl:text-xl text-base">Event App Information</div>
            <div className=" text-zinc-500 xl:text-base text-sm">Androi/iOS Mobile App that has contents of an event</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
