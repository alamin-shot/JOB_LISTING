"use client";

import { useState } from "react";
import NewJobModal from "../newjobmodal/page";

export default function Header({ addNewJob }) {
	const [isJobModalVisible, setIsJobModalVisible] = useState(false);

	const handlePostJob = () => {
		setIsJobModalVisible(true);
	};

	return (
		<>
			<div className="header_section">
				<div className="header_text">
					<h1>Open Job Listing</h1>
				</div>
				<div className="add_btn">
					<button onClick={handlePostJob}>Post a Job</button>
				</div>
			</div>

			{/* Pass setIsJobModalVisible and addNewJob as props */}
			{isJobModalVisible && (
				<NewJobModal
					setIsJobModalVisible={setIsJobModalVisible}
					addNewJob={addNewJob} // Pass down addNewJob from Home
				/>
			)}
		</>
	);
}
