import React, { useState, useMemo } from "react";
import { FilterBar, JobList, SortDropdown } from "../components";
import HeroSection from "../components/HeroSection";
import { jobs } from "../data/jobs_data";
import { categories } from "../data/category_data";

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [jobType, setJobType] = useState("");
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [sortBy, setSortBy] = useState("");

  const filteredJobs = useMemo(() => {
    let filtered = jobs;
    if (selectedCategory) {
      filtered = filtered.filter((j) => j.categoryId === selectedCategory);
    }
    if (jobType) {
      filtered = filtered.filter((j) => j.jobType === jobType);
    }
    if (remoteOnly) {
      filtered = filtered.filter((j) => j.isRemote);
    }
    if (sortBy) {
      filtered = [...filtered];
      if (sortBy === "date") {
        filtered.sort(
          (a, b) =>
            new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime(),
        );
      } else if (sortBy === "salary") {
        filtered.sort((a, b) => (b.salary || 0) - (a.salary || 0));
      } else if (sortBy === "views") {
        filtered.sort((a, b) => b.views - a.views);
      }
    }
    return filtered;
  }, [selectedCategory, jobType, remoteOnly, sortBy]);

  return (
    <div>
      <HeroSection />
      <h1 className="text-2xl font-bold mb-6">Job Listings</h1>
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
      <JobList jobs={filteredJobs.slice(0, 6)} />
      <div className="flex justify-center mt-6">
        <a
          href="/jobs"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-medium"
        >
          Explore All Jobs
        </a>
      </div>
    </div>
  );
};

export default Home;
