import React from 'react';
import './SupermarketItem.css';
import { useDrag } from 'react-dnd';

function SupermarketItem({isDragging, img, imgclass, text}) {
  // const [{ opacity }, dragRef] = useDrag({
  //   item: { type: ItemTypes.CARD, text },
  //   collect: (monitor) => ({
  //     opacity: monitor.isDragging() ? 0.5 : 1
  //   })
  // })
  return (
    <div className="SupermarketItem DisplayFlex">
      <img src={img} className={imgclass} alt={imgclass} />
      <p>{text}</p>
    </div>
  );
}

export default SupermarketItem;