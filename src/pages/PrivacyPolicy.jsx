const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 sm:p-8 text-white">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="opacity-90">Effective Date: {currentDate}</p>
            <p className="text-sm opacity-80 mt-1 sm:mt-0">Last Updated: {currentDate}</p>
          </div>
        </div>

   
        <div className="p-6 sm:p-8">
          <div className="prose max-w-none text-gray-700">
            <p className="mb-6">
              At FreeStore, we are committed to protecting your privacy. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our services. Please read this policy carefully.
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">1. Information We Collect</h2>
              <p className="mb-4">We may collect the following types of information:</p>
              
              <h3 className="font-semibold mt-4">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Name, email address, phone number</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information (processed securely by our payment partners)</li>
              </ul>
              
              <h3 className="font-semibold mt-4">Usage Data</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP address, browser type, device information</li>
                <li>Pages visited, time spent on site</li>
                <li>Cookies and tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To process transactions and send order confirmations</li>
                <li>To communicate with you about your account or orders</li>
                <li>To improve our website and user experience</li>
                <li>To prevent fraud and enhance security</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">3. Data Sharing and Disclosure</h2>
              <p className="mb-4">We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>With service providers who assist in our operations (payment processors, shipping carriers)</li>
                <li>When required by law or to respond to legal process</li>
                <li>To protect the rights and safety of our company and others</li>
                <li>In connection with a business transfer (merger, acquisition)</li>
              </ul>
              <p>We do not sell your personal information to third parties.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">4. Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                We use cookies and similar technologies to enhance your experience, analyze trends, and administer the website.
                You can control cookies through your browser settings.
              </p>
              <h3 className="font-semibold mt-4">Types of Cookies We Use:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Essential cookies (necessary for site functionality)</li>
                <li>Performance cookies (help us understand how visitors use our site)</li>
                <li>Functional cookies (remember your preferences)</li>
                <li>Advertising cookies (to deliver relevant ads)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">5. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your personal information.
                However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">6. Your Privacy Rights</h2>
              <p className="mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p>To exercise these rights, please contact us at freestore@gmail.com.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">7. Children's Privacy</h2>
              <p>
                Our services are not directed to children under 13. We do not knowingly collect personal information from children.
                If we become aware that we have collected personal information from a child without parental consent,
                we will take steps to remove that information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">8. Changes to This Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy
                on our website with an updated effective date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:<br />
                <span className="font-medium">Email:</span> freestore@gmail.com<br />
                <span className="font-medium">Mailing Address:</span> 1 Privacy roade, Suite 100, pakistan, CA 94107
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;