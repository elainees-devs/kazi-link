import React from "react";
import { useParams, Link } from "react-router-dom";
import { jobs } from "../data/jobs_data";
import { analytics } from "../data/analytics_data";

const JobDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const job = jobs.find((j) => j.id === id);
  const jobAnalytics = analytics.filter((a) => a.jobId === id);

  if (!job) {
    return <div className="text-red-500">Job not found.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-2xl bg-white rounded shadow p-6">
        <h1 className="text-2xl font-bold mb-2 text-center">{job.title}</h1>
        <div className="text-blue-600 font-medium mb-1 text-center">
          {job.company}
        </div>
        <div className="text-gray-600 text-sm mb-2 text-center">
          {job.location} • {job.jobSchedule}
        </div>
        <div className="mb-4 text-center">{job.description}</div>
        <div className="mb-2">
          <span className="font-semibold">Requirements:</span>
          <ul className="list-disc ml-6">
            {job.requirements.map((req, idx) => (
              <li key={idx}>{req}</li>
            ))}
          </ul>
        </div>
        {job.benefits && (
          <div className="mb-2">
            <span className="font-semibold">Benefits:</span>
            <ul className="list-disc ml-6">
              {job.benefits.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="mb-4">
          <span className="font-semibold">Status:</span> {job.jobStatus}
        </div>
        <div className="flex justify-center">
          <Link
            to="/apply"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-6"
          >
            Apply Now
          </Link>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-2">Analytics</h2>
          {jobAnalytics.length === 0 ? (
            <div className="text-gray-500">No analytics data.</div>
          ) : (
            <ul className="list-disc ml-6 text-sm">
              {jobAnalytics.map((a) => (
                <li key={a.id}>
                  {a.searchQuery ? `Search: "${a.searchQuery}"` : "Viewed"}
                  {a.location && ` from ${a.location}`}
                  {a.timestamp &&
                    ` at ${new Date(a.timestamp).toLocaleString()}`}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
