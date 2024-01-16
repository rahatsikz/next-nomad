"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const UpcomingServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/service`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(
          data.data
            .filter((service: any) => service.status === "Upcoming")
            .slice(0, 3)
        );
      });
  }, []);
  return (
    <div className='mb-12 grid gap-8'>
      <h2 className='text-xl text-center font-semibold'>
        Our Upcoming Services
      </h2>
      <div className='grid  lg:grid-cols-2 gap-8'>
        {services.map((service: any, idx) => (
          <div
            key={idx}
            className='overflow-hidden rounded shadow-md shadow-slate-200'
          >
            {/*  <!--  Image --> */}
            <figure>
              <Image
                src={service?.image}
                width={50}
                height={50}
                alt='card image'
                className='aspect-[9/3] object-cover'
                sizes='100vw'
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </figure>
            {/*  <!-- Body--> */}
            <div className='p-6'>
              <header className=''>
                <h3 className='text-xl font-medium text-slate-700'>
                  {service?.serviceName}
                </h3>
                <p className='text-sm text-gray-400'> {service.content} </p>
              </header>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingServices;
