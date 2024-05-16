import React from 'react';
import { Outlet } from 'react-router-dom';

const MasterLayout = () => {
  return (
    <div>
      MasterLayout{' '}
      <div>
        {' '}
        <Outlet />
      </div>
    </div>
  );
};

export default MasterLayout;
