"use client";
import React, { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data?.data);
      });
  }, []);

  return (
    <div className='mb-12 grid gap-8 '>
      <h2 className='text-xl text-center font-semibold'>
        Variants of our Service Categories
      </h2>
      <div className='grid lg:grid-cols-3 gap-8'>
        {categories.map((category: any, idx) => (
          <div
            key={idx}
            className='overflow-hidden rounded shadow-md shadow-slate-200 cursor-pointer hover:shadow-slate-400'
          >
            <div className='p-6 text-center tracking-wider text-gray-500 font-medium text-lg'>
              {category?.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
