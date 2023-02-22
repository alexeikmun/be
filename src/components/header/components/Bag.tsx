import React from 'react';
import FontIcon from '../fontIcon';
import Link from 'next/link';


export default function Bag() {
  return (
    <Link href="/shop/cart/" className="navitem">
      <FontIcon name="bag" />
    </Link>
  )
}
