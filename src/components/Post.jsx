import React from 'react';
import image from "/images/image.png";

const Post = ({data}) => {
  return (
    <div className='w-80 h-96 bg-white rounded-lg p-2'>
      <img className='w-full h-44 rounded-lg object-cover' src={image} alt="" />
      <div className='w-full space-y-3 mt-3'>
         <p className='text-rose-500'>{data.userId}</p>
         <p className='text-lg font-semibold'>{data.title}</p>
      </div>
    </div>
  )
}

export default Post