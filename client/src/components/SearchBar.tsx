
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder }) => {
	const [input, setInput] = useState(value);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
		onChange(e.target.value);
	};

	return (
		<form className="flex items-center max-w-md mx-auto mb-6" onSubmit={e => e.preventDefault()}>
			<input
				type="text"
				className="w-full border rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
				placeholder={placeholder || 'Search jobs...'}
				value={input}
				onChange={handleInputChange}
			/>
			<span className="bg-blue-600 text-white px-4 py-2 rounded-r">
				<FaSearch />
			</span>
		</form>
	);
};

export default SearchBar;
