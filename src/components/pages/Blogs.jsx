import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaCalendarAlt,
  FaReact,
  FaJs,
  FaHtml5,
  FaDocker,
  FaNodeJs,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import bunnyImage from "../../assets/blog/bunny.jpg";
import ScrollToTop from "../components/ScrollToTop";

// Blog data with added tags and images
const blogData = [
  {
    id: 1,
    title: "Dockerize a react app",
    tags: ["docker", "react", "javascript", "devops"],
    date: "2025-02-28",
    image:
      "https://th.bing.com/th/id/R.796523382777357d18ba619048335003?rik=hi%2f%2bPd07IRqj%2fA&pid=ImgRaw&r=0",
  },
  {
    id: 2,
    title: "BunnyCDN, Faster and cheaper than AWS Cloudfront",
    tags: ["cdn", "devops", "cache", "backend"],
    date: "2025-02-20",
    image: bunnyImage,
  },
  {
    id: 3,
    title: "Kubernetes Errors",
    tags: ["kubernetes", "docker", "debugging"],
    date: "2025-02-15",
    image: "https://cloud2data.com/wp-content/uploads/2023/05/Kubernetes.png",
  },
  {
    id: 4,
    title: "Docker Migration To Artifact Repo",
    tags: ["kubernetes", "docker", "debugging"],
    date: "2025-02-15",
    image:
      "https://3.bp.blogspot.com/-8PzSTH6N1Cs/V2f3rO3hsRI/AAAAAAAAid8/2QxOlHz9MnohU-baWnepmxG4ENz78IHpwCLcB/s1600/Capture.PNG",
  },
  {
    id: 5,
    title: "React Helmet",
    tags: ["frontend", "seo", "react"],
    date: "2025-02-15",
    image:
      "https://th.bing.com/th/id/OIP.t4Em-3T6FZqHzZxxUH22wgHaGa?rs=1&pid=ImgDetMain",
  },
  {
    id: 6,
    title: "Node vs Bun",
    tags: ["backend", "server", "javascript"],
    date: "2025-02-15",
    image:
      "https://miro.medium.com/v2/resize:fit:480/1*YxBJCMcyz2cOP6AqshyhRg.jpeg",
  },
  {
    id: 7,
    title: "The Ultimate Guide to Full-Stack Cloud Development",
    tags: ["backend", "server", "devops"],
    date: "2025-02-15",
    image:
      "https://img.freepik.com/premium-photo/cloud-computing-technology_1083198-314.jpg",
  },
  {
    id: 8,
    title: "Building Event-Driven Architectures with Golang",
    tags: ["backend", "golang"],
    date: "2025-02-15",
    image:
      "https://iconlogovector.com/uploads/images/2024/04/md-6619d74e0c9e1-GO-Golang.webp",
  },
  {
    id: 9,
    title: "Building Cross-Platform Mobile Apps with React Native",
    tags: ["react", "mobile", "ios", "android"],
    date: "2025-02-15",
    image:
      "https://www.nectarpourtous.com/wp-content/uploads/2023/11/React-Native-1-1024x1024.jpg",
  },
];

// Popular tags for filter
const popularTags = [
  { name: "react", icon: <FaReact /> },
  { name: "javascript", icon: <FaJs /> },
  { name: "html", icon: <FaHtml5 /> },
  { name: "docker", icon: <FaDocker /> },
  { name: "node", icon: <FaNodeJs /> },
  { name: "database", icon: <FaDatabase /> },
  { name: "cloud", icon: <FaCloud /> },
];

const Blogs = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // Empty dependency array ensures this runs once on mount

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortOrder, setSortOrder] = useState("newest");
  const [filteredBlogs, setFilteredBlogs] = useState(blogData);

  // Animation variants
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
    visible: { opacity: 1, y: 0 },
  };

  // Effect to filter and sort blogs
  useEffect(() => {
    let result = [...blogData];

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    // Filter by selected tags
    if (selectedTags.length > 0) {
      result = result.filter((blog) =>
        selectedTags.some((tag) => blog.tags.includes(tag))
      );
    }

    // Sort by date
    result.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    setFilteredBlogs(result);
  }, [searchTerm, selectedTags, sortOrder]);

  // Toggle tag selection
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // Format date to be more readable
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div>
      <Helmet>
        <title>
          Blogs | Software Developer Portfolio | Miguelmarco Ramcharan
        </title>
        <meta
          name="description"
          content="Welcome to the portfolio of Miguelmarco Ramcharan. Explore projects, skills, and more by CodeByMarco."
        />
        <meta name="author" content="Miguelmarco Ramcharan" />
        <meta
          name="keywords"
          content="marco ramcharan, codebymarco, software developer portfolio about"
        />
      </Helmet>
      <ScrollToTop />
      <div className="blog-page">
        <div className="blog-top">
          <h1>MY BLOG</h1>
          <p>
            Insights and tutorials on web development, DevOps, and modern
            technologies
          </p>
        </div>

        {/* Search and filter section */}
        <div className="blog-filter-section">
          <div className="blog-search-container">
            <FaSearch className="blog-search-icon" />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="blog-search-input"
            />
          </div>

          <div className="blog-sort-container">
            <FaCalendarAlt className="blog-sort-icon" />
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="blog-sort-select"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>

        {/* Tags filter section */}
{/*         <div className="blog-tags-filter">
          <span className="blog-tags-label">Popular Topics:</span>
          <div className="blog-tags-list">
            {popularTags.map((tag) => (
              <button
                key={tag.name}
                className={`blog-tag-button ${
                  selectedTags.includes(tag.name) ? "active" : ""
                }`}
                onClick={() => toggleTag(tag.name)}
              >
                {tag.icon} {tag.name}
              </button>
            ))}
          </div>
        </div> */}

        {/* Blog grid */}
        <motion.div
          className="blog-grid"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                className="blog-card"
                variants={itemVariants}
                onClick={() => navigate(`/blog/${blog.id}`)}
              >
                <div className="blog-card-image-container">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="blog-card-image"
                  />
                </div>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">{blog.title}</h3>
                  <div className="blog-card-tags">
                    {blog.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="blog-card-tag">
                        {tag}
                      </span>
                    ))}
                    {blog.tags.length > 3 && (
                      <span className="blog-card-tag-more">
                        +{blog.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="blog-card-date">{formatDate(blog.date)}</div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="blog-no-results">
              <h3>No blogs found matching your criteria</h3>
              <p>Try adjusting your search or filters</p>
              <button
                className="blog-reset-button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedTags([]);
                  setSortOrder("newest");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </motion.div>

        <style jsx>{`
          /* General blog page styling - using the radial gradient from Career */
          .blog-page {
            background-image: radial-gradient(
              circle at 50% 30%,
              #111111 0%,
              #000000 70%
            );
            background-color: black;
            min-height: 100vh;
            color: #fff;
            padding: 40px 20px 80px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          /* Blog header styling - matching the career-top */
          .blog-top {
            text-align: center;
            margin-bottom: 50px;
            padding: 20px 0;
            width: 100%;
          }

          .blog-top h1 {
            font-size: 2.5rem;
            letter-spacing: 2px;
            position: relative;
            display: inline-block;
            color: #61dafb;
            text-shadow: 0 0 10px rgba(97, 218, 251, 0.5);
          }

          .blog-top h1:after {
            content: "";
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background-color: #61dafb;
            box-shadow: 0 0 10px rgba(97, 218, 251, 0.5);
          }

          .blog-top p {
            color: #aaa;
            font-size: 1.1rem;
            margin-top: 20px;
          }

          /* Filter section */
          .blog-filter-section {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-bottom: 30px;
            width: 100%;
            max-width: 1000px;
            justify-content: center;
          }

          .blog-search-container {
            position: relative;
            flex: 1;
            min-width: 280px;
            max-width: 500px;
          }

          .blog-search-icon {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: #61dafb;
          }

          .blog-search-input {
            width: 100%;
            padding: 12px 12px 12px 40px;
            border: none;
            border-radius: 8px;
            background-color: rgba(13, 13, 13, 0.9);
            color: white;
            font-size: 1rem;
            transition: all 0.3s ease;
            border: 1px solid rgba(97, 218, 251, 0.1);
          }

          .blog-search-input:focus {
            outline: none;
            background-color: rgba(13, 13, 13, 0.9);
            box-shadow: 0 0 15px rgba(97, 218, 251, 0.1);
            border-color: rgba(97, 218, 251, 0.3);
          }

          .blog-sort-container {
            position: relative;
            width: 200px;
          }

          .blog-sort-icon {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: #61dafb;
          }

          .blog-sort-select {
            width: 100%;
            padding: 12px 12px 12px 40px;
            appearance: none;
            border: none;
            border-radius: 8px;
            background-color: rgba(13, 13, 13, 0.9);
            color: white;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 1px solid rgba(97, 218, 251, 0.1);
          }

          .blog-sort-select:focus {
            outline: none;
            background-color: rgba(13, 13, 13, 0.9);
            box-shadow: 0 0 15px rgba(97, 218, 251, 0.1);
            border-color: rgba(97, 218, 251, 0.3);
          }

          /* Tags filter section */
          .blog-tags-filter {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 40px;
            width: 100%;
            max-width: 1000px;
            align-items: center;
            justify-content: center;
          }

          .blog-tags-label {
            color: #aaa;
            font-size: 0.9rem;
          }

          .blog-tags-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }

          .blog-tag-button {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 6px 12px;
            border-radius: 20px;
            background-color: rgba(13, 13, 13, 0.9);
            color: #aaa;
            border: 1px solid rgba(97, 218, 251, 0.1);
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .blog-tag-button:hover {
            background-color: rgba(13, 13, 13, 0.9);
            transform: translateY(-3px);
            border-color: rgba(97, 218, 251, 0.3);
            box-shadow: 0 0 15px rgba(97, 218, 251, 0.1);
          }

          .blog-tag-button.active {
            background-color: rgba(97, 218, 251, 0.1);
            color: #61dafb;
            border-color: rgba(97, 218, 251, 0.3);
            box-shadow: 0 0 15px rgba(97, 218, 251, 0.2);
          }

          /* Blog grid styling */
          .blog-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 30px;
            width: 100%;
            max-width: 1000px;
          }

          /* Blog card styling - matching job-card */
          .blog-card {
            background-color: rgba(13, 13, 13, 0.9);
            border-radius: 10px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            height: 100%;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            border: 1px solid rgba(97, 218, 251, 0.1);
          }

          .blog-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4),
              0 0 15px rgba(97, 218, 251, 0.1);
            border-color: rgba(97, 218, 251, 0.3);
          }

          .blog-card-image-container {
            width: 100%;
            height: 180px;
            overflow: hidden;
          }

          .blog-card-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
          }

          .blog-card:hover .blog-card-image {
            transform: scale(1.05);
          }

          .blog-card-content {
            padding: 20px;
            flex: 1;
            display: flex;
            flex-direction: column;
          }

          .blog-card-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: #61dafb;
            margin-bottom: 15px;
            line-height: 1.4;
          }

          .blog-card-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 15px;
            margin-top: auto;
          }

          .blog-card-tag {
            font-size: 0.8rem;
            padding: 4px 8px;
            border-radius: 4px;
            background-color: rgba(255, 255, 255, 0.05);
            color: #ccc;
            transition: all 0.3s ease;
            border: 1px solid transparent;
          }

          .blog-card:hover .blog-card-tag {
            background-color: rgba(255, 255, 255, 0.08);
            border-color: rgba(97, 218, 251, 0.2);
          }

          .blog-card-tag-more {
            font-size: 0.8rem;
            padding: 4px 8px;
            border-radius: 4px;
            background-color: rgba(97, 218, 251, 0.1);
            color: #61dafb;
          }

          .blog-card-date {
            font-size: 0.85rem;
            color: #888;
            margin-top: 10px;
          }

          /* No results styling */
          .blog-no-results {
            grid-column: 1 / -1;
            text-align: center;
            padding: 60px 20px;
            color: #aaa;
            background-color: rgba(13, 13, 13, 0.9);
            border-radius: 10px;
            border: 1px solid rgba(97, 218, 251, 0.1);
          }

          .blog-no-results h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
            color: #61dafb;
          }

          .blog-reset-button {
            padding: 10px 20px;
            background-color: rgba(97, 218, 251, 0.1);
            color: #61dafb;
            border: 1px solid rgba(97, 218, 251, 0.3);
            border-radius: 6px;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 15px;
          }

          .blog-reset-button:hover {
            background-color: rgba(97, 218, 251, 0.2);
            box-shadow: 0 0 15px rgba(97, 218, 251, 0.2);
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .blog-top h1 {
              font-size: 2rem;
            }

            .blog-grid {
              grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
              gap: 20px;
            }

            .blog-filter-section {
              flex-direction: column;
              align-items: center;
            }

            .blog-search-container {
              width: 100%;
            }

            .blog-sort-container {
              width: 100%;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Blogs;