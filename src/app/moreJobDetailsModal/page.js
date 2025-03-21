"use client";

import { useState } from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function MoreJobDetailsModal({ job, onclose }) {
	if (!job) {
		return null;
	}
	return (
		<>
			<div className="more_modal">
				<div className="full_details_section">
					<div className="header">
						<div className="heading">
							<label>
								{job.title}@{job.companyName}
							</label>
							<IconButton onClick={onclose}>
								<CloseIcon />
							</IconButton>
						</div>
					</div>
					<div className="full_job_details">
						<div className="job_posted">
							<h1>
								<span>Posted on:</span> 12/Dec/2025
							</h1>
						</div>
						<div className="type">
							<h1>
								<span>Job Type:</span> {job.type}
							</h1>
						</div>
						<div className="location">
							<h1>
								<span>Job location:</span> {job.location}
							</h1>
						</div>
						<div className="detail">
							<h1>
								<span>Job description:</span> {job.description}
							</h1>
						</div>
						<div className="companyName">
							<h1>
								<span>Company name:</span> {job.companyName}
							</h1>
						</div>
						<div className="website">
							<h1>
								<span>Company website:</span> {job.link}
							</h1>
						</div>
						<div className="skill_section">
							<div className="skills">
								<h1>Skills:</h1>
								{job.skills.map((skill, index) => (
									<h2 key={index}>{skill}</h2>
								))}
							</div>
						</div>
					</div>
					<div className="check_btn">
						<button type="submit">
							<p >Apply</p>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
