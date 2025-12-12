import './AboutPage.css'
function AboutPage() {
    return <div className="about-container">
        <h1>About me</h1>
        <p>
            Hello! I'm a passionate software developer with a love for creating dynamic and user-friendly web applications. With experience in various programming languages and frameworks, I enjoy solving complex problems and continuously learning new technologies.
        </p>
        <p>
            In my free time, I like to contribute to open-source projects, explore new programming paradigms, and stay updated with the latest trends in the tech industry.
        </p>
        <p>
            Feel free to reach out if you'd like to collaborate on a project or just want to connect!
        </p>

        <div className="skills-section">
            <div className="skill-card"><h1>Code</h1>
            <ul>
                <li>Java</li>
                <li>JavaScript / TypeScript</li>
                <li>Kotlin</li>
                <li>Python</li>
                <li>HTML5 / CSS3</li>
                <li>Terraform</li>
            </ul>
            </div>
        <div className="skill-card"><h2>Frameworks</h2>
            <ul>
                <li>Spring Boot</li>
                <li>React / Redux</li>
            </ul>
            </div>
            <div className="skill-card"><h2>Data & Processing</h2>
            <ul>
                <li>PostgreSQL</li>
                <li>OracleDB</li>
                <li>Flink</li>
                <li>Kafka</li>
            </ul>
            </div>
            <div className="skill-card"><h2>Tools</h2>
            <ul>
                <li>Docker</li>
                <li>AWS</li>
                <li>Kubernetes</li>
                <li>Git / GitHub</li>
                <li>Datadog</li>
                <li>Jenkins</li>
                <li>Spinnaker</li>
            </ul>
            </div>
        </div>
    </div>;
}

export default AboutPage;