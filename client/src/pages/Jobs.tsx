import React, { useState, useMemo } from 'react';
import { jobs } from '../data/jobs_data';
import { categories } from '../data/category_data';
import { FilterBar, JobList, Pagination, SortDropdown } from '../components';


const JOBS_PER_PAGE = 12;

const Jobs: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [jobType, setJobType] = useState('');
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [sortBy, setSortBy] = useState('');

  const filteredJobs = useMemo(() => {
    let filtered = jobs;
    if (selectedCategory) {
      filtered = filtered.filter(j => j.categoryId === selectedCategory);
    }
    if (jobType) {
      filtered = filtered.filter(j => j.jobType === jobType);
    }
    if (remoteOnly) {
      filtered = filtered.filter(j => j.isRemote);
    }
    if (sortBy) {
      filtered = [...filtered];
      if (sortBy === 'date') {
        filtered.sort((a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime());
      } else if (sortBy === 'salary') {
        filtered.sort((a, b) => (b.salary || 0) - (a.salary || 0));
      } else if (sortBy === 'views') {
        filtered.sort((a, b) => b.views - a.views);
      }
    }
    return filtered;
  }, [selectedCategory, jobType, remoteOnly, sortBy]);

  const totalJobs = filteredJobs.length;
  const totalPages = Math.ceil(totalJobs / JOBS_PER_PAGE);
  const paginatedJobs = filteredJobs.slice((currentPage - 1) * JOBS_PER_PAGE, currentPage * JOBS_PER_PAGE);

  // Reset to page 1 when filters/sort change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, jobType, remoteOnly, sortBy]);

  return (
    <div>
      <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
        <div></div>
        <span className="font-medium">
          <span className="text-orange-500 font-bold mr-1">{totalJobs.toLocaleString()}</span>
          <span className="text-gray-500">Jobs Found</span>
        </span>
      </div>
      <div className="flex justify-end mb-4 gap-4 flex-wrap">
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          jobType={jobType}
          onJobTypeChange={setJobType}
          remoteOnly={remoteOnly}
          onRemoteChange={setRemoteOnly}
        />
        <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />
      </div>
      <JobList jobs={paginatedJobs} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Jobs;
