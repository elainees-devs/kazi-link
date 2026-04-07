
import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Loader: React.FC = () => (
	<div className="flex justify-center items-center py-8">
		<FaSpinner className="animate-spin text-blue-600" size={40} />
		<span className="ml-3 text-blue-600 font-medium">Loading...</span>
	</div>
);

export default Loader;
