import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-700 min-h-screen text-gray-100">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold">TodoMaster</h1>
        <nav className="space-x-4">
          <a href="#features" className="hover:text-gray-300">
            Features
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20">
        <h2 className="text-5xl font-extrabold tracking-tight">
          Simplify Your <span className="text-yellow-300">Tasks</span>
        </h2>
        <p className="mt-4 text-lg text-gray-200 dark:text-gray-400">
          Organize your life with our powerful and easy-to-use Todo App.
        </p>
        <div className="mt-8">
          <a
            href="/login"
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="ml-4 px-6 py-3 border-2 border-gray-100 font-semibold rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-bold">Why Choose TodoMaster?</h3>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Packed with features to make task management effortless.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FeatureCard
            title="Intuitive Design"
            description="Easily add, edit, and delete tasks with a clean interface."
            color="purple-600"
          />
          <FeatureCard
            title="Smart Notifications"
            description="Never miss a deadline with timely reminders."
            color="blue-600"
          />
          <FeatureCard
            title="Cross-Platform"
            description="Access your tasks on any device, anywhere, anytime."
            color="pink-600"
          />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-gray-800 dark:to-gray-700 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold">About TodoMaster</h3>
          <p className="mt-4 text-lg text-gray-100 dark:text-gray-400">
            TodoMaster is designed to make your daily task management as easy
            and efficient as possible. Our mission is to help you stay
            productive and organized.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold">Stay in Touch</h3>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Have questions? We'd love to hear from you!
          </p>
          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-900 dark:bg-gray-800 text-gray-400">
        <p>&copy; 2025 TodoMaster. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

// FeatureCard Component
const FeatureCard = ({ title, description, color }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg hover:shadow-xl">
      <h4 className={`text-xl font-bold text-${color} dark:text-${color}`}>
        {title}
      </h4>
      <p className="mt-2 text-gray-700 dark:text-gray-200">{description}</p>
    </div>
  );
};

export default LandingPage;
