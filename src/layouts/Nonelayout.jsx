import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderNone from '../components/HeaderNone';

function Nonelayout() {
  return (
    <>
      <HeaderNone /> 
      <main className="">
        <Outlet /> 
      </main>
    </>
  );
}

export default Nonelayout;
