import React from 'react';

type Props = {
  onCloseHandler: () => void;
  Component: JSX.Element;
  show: boolean;
};

export default function Popup({ onCloseHandler, Component, show }: Props) {
  console.log('Show - ', show);
  return show ? (
    <div className='absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full border border-red-500'>
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-25' />
      {Component}
    </div>
  ) : null;
}
