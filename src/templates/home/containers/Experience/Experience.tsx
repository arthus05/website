import { experience } from "@/content/portfolio";

const Experience = () => (
  <section id="experience" className="content-section" aria-labelledby="experience-title">
    <div className="section-heading">
      <span className="section-number" aria-hidden="true">02</span>
      <h2 id="experience-title">Experience</h2>
      <span className="section-note">Building professionally since 2019</span>
    </div>
    <ol className="experience-list">
      {experience.map((job) => (
        <li className="experience-item" key={job.company}>
          <p className="experience-dates">{job.start} <span aria-hidden="true">—</span><span className="sr-only">to</span> {job.end}</p>
          <div>
            <h3>{job.company} {job.relationship && <span className="experience-relationship">{job.relationship}</span>}</h3>
            <p className="experience-role">{job.role}</p>
            <p className="experience-description">{job.description}</p>
          </div>
        </li>
      ))}
    </ol>
    <p className="section-footnote">Some engagements overlapped, including freelance work.</p>
  </section>
);

export default Experience;
