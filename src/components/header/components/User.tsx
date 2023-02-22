import React from 'react';
import FontIcon from '../fontIcon';
import Link from 'next/link';


export default function User() {
  return (
    <Link href="/accounts/login/" className="navitem">
      <FontIcon name="user" />
    </Link>
  )
}
