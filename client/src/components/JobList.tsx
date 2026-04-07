
import React from 'react';
import type { IJob } from '../types/interfaces.types';
import JobCard from './JobCard';

interface JobListProps {
	jobs: IJob[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
	if (!jobs.length) {
		return <div className="text-gray-500">No jobs found.</div>;
	}
	return (
		<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{jobs.map((job) => (
				<JobCard key={job.id} job={job} />
			))}
		</div>
	);
};

export default JobList;
