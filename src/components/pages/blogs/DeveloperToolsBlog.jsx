import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { FaArrowLeft, FaShare, FaBookmark } from "react-icons/fa";
import { useEffect } from "react";
import '../../../styles/blog.css'

const DeveloperToolsBlog = () => {
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
            blogs / developer-tools-2025
          </Link>
        </div>
        
        <motion.div 
          className="blog-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="blog-title">
            My Favorite Developer Tools in 2025
          </h1>
          <p className="blog-description">
            A curated list of the tools, extensions, and platforms that have revolutionized my development workflow this year
          </p>
          <div className="blog-meta">
            <span className="blog-timestamp">March 10, 2025</span>
            <span className="blog-category">Tools</span>
            <span className="blog-reading-time">8 min read</span>
          </div>
        </motion.div>

        <motion.div 
          className="blog-featured-image-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Developer workspace with multiple monitors showing code and development tools"
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
              As we move through 2025, the developer tooling landscape continues to evolve at breakneck speed. New tools emerge, existing ones get powerful updates, and some classics prove they're here to stay. After experimenting with dozens of tools this year, I've narrowed down my list to the ones that have genuinely transformed how I work.
            </p>
            <p className="section-text">
              These aren't just trendy tools – they're battle-tested solutions that have saved me countless hours and made my code better. Whether you're a seasoned developer or just starting out, these tools deserve a spot in your toolkit.
            </p>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">Code Editor & Extensions</h2>
            
            <div className="phase-card">
              <div className="phase-title">VS Code with Cursor AI Integration</div>
              <p className="section-text">
                While VS Code remains my primary editor, the integration with <span className="highlight">Cursor AI</span> has been a game-changer. The AI-powered autocompletion and code generation capabilities are incredibly accurate, especially for TypeScript and React development.
              </p>
              
              <h3 className="section-subtitle">Essential Extensions for 2025</h3>
              <ul className="blog-list">
                <li><strong>GitHub Copilot:</strong> Still the gold standard for AI pair programming</li>
                <li><strong>Error Lens:</strong> Inline error highlighting that catches issues instantly</li>
                <li><strong>Auto Rename Tag:</strong> Automatically renames paired HTML/JSX tags</li>
                <li><strong>Thunder Client:</strong> Built-in REST API testing without leaving VS Code</li>
                <li><strong>GitLens:</strong> Supercharged Git capabilities with blame annotations</li>
                <li><strong>Prettier & ESLint:</strong> Code formatting and linting on steroids</li>
              </ul>
            </div>

            <div className="quote-block">
              "The combination of VS Code's ecosystem with modern AI tools has created the most productive coding environment I've ever experienced."
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">Development Environment</h2>
            
            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-title">Docker Desktop</div>
                <p className="tip-text">
                  Containerization is no longer optional. Docker Desktop's latest updates have made local development with containers smoother than ever. I can spin up complex multi-service applications in seconds.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Devcontainers</div>
                <p className="tip-text">
                  Perfect for maintaining consistent development environments across teams. No more "it works on my machine" – everyone runs identical setups in isolated containers.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Turborepo</div>
                <p className="tip-text">
                  For monorepo management, Turborepo has been incredible. The build caching and parallel execution features have cut our CI/CD times by 60%.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">Frontend Development</h2>
            
            <div className="phase-card">
              <div className="phase-title">Next.js 15 with Turbopack</div>
              <p className="section-text">
                Next.js 15 shipped with Turbopack by default, and the development experience is noticeably faster. Hot reloads that used to take 2-3 seconds now happen instantly, even in large applications.
              </p>
              
              <h3 className="section-subtitle">Why Next.js 15 Stands Out</h3>
              <ul className="blog-list">
                <li><strong>Server Components:</strong> Better performance and SEO out of the box</li>
                <li><strong>Improved App Router:</strong> More intuitive file-based routing</li>
                <li><strong>Built-in TypeScript:</strong> Zero-config TypeScript support</li>
                <li><strong>Edge Runtime:</strong> Deploy functions closer to users globally</li>
              </ul>
            </div>

            <div className="tech-stack-grid">
              <div className="tech-category">
                <div className="tech-category-title">Styling:</div>
                <div className="tech-category-text">Tailwind CSS v4 with new CSS-in-JS engine</div>
              </div>
              <div className="tech-category">
                <div className="tech-category-title">State Management:</div>
                <div className="tech-category-text">Zustand for simple apps, Redux Toolkit for complex ones</div>
              </div>
              <div className="tech-category">
                <div className="tech-category-title">Testing:</div>
                <div className="tech-category-text">Vitest + Testing Library for lightning-fast tests</div>
              </div>
              <div className="tech-category">
                <div className="tech-category-title">Animation:</div>
                <div className="tech-category-text">Framer Motion v11 with layout animations</div>
              </div>
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">Backend & Database</h2>
            
            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-title">Bun Runtime</div>
                <p className="tip-text">
                  Bun has matured significantly in 2025. It's now my go-to for new Node.js projects thanks to its incredible speed and built-in bundler, test runner, and package manager.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Drizzle ORM</div>
                <p className="tip-text">
                  TypeScript-first ORM that feels like writing SQL but with full type safety. The developer experience is miles ahead of traditional ORMs, and the performance is excellent.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">PlanetScale</div>
                <p className="tip-text">
                  Serverless MySQL platform with branching capabilities. Being able to create database branches for features, just like Git, has revolutionized our development workflow.
                </p>
              </div>
            </div>

            <div className="code-block">
              <pre>
                <code>{`// Drizzle ORM example - type-safe and intuitive
import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { users, posts } from './schema';

const db = drizzle(connection);

// Fully typed query with IntelliSense
const userPosts = await db
  .select()
  .from(users)
  .leftJoin(posts, eq(users.id, posts.authorId))
  .where(eq(users.email, 'user@example.com'));`}</code>
              </pre>
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">DevOps & Deployment</h2>
            
            <div className="phase-card">
              <div className="phase-title">Vercel with Edge Functions</div>
              <p className="section-text">
                Vercel's Edge Functions have become incredibly powerful. Being able to run server-side logic at the edge, close to users, has dramatically improved response times for our global applications.
              </p>
            </div>

            <div className="phase-card">
              <div className="phase-title">Railway</div>
              <p className="section-text">
                For backend services and databases, Railway has been a pleasant surprise. The developer experience is fantastic – you can deploy complex applications with databases, Redis, and monitoring in minutes.
              </p>
            </div>

            <div className="tech-stack-grid">
              <div className="tech-category">
                <div className="tech-category-title">CI/CD:</div>
                <div className="tech-category-text">GitHub Actions with improved caching</div>
              </div>
              <div className="tech-category">
                <div className="tech-category-title">Monitoring:</div>
                <div className="tech-category-text">Vercel Analytics + Sentry for error tracking</div>
              </div>
              <div className="tech-category">
                <div className="tech-category-title">CDN:</div>
                <div className="tech-category-text">Cloudflare R2 for asset storage and delivery</div>
              </div>
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">Design & Collaboration</h2>
            
            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-title">Figma Dev Mode</div>
                <p className="tip-text">
                  Figma's Dev Mode has bridged the designer-developer gap beautifully. I can inspect designs, copy CSS values, and even export React components directly from designs.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Linear</div>
                <p className="tip-text">
                  Project management that actually works for developers. The keyboard shortcuts, Git integration, and clean interface make issue tracking feel effortless.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Notion AI</div>
                <p className="tip-text">
                  For documentation and project planning, Notion's AI features have been incredibly helpful for generating project outlines, meeting notes, and technical documentation.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">AI-Powered Development</h2>
            
            <p className="section-text">
              2025 has been the year AI truly integrated into every aspect of development. These tools have become essential parts of my workflow:
            </p>

            <div className="phase-card">
              <div className="phase-title">Claude Sonnet for Code Review</div>
              <p className="section-text">
                I use Claude Sonnet for code reviews and architectural discussions. Its understanding of complex codebases and ability to suggest improvements has been incredibly valuable.
              </p>
            </div>

            <div className="phase-card">
              <div className="phase-title">v0 by Vercel</div>
              <p className="section-text">
                For rapid prototyping, v0 can generate complete React components from descriptions. While the code still needs refinement, it's amazing for getting started quickly.
              </p>
            </div>

            <div className="phase-card">
              <div className="phase-title">GitHub Copilot Chat</div>
              <p className="section-text">
                The conversational interface for Copilot has made debugging and learning new APIs much faster. I can ask questions about my code directly in the editor.
              </p>
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">Terminal & Command Line</h2>
            
            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-title">Warp Terminal</div>
                <p className="tip-text">
                  A terminal built for the modern age. The command palette, AI command suggestions, and collaborative features have made terminal work much more enjoyable.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Zed Editor</div>
                <p className="tip-text">
                  For quick edits and pair programming, Zed's performance and collaboration features are unmatched. It's built in Rust and feels incredibly fast.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Oh My Zsh + Starship</div>
                <p className="tip-text">
                  The classic combo that's still the best. Starship prompt shows Git status, Node version, and more at a glance, while Oh My Zsh provides excellent plugins.
                </p>
              </div>
            </div>

            <div className="code-block">
              <pre>
                <code>{`# My essential terminal aliases for 2025
alias g="git"
alias gst="git status"
alias gco="git checkout"
alias gc="git commit -m"
alias gp="git push"
alias nr="npm run"
alias y="yarn"
alias d="docker"
alias dc="docker-compose"
alias k="kubectl"

# Modern CLI replacements
alias ls="exa --icons"
alias cat="bat"
alias find="fd"
alias grep="rg"`}</code>
              </pre>
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">Mobile Development</h2>
            
            <div className="phase-card">
              <div className="phase-title">Expo Router + React Native</div>
              <p className="section-text">
                Expo Router has made React Native development feel much more like Next.js development. File-based routing, automatic deep linking, and excellent TypeScript support make mobile development a joy.
              </p>
            </div>

            <div className="tech-stack-grid">
              <div className="tech-category">
                <div className="tech-category-title">State Management:</div>
                <div className="tech-category-text">React Query for server state, Zustand for client state</div>
              </div>
              <div className="tech-category">
                <div className="tech-category-title">UI Components:</div>
                <div className="tech-category-text">NativeWind for Tailwind CSS in React Native</div>
              </div>
              <div className="tech-category">
                <div className="tech-category-title">Development:</div>
                <div className="tech-category-text">Expo Dev Tools with instant updates</div>
              </div>
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">Looking Ahead</h2>
            <p className="section-text">
              The tools I've shared have genuinely improved my productivity and code quality in 2025. But the landscape continues to evolve rapidly. Keep an eye on emerging tools like <span className="highlight">Deno 2.0</span>, <span className="highlight">Tauri for desktop apps</span>, and the continued evolution of AI-powered development tools.
            </p>

            <p className="section-text">
              Remember, tools are meant to serve you, not the other way around. Don't feel pressured to adopt every new shiny tool that comes along. Focus on mastering the fundamentals first, then gradually incorporate tools that solve real problems in your workflow.
            </p>

            <div className="quote-block">
              "The best developer tool is the one that disappears into your workflow and lets you focus on solving problems, not fighting with configuration."
            </div>

            <p className="section-text">
              What tools have transformed your development workflow this year? I'd love to hear about your discoveries and experiences with these or other tools in the comments below.
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
            <span className="blog-tag">Tools</span>
            <span className="blog-tag">Productivity</span>
            <span className="blog-tag">Development</span>
            <span className="blog-tag">VS Code</span>
            <span className="blog-tag">AI</span>
            <span className="blog-tag">Workflow</span>
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

export default DeveloperToolsBlog;