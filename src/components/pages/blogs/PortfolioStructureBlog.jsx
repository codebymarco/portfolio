// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaShare, FaBookmark } from "react-icons/fa";
import { useEffect } from "react";
import '../../../styles/blog.css'


const PortfolioStructureBlog = () => {
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
          {/* <Link to="/blogs" className="blog-breadcrumb">
            <FaArrowLeft size={14} />
            blogs / portfolio-structure
          </Link> */}
          <a href="/blogs" className="blog-breadcrumb">
            <FaArrowLeft size={14} />
            blogs / portfolio-structure
          </a>
        </div>
        
        <motion.div 
          className="blog-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="blog-title">
            How to Structure a Developer Portfolio
          </h1>
          <p className="blog-description">
            A comprehensive guide to creating a portfolio that stands out to recruiters, showcases your skills effectively, and lands you your dream developer job
          </p>
          <div className="blog-meta">
            <span className="blog-timestamp">March 20, 2025</span>
            <span className="blog-category">Career</span>
            <span className="blog-reading-time">15 min read</span>
          </div>
        </motion.div>

        <motion.div 
          className="blog-featured-image-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Developer working on portfolio website with multiple projects displayed"
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
              Your developer portfolio is often the first impression you make on potential employers. It's your chance to showcase not just what you can build, but how you think, solve problems, and communicate your ideas. After reviewing hundreds of portfolios and interviewing countless developers, I've identified the key elements that separate great portfolios from the rest.
            </p>
            <p className="section-text">
              A well-structured portfolio does more than display your projects – it tells your story as a developer. It demonstrates your growth, highlights your strengths, and gives employers confidence that you can contribute meaningfully to their team from day one.
            </p>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">The Essential Sections</h2>
            
            <p className="section-text">
              Every strong developer portfolio should include these core sections, strategically organized to guide visitors through your professional story:
            </p>

            <div className="phase-card">
              <div className="phase-title">1. Hero Section</div>
              <div className="phase-subtitle">First Impressions Matter</div>
              <p className="section-text">
                Your hero section is prime real estate. Within 5 seconds, visitors should understand who you are, what you do, and why they should care. This isn't the place for lengthy paragraphs – it's about impact.
              </p>
              
              <h3 className="section-subtitle">What to Include:</h3>
              <ul className="blog-list">
                <li><strong>Clear headline:</strong> "Full-Stack Developer" or "Frontend Engineer specializing in React"</li>
                <li><strong>Value proposition:</strong> One sentence about what makes you unique</li>
                <li><strong>Professional photo:</strong> High-quality, approachable headshot</li>
                <li><strong>Call-to-action:</strong> "View My Work" or "Get In Touch" button</li>
                <li><strong>Location & availability:</strong> "Based in Durban, SA • Available for hire"</li>
              </ul>

              <div className="quote-block">
                "Hello, I'm Miguel Marco Ramcharan, a full-stack developer who builds scalable web applications that solve real business problems. I specialize in React, Node.js, and creating seamless user experiences."
              </div>
            </div>

            <div className="phase-card">
              <div className="phase-title">2. About Section</div>
              <div className="phase-subtitle">Tell Your Story</div>
              <p className="section-text">
                This is where you humanize your technical skills. Share your journey, what drives you as a developer, and what you're passionate about building. Keep it conversational but professional.
              </p>
              
              <h3 className="section-subtitle">Structure Your About Section:</h3>
              <ul className="blog-list">
                <li><strong>Opening hook:</strong> What sparked your interest in development?</li>
                <li><strong>Professional journey:</strong> Key milestones and transitions</li>
                <li><strong>Technical interests:</strong> What technologies excite you?</li>
                <li><strong>Personal touch:</strong> Hobbies or interests that make you memorable</li>
                <li><strong>Current focus:</strong> What you're learning or working on now</li>
              </ul>
            </div>

            <div className="phase-card">
              <div className="phase-title">3. Skills & Technologies</div>
              <div className="phase-subtitle">Showcase Your Technical Arsenal</div>
              <p className="section-text">
                Organize your skills strategically. Don't just list every technology you've touched – focus on your strengths and what's relevant to the roles you're targeting.
              </p>
              
              <div className="tech-stack-grid">
                <div className="tech-category">
                  <div className="tech-category-title">Frontend:</div>
                  <div className="tech-category-text">React, TypeScript, Next.js, Tailwind CSS</div>
                </div>
                <div className="tech-category">
                  <div className="tech-category-title">Backend:</div>
                  <div className="tech-category-text">Node.js, Express, Python, RESTful APIs</div>
                </div>
                <div className="tech-category">
                  <div className="tech-category-title">Database:</div>
                  <div className="tech-category-text">PostgreSQL, MongoDB, Redis</div>
                </div>
                <div className="tech-category">
                  <div className="tech-category-title">Tools & Others:</div>
                  <div className="tech-category-text">Git, Docker, AWS, Jest, Figma</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">The Projects Section: Your Portfolio's Heart</h2>
            
            <p className="section-text">
              Your projects section is where technical skills meet real-world application. This is what employers care about most – can you build things that work and solve actual problems?
            </p>

            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-number">Quality Over Quantity</div>
                <p className="tip-text">
                  3-5 well-documented projects beat 10 half-finished ones every time. Each project should demonstrate different skills and show progression in your abilities.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-number">Tell the Story</div>
                <p className="tip-text">
                  Don't just show what you built – explain why you built it, what problems it solves, and the decisions you made along the way.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-number">Show Your Process</div>
                <p className="tip-text">
                  Include wireframes, architecture diagrams, or screenshots of your planning process. Employers want to see how you think, not just what you produce.
                </p>
              </div>
            </div>

            <h3 className="section-subtitle">Project Structure Template</h3>
            <div className="phase-card">
              <div className="phase-title">For Each Project Include:</div>
              <ul className="blog-list">
                <li><strong>High-quality screenshot or demo GIF:</strong> Show, don't just tell</li>
                <li><strong>Project title and subtitle:</strong> Clear, descriptive naming</li>
                <li><strong>Problem statement:</strong> What challenge were you solving?</li>
                <li><strong>Solution overview:</strong> How did you approach the problem?</li>
                <li><strong>Tech stack:</strong> Technologies used and why you chose them</li>
                <li><strong>Key features:</strong> 3-4 standout functionalities</li>
                <li><strong>Challenges & learnings:</strong> What obstacles did you overcome?</li>
                <li><strong>Live demo link:</strong> Deployed version visitors can interact with</li>
                <li><strong>GitHub repository:</strong> Clean, well-documented code</li>
              </ul>
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">Project Ideas That Impress Employers</h2>
            
            <p className="section-text">
              Not all projects are created equal. Here are project types that consistently impress hiring managers because they demonstrate real-world skills:
            </p>

            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-title">Full-Stack Web Application</div>
                <p className="tip-text">
                  Build something with user authentication, database operations, and real-time features. Examples: Task management app, social platform, or e-commerce site.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">API Integration Project</div>
                <p className="tip-text">
                  Show you can work with external services. Build a weather app, cryptocurrency tracker, or news aggregator that pulls from multiple APIs.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Mobile-Responsive Dashboard</div>
                <p className="tip-text">
                  Create an admin dashboard or analytics tool with charts, filters, and data visualization. This demonstrates complex state management and UI skills.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Open Source Contribution</div>
                <p className="tip-text">
                  Contributing to established projects shows you can work with existing codebases and collaborate with other developers.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Problem-Solving Tool</div>
                <p className="tip-text">
                  Build something that solves a real problem you've encountered. This shows initiative and product thinking beyond just technical skills.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Performance Optimization Case Study</div>
                <p className="tip-text">
                  Take an existing project and optimize it for speed, SEO, or accessibility. Document the before/after metrics and techniques used.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">Design & User Experience</h2>
            
            <p className="section-text">
              Your portfolio's design is a direct reflection of your attention to detail and user experience skills. Even if you're primarily a backend developer, a well-designed portfolio shows you understand the full picture.
            </p>

            <div className="phase-card">
              <div className="phase-title">Design Principles for Developer Portfolios</div>
              
              <h3 className="section-subtitle">Clean and Professional</h3>
              <p className="section-text">
                Avoid cluttered layouts, excessive animations, or distracting elements. Your work should be the star, not fancy design effects that don't add value.
              </p>

              <h3 className="section-subtitle">Mobile-First Approach</h3>
              <p className="section-text">
                Many recruiters browse portfolios on mobile devices. Ensure your portfolio looks and functions perfectly on all screen sizes.
              </p>

              <h3 className="section-subtitle">Fast Loading Times</h3>
              <p className="section-text">
                Optimize images, minimize HTTP requests, and use efficient code. A slow portfolio sends the wrong message about your technical skills.
              </p>

              <h3 className="section-subtitle">Consistent Visual Hierarchy</h3>
              <p className="section-text">
                Use consistent typography, spacing, and color schemes. This demonstrates your understanding of design systems and attention to detail.
              </p>
            </div>

            <div className="quote-block">
              "Your portfolio should be a testament to your skills, not a distraction from them. Clean, fast, and functional always wins over flashy and complex."
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">Contact & Additional Sections</h2>
            
            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-title">Contact Information</div>
                <p className="tip-text">
                  Make it easy for employers to reach you. Include email, LinkedIn, GitHub, and location. Consider adding a contact form for direct inquiries.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Resume/CV Download</div>
                <p className="tip-text">
                  Provide a downloadable PDF version of your resume. Some companies still require traditional application materials.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Blog/Articles (Optional)</div>
                <p className="tip-text">
                  If you write about development topics, include your best articles. This shows thought leadership and communication skills.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Testimonials (If Available)</div>
                <p className="tip-text">
                  Positive feedback from colleagues, clients, or mentors adds credibility and shows you're easy to work with.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">Technical Implementation Tips</h2>
            
            <p className="section-text">
              How you build your portfolio is almost as important as what you put in it. Here are technical considerations that can set you apart:
            </p>

            <div className="phase-card">
              <div className="phase-title">Technology Choices</div>
              
              <h3 className="section-subtitle">Framework Selection</h3>
              <p className="section-text">
                Choose technologies that align with your target roles. If you're applying for React positions, build your portfolio with React. This serves as a live code sample.
              </p>

              <div className="code-block">
                <pre>
                  <code>{`// Example: Clean, semantic HTML structure
<section className="hero">
  <div className="hero-content">
    <h1 className="hero-title">Miguel Marco Ramcharan</h1>
    <p className="hero-subtitle">Full-Stack Developer</p>
    <p className="hero-description">
      Building scalable web applications with React and Node.js
    </p>
    <div className="hero-actions">
      <a href="#projects" className="btn-primary">View My Work</a>
      <a href="#contact" className="btn-secondary">Get In Touch</a>
    </div>
  </div>
</section>`}</code>
                </pre>
              </div>

              <h3 className="section-subtitle">Performance Optimization</h3>
              <ul className="blog-list">
                <li><strong>Image optimization:</strong> Use WebP format and lazy loading</li>
                <li><strong>Code splitting:</strong> Load only what's needed for each page</li>
                <li><strong>Caching strategies:</strong> Implement proper browser caching</li>
                <li><strong>CDN usage:</strong> Serve assets from global edge locations</li>
              </ul>

              <h3 className="section-subtitle">SEO & Accessibility</h3>
              <ul className="blog-list">
                <li><strong>Semantic HTML:</strong> Use proper heading structure and ARIA labels</li>
                <li><strong>Meta tags:</strong> Optimize for search engines and social sharing</li>
                <li><strong>Alt text:</strong> Describe all images for screen readers</li>
                <li><strong>Keyboard navigation:</strong> Ensure all interactive elements are accessible</li>
              </ul>
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">Common Mistakes to Avoid</h2>
            
            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-title">Tutorial Project Overload</div>
                <p className="tip-text">
                  Don't showcase projects that are clearly from tutorials. Employers can spot these instantly. If you built a tutorial project, modify it significantly to make it your own.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Broken Links or Demos</div>
                <p className="tip-text">
                  Test everything regularly. A broken demo is worse than no demo at all. Consider using reliable hosting services like Vercel or Netlify.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Overwhelming with Information</div>
                <p className="tip-text">
                  More isn't always better. Focus on your strongest work and present it clearly rather than overwhelming visitors with everything you've ever built.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Neglecting Mobile Experience</div>
                <p className="tip-text">
                  A portfolio that doesn't work well on mobile devices immediately signals poor attention to user experience and modern development practices.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Outdated Technologies</div>
                <p className="tip-text">
                  If your portfolio uses jQuery and Bootstrap while you're applying for React jobs, it sends mixed signals about your current skills.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Generic Content</div>
                <p className="tip-text">
                  Avoid stock photos, lorem ipsum text, or generic project descriptions. Everything should be authentic and reflect your actual work and personality.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">Portfolio Maintenance & Updates</h2>
            
            <p className="section-text">
              Your portfolio is a living document that should evolve with your skills and career. Regular maintenance ensures it always represents your best work.
            </p>

            <div className="phase-card">
              <div className="phase-title">Regular Update Schedule</div>
              
              <h3 className="section-subtitle">Monthly Reviews</h3>
              <ul className="blog-list">
                <li>Check all links and demos for functionality</li>
                <li>Update your "currently learning" or "current focus" sections</li>
                <li>Review and refresh project descriptions</li>
                <li>Add any new skills or technologies you've mastered</li>
              </ul>

              <h3 className="section-subtitle">Quarterly Overhauls</h3>
              <ul className="blog-list">
                <li>Replace weaker projects with stronger, more recent work</li>
                <li>Update your resume and any downloadable documents</li>
                <li>Refresh your professional photo if needed</li>
                <li>Review and update your about section</li>
              </ul>

              <h3 className="section-subtitle">Annual Redesigns</h3>
              <p className="section-text">
                Consider refreshing your portfolio's design annually to keep it modern and to demonstrate your evolving design sensibilities.
              </p>
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">Measuring Success</h2>
            
            <p className="section-text">
              A successful portfolio should generate interest from potential employers and accurately represent your capabilities. Here's how to measure and improve its effectiveness:
            </p>

            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-title">Analytics & Metrics</div>
                <p className="tip-text">
                  Use Google Analytics to track visitor behavior. Which projects get the most attention? Where do visitors spend the most time? Use this data to optimize.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Feedback Loop</div>
                <p className="tip-text">
                  Ask for feedback from other developers, mentors, or industry professionals. Fresh eyes often catch issues you've become blind to.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">A/B Testing</div>
                <p className="tip-text">
                  Try different versions of your hero section, project descriptions, or call-to-action buttons to see what generates more engagement.
                </p>
              </div>
            </div>

            <div className="quote-block">
              "The best portfolio is one that accurately represents your skills, tells your story authentically, and makes it easy for the right opportunities to find you."
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">Your Portfolio Action Plan</h2>
            
            <p className="section-text">
              Ready to build or improve your portfolio? Here's a step-by-step action plan to get you started:
            </p>

            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-number">Week 1</div>
                <div className="tip-title">Planning & Content</div>
                <p className="tip-text">
                  Audit your existing projects, write compelling descriptions, gather assets, and plan your portfolio structure.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-number">Week 2</div>
                <div className="tip-title">Design & Development</div>
                <p className="tip-text">
                  Create wireframes, choose your tech stack, and start building. Focus on functionality over perfection in the first iteration.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-number">Week 3</div>
                <div className="tip-title">Content & Polish</div>
                <p className="tip-text">
                  Add your projects, write your about section, optimize for performance, and ensure mobile responsiveness.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-number">Week 4</div>
                <div className="tip-title">Testing & Launch</div>
                <p className="tip-text">
                  Test everything thoroughly, get feedback from peers, make final adjustments, and deploy your portfolio.
                </p>
              </div>
            </div>

            <p className="section-text">
              Remember, your portfolio doesn't need to be perfect before you launch it. Start with a solid foundation and iterate based on feedback and results. The most important step is getting started.
            </p>

            <p className="section-text">
              Your portfolio is an investment in your career that will pay dividends for years to come. Take the time to do it right, and it will open doors you never knew existed. <span className="highlight">The opportunities are waiting – it's time to showcase what you can do.</span>
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
            <span className="blog-tag">Portfolio</span>
            <span className="blog-tag">Career</span>
            <span className="blog-tag">Job Search</span>
            <span className="blog-tag">Web Development</span>
            <span className="blog-tag">UX Design</span>
            <span className="blog-tag">Personal Branding</span>
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

export default PortfolioStructureBlog;