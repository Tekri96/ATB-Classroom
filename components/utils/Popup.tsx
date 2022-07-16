import React from 'react';

type Props = {
  onCloseHandler: () => void;
  Component: JSX.Element;
  show: boolean;
};

export default function Popup({ onCloseHandler, Component, show }: Props) {
  return show ? (
    <div className='absolute top-0 left-0 z-10 w-full h-full p-2'>
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-25 -z-10' />
      {Component}
    </div>
  ) : null;
}
