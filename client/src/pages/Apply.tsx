
import React, { useState } from 'react';
import { jobs } from '../data/jobs_data';

const Apply: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    resume: '',
    coverLetter: '',
    jobId: jobs[0]?.id || '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold mb-4">Apply for a Job</h1>
      {submitted ? (
        <div className="bg-green-100 text-green-700 p-4 rounded">Application submitted! (Demo only)</div>
      ) : (
        <form className="max-w-lg w-full space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-medium mb-1">Select Job</label>
            <select
              name="jobId"
              value={form.jobId}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            >
              {jobs.map((job) => (
                <option key={job.id} value={job.id}>{job.title} @ {job.company}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Resume URL</label>
            <input
              type="url"
              name="resume"
              value={form.resume}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Cover Letter</label>
            <textarea
              name="coverLetter"
              value={form.coverLetter}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
};

export default Apply;
