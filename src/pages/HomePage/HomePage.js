import React from 'react';

import ItemCard from '../../components/ItemCard/ItemCard';
import Sidebar from '../../components/Sidebar/Sidebar';

import './HomePage.scss';

const HomePage = ({ items, addToCart }) => {
  console.log(items);
  return (
    <div className='homepage'>
      <aside className='aside'>
        <Sidebar />
      </aside>
      <main className='main'>
        <div className='items'>
          {
            items.map((item) => (
              <ItemCard
                key={item.id}
                itemData={item}
                addToCart={addToCart}
              />
            ))
          }
        </div>
      </main>
    </div>
  );
};

export default HomePage;