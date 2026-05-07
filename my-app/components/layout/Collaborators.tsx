const PLACEHOLDER_LOGOS = [
  { name: "Azure", icon: "AZ" },
  { name: "Docker", icon: "DK" },
  { name: "Kubernetes", icon: "K8" },
  { name: "MongoDB", icon: "MG" },
  { name: "PostgreSQL", icon: "PG" },
  { name: "React", icon: "RC" },
];

export default function Collaborators() {
  return (
    <section className="collaborator py-32 bg-[#1e6b52]" aria-label="Client logos">
      <div className="collaborator-inner">
        <div className="collaborator-card">
          <ul className="collaborator-icon-list">
            {PLACEHOLDER_LOGOS.map((logo) => (
              <li key={logo.name} className="collaborator-icon-item">
                <span className="collaborator-icon-placeholder" aria-hidden="true">
                  {logo.icon}
                </span>
                <span className="sr-only">{logo.name} logo</span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="collaborator-name-list">
          {PLACEHOLDER_LOGOS.map((logo) => (
            <li key={`${logo.name}-name`} className="collaborator-name-item">
              {logo.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
