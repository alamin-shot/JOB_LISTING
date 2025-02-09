"use client";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import { useState, useEffect } from "react";

export default function SearchBar({ onSearch, onReset, searchParams }) {
	const [jobSearch, setJobSearch] = useState(searchParams);
	const [isSearchPerformed, setIsSearchPerformed] = useState(false);

	useEffect(() => {
		setJobSearch(searchParams); // Sync with parent state
	}, [searchParams]);

	const handleChange = (e) => {
		setJobSearch((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSearch = () => {
		onSearch(jobSearch); // Pass updated state to parent
		setIsSearchPerformed(true); // Mark search as performed
		console.log(jobSearch);
	};

	const handleReset = () => {
		setJobSearch({
			type: "Full Time",
			location: "Remote",
		});
		onReset(); // Reset parent state
		setIsSearchPerformed(false); // Reset search status
	};

	return (
		<div className="search_section">
			<Select
				disableUnderline
				variant="filled"
				className="selector"
				onChange={handleChange}
				name="type"
				value={jobSearch.type}
			>
				<MenuItem value="Full Time">Full Time</MenuItem>
				<MenuItem value="Part Time">Part Time</MenuItem>
				<MenuItem value="Contract">Contract</MenuItem>
			</Select>
			<Select
				disableUnderline
				variant="filled"
				className="selector"
				value={jobSearch.location}
				name="location"
				onChange={handleChange}
			>
				<MenuItem value="Remote">Remote</MenuItem>
				<MenuItem value="In_Office">In_Office</MenuItem>
			</Select>
			<div className="search_btn">
				{isSearchPerformed ? (
					<button
						onClick={handleReset}
						disabled={
							jobSearch.type === "Full Time" && jobSearch.location === "Remote"
						}
					>
						Reset
					</button>
				) : (
					<button onClick={handleSearch}>Search</button>
				)}
			</div>
		</div>
	);
}
