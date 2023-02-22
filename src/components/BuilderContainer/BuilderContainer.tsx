import { BuilderComponent, useIsPreviewing } from '@builder.io/react';

const BuilderContainer = ({ content }: { content: any }) => {
	const isPreviewingInBuilder = useIsPreviewing();

	if (!content && !isPreviewingInBuilder) {
		return <div>Not Found 404 error</div>;
	}

	return (
		<div style={{ width: '100%' }}>
			<BuilderComponent model="page" content={content} />
		</div>
	);
};

export default BuilderContainer;
