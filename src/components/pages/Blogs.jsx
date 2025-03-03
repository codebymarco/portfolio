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
      <div className="blog-page">
        <div className="blog-header">
          <h1>BLOG</h1>
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
        <div className="blog-tags-filter">
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
        </div>

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
          .blog-page {
            background-color: #000;
            min-height: 100vh;
            padding: 40px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .blog-header {
            text-align: center;
            color: white;
            margin-bottom: 40px;
            width: 100%;
            max-width: 800px;
          }

          .blog-header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            font-weight: 700;
          }

          .blog-header p {
            color: #aaa;
            font-size: 1.1rem;
          }

          .blog-filter-section {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-bottom: 30px;
            width: 100%;
            max-width: 1200px;
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
            color: #666;
          }

          .blog-search-input {
            width: 100%;
            padding: 12px 12px 12px 40px;
            border: none;
            border-radius: 8px;
            background-color: #111;
            color: white;
            font-size: 1rem;
            transition: all 0.3s ease;
          }

          .blog-search-input:focus {
            outline: none;
            background-color: #1a1a1a;
            box-shadow: 0 0 0 2px #333;
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
            color: #666;
          }

          .blog-sort-select {
            width: 100%;
            padding: 12px 12px 12px 40px;
            appearance: none;
            border: none;
            border-radius: 8px;
            background-color: #111;
            color: white;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .blog-sort-select:focus {
            outline: none;
            background-color: #1a1a1a;
            box-shadow: 0 0 0 2px #333;
          }

          .blog-tags-filter {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 40px;
            width: 100%;
            max-width: 1200px;
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
            background-color: #1a1a1a;
            color: #ddd;
            border: 1px solid #333;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .blog-tag-button:hover {
            background-color: #222;
          }

          .blog-tag-button.active {
            background-color: #333;
            color: white;
            border-color: #444;
          }

          .blog-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 30px;
            width: 100%;
            max-width: 1200px;
          }

          .blog-card {
            background-color: #111;
            border-radius: 12px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            height: 100%;
            cursor: pointer;
            display: flex;
            flex-direction: column;
          }

          .blog-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }

          .blog-card-image-container {
            width: 100%;
            height: 200px;
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
            color: white;
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
            background-color: #222;
            color: #aaa;
          }

          .blog-card-tag-more {
            font-size: 0.8rem;
            padding: 4px 8px;
            border-radius: 4px;
            background-color: #333;
            color: #ddd;
          }

          .blog-card-date {
            font-size: 0.85rem;
            color: #666;
            margin-top: 10px;
          }

          .blog-no-results {
            grid-column: 1 / -1;
            text-align: center;
            padding: 60px 20px;
            color: #aaa;
          }

          .blog-no-results h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
            color: white;
          }

          .blog-no-results p {
            margin-bottom: 20px;
          }

          .blog-reset-button {
            padding: 10px 20px;
            background-color: #333;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.2s ease;
          }

          .blog-reset-button:hover {
            background-color: #444;
          }

          @media (max-width: 768px) {
            .blog-header h1 {
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
