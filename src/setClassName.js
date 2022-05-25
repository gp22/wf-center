const setClassName = (attributes) => {
	const { andText, intrinsic, size } = attributes;

	return `center ${size} ${andText && 'and-text'} ${intrinsic && 'intrinsic'}`;
};

export default setClassName;
