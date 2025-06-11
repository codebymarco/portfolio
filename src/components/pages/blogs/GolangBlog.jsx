import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaShare, FaBookmark } from "react-icons/fa";
import { useEffect } from "react";
import '../../../styles/blog.css'
import image from '../../../assets/blog_images/e02c3a6c-cbef-4ddc-bd6d-435fa8ac7481.png'

const GolangBlog = () => {
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
            blogs / why-learn-golang
          </Link>
        </div>
        
        <motion.div 
          className="blog-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="blog-title">
            Why You Should Learn Golang as a JavaScript Developer
          </h1>
          <p className="blog-description">
            Discover how Go can supercharge your backend skills, improve your system thinking, and open new career opportunities for JavaScript developers
          </p>
          <div className="blog-meta">
            <span className="blog-timestamp">June 11, 2025</span>
            <span className="blog-category">Technology</span>
            <span className="blog-reading-time">10 min read</span>
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
            alt="Developer transitioning from JavaScript to Golang with code examples on screen"
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
              As a JavaScript developer, you've mastered the art of building dynamic frontends and versatile backends with Node.js. But what if I told you that learning Go (Golang) could dramatically expand your toolkit and make you a more well-rounded developer? After spending two years integrating Go into my development workflow alongside JavaScript, I'm convinced it's one of the best investments a JS developer can make.
            </p>
          </motion.div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">The JavaScript Developer's Dilemma</h2>
            <p className="section-text">
              JavaScript is incredibly versatile – we can build frontends with React, backends with Node.js, mobile apps with React Native, and even desktop applications with Electron. But this flexibility comes with trade-offs. Node.js, while powerful, can struggle with CPU-intensive tasks, memory management, and concurrent operations at scale.
            </p>
            <p className="section-text">
              I realized this limitation when working on a real-time analytics dashboard that needed to process thousands of concurrent WebSocket connections. Despite optimizing our Node.js server, we hit performance walls that seemed impossible to overcome. <span className="highlight">That's when Go entered the picture</span>.
            </p>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">What Makes Go Perfect for JavaScript Developers</h2>
            
            <div className="phase-card">
              <div className="phase-title">Familiar Syntax, Different Philosophy</div>
              <p className="section-text">
                Coming from JavaScript, Go's syntax feels surprisingly familiar. Both languages share C-like syntax, but Go strips away much of the complexity. Where JavaScript gives you multiple ways to accomplish the same task, Go provides one clear, idiomatic way.
              </p>
              
              <div className="code-block">
                <pre>
                  <code>{`// JavaScript - Multiple ways to create functions
const add1 = function(a, b) { return a + b; }
const add2 = (a, b) => a + b;
function add3(a, b) { return a + b; }

// Go - One clear way
func add(a, b int) int {
    return a + b
}`}</code>
                </pre>
              </div>
            </div>

            <div className="phase-card">
              <div className="phase-title">Built-in Concurrency</div>
              <p className="section-text">
                While JavaScript handles asynchronous operations with promises and async/await, Go takes concurrency to the next level with goroutines and channels. This makes it incredibly easy to write concurrent programs that can handle thousands of operations simultaneously.
              </p>
              
              <div className="code-block">
                <pre>
                  <code>{`// JavaScript - Async operations
async function fetchUserData(userIds) {
    const promises = userIds.map(id => fetch(\`/api/users/\${id}\`));
    const results = await Promise.all(promises);
    return results.map(r => r.json());
}

// Go - Concurrent operations with goroutines
func fetchUserData(userIds []int) []User {
    ch := make(chan User, len(userIds))
    
    for _, id := range userIds {
        go func(id int) {
            user := fetchUser(id) // Some HTTP call
            ch <- user
        }(id)
    }
    
    var users []User
    for i := 0; i < len(userIds); i++ {
        users = append(users, <-ch)
    }
    return users
}`}</code>
                </pre>
              </div>
            </div>

            <div className="phase-card">
              <div className="phase-title">Compilation and Performance</div>
              <p className="section-text">
                One of the biggest shifts from JavaScript to Go is moving from an interpreted language to a compiled one. This means catching errors at compile time rather than runtime, and significantly better performance for CPU-intensive tasks.
              </p>
              
              <h3 className="section-subtitle">Performance Comparison</h3>
              <ul className="blog-list">
                <li><strong>Memory Usage:</strong> Go typically uses 5-10x less memory than equivalent Node.js applications</li>
                <li><strong>CPU Performance:</strong> Go can be 10-50x faster for computational tasks</li>
                <li><strong>Startup Time:</strong> Go binaries start instantly, while Node.js has JIT compilation overhead</li>
                <li><strong>Deployment:</strong> Single binary deployment vs Node.js with dependencies</li>
              </ul>
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">Real-World Use Cases Where Go Shines</h2>
            
            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-title">Microservices Architecture</div>
                <p className="tip-text">
                  Go's lightweight nature and fast startup times make it perfect for microservices. While your frontend remains in React and your main API in Node.js, specific services can be written in Go for better performance.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Real-time Systems</div>
                <p className="tip-text">
                  WebSocket servers, chat applications, and real-time analytics benefit tremendously from Go's concurrent programming model. Handle thousands of connections with minimal resource usage.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">CLI Tools and DevOps</div>
                <p className="tip-text">
                  Build deployment scripts, automation tools, and CLI applications that compile to single binaries. No more worrying about Node.js versions or npm dependencies in production environments.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Data Processing Pipelines</div>
                <p className="tip-text">
                  When you need to process large datasets, parse files, or handle ETL operations, Go's performance and concurrent processing capabilities far exceed what's practical with Node.js.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">My Go Learning Journey as a JS Developer</h2>
            
            <div className="phase-card">
              <div className="phase-title">Week 1-2: Syntax and Fundamentals</div>
              <p className="section-text">
                The first challenge was adjusting to Go's explicit error handling and static typing. Coming from JavaScript's dynamic nature, having to declare types felt restrictive at first, but I quickly realized how it prevented entire classes of bugs.
              </p>
              
              <div className="code-block">
                <pre>
                  <code>{`// JavaScript - Runtime errors are common
function divide(a, b) {
    return a / b; // What if b is 0? What if a is not a number?
}

// Go - Explicit error handling
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}`}</code>
                </pre>
              </div>
            </div>

            <div className="phase-card">
              <div className="phase-title">Week 3-4: Building Web Services</div>
              <p className="section-text">
                I started by rebuilding some of my Node.js APIs in Go. The standard library's HTTP package is incredibly powerful – no need for Express.js equivalents for basic web services.
              </p>
              
              <div className="code-block">
                <pre>
                  <code>{`// Simple HTTP server in Go - no external dependencies needed
package main

import (
    "encoding/json"
    "log"
    "net/http"
)

type User struct {
    ID   int    \`json:"id"\`
    Name string \`json:"name"\`
}

func getUserHandler(w http.ResponseWriter, r *http.Request) {
    user := User{ID: 1, Name: "John Doe"}
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(user)
}

func main() {
    http.HandleFunc("/api/user", getUserHandler)
    log.Fatal(http.ListenAndServe(":8080", nil))
}`}</code>
                </pre>
              </div>
            </div>

            <div className="phase-card">
              <div className="phase-title">Month 2-3: Advanced Patterns</div>
              <p className="section-text">
                This is where Go really started to shine. Learning about channels, context for cancellation, and Go's approach to composition over inheritance changed how I think about software architecture.
              </p>
              
              <h3 className="section-subtitle">Key Concepts That Transformed My Thinking</h3>
              <ul className="blog-list">
                <li><strong>Interfaces:</strong> Duck typing that's checked at compile time</li>
                <li><strong>Channels:</strong> A completely different way to think about data flow</li>
                <li><strong>Context:</strong> Built-in cancellation and timeout handling</li>
                <li><strong>Composition:</strong> Building complex behavior from simple parts</li>
              </ul>
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">The Challenges You'll Face (And How to Overcome Them)</h2>
            
            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-title">Static Typing Adjustment</div>
                <p className="tip-text">
                  Coming from JavaScript's flexibility, Go's strict typing can feel limiting. The key is to embrace it – types are documentation that the compiler enforces. Start with simple types and gradually work up to interfaces and generics.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Error Handling Verbosity</div>
                <p className="tip-text">
                  Go's explicit error handling means more code, but also more robust applications. Create helper functions for common error patterns and embrace the "fail fast" philosophy.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Package Management</div>
                <p className="tip-text">
                  Go modules are different from npm, but simpler in many ways. Dependencies are version-locked by default, and the module system prevents dependency hell that's common in JavaScript projects.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-title">Concurrency Mental Model</div>
                <p className="tip-text">
                  Goroutines and channels require a different way of thinking about concurrent programming compared to JavaScript's event loop. Start with simple examples and gradually build complexity.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">How Go Complements Your JavaScript Skills</h2>
            
            <div className="quote-block">
              "The goal isn't to replace JavaScript with Go, but to use the right tool for the right job. JavaScript excels at rapid prototyping and dynamic UIs, while Go excels at system programming and high-performance backends."
            </div>

            <h3 className="section-subtitle">The Perfect Technology Stack</h3>
            <div className="tech-stack-grid">
              <div className="tech-category">
                <div className="tech-category-title">Frontend:</div>
                <div className="tech-category-text">React/Next.js with TypeScript</div>
              </div>
              <div className="tech-category">
                <div className="tech-category-title">API Gateway:</div>
                <div className="tech-category-text">Node.js/Express for rapid development</div>
              </div>
              <div className="tech-category">
                <div className="tech-category-title">Core Services:</div>
                <div className="tech-category-text">Go for performance-critical microservices</div>
              </div>
              <div className="tech-category">
                <div className="tech-category-title">Real-time:</div>
                <div className="tech-category-text">Go for WebSocket servers and streaming</div>
              </div>
              <div className="tech-category">
                <div className="tech-category-title">DevOps:</div>
                <div className="tech-category-text">Go for CLI tools and deployment scripts</div>
              </div>
            </div>

            <p className="section-text">
              This hybrid approach lets you leverage JavaScript's ecosystem and development speed while using Go where performance and concurrency matter most.
            </p>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">Career Benefits of Adding Go to Your Toolkit</h2>
            
            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-number">1.</div>
                <div className="tip-title">Higher Demand, Higher Pay</div>
                <p className="tip-text">
                  Go developers are in high demand, especially those who can bridge frontend and backend development. Companies value developers who can work across the full stack with different technologies.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-number">2.</div>
                <div className="tip-title">Cloud-Native Opportunities</div>
                <p className="tip-text">
                  Go is the language of cloud infrastructure – Docker, Kubernetes, and most cloud-native tools are written in Go. This opens doors to DevOps and infrastructure roles.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-number">3.</div>
                <div className="tip-title">System Programming Skills</div>
                <p className="tip-text">
                  Learning Go teaches you lower-level concepts like memory management, concurrency patterns, and system design that make you a better overall programmer.
                </p>
              </div>

              <div className="tip-card">
                <div className="tip-number">4.</div>
                <div className="tip-title">Startup and Scale-up Appeal</div>
                <p className="tip-text">
                  Many startups choose Go for its performance and developer productivity. Being proficient in both JavaScript and Go makes you incredibly valuable to growing companies.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">Getting Started: A 30-Day Learning Plan</h2>
            
            <div className="phase-card">
              <div className="phase-title">Days 1-10: Fundamentals</div>
              <ul className="blog-list">
                <li>Complete the Go Tour (tour.golang.org)</li>
                <li>Set up your development environment</li>
                <li>Write basic programs: calculators, file readers, simple HTTP servers</li>
                <li>Practice Go's unique features: slices, maps, structs</li>
              </ul>
            </div>

            <div className="phase-card">
              <div className="phase-title">Days 11-20: Web Development</div>
              <ul className="blog-list">
                <li>Build REST APIs using the standard library</li>
                <li>Learn popular frameworks like Gin or Echo</li>
                <li>Work with databases using database/sql and GORM</li>
                <li>Implement JWT authentication and middleware</li>
              </ul>
            </div>

            <div className="phase-card">
              <div className="phase-title">Days 21-30: Advanced Concepts</div>
              <ul className="blog-list">
                <li>Master goroutines and channels</li>
                <li>Build a real-time chat application</li>
                <li>Learn testing and benchmarking</li>
                <li>Deploy Go applications to cloud platforms</li>
              </ul>
            </div>

            <h3 className="section-subtitle">Recommended Learning Resources</h3>
            <ul className="blog-list">
              <li><strong>The Go Programming Language</strong> by Alan Donovan and Brian Kernighan</li>
              <li><strong>Effective Go</strong> (official documentation)</li>
              <li><strong>Go by Example</strong> (gobyexample.com)</li>
              <li><strong>Gophercises</strong> for hands-on practice</li>
              <li><strong>JustForFunc</strong> YouTube channel by Francesc Campoy</li>
            </ul>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">Real Project: Building a URL Shortener</h2>
            <p className="section-text">
              Let me show you how a JavaScript developer might approach building a URL shortener service in Go. This project demonstrates Go's strengths in building web services.
            </p>

            <div className="code-block">
              <pre>
                <code>{`package main

import (
    "encoding/json"
    "fmt"
    "math/rand"
    "net/http"
    "sync"
    "time"
)

type URLStore struct {
    urls map[string]string
    mu   sync.RWMutex
}

func (s *URLStore) Store(longURL string) string {
    s.mu.Lock()
    defer s.mu.Unlock()
    
    shortCode := generateShortCode()
    s.urls[shortCode] = longURL
    return shortCode
}

func (s *URLStore) Get(shortCode string) (string, bool) {
    s.mu.RLock()
    defer s.mu.RUnlock()
    
    url, exists := s.urls[shortCode]
    return url, exists
}

func generateShortCode() string {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    b := make([]byte, 6)
    for i := range b {
        b[i] = charset[rand.Intn(len(charset))]
    }
    return string(b)
}

var store = &URLStore{urls: make(map[string]string)}

func shortenHandler(w http.ResponseWriter, r *http.Request) {
    var req struct {
        URL string \`json:"url"\`
    }
    
    if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
        http.Error(w, "Invalid JSON", http.StatusBadRequest)
        return
    }
    
    shortCode := store.Store(req.URL)
    
    resp := struct {
        ShortCode string \`json:"short_code"\`
        ShortURL  string \`json:"short_url"\`
    }{
        ShortCode: shortCode,
        ShortURL:  fmt.Sprintf("http://localhost:8080/%s", shortCode),
    }
    
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(resp)
}

func redirectHandler(w http.ResponseWriter, r *http.Request) {
    shortCode := r.URL.Path[1:] // Remove leading slash
    
    longURL, exists := store.Get(shortCode)
    if !exists {
        http.Error(w, "URL not found", http.StatusNotFound)
        return
    }
    
    http.Redirect(w, r, longURL, http.StatusMovedPermanently)
}

func main() {
    rand.Seed(time.Now().UnixNano())
    
    http.HandleFunc("/shorten", shortenHandler)
    http.HandleFunc("/", redirectHandler)
    
    fmt.Println("Server starting on :8080")
    if err := http.ListenAndServe(":8080", nil); err != nil {
        panic(err)
    }
}`}</code>
              </pre>
            </div>

            <p className="section-text">
              This example showcases Go's concurrency-safe data structures, explicit error handling, and built-in HTTP server capabilities. The equivalent Node.js version would require additional dependencies and more complex error handling.
            </p>
          </motion.div>

          <div className="blog-divider"></div>

          <motion.div className="blog-section" variants={itemVariants}>
            <h2 className="section-title">Final Thoughts</h2>
            <p className="section-text">
              Learning Go as a JavaScript developer isn't about abandoning your existing skills – it's about becoming a more complete developer. JavaScript remains unmatched for frontend development and rapid prototyping, while Go excels at system programming, high-performance backends, and concurrent applications.
            </p>

            <p className="section-text">
              The combination of JavaScript's flexibility and Go's performance creates a powerful toolkit for modern software development. Whether you're building microservices, real-time applications, or DevOps tools, <span className="highlight">Go will make you a more well-rounded and valuable developer</span>.
            </p>

            <p className="section-text">
              Start small – convert a simple Node.js API to Go, build a CLI tool, or create a WebSocket server. You'll be surprised how quickly Go's simplicity and power win you over. The investment in learning Go will pay dividends throughout your career, opening doors to new opportunities and making you a better programmer overall.
            </p>

            <div className="quote-block">
              "Don't think of Go as replacing JavaScript – think of it as the perfect complement. Together, they give you the flexibility to build anything from dynamic web applications to high-performance distributed systems."
            </div>
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
            <span className="blog-tag">Golang</span>
            <span className="blog-tag">JavaScript</span>
            <span className="blog-tag">Backend</span>
            <span className="blog-tag">Performance</span>
            <span className="blog-tag">Concurrency</span>
            <span className="blog-tag">Career</span>
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

export default GolangBlog;