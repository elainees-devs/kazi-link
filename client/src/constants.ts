// Job type union and object
export type JobType = "remote" | "onsite" | "hybrid";
export const JobType = {
  Remote: "remote" as JobType,
  Onsite: "onsite" as JobType,
  Hybrid: "hybrid" as JobType,
};

// Job status union and object
export type JobStatus = "open" | "closed" | "draft";
export const JobStatus = {
  Open: "open" as JobStatus,
  Closed: "closed" as JobStatus,
  Draft: "draft" as JobStatus,
};

// Job schedule union and object
export type JobSchedule = "full_time" | "part_time" | "contract" | "internship";
export const JobSchedule = {
  FullTime: "full_time" as JobSchedule,
  PartTime: "part_time" as JobSchedule,
  Contract: "contract" as JobSchedule,
  Internship: "internship" as JobSchedule,
};

