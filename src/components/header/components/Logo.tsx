import Link from 'next/link';
import React from 'react';


export default function Logo() {
  return (
    <div className="king-site-logo">
			<Link href="/">
				<img src="https://css.brilliantearth.com/static/img/logo-new.svg" width="324" className="img-responsive center-block" alt="Logo Image" />
			</Link>
		</div>
  );
}
