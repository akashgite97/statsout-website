import React from 'react';

export const GraphCard = ({ itle, img }) => {
  return (
    <>
      <div className='card shadow    '>
        <div className='card-body'>
          <img src={img} width='100%' height='100%' />
        </div>
      </div>
    </>
  );
};
