import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaShare, FaBookmark } from "react-icons/fa";
import { useEffect } from "react";
import '../../styles/blog.css'
import image from "../../assets/blog_images/a688925c-06da-4a71-885d-5a8dea807770.png";

const Blog = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
      },
    },
  };

  return (
    <div className="blogWrapper">
      <div className="blog-container">
        <div className="blog-nav">
          <Link to="/blogs" className="blog-breadcrumb">
            <FaArrowLeft size={14} />
            blogs / full-stack-journey
          </Link>
        </div>
        
        <motion.div 
          className="blog-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="blog-title">
            How I Became a Full-Stack Developer
          </h1>
          <p className="blog-description">
            My journey from complete beginner to full-stack developer - the challenges, breakthroughs, and lessons learned along the way
          </p>
          <div className="blog-meta">
            <span className="blog-timestamp">March 15, 2025</span>
            <span className="blog-category">Career</span>
            <span className="blog-reading-time">12 min read</span>
          </div>
        </motion.div>

        <motion.div 
          className="blog-featured-image-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <img
          src={image}
            alt="Developer working on multiple screens showing frontend and backend code"
            className="blog-featured-image"
          />
        </motion.div>

        <motion.div 
          className="blog-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="blog-section" variants={itemVariants}>
            <p className="section-text">
              Three years ago, I was working in a completely different field with zero coding experience. Today, I'm a full-stack developer building applications that serve thousands of users. This transformation didn't happen overnight, and it certainly wasn't easy. Here's the honest story of how I made the transition, what worked, what didn't, and the key lessons that shaped my journey.
            </p>
          </motion.div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">The Spark: Why I Started</h2>
            <p className="section-text">
              My journey began with frustration. I was working in a traditional office job that felt increasingly disconnected from the digital world around me. Every day, I used software applications and websites, marveling at their functionality while feeling like I was on the outside looking in.
            </p>
            <p className="section-text">
              The final push came when I had an idea for a simple web application but had no way to bring it to life. I remember Googling "how to build a website" and being overwhelmed by the sheer volume of information. <span className="highlight">HTML, CSS, JavaScript, frameworks, databases, servers</span> – it all seemed like an insurmountable mountain. But something inside me was determined to climb it.
            </p>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">The Four Phases of My Journey</h2>
            
            <div className="phase-card">
              <div className="phase-title">Phase 1: Frontend Foundations</div>
              <div className="phase-subtitle">Months 1-6</div>
              <p className="section-text">
                I started with the basics – HTML and CSS. I'll be honest, those first few weeks were rough. I spent hours trying to center a div (a rite of passage for every developer), and I couldn't understand why my layouts broke when I changed one small thing.
              </p>
              
              <h3 className="section-subtitle">The Learning Resources That Saved Me</h3>
              <ul className="blog-list">
                <li><strong>FreeCodeCamp:</strong> Their structured curriculum gave me a clear path forward</li>
                <li><strong>MDN Web Docs:</strong> Became my go-to reference for understanding web technologies</li>
                <li><strong>YouTube tutorials:</strong> Visual learning helped concepts click</li>
                <li><strong>Local coding meetups:</strong> Connected me with other learners and mentors</li>
              </ul>

              <p className="section-text">
                The breakthrough moment came when I built my first interactive web page with JavaScript. Seeing elements respond to user clicks and form submissions was magical – I was hooked.
              </p>

              <div className="code-block">
                <pre>
                  <code>{`// My first meaningful JavaScript function
function validateForm() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  if (email === '' || password === '') {
    alert('Please fill in all fields');
    return false;
  }
  
  alert('Form submitted successfully!');
  return true;
}

// It wasn't pretty, but it worked!`}</code>
                </pre>
              </div>
            </div>

            <div className="phase-card">
              <div className="phase-title">Phase 2: Framework Fever</div>
              <div className="phase-subtitle">Months 7-12</div>
              <p className="section-text">
                Once I was comfortable with vanilla JavaScript, I dove into React. This was where things got challenging. Concepts like state management, component lifecycle, and props took time to sink in. I built the same todo app about fifteen times before I truly understood React's philosophy.
              </p>
              
              <h3 className="section-subtitle">Key Projects That Accelerated My Learning</h3>
              <ul className="blog-list">
                <li><strong>Personal Portfolio:</strong> My first complete React application</li>
                <li><strong>Weather App:</strong> Taught me API integration and state management</li>
                <li><strong>Task Manager:</strong> Introduced me to local storage and complex state</li>
                <li><strong>E-commerce Clone:</strong> My first big project with routing and authentication</li>
              </ul>
            </div>

            <div className="phase-card">
              <div className="phase-title">Phase 3: Backend Awakening</div>
              <div className="phase-subtitle">Months 13-18</div>
              <p className="section-text">
                Frontend development was exciting, but I wanted to understand the full picture. How do applications store data? How do they handle user authentication? How do they communicate with databases? This curiosity led me to backend development.
              </p>
              
              <p className="section-text">
                I chose Node.js because I could leverage my JavaScript knowledge. Learning Express.js, understanding HTTP methods, working with databases – it was like discovering a whole new world that had been hidden behind the frontend curtain.
              </p>

              <h3 className="section-subtitle">Backend Fundamentals I Had to Master</h3>
              <ul className="blog-list">
                <li><strong>Server setup and routing:</strong> Understanding how requests flow through an application</li>
                <li><strong>Database design:</strong> Learning SQL and NoSQL, when to use each</li>
                <li><strong>Authentication:</strong> JWT tokens, sessions, password hashing</li>
                <li><strong>API design:</strong> RESTful principles and error handling</li>
                <li><strong>Security:</strong> Input validation, CORS, rate limiting</li>
              </ul>

              <div className="code-block">
                <pre>
                  <code>{`// My first Express.js server - so simple, yet so powerful
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/users', (req, res) => {
  // Fetch users from database
  res.json({ message: 'Users retrieved successfully' });
});

app.post('/api/users', (req, res) => {
  // Create new user
  res.status(201).json({ message: 'User created successfully' });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}</code>
                </pre>
              </div>
            </div>

            <div className="phase-card">
              <div className="phase-title">Phase 4: Full-Stack Integration</div>
              <div className="phase-subtitle">Months 19-24</div>
              <p className="section-text">
                The real magic happened when I started connecting frontend and backend. Building full-stack applications taught me about the entire development lifecycle – from database design to user interface, from API development to deployment.
              </p>

              <h3 className="section-subtitle">My First Full-Stack Project: A Social Media Dashboard</h3>
              <p className="section-text">
                I decided to build a social media dashboard that aggregated posts from different platforms. This project forced me to work with:
              </p>

              <ul className="blog-list">
                <li>React frontend with complex state management</li>
                <li>Node.js/Express backend with RESTful APIs</li>
                <li>MongoDB for data storage</li>
                <li>JWT authentication system</li>
                <li>Third-party API integrations</li>
                <li>Deployment to cloud platforms</li>
              </ul>

              <p className="section-text">
                This project took me three months to complete, but it was transformative. For the first time, I understood how all the pieces fit together. I wasn't just a frontend developer or a backend developer – I was becoming a <span className="highlight">full-stack developer</span>.
              </p>
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">The Challenges and How I Overcame Them</h2>
            
            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-title">Imposter Syndrome</div>
                <p className="tip-text">
                  The biggest challenge wasn't technical – it was psychological. I constantly felt like I didn't know enough, like I was pretending to be a developer. The solution was to focus on progress, not perfection. Every small win mattered.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Information Overload</div>
                <p className="tip-text">
                  The tech world moves fast, and there's always something new to learn. I learned to focus on fundamentals first and resist the urge to chase every new framework or technology.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Building Real-World Applications</div>
                <p className="tip-text">
                  Tutorials are great for learning concepts, but building actual applications taught me about edge cases, error handling, performance optimization, and user experience – skills that tutorials rarely cover.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">Key Lessons and Advice</h2>
            
            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-number">1.</div>
                <div className="tip-title">Consistency Beats Intensity</div>
                <p className="tip-text">
                  I coded for at least an hour every day, even when I didn't feel like it. Small, consistent effort compounds over time more effectively than sporadic marathon sessions.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-number">2.</div>
                <div className="tip-title">Build Projects, Not Just Tutorials</div>
                <p className="tip-text">
                  Following tutorials teaches you syntax, but building your own projects teaches you problem-solving. Start with simple projects and gradually increase complexity.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-number">3.</div>
                <div className="tip-title">Don't Skip the Fundamentals</div>
                <p className="tip-text">
                  I was tempted to jump straight into React, but understanding vanilla JavaScript first made learning frameworks much easier. The same applies to CSS before learning CSS frameworks.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-number">4.</div>
                <div className="tip-title">Embrace the Community</div>
                <p className="tip-text">
                  The developer community is incredibly supportive. Join Discord servers, attend meetups, participate in hackathons, contribute to open source. You'll learn faster and make valuable connections.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-number">5.</div>
                <div className="tip-title">Document Your Journey</div>
                <p className="tip-text">
                  I started a developer blog and shared my learning experiences on social media. This not only helped me reflect on my progress but also connected me with other developers and potential employers.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">Landing My First Developer Job</h2>
            <p className="section-text">
              After 18 months of intense learning and building, I felt ready to start applying for developer positions. My portfolio included five full-stack projects, each demonstrating different skills and technologies. I applied to over 50 positions and received rejections from most, but I only needed one "yes."
            </p>

            <div className="quote-block">
              "The interview process was challenging. Technical interviews tested not just my coding skills but also my problem-solving approach, communication abilities, and cultural fit. The company that hired me valued my unique background and fresh perspective more than years of experience."
            </div>

            <p className="section-text">
              The key was demonstrating not just what I could code, but how I approached problems, learned new technologies, and communicated complex ideas clearly.
            </p>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">Where I Am Today</h2>
            <p className="section-text">
              Two years into my career as a full-stack developer, I'm working on applications that impact thousands of users. I lead frontend initiatives, design database schemas, build APIs, and mentor junior developers. The learning never stops – I'm currently exploring cloud architecture and DevOps practices.
            </p>

            <p className="section-text">
              The most rewarding part isn't the technical challenges or the salary – it's the ability to bring ideas to life through code. Every day, I solve problems, create solutions, and build tools that make people's lives easier.
            </p>

            <h3 className="section-subtitle">My Current Tech Stack</h3>
            <div className="tech-stack-grid">
              <div className="tech-category">
                <div className="tech-category-title">Frontend:</div>
                <div className="tech-category-text">React, Next.js, TypeScript, Tailwind CSS</div>
              </div>
              <div className="tech-category">
                <div className="tech-category-title">Backend:</div>
                <div className="tech-category-text">Node.js, Express, Python, Django</div>
              </div>
              <div className="tech-category">
                <div className="tech-category-title">Databases:</div>
                <div className="tech-category-text">PostgreSQL, MongoDB, Redis</div>
              </div>
              <div className="tech-category">
                <div className="tech-category-title">Cloud & DevOps:</div>
                <div className="tech-category-text">AWS, Docker, GitHub Actions</div>
              </div>
              <div className="tech-category">
                <div className="tech-category-title">Tools:</div>
                <div className="tech-category-text">Git, VS Code, Postman, Figma</div>
              </div>
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">Final Thoughts</h2>
            <p className="section-text">
              Becoming a full-stack developer was one of the most challenging and rewarding decisions I've ever made. It required sacrifice, dedication, and countless hours of learning and practice. But it also opened doors I never knew existed and gave me skills that will remain valuable for decades to come.
            </p>

            <p className="section-text">
              If you're considering a similar journey, my advice is simple: <span className="highlight">start today</span>. Don't wait for the perfect moment or until you feel ready. Begin with HTML and CSS, build your first webpage, and let curiosity guide your learning. The path isn't always clear, but each step forward is progress.
            </p>

            <p className="section-text">
              The tech industry needs diverse perspectives and backgrounds. Your unique experiences and viewpoints are valuable. Don't let anyone convince you that you're too old, too inexperienced, or too different to become a developer. With dedication and persistence, you can make this transformation too.
            </p>
          </motion.div>
        </motion.div>

        <div className="blog-author">
          <div className="blog-author-image">
            <img src="https://via.placeholder.com/60" alt="Author" />
          </div>
          <div className="blog-author-info">
            <h3>Miguel Marco Ramcharan</h3>
            <p>Fullstack Developer based in Durban, South Africa</p>
          </div>
        </div>

        <footer className="blog-footer">
          <div className="blog-tags">
            <span className="blog-tag">Career</span>
            <span className="blog-tag">Full-Stack</span>
            <span className="blog-tag">Learning</span>
            <span className="blog-tag">JavaScript</span>
            <span className="blog-tag">Development</span>
            <span className="blog-tag">Journey</span>
          </div>
          <div className="blog-actions">
            <button className="blog-action-button">
              <FaBookmark /> Save
            </button>
            <button className="blog-action-button">
              <FaShare /> Share
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Blog;