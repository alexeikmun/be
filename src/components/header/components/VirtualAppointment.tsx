import React from 'react';
import FontIcon from '../fontIcon';
import Link from 'next/link';


export default function VirtualAppointment() {
  return (
    <Link href="/stores/virtual-appointment/" className="navitem js-our-showrooms">
      <FontIcon name="tv" />
      <span className="sr-only">Virtual Appointment</span>
      <span className="hidden-xs-inline visit">Virtual Appointment</span>
    </Link>
  );
}
