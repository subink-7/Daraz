import React from 'react';
import FullCard from './component/FullCard';

export default function Fullcart() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <FullCard />
      <FullCard />
      <FullCard />
      <FullCard />
      <FullCard />
      <FullCard />
      <FullCard />
      <FullCard />
      <FullCard />
      <FullCard />
    </div>
  );
}
