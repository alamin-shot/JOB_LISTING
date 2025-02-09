// "use client";
// import Select from "@mui/material/Select";
// import { MenuItem } from "@mui/material";
// import { useState } from "react";
// import CloseIcon from "@mui/icons-material/Close";
// import { IconButton } from "@mui/material";
// import { toast } from "react-toastify";

// export default function NewJobModal({ setIsJobModalVisible, addNewJob }) {
// 	const [loading, setLoading] = useState(false);
// 	// const [error, setError] = useState("");
// 	const [jobDetails, setJobDetails] = useState({
// 		title: "",
// 		type: "Full Time",
// 		companyName: "",
// 		companyUrl: "",
// 		location: "Remote",
// 		link: "",
// 		description: "",
// 		skills: [],
// 	});

// 	const skills = ["Javascript", "React", "Next", "MongoDB", "Node"];

// 	const handleInputChange = (e) => {
// 		const { name, value } = e.target;
// 		setJobDetails((prevState) => ({
// 			...prevState,
// 			[name]: value,
// 		}));
// 	};

// 	const handleSkillToggle = (skill) => {
// 		setJobDetails((prevState) => {
// 			const newSkills = prevState.skills.includes(skill)
// 				? prevState.skills.filter((s) => s !== skill)
// 				: [...prevState.skills, skill];
// 			return { ...prevState, skills: newSkills };
// 		});
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		setLoading(true);
// 		if (
// 			!jobDetails.title ||
// 			!jobDetails.companyName ||
// 			!jobDetails.companyUrl ||
// 			!jobDetails.link ||
// 			!jobDetails.description ||
// 			jobDetails.skills.length === 0
// 		) {
// 			toast.error("Please fill all required fields");
// 			// setError("Please fill all required fields");
// 			setLoading(false);
// 			return;
// 		}
// 		try {
// 			const res = await fetch("/api/jobs", {
// 				method: "POST",
// 				headers: { "Content-Type": "application/json" },
// 				body: JSON.stringify(jobDetails),
// 			});
// 			const result = await res.json();

// 			if (res.ok) {
// 				toast.success("Job Posted Successfully");
// 				addNewJob({
// 					...jobDetails,
// 					id: result.id,
// 					postedOn: new Date().toISOString(),
// 				}); // Add job to the list
// 				setIsJobModalVisible(false); // Close modal after successful posting
// 			} else {
// 				toast.error("Error Posting job");
// 			}
// 		} catch (error) {
// 			toast.error("Error Posting job");
// 		} finally {
// 			setLoading(false);
// 		}
// 	};

// 	const handleClose = () => {
// 		setIsJobModalVisible(false);
// 	};

// 	return (
// 		<div className={"post_job"}>
// 			<div className="job_post_section">
// 				<div className="form">
// 					<form onSubmit={handleSubmit}>
// 						<div className="heading">
// 							<label>Post Job</label>
// 							<IconButton onClick={handleClose}>
// 								<CloseIcon />
// 							</IconButton>
// 						</div>
// 						<div className="title">
// 							<input
// 								name="title"
// 								placeholder="Job title"
// 								value={jobDetails.title}
// 								onChange={handleInputChange}
// 							/>
// 							<Select
// 								name="type"
// 								disableUnderline
// 								variant="filled"
// 								className="selector"
// 								onChange={handleInputChange}
// 								value={jobDetails.type}
// 							>
// 								<MenuItem value="Full Time">Full Time</MenuItem>
// 								<MenuItem value="Part Time">Part Time</MenuItem>
// 								<MenuItem value="Contract">Contract</MenuItem>
// 							</Select>
// 						</div>

// 						<div className="company_details">
// 							<input
// 								name="companyName"
// 								placeholder="Company Name"
// 								value={jobDetails.companyName}
// 								onChange={handleInputChange}
// 							/>
// 							<input
// 								name="companyUrl"
// 								placeholder="Company Url"
// 								value={jobDetails.companyUrl}
// 								onChange={handleInputChange}
// 							/>
// 						</div>

// 						<div className="select_job">
// 							<Select
// 								name="location"
// 								value={jobDetails.location}
// 								disableUnderline
// 								variant="filled"
// 								className="selector"
// 								onChange={handleInputChange}
// 							>
// 								<MenuItem value="Remote">Remote</MenuItem>
// 								<MenuItem value="In_Office">In_Office</MenuItem>
// 							</Select>
// 							<input
// 								name="link"
// 								placeholder="Job link"
// 								value={jobDetails.link}
// 								onChange={handleInputChange}
// 							/>
// 						</div>
// 						<div className="description">
// 							<textarea
// 								name="description"
// 								value={jobDetails.description}
// 								placeholder="Job description"
// 								onChange={handleInputChange}
// 							/>
// 						</div>
// 						<div className="skills_section">
// 							<label>Skills</label>
// 							<div className="skills">
// 								{skills.map((skill, index) => (
// 									<button
// 										className={
// 											jobDetails.skills.includes(skill) ? "selected" : ""
// 										}
// 										key={index}
// 										onClick={() => handleSkillToggle(skill)}
// 										type="button"
// 									>
// 										{skill}
// 									</button>
// 								))}
// 							</div>
// 						</div>
// 						<div className="post_btn">
// 							<button type="submit">
// 								{loading ? <span className="loading"></span> : "Post Job"}
// 							</button>
// 						</div>
// 					</form>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
// NEXT PROJECT COPY:
"use client";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { toast } from "react-toastify";

export default function NewJobModal({ setIsJobModalVisible, addNewJob }) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({});
	const [jobDetails, setJobDetails] = useState({
		title: "",
		type: "Full Time",
		companyName: "",
		companyUrl: "",
		location: "Remote",
		link: "",
		description: "",
		skills: [],
	});

	const skills = ["Javascript", "React", "Next", "MongoDB", "Node"];

	const validateFields = () => {
		const newError = {};
		if (!jobDetails.title) newError.title = "Please insert title";
		if (!jobDetails.companyName)
			newError.companyName = "Please insert companyname";
		if (!jobDetails.companyUrl)
			newError.companyUrl = "Please insert companyUrl";
		if (!jobDetails.link) newError.link = "Please insert link";
		if (!jobDetails.description)
			newError.description = "Please insert description";
		if (jobDetails.skills.length === 0)
			newError.skills = "Please insert skills";
		return newError;
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setJobDetails((prevState) => ({
			...prevState,
			[name]: value,
		}));
		setError((prevError) => ({
			...prevError,
			[name]: "",
		}));
	};

	const handleSkillToggle = (skill) => {
		setJobDetails((prevState) => {
			const newSkills = prevState.skills.includes(skill)
				? prevState.skills.filter((s) => s !== skill)
				: [...prevState.skills, skill];
			return { ...prevState, skills: newSkills };
		});
		setError((prevError) => ({
			...prevError,
			skills: "",
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const Errors = validateFields();
		if (Object.keys(Errors).length > 0) {
			setError(Errors);
			setLoading(false);
			return;
		}
		try {
			const res = await fetch("/api/jobs", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(jobDetails),
			});
			const result = await res.json();

			if (res.ok) {
				toast.success("Job Posted Successfully");
				addNewJob({
					...jobDetails,
					id: result.id,
					postedOn: new Date().toISOString(),
				}); // Add job to the list
				setIsJobModalVisible(false); // Close modal after successful posting
			} else {
				toast.error("Error Posting job");
			}
		} catch (error) {
			toast.error("Error Posting job");
		} finally {
			setLoading(false);
		}
	};

	const handleClose = () => {
		setIsJobModalVisible(false);
	};

	return (
		<div className={"post_job"}>
			<div className="job_post_section">
				<div className="form">
					<form onSubmit={handleSubmit}>
						<div className="heading">
							<label>Post Job</label>
							<IconButton onClick={handleClose}>
								<CloseIcon />
							</IconButton>
						</div>
						<div className="title">
							<div className="title_input">
								<input
									name="title"
									placeholder="Job title"
									value={jobDetails.title}
									onChange={handleInputChange}
								/>
								<Select
									name="type"
									disableUnderline
									variant="filled"
									className="selector"
									onChange={handleInputChange}
									value={jobDetails.type}
								>
									<MenuItem value="Full Time">Full Time</MenuItem>
									<MenuItem value="Part Time">Part Time</MenuItem>
									<MenuItem value="Contract">Contract</MenuItem>
								</Select>
							</div>

							<div className="error_text">
								{error.title && <p className="error_message">{error.title}</p>}
							</div>
						</div>

						<div className="company_details">
							<div className="company_details_input">
								<input
									name="companyName"
									placeholder="Company Name"
									value={jobDetails.companyName}
									onChange={handleInputChange}
								/>
								<input
									name="companyUrl"
									placeholder="Company Url"
									value={jobDetails.companyUrl}
									onChange={handleInputChange}
								/>
							</div>
							<div className="error_text_com">
								{error.companyName && (
									<p className="error_message">{error.companyName}</p>
								)}

								{error.companyUrl && (
									<p className="error_message">{error.companyUrl}</p>
								)}
							</div>
						</div>

						<div className="select_job">
							<div className="select_job_input">
								<input
									name="link"
									placeholder="Job link"
									value={jobDetails.link}
									onChange={handleInputChange}
								/>
								<Select
									name="location"
									value={jobDetails.location}
									disableUnderline
									variant="filled"
									className="selector"
									onChange={handleInputChange}
								>
									<MenuItem value="Remote">Remote</MenuItem>
									<MenuItem value="In_Office">In_Office</MenuItem>
								</Select>
							</div>
							<div className="error_text">
								{error.link && <p className="error_message">{error.link}</p>}
							</div>
						</div>
						<div className="description">
							<textarea
								name="description"
								value={jobDetails.description}
								placeholder="Job description"
								onChange={handleInputChange}
							/>
							<div className="error_text">
								{error.description && (
									<p className="error_message">{error.description}</p>
								)}
							</div>
						</div>
						<div className="skills_section">
							<label>Skills</label>
							<div className="skills">
								{skills.map((skill, index) => (
									<button
										className={
											jobDetails.skills.includes(skill) ? "selected" : ""
										}
										key={index}
										onClick={() => handleSkillToggle(skill)}
										type="button"
									>
										{skill}
									</button>
								))}
								<div className="error_text">
									{error.skills && (
										<p className="error_message">{error.skills}</p>
									)}
								</div>
							</div>
						</div>
						<div className="post_btn">
							<button type="submit">
								{loading ? <span className="loading"></span> : "Post Job"}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
