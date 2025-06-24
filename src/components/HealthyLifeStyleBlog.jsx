
// HealthyLifestyleBlog.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import AppContext from '../context/AppContext';

const HealthyLifestyleBlog = () => {
  const { isDarkMode } = useContext(AppContext);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-12`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/blogs"
          className={`inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg transition-all duration-200 ${
            isDarkMode 
              ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
              : 'text-gray-600 hover:text-gray-900 hover:bg-white'
          }`}
        >
          <ArrowLeft size={20} />
          Back to Blogs
        </Link>

        {/* Article Header */}
        <article className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg overflow-hidden`}>
          <div className="p-8 sm:p-12">
            <h1 className={`text-4xl sm:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Tips for a Healthier Lifestyle
            </h1>
            
            {/* Meta Information */}
            <div className={`flex flex-wrap items-center gap-6 mb-8 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>December 8, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Dr. Priya Sharma</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>7 min read</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8 rounded-xl overflow-hidden">
              <img 
                src="/images/healthfit.jpeg" 
                alt="AI in Healthcare" 
                className="w-full h-64 sm:h-80 object-cover object-center"
                style={{
                  backgroundColor: isDarkMode ? '#374151' : '#e5e7eb'
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/600x320?text=AI+Healthcare";
                }}
              />
            </div>


            {/* Article Content */}
            <div className={`prose prose-lg max-w-none ${isDarkMode ? 'prose-invert' : ''}`}>
              <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Living a healthier lifestyle doesn't require drastic changes overnight. Small, consistent improvements in your daily routine can lead to significant long-term benefits for your physical and mental well-being. Here's your comprehensive guide to building sustainable healthy habits.
              </p>

              <h2 className={`text-2xl font-semibold mb-4 mt-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                1. Nutrition: Fuel Your Body Right
              </h2>
              <div className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <h3 className={`text-xl font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Start with Small Changes
                </h3>
                <p className="mb-4">
                  Instead of overhauling your entire diet, begin with simple swaps. Replace sugary drinks with water, add more vegetables to your meals, and choose whole grains over refined ones. These small changes compound over time.
                </p>

                <h3 className={`text-xl font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Practice Mindful Eating
                </h3>
                <p className="mb-4">
                  Pay attention to your hunger cues, eat slowly, and savor your food. This helps with digestion and prevents overeating. Try to eliminate distractions like phones or TV during meals.
                </p>

                <h3 className={`text-xl font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Stay Hydrated
                </h3>
                <p className="mb-4">
                  Aim for 8-10 glasses of water daily. Keep a water bottle with you and add natural flavors like lemon or cucumber if plain water feels boring.
                </p>
              </div>

              <h2 className={`text-2xl font-semibold mb-4 mt-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                2. Physical Activity: Move More, Sit Less
              </h2>
              <div className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <h3 className={`text-xl font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Find Activities You Enjoy
                </h3>
                <p className="mb-4">
                  Exercise doesn't have to mean gym memberships or intense workouts. Dance, walk in nature, play sports, or try yoga. The best exercise is the one you'll actually do consistently.
                </p>

                <h3 className={`text-xl font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Incorporate Movement Throughout the Day
                </h3>
                <p className="mb-4">
                  Take the stairs instead of elevators, park farther away, have walking meetings, or set reminders to stand and stretch every hour if you have a desk job.
                </p>

                <h3 className={`text-xl font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Start Small and Build Up
                </h3>
                <p className="mb-4">
                  Begin with 10-15 minutes of activity daily and gradually increase. Consistency is more important than intensity when you're starting out.
                </p>
              </div>

              <h2 className={`text-2xl font-semibold mb-4 mt-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                3. Mental Health: Prioritize Your Mind
              </h2>
              <div className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <h3 className={`text-xl font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Practice Stress Management
                </h3>
                <p className="mb-4">
                  Learn healthy ways to cope with stress through deep breathing exercises, meditation, journaling, or talking to friends and family. Chronic stress can significantly impact your physical health.
                </p>

                <h3 className={`text-xl font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Prioritize Quality Sleep
                </h3>
                <p className="mb-4">
                  Aim for 7-9 hours of sleep nightly. Create a bedtime routine, keep your bedroom cool and dark, and avoid screens before bed. Good sleep is foundational to both physical and mental health.
                </p>

                <h3 className={`text-xl font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Build Social Connections
                </h3>
                <p className="mb-4">
                  Maintain relationships with family and friends. Social connections are crucial for mental health and can provide support during challenging times.
                </p>
              </div>

              <h2 className={`text-2xl font-semibold mb-4 mt-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                4. Creating Sustainable Habits
              </h2>
              <div className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <h3 className={`text-xl font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Start with One Habit at a Time
                </h3>
                <p className="mb-4">
                  Don't try to change everything at once. Pick one habit, focus on it for 2-3 weeks until it becomes automatic, then add another.
                </p>

                <h3 className={`text-xl font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Track Your Progress
                </h3>
                <p className="mb-4">
                  Keep a simple journal or use apps to track your habits. Seeing your progress can be incredibly motivating and help you identify patterns.
                </p>

                <h3 className={`text-xl font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Be Patient and Kind to Yourself
                </h3>
                <p className="mb-4">
                  Expect setbacks and don't give up after a bad day. Progress isn't always linear, and self-compassion is key to long-term success.
                </p>
              </div>

              <h2 className={`text-2xl font-semibold mb-4 mt-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                5. Preventive Healthcare
              </h2>
              <div className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <h3 className={`text-xl font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Regular Health Checkups
                </h3>
                <p className="mb-4">
                  Schedule annual physical exams and follow recommended screening guidelines for your age group. Early detection of health issues leads to better outcomes.
                </p>

                <h3 className={`text-xl font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Know Your Numbers
                </h3>
                <p className="mb-4">
                  Keep track of important health metrics like blood pressure, cholesterol levels, blood sugar, and BMI. Understanding these numbers helps you make informed health decisions.
                </p>

                <h3 className={`text-xl font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Listen to Your Body
                </h3>
                <p className="mb-4">
                  Pay attention to changes in your body and don't ignore persistent symptoms. Trust your instincts and consult healthcare professionals when needed.
                </p>
              </div>

              <h2 className={`text-2xl font-semibold mb-4 mt-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Building Your Personal Wellness Plan
              </h2>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Remember that healthy living is personal. What works for others might not work for you, and that's okay. Experiment with different approaches, find what fits your lifestyle, and create a sustainable routine that you can maintain long-term. The goal is progress, not perfection.
              </p>

              <div className={`mt-12 p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
                <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-purple-900'}`}>
                  Your Healthy Lifestyle Checklist
                </h3>
                <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-purple-800'}`}>
                  <li>• Eat a balanced diet with plenty of fruits and vegetables</li>
                  <li>• Stay hydrated throughout the day</li>
                  <li>• Get 150 minutes of moderate exercise weekly</li>
                  <li>• Prioritize 7-9 hours of quality sleep</li>
                  <li>• Practice stress management techniques</li>
                  <li>• Maintain social connections</li>
                  <li>• Schedule regular health checkups</li>
                  <li>• Take time for activities you enjoy</li>
                  <li>• Practice gratitude and mindfulness</li>
                  <li>• Be patient and kind to yourself</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
export default HealthyLifestyleBlog;