import React from 'react';

const Home = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <div className="p-8">
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-quOnYHlhUgpQqruB9V6fhkgeN6-uedMZXxDLFrCYSNfveFm5YSyUfZQ&s'/>
        </div>
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          Lindsey James
        </div>
        <p className="block mt-1 text-lg leading-tight font-medium text-gray-500">
          @lindsey_jam3s
        </p>
        <p className="mt-2 text-gray-500">
          Actress, musician, songwriter and artist. PM for work inquiries
        </p>
      </div>
      <div>
        <button>Message</button>
        <button className='bg-blue-500'>Follow</button>
      </div>
      
      
    </div>
  );
};

export default Home;