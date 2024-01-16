"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const TopServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/service`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setServices(
          data.data
            .filter((service: any) => service.status === "Available")
            .slice(3, 6)
        );
      });
  }, []);

  return (
    <div className='mb-12 grid gap-8'>
      <h2 className='text-xl text-center font-semibold'>
        Our Top Quality Services
      </h2>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8  z-10'>
        {services.map((service: any, idx) => (
          <div
            key={idx}
            className='overflow-hidden rounded  text-gray-500 shadow-md shadow-slate-200'
          >
            <figure className='relative'>
              <Image
                src={service?.image}
                width={50}
                height={50}
                alt='card image'
                className='aspect-[4/3] object-cover'
                sizes='100vw'
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <figcaption className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900 p-6 text-white'>
                <h3 className='text-lg font-medium '>{service?.serviceName}</h3>
                <p className='text-sm opacity-75'> {service?.price}</p>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopServices;
