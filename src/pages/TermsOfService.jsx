const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 sm:p-8 text-white">
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <p className="mt-2 opacity-90">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="p-6 sm:p-8">
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6">
              Welcome to FreeStore! These Terms of Service ("Terms") govern your use of our website and services. 
              By accessing or using our services, you agree to be bound by these Terms.
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing or using our services, you confirm that you have read, understood, and agree to be bound by these Terms. 
                If you do not agree with any part of these Terms, you must not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">2. Account Registration</h2>
              <p className="text-gray-700 mb-4">
                To access certain features, you may need to register for an account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security of your password</li>
                <li>Be responsible for all activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">3. User Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                You agree not to use our services to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Distribute harmful or malicious content</li>
                <li>Engage in fraudulent activities</li>
                <li>Interfere with the operation of our services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">4. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content on our platform, including text, graphics, logos, and software, is our property or 
                the property of our licensors and is protected by intellectual property laws. You may not use, 
                reproduce, or distribute any content without our express permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">5. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages resulting from your use of or inability to use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">6. Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice, 
                for any reason whatsoever, including without limitation if you breach these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">7. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms at any time. We will notify you of any changes by 
                posting the new Terms on this page. Your continued use of our services after any changes 
                constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">8. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, 
                without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">9. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about these Terms, please contact us at freestore@gmail.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;