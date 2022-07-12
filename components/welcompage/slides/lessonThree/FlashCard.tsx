import React from 'react';

const flashCard = {
  imageUri: '/flash-cards/investments.jpg',
  title: 'Investing',
};

export default function FlashCard() {
  return (
    <div className='flex flex-col items-center p-1 bg-white rounded-md'>
      <img
        src={flashCard.imageUri}
        alt='Investing'
        className='flex-auto w-[12rem]'
      />
      <h1 className='text-center text-md font-inter'>{flashCard.title}</h1>
    </div>
  );
}
