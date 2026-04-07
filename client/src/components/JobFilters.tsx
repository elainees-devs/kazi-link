
import React from 'react';
import { JobType, JobStatus, JobSchedule } from '../constants';

interface JobFiltersProps {
	selectedSchedules: JobSchedule[];
	onScheduleChange: (schedule: JobSchedule) => void;
	selectedTypes: JobType[];
	onTypeChange: (type: JobType) => void;
	selectedStatuses: JobStatus[];
	onStatusChange: (status: JobStatus) => void;
}

const JobFilters: React.FC<JobFiltersProps> = ({
	selectedSchedules,
	onScheduleChange,
	selectedTypes,
	onTypeChange,
	selectedStatuses,
	onStatusChange,
}) => {
	return (
		<aside className="w-64 min-w-56 max-w-xs bg-white p-6 rounded shadow border flex flex-col gap-8">
			{/* Working Schedule */}
			<div>
				<div className="font-semibold mb-2">Working Schedule:</div>
				<label className="flex items-center gap-2 mb-1">
					<input
						type="checkbox"
						checked={selectedSchedules.includes(JobSchedule.FullTime)}
						onChange={() => onScheduleChange(JobSchedule.FullTime)}
					/> Full time
				</label>
				<label className="flex items-center gap-2 mb-1">
					<input
						type="checkbox"
						checked={selectedSchedules.includes(JobSchedule.PartTime)}
						onChange={() => onScheduleChange(JobSchedule.PartTime)}
					/> Part time
				</label>
				<label className="flex items-center gap-2 mb-1">
					<input
						type="checkbox"
						checked={selectedSchedules.includes(JobSchedule.Internship)}
						onChange={() => onScheduleChange(JobSchedule.Internship)}
					/> Internship
				</label>
				<label className="flex items-center gap-2 mb-1">
					<input
						type="checkbox"
						checked={selectedSchedules.includes(JobSchedule.Contract)}
						onChange={() => onScheduleChange(JobSchedule.Contract)}
					/> Contract
				</label>
			</div>
			{/* Job Type */}
			<div>
				<div className="font-semibold mb-2">Job Type:</div>
				<label className="flex items-center gap-2 mb-1">
					<input
						type="checkbox"
						checked={selectedTypes.includes(JobType.Onsite)}
						onChange={() => onTypeChange(JobType.Onsite)}
					/> Onsite
				</label>
				<label className="flex items-center gap-2 mb-1">
					<input
						type="checkbox"
						checked={selectedTypes.includes(JobType.Remote)}
						onChange={() => onTypeChange(JobType.Remote)}
					/> Remote
				</label>
				<label className="flex items-center gap-2 mb-1">
					<input
						type="checkbox"
						checked={selectedTypes.includes(JobType.Hybrid)}
						onChange={() => onTypeChange(JobType.Hybrid)}
					/> Hybrid
				</label>
			</div>
			{/* Job Status */}
			<div>
				<div className="font-semibold mb-2">Job Status:</div>
				<label className="flex items-center gap-2 mb-1">
					<input
						type="checkbox"
						checked={selectedStatuses.includes(JobStatus.Open)}
						onChange={() => onStatusChange(JobStatus.Open)}
					/> Open
				</label>
				<label className="flex items-center gap-2 mb-1">
					<input
						type="checkbox"
						checked={selectedStatuses.includes(JobStatus.Closed)}
						onChange={() => onStatusChange(JobStatus.Closed)}
					/> Closed
				</label>
				<label className="flex items-center gap-2 mb-1">
					<input
						type="checkbox"
						checked={selectedStatuses.includes(JobStatus.Draft)}
						onChange={() => onStatusChange(JobStatus.Draft)}
					/> Draft
				</label>
			</div>
		</aside>
	);
};

export default JobFilters;
