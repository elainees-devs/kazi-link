
import React from 'react';
import type { IJob } from '../types/interfaces.types';
import { Link } from 'react-router-dom';

interface JobCardProps {
	job: IJob;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
	return (
		<div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
			<h2 className="text-lg font-bold mb-1">{job.title}</h2>
			<div className="text-blue-600 font-medium mb-1">{job.company}</div>
			<div className="text-gray-600 text-sm mb-2">{job.location} • {job.jobSchedule}</div>
			<div className="text-gray-700 mb-2 line-clamp-2">{job.description}</div>
			<div className="flex flex-wrap gap-2 mb-2">
				{job.requirements.slice(0, 3).map((req, idx) => (
					<span key={idx} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">{req}</span>
				))}
			</div>
			<div className="flex items-center justify-between mt-2">
				<span className="text-sm text-gray-500">{job.views} views</span>
				<Link
					to={`/jobs/${job.id}`}
					className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
				>
					View Details
				</Link>
			</div>
		</div>
	);
};

export default JobCard;
