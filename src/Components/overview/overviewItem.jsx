import React from "react";
function SingleOverviewCartItem(props) {
  return (
    <React.Fragment>
      <div className="xl:col-span-4 md:col-span-6 col-span-12 w-auto overflow-hidden my-5 lg:my-0 transition-colors duration-300 cursor-pointer shadow-lg grid grid-rows-2 rounded-[15px] group">
        <div>
          <img
            width="376"
            height="195"
            loading="lazy"
            src={props.picture}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            alt="NEXUS WORLD"
          />
        </div>
        <div className="text-white flex flex-col justify-start p-5 bg-black group-hover:bg-slate-300 group-hover:bg-opacity-10">
          <h6 className="font-bold 2xl:text-[32px] lg:text-3xl text-2xl mb-2 font-poppins">
            {props.title}
          </h6>
          <p className="2xl:text-lg text-base font-poppins">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            doloremque commodi, nostrum ipsam facere aliquid! Quas, quaerat?
            Voluptate cum dignissimos provident vero repellendus explicabo ea,
            quidem, corrupti error ut perferendis.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SingleOverviewCartItem;
