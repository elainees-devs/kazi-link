
import React from 'react';

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
	if (totalPages <= 1) return null;

	const getPages = () => {
		const pages = [];
		for (let i = 1; i <= totalPages; i++) {
			pages.push(i);
		}
		return pages;
	};

	return (
		<nav className="flex justify-center items-center gap-2 mt-8" aria-label="Pagination">
			<button
				className="px-3 py-1 rounded border bg-white text-gray-700 hover:bg-blue-50 disabled:opacity-50"
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				Prev
			</button>
			{getPages().map((page) => (
				<button
					key={page}
					className={`px-3 py-1 rounded border ${
						page === currentPage
							? 'bg-blue-600 text-white border-blue-600'
							: 'bg-white text-gray-700 hover:bg-blue-50'
					}`}
					onClick={() => onPageChange(page)}
					aria-current={page === currentPage ? 'page' : undefined}
				>
					{page}
				</button>
			))}
			<button
				className="px-3 py-1 rounded border bg-white text-gray-700 hover:bg-blue-50 disabled:opacity-50"
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				Next
			</button>
		</nav>
	);
};

export default Pagination;
