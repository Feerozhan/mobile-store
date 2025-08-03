import { useState } from 'react';
import { FiSearch, FiChevronDown, FiChevronUp, FiExternalLink } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const faqData = {
    general: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. All transactions are securely processed through our payment gateway."
      },
      {
        question: "How can I track my order?",
        answer: "Once your order ships, you'll receive a tracking number via email. You can use this number on our tracking page or the courier's website to monitor your package."
      }
    ],
    shipping: [
      {
        question: "What are your shipping options?",
        answer: "We offer standard (3-5 business days), express (1-2 business days), and same-day delivery (select areas only). Shipping costs vary depending on the option you choose."
      },
      {
        question: "Do you ship internationally?",
        answer: "Yes, we ship to over 50 countries worldwide. International shipping typically takes 7-14 business days and may be subject to customs fees."
      }
    ],
    returns: [
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day money-back guarantee. Items must be unused, in original packaging with all tags attached. Please contact our support team to initiate a return."
      },
      {
        question: "How long do refunds take?",
        answer: "Once we receive your return, refunds are processed within 3-5 business days. The time it takes for the refund to appear in your account depends on your payment method."
      }
    ],
    account: [
      {
        question: "How do I reset my password?",
        answer: "Click 'Forgot Password' on the login page and enter your email address. You'll receive a link to create a new password. The link expires in 24 hours for security."
      },
      {
        question: "Can I change my account email?",
        answer: "Yes, you can update your email in the 'Account Settings' section. You'll need to verify the new email address before it becomes active."
      }
    ]
  };

  const toggleQuestion = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  const filteredQuestions = Object.entries(faqData)
    .flatMap(([category, questions]) => 
      questions.filter(q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Help Center</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Find answers to common questions about our products and services
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search FAQs..."
            className="block w-full pl-10 pr-3 py-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto pb-2 mb-8 scrollbar-hide">
          {Object.keys(faqData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 mr-2 rounded-full whitespace-nowrap transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {(searchQuery ? filteredQuestions : faqData[activeCategory]).map((item, index) => (
            <div 
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{item.question}</h3>
                {expandedQuestion === index ? (
                  <FiChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <FiChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              <AnimatePresence>
                {expandedQuestion === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 pt-2 text-gray-600 dark:text-gray-400">
                      {item.answer}
                      {item.link && (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          Learn more <FiExternalLink className="ml-1" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Still have questions?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Our support team is here to help you 24/7
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;