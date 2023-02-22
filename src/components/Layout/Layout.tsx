import React from 'react';
import Head from 'next/head';
import Header from '../header/header';
import Footer from '../Footer/footer';

const Layout = ({ page = null, children }: { page?: any, children?: any }) => {
	return (
		<>
			<Head>
				{page?.data?.title && <title>{page?.data?.title}</title>}
				{page?.data?.description && (
					<meta name="description" content={page?.data?.description} />
				)}
			</Head>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
