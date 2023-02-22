import { useState, useEffect } from 'react';
import { builder } from '@builder.io/react';
import Header from '../components/header/header';
import Footer from '../components/Footer/footer';
import BrilliantEarth from '@/components/be';
import BuilderContainer from '../components/BuilderContainer/BuilderContainer';

const Routing = () => {
	const [pageType, setPageType] = useState('');
	const [pageContent, setPageContent] = useState(null);

	async function fetchContent() {
		const url = `${window.location.pathname}${window.location.search}`;
		console.log(url);

		const content = await builder
			.get('page', {
				url,
			})
			.promise();

		console.log(content);

		if (content) {
			setPageType('builder');
			setPageContent(content);
			return;
		}

		setPageType('djangoApp');
	}

	useEffect(() => {
		fetchContent();
	}, []);

	if (!pageType) {
		return <h1>Loading...</h1>;
	}

	return (
		<>
			<Header />
			{pageType === 'builder' ? (
				<BuilderContainer content={pageContent} />
			) : (
				<BrilliantEarth uri={''}/>
			)}
			<Footer />
		</>
	);
};

export default Routing;
