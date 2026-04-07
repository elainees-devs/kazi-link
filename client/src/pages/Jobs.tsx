import React, { useState, useMemo } from 'react';
import { jobs } from '../data/jobs_data';
// import { categories } from '../data/category_data';
import { JobList, Pagination, SortDropdown } from '../components';
import JobFilters from '../components/JobFilters';
import { JobType, JobStatus, JobSchedule } from '../constants';


const JOBS_PER_PAGE = 12;

const Jobs: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [selectedCategory, setSelectedCategory] = useState('');
  // const [jobType, setJobType] = useState('');
  // const [remoteOnly, setRemoteOnly] = useState(false);
  const [sortBy, setSortBy] = useState('');
  // Filter state
  const [selectedSchedules, setSelectedSchedules] = useState<JobSchedule[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<JobType[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<JobStatus[]>([]);

  // Handlers for filter changes
  const handleScheduleChange = (schedule: JobSchedule) => {
    setSelectedSchedules(prev =>
      prev.includes(schedule) ? prev.filter(s => s !== schedule) : [...prev, schedule]
    );
  };
  const handleTypeChange = (type: JobType) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };
  const handleStatusChange = (status: JobStatus) => {
    setSelectedStatuses(prev =>
      prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]
    );
  };

  const filteredJobs = useMemo(() => {
    let filtered = jobs;
    if (selectedSchedules.length > 0) {
      filtered = filtered.filter(j => selectedSchedules.includes(j.jobSchedule));
    }
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(j => selectedTypes.includes(j.jobType));
    }
    if (selectedStatuses.length > 0) {
      filtered = filtered.filter(j => selectedStatuses.includes(j.jobStatus));
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
  }, [selectedSchedules, selectedTypes, selectedStatuses, sortBy]);

  const totalJobs = filteredJobs.length;
  const totalPages = Math.ceil(totalJobs / JOBS_PER_PAGE);
  const paginatedJobs = filteredJobs.slice((currentPage - 1) * JOBS_PER_PAGE, currentPage * JOBS_PER_PAGE);

  // Reset to page 1 when filters/sort change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [sortBy]);

  return (
    <div className="flex gap-8">
      {/* Sidebar Filters */}
      <aside className="hidden mt-20  md:block sticky top-0 h-fit self-start">
        <JobFilters
          selectedSchedules={selectedSchedules}
          onScheduleChange={handleScheduleChange}
          selectedTypes={selectedTypes}
          onTypeChange={handleTypeChange}
          selectedStatuses={selectedStatuses}
          onStatusChange={handleStatusChange}
        />
      </aside>
      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
          <div></div>
          <span className="font-medium">
            <span className="text-orange-500 font-bold mr-1">{totalJobs.toLocaleString()}</span>
            <span className="text-gray-500">Jobs Found</span>
          </span>
        </div>
        <div className="flex justify-end mb-4 gap-4 flex-wrap">
          <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />
        </div>
        <JobList jobs={paginatedJobs} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Jobs;
