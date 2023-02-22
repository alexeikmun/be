import { useState, useEffect } from 'react';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import { useRouter } from 'next/router';

export default function Index() {
	const [notFound, setNotFound] = useState(false);
	const [builderContent, setBuilderContent] = useState();
	const isPreviewingInBuilder = useIsPreviewing();
	const router = useRouter();

	useEffect(() => {
		async function fetchContent() {
			console.log(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

			const content = await builder
				.get('page', {
					url: '/engagement-rings',
				})
				.promise();

			console.log(content);

			setBuilderContent(content);
			setNotFound(!content);
		}

		fetchContent();
	}, []);

	if (notFound && !isPreviewingInBuilder) {
		return <div>Not Found 404 error</div>;
	}

	return (
		<div style={{ width: '100%' }}>
			<BuilderComponent model="page" content={builderContent} />
		</div>
	);
}
