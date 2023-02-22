import React from 'react';
import FontIcon from '../fontIcon';
import Link from 'next/link';


export default function Heart() {
  return (
    <Link href="/shop/wishlist/" className="navitem">
      <FontIcon name="heart" />
    </Link>
  )
}
