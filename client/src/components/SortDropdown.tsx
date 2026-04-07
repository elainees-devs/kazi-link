import React from 'react';

interface SortDropdownProps {
  sortBy: string;
  onSortChange: (sort: string) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ sortBy, onSortChange }) => {
  return (
    <div className="mb-4">
      <select
        className="border rounded px-3 py-2"
        value={sortBy}
        onChange={e => onSortChange(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="date">Date Posted</option>
        <option value="salary">Salary</option>
        <option value="views">Views</option>
      </select>
    </div>
  );
};

export default SortDropdown;
