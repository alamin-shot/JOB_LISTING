"use client";
import { createContext, useState, useContext, useEffect } from "react";

const JobsContext = createContext();

export const useJobs = () => useContext(JobsContext);

export const JobsProvider = ({ children }) => {
	const [jobs, setJobs] = useState([]);
	const [searchParams, setSearchParams] = useState({
		type: "Full Time",
		location: "Remote",
	});
	const [viewMoreDetails, setViewMoreDeails] = useState(null);

	const fetchJobs = async () => {
		const res = await fetch(
			`/api/jobs/search?type=${searchParams.type}&location=${searchParams.location}`
		);
		const data = await res.json();
		setJobs(data);
	};

	const handleSearch = (searchFilter) => {
		setSearchParams(searchFilter);
	};

	const handleReset = async () => {
		setSearchParams({ type: "Full Time", location: "Remote" });
		fetchJobs();
	};

	useEffect(() => {
		fetchJobs(); // Fetch jobs whenever the component mounts or searchParams changes
	}, [searchParams]);

	return (
		<JobsContext.Provider
			value={{
				jobs,
				searchParams,
				viewMoreDetails,
				setViewMoreDeails,
				handleSearch,
				handleReset,
			}}
		>
			{children}
		</JobsContext.Provider>
	);
};
