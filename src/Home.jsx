
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="profile-box">
                <div className="profile-section">
                    <h1 className="name">Yukti Girdhar</h1>
                    <h2 className="title">Software Engineer</h2>
                    <div className="summary">
                        <p>I am a passionate software engineer with extensive experience in building robust REST APIs and deploying scalable microservices architectures. My expertise spans across both relational and NoSQL databases, and I have a deep understanding of distributed systems and messaging platforms.</p>
                        <p>With a strong foundation in Java backend development, I specialize in building efficient and maintainable codebases. I have developed a comprehensive framework for Kafka integration, handling both production and consumption of messages at scale. My work with Kafka has honed my ability to design and implement reliable, high-performance data streaming solutions.</p>
                        <p>In addition to my backend expertise, I am proficient in React, creating responsive and user-friendly web applications. I am committed to writing clean, well-documented code and continuously improving my technical skills to stay current with industry trends.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;