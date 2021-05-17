import React from 'react';

const Station = ({ data }: any) => (
  <div>
    <h4>{data.name}</h4>
    <h4>{data.frequency}</h4>
  </div>
);

export default Station;
