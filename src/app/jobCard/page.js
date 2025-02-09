export default function JobCard({ jobs, open }) {
	return (
		<>
			{jobs.length > 0 ? (
				jobs.map((job) => (
					<div key={job.id} className="card_section">
						<div className="section_1">
							<h1>{job.title}</h1>
							<h2>{job.companyName}</h2>
						</div>
						<div className="section_2">
							{job.skills.map((skill, index) => (
								<h1 key={index}>{skill}</h1>
							))}
						</div>
						<div className="section_3">
							<div className="add_info">
								<p>
									{Math.floor((Date.now() - new Date(job.postedOn)) / 60000)}{" "}
									min ago
								</p>
								<span> |</span>
								<p>{job.type}</p> <span> |</span>
								<p>{job.location}</p>
							</div>
							<div className="check_btn">
								<button onClick={() => open(job)}>More</button>
							</div>
						</div>
					</div>
				))
			) : (
				<p className="loading">Loading...</p>
			)}
		</>
	);
}
