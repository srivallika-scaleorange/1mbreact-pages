

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { ArrowRightIcon, BookOpenIcon, HeartIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import SEO from './SEO'; // Assuming you have a SEO component for managing meta tags
const blogs = [
  {
    id: 'ai-healthcare-future',
    title: "The Future of AI in Healthcare",
    description: "Explore how AI is transforming healthcare with predictive analytics and personalized care.",
    href: "/blog/ai-healthcare-future",
    icon: <LightBulbIcon className="h-6 w-6 text-blue-500" />
  },
  {
    id: 'abdm-impact-understanding',
    title: "Understanding ABDM and Its Impact",
    description: "Learn about the Ayushman Bharat Digital Mission and how it's revolutionizing health record management.",
    href: "/blog/abdm-impact-understanding",
    icon: <BookOpenIcon className="h-6 w-6 text-green-500" />
  },
  {
    id: 'healthier-lifestyle-tips',
    title: "Tips for a Healthier Lifestyle",
    description: "Practical advice on integrating fitness, nutrition, and mental health into your daily routine.",
    href: "/blog/healthier-lifestyle-tips",
    icon: <HeartIcon className="h-6 w-6 text-pink-500" />
  }
];

const BlogSection = () => {
  const { isDarkMode } = useContext(AppContext);

  return (
    <>
    <SEO
        title="1MB Healthy Blog - Health & Wellness Insights"
        description="Read the latest insights on AI-driven healthcare, healthy lifestyles, and ABDM integration from 1MB Healthy’s blog."
        keywords="health blog, AI healthcare, wellness tips, ABDM, 1MB Healthy"
        url="https://1mbhealthy.com/blogs"
      />
    <section
      id="1mbWellness"
      className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} py-16 md:py-24`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-center font-bold mb-12 text-3xl sm:text-4xl ${
            isDarkMode ? 'text-gray-300' : 'text-gray-900'
          }`}
        >
          <BookOpenIcon className="h-8 w-8 text-indigo-500 inline-block mr-2" />
          Our 1mbWellness
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.title}
              className={`flex flex-col justify-between min-h-[240px] rounded-2xl p-6 transition-all duration-300 ${
                isDarkMode
                  ? 'bg-gray-700 shadow-[0_4px_24px_rgba(99,102,241,0.2),_0_1.5px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(99,102,241,0.3),_0_2px_12px_rgba(0,0,0,0.10)]'
                  : 'bg-white shadow-[0_4px_24px_rgba(16,185,129,0.08),_0_1.5px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(16,185,129,0.16),_0_2px_12px_rgba(0,0,0,0.10)]'
              } hover:translate-y-[-6px] hover:scale-[1.03]`}
            >
              <div>
                {/* Blog Icon */}
                <div className="mb-3">{blog.icon}</div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-900'
                  }`}
                >
                  {blog.title}
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-slate-600'} mb-4`}>
                  {blog.description}
                </p>
              </div>
              <Link
                to={blog.href}
                className="text-indigo-500 font-medium text-base mt-2 inline-block hover:underline transition-colors duration-200 hover:text-indigo-600"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default BlogSection;
