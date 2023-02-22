import React from 'react';
import FontIcon from '../fontIcon';
import Link from 'next/link';


export default function Search() {
  return (
    <Link href="/search/" className="navitem">
      <FontIcon name="search" />
    </Link>
  )
}
