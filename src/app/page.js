"use client";

import { useState, useEffect } from "react";
import Header from "./header/page";
import JobCard from "./jobCard/page";
import SearchBar from "./searchBar/page";
import MoreJobDetailsModal from "./moreJobDetailsModal/page";

export default function Home() {
	const [jobs, setJobs] = useState([]);
	const [viewMoreDetails, setViewMoreDeails] = useState(null);
	const [searchParams, setSearchParams] = useState({
		type: "Full Time",
		location: "Remote",
	});

	const jobsData = async () => {
		const res = await fetch("/api/jobs", {
			method: "GET",
		});
		const data = await res.json();
		setJobs(data);
	};

	const addNewJob = (newJob) => {
		setJobs((prevJobs) => [newJob, ...prevJobs]);
	};

	useEffect(() => {
		jobsData(); // Initial data fetch
	}, []);

	const handleSearch = (searchFilter) => {
		setSearchParams(searchFilter); // Update searchParams in parent state
	};

	const handleReset = async () => {
		// Reset searchParams to default values
		setSearchParams({ type: "Full Time", location: "Remote" });

		jobsData(); // Set jobs to all available jobs
	};

	// useEffect to fetch filtered jobs
	useEffect(() => {
		const fetchFilteredJobs = async () => {
			const { type, location } = searchParams;
			const res = await fetch(
				`/api/jobs/search?type=${encodeURIComponent(
					type
				)}&location=${encodeURIComponent(location)}`
			);
			const data = await res.json();
			setJobs(data); // Set filtered jobs in state
		};

		fetchFilteredJobs(); // Fetch filtered jobs when searchParams change
	}, [searchParams]);

	const openJobDetailsModal = (job) => {
		setViewMoreDeails(job);
		console.log("clicked");
	};
	const closeJobDetailsModal = () => {
		setViewMoreDeails(null);
	};

	return (
		<div>
			<Header addNewJob={addNewJob} />
			<div className="container">
				<SearchBar
					onSearch={handleSearch}
					onReset={handleReset}
					searchParams={searchParams} // Pass searchParams to sync state
				/>
				{viewMoreDetails && (
					<MoreJobDetailsModal
						job={viewMoreDetails}
						onclose={closeJobDetailsModal}
					/>
				)}
				<JobCard jobs={jobs} open={openJobDetailsModal} />
			</div>
		</div>
	);
}
