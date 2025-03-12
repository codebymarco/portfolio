import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../styles/blogsSection.css";
import useTranslationStore from "../../store/store";

// Import sample blog data (top 3)
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
    image: "https://cloud2data.com/wp-content/uploads/2023/05/Kubernetes.png", // You'll need to import this correctly
  },
  {
    id: 3,
    title: "Kubernetes Errors",
    tags: ["kubernetes", "docker", "debugging"],
    date: "2025-02-15",
    image: "https://cloud2data.com/wp-content/uploads/2023/05/Kubernetes.png",
  },
];

const BlogsSection = () => {
  const { t } = useTranslationStore();

  const navigate = useNavigate();

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

  // Format date to be more readable
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="blogsSection">
      <div className="blogsSectionTop">
        <h1>{t("blogs_section_heading")}</h1>
        <Link to="/blog">{t("blogs_section_more")}</Link>
      </div>
      <motion.div
        className="blogsSectionContainer"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {blogData.map((blog) => (
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
        ))}
      </motion.div>
    </div>
  );
};

export default BlogsSection;
