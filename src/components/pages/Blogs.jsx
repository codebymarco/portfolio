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
import bunnyImage from "../../assets/blog/bunny.png";
import ScrollToTop from "../components/ScrollToTop";
import useTranslationStore from "../../store/store";
import react from "../../assets/blog/react.png";
import image1 from "../../assets/blog_images/a688925c-06da-4a71-885d-5a8dea807770.png";
import image2 from "../../assets/blog_images/e3fb4e0b-6a37-410a-9cf0-5ba199c315a5.png";
import image3 from "../../assets/blog_images/5e7ecde6-2be8-445f-a791-e46721ee5b35.png";
import image4 from "../../assets/blog_images/36ec38b6-82a6-4ab8-82f7-ffdf7e0514b4.png";
import image5 from "../../assets/blog_images/452a6885-7483-423c-86c0-a96a4a76e831.png";
import image6 from "../../assets/blog_images/e02c3a6c-cbef-4ddc-bd6d-435fa8ac7481.png";
import image7 from "../../assets/blog_images/28130c2c-f2e2-450a-9e96-ec74bcb4e439.png";
import image8 from "../../assets/blog_images/5860329d-befc-4519-814e-0793d7862823.png";
import image9 from "../../assets/blog_images/ac7210a0-0171-4401-bb23-899225ff4212.png";

// Blog data with added tags and images
const blogData = [
  {
    id: 1,
    title: "How I Became a Full-Stack Developer",
    tags: ["fullstack", "developer", "how tow"],
    date: "2025-02-28",
    image: image1,
  },
  {
    id: 2,
    title: "My Favorite Developer Tools in 2025",
    tags: ["developer", "tools", "2025"],
    date: "2025-02-20",
    image: image2,
  },
  {
    id: 3,
    title: "How to Structure a Developer Portfolio",
    tags: ["portfolio", "developer", "ui/ux"],
    date: "2025-02-15",
    image: image3,
  },
  {
    id: 4,
    title: "Building Scalable React Apps",
    tags: ["react", "scaling"],
    date: "2025-02-15",
    image: image4,
  },
  {
    id: 5,
    title: "The Future of Web Development",
    tags: ["web", "future"],
    date: "2025-02-15",
    image: image5,
  },
  {
    id: 6,
    title: "Why You Should Learn Golang as a JavaScript Developer",
    tags: ["golang", "javascript"],
    date: "2025-02-15",
    image: image6,
  },
  {
    id: 7,
    title: "How Blogging Helped My Developer Career",
    tags: ["blogging", "career", "development"],
    date: "2025-02-15",
    image: image7,
  },
  {
    id: 8,
    title: "My Daily Workflow as a Full-Stack Dev",
    tags: ["workflow", "fullstack"],
    date: "2025-02-15",
    image: image8,
  },
  {
    id: 9,
    title: "Soft Skills That Make You a Better Programmer",
    tags: ["soft skills", "improvement"],
    date: "2025-02-15",
    image: image9,
  }
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
  const { t } = useTranslationStore();

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
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
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
    <div className="blogWrapper">
      <Helmet>
        {/* Basic SEO Tags */}
        <title>
          CodeByMarco Blog | Software Development Articles & Tech Insights by
          Miguelmarco
        </title>
        <meta
          name="description"
          content="Explore the CodeByMarco blog by Miguelmarco Ramcharan. Find insightful articles, coding tutorials & fullstack development tips on React, Node.js & more."
        />
        <link rel="canonical" href="https://www.codebymarco.com/blogs" />
        {/* Open Graph Tags (for Facebook, LinkedIn, WhatsApp etc.) */}
        <meta
          property="og:title"
          content="CodeByMarco Blog | Software Development Articles & Tech Insights"
        />
        <meta
          property="og:description"
          content="Explore the CodeByMarco blog by Miguelmarco Ramcharan. Find insightful articles, coding tutorials & fullstack development tips on React, Node.js & more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.codebymarco.com/blogs" />
        <meta
          property="og:image"
          content="https://www.codebymarco.com/images/codebymarco-blog-og-image.jpg"
        />{" "}
        {/* IMPORTANT: Create this image! */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="CodeByMarco" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@your_twitter_handle" />{" "}
        {/* IMPORTANT: Replace with your actual Twitter handle */}
        <meta name="twitter:creator" content="@your_twitter_handle" />{" "}
        {/* IMPORTANT: Replace with your actual Twitter handle */}
        <meta
          name="twitter:title"
          content="CodeByMarco Blog | Software Development Articles & Tech Insights"
        />
        <meta
          name="twitter:description"
          content="Explore the CodeByMarco blog by Miguelmarco Ramcharan. Find insightful articles, coding tutorials & fullstack development tips on React, Node.js & more."
        />
        <meta
          name="twitter:image"
          content="https://www.codebymarco.com/images/codebymarco-blog-og-image.jpg"
        />
      </Helmet>
      <ScrollToTop />
      <div className="container">
        <div className="blog-top">
          <h1 className="blog-heading">{t("blog_heading")}</h1>
          <p className="blog-intro">{t("blog_description")}</p>
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
                whileHover={{ scale: 1.03 }}
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
      </div>

      <style jsx>{`
        .blogWrapper {
          background: linear-gradient(
            to bottom,
            #000000 0%,
            rgba(0, 0, 0, 0.95) 70%,
            rgba(13, 21, 28, 0.9) 100%
          );
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 60px 20px;
          position: relative;
          overflow: hidden;
          box-shadow: inset 0 20px 20px -20px rgba(0, 0, 0, 0.8);
        }

        .blogWrapper::before {
          content: "";
          position: absolute;
          top: -150px;
          right: -150px;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(97, 218, 251, 0.1);
          filter: blur(120px);
          z-index: 0;
        }

        .blogWrapper::after {
          content: "";
          position: absolute;
          bottom: -50px;
          left: -50px;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background: rgba(97, 218, 251, 0.08);
          filter: blur(100px);
          z-index: 0;
        }

        .container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 3rem;
          position: relative;
          z-index: 1;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(97, 218, 251, 0.1);
        }

        .blog-top {
          padding: 20px;
          text-align: center;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .blog-heading {
          color: #61dafb;
          font-size: 2.5rem;
          letter-spacing: 2px;
          position: relative;
          display: inline-block;
          text-shadow: 0 0 15px rgba(97, 218, 251, 0.4);
          font-weight: 600;
          margin: 0;
          background: linear-gradient(to right, #61dafb, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .blog-heading::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 3px;
          background: linear-gradient(
            to right,
            rgba(97, 218, 251, 0.3),
            #61dafb,
            rgba(97, 218, 251, 0.3)
          );
          border-radius: 3px;
          box-shadow: 0 0 15px rgba(97, 218, 251, 0.6);
        }

        .blog-intro {
          font-size: 1.2rem;
          color: #aaa;
          margin-top: 15px;
          letter-spacing: 1px;
          font-weight: 300;
        }

        /* Blog grid styling */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 30px;
          width: 100%;
        }

        /* Blog card styling */
        .blog-card {
          background-color: rgba(10, 10, 10, 0.6);
          border: 1px solid rgba(97, 218, 251, 0.15);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35),
            0 0 15px rgba(97, 218, 251, 0.1);
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .blog-card:hover {
          border-color: rgba(97, 218, 251, 0.3);
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4),
            0 0 20px rgba(97, 218, 251, 0.2);
          transform: translateY(-5px);
        }

        .blog-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            rgba(97, 218, 251, 0.05),
            transparent
          );
          border-radius: 15px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .blog-card:hover::before {
          opacity: 1;
        }

        .blog-card-image-container {
          width: 100%;
          height: 180px;
          overflow: hidden;
          position: relative;
        }

        .blog-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .blog-card:hover .blog-card-image {
          transform: scale(1.05);
        }

        .blog-card-content {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .blog-card-title {
          font-size: 1.2rem;
          color: #ffffff;
          margin: 0 0 15px 0;
          font-weight: 600;
          line-height: 1.4;
          transition: color 0.3s ease;
        }

        .blog-card:hover .blog-card-title {
          color: #61dafb;
        }

        .blog-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 15px;
        }

        .blog-card-tag {
          background: rgba(97, 218, 251, 0.1);
          color: #61dafb;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(97, 218, 251, 0.2);
          transition: all 0.3s ease;
        }

        .blog-card:hover .blog-card-tag {
          background: rgba(97, 218, 251, 0.15);
          border-color: rgba(97, 218, 251, 0.3);
        }

        .blog-card-tag-more {
          background: rgba(161, 57, 255, 0.1);
          color: #a139ff;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(161, 57, 255, 0.2);
        }

        .blog-card-date {
          color: #aaa;
          font-size: 0.9rem;
          margin-top: auto;
          padding-top: 15px;
          border-top: 1px solid rgba(97, 218, 251, 0.1);
        }

        /* No results styling */
        .blog-no-results {
          grid-column: 1 / -1;
          text-align: center;
          padding: 60px 20px;
          background-color: rgba(10, 10, 10, 0.6);
          border-radius: 15px;
          border: 1px solid rgba(97, 218, 251, 0.15);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
        }

        .blog-no-results h3 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: #61dafb;
        }

        .blog-no-results p {
          color: #aaa;
          margin-bottom: 20px;
        }

        .blog-reset-button {
          padding: 10px 20px;
          background: rgba(97, 218, 251, 0.1);
          color: #61dafb;
          border: 1px solid rgba(97, 218, 251, 0.3);
          border-radius: 30px;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .blog-reset-button:hover {
          background: rgba(97, 218, 251, 0.15);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3),
            0 0 10px rgba(97, 218, 251, 0.15);
          transform: translateY(-2px);
        }

        /* Responsive styles - tablet */
        @media screen and (max-width: 768px) {
          .blog-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 25px;
          }

          .blog-heading {
            font-size: 2.2rem;
          }

          .container {
            padding: 1.5rem;
          }
        }

        /* Responsive styles - mobile */
        @media screen and (max-width: 480px) {
          .blog-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .blog-heading {
            font-size: 1.8rem;
            letter-spacing: 1px;
          }

          .blogWrapper {
            padding: 40px 15px;
          }

          .container {
            padding: 1rem;
            gap: 2rem;
          }
        }

        /* Very small devices */
        @media screen and (max-width: 320px) {
          .blog-card-title {
            font-size: 1.1rem;
          }

          .blog-heading {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Blogs;
