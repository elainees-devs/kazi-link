import React from 'react';
import type { ICategory } from '../types/interfaces.types';

interface FilterBarProps {
  categories: ICategory[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
  jobType: string;
  onJobTypeChange: (type: string) => void;
  remoteOnly: boolean;
  onRemoteChange: (remote: boolean) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  jobType,
  onJobTypeChange,
  remoteOnly,
  onRemoteChange,
}) => {
  return (
    <div className="flex flex-wrap gap-4 mb-4 items-center">
      <select
        className="border rounded px-3 py-2"
        value={selectedCategory}
        onChange={e => onCategoryChange(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map(cat => (
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </select>
      <select
        className="border rounded px-3 py-2"
        value={jobType}
        onChange={e => onJobTypeChange(e.target.value)}
      >
        <option value="">All Types</option>
        <option value="onsite">Onsite</option>
        <option value="remote">Remote</option>
        <option value="hybrid">Hybrid</option>
      </select>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={remoteOnly}
          onChange={e => onRemoteChange(e.target.checked)}
        />
        Remote Only
      </label>
    </div>
  );
};

export default FilterBar;
