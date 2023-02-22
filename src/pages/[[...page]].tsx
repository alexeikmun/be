import React from 'react';
import { useRouter } from 'next/router';
import { BuilderComponent, builder } from '@builder.io/react';
import BrilliantEarth from '@/components/be';
import Layout from '@/components/Layout/Layout';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || '');

export async function getStaticProps({ params }: { params: any }) {
	const page = await builder.get('page', {
		userAttributes: {
			urlPath: '/' + (params?.page?.join('/') || ''),
		},
	}).toPromise();

	return {
		props: {
			page: page || null,
		},
		revalidate: 5,
	};
}

export async function getStaticPaths() {
	const pages = await builder.getAll('page', {
		fields: 'data.url',
		options: { noTargeting: true },
	});

	return {
		paths: pages.map(page => page.data?.url),
		fallback: true,
	};
}

export default function Page({ page }: { page: any }) {
	const router = useRouter();

	if (router.isFallback) {
		return <h1>Loading...</h1>;
	}

	if (!page) {
		return (
			<Layout>
				<BrilliantEarth uri={router.asPath} />;
			</Layout>
		);
	}

	return (
		<Layout page={page}>
			<BuilderComponent model="page" content={page} />
		</Layout>
	);
}
