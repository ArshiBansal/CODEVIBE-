import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-10">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-indigo-100 text-sm">Last Updated: May 2026</p>
        </div>

        {/* Content */}
        <div className="px-8 py-10 space-y-10 text-gray-700 leading-7">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p>
              Welcome to <strong>CodeVibe</strong>. Your privacy matters to us.
              This Privacy Policy explains how we collect, use, protect, and
              manage your information when you use our platform and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Information We Collect
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-indigo-600 mb-2">
                  2.1 Personal Information
                </h3>

                <ul className="list-disc pl-6 space-y-1">
                  <li>Username</li>
                  <li>Email address</li>
                  <li>College/Institution name</li>
                  <li>Year of study</li>
                  <li>Encrypted password</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-indigo-600 mb-2">
                  2.2 Usage Information
                </h3>

                <ul className="list-disc pl-6 space-y-1">
                  <li>Pages visited</li>
                  <li>Lessons completed</li>
                  <li>Progress and achievements</li>
                  <li>Time spent on lessons</li>
                  <li>Certificates generated</li>
                  <li>Feedback submissions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-indigo-600 mb-2">
                  2.3 Device Information
                </h3>

                <ul className="list-disc pl-6 space-y-1">
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Anonymized IP address</li>
                  <li>Device type</li>
                  <li>Screen resolution</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. How We Use Your Information
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Create and maintain your account</li>
              <li>Provide personalized learning experiences</li>
              <li>Track learning progress and achievements</li>
              <li>Improve platform performance and usability</li>
              <li>Respond to support requests</li>
              <li>Generate certificates and reports</li>
              <li>Ensure legal compliance and security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Cookies & Tracking Technologies
            </h2>

            <div className="space-y-5">
              <div className="bg-gray-50 border rounded-xl p-5">
                <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                  Essential Cookies
                </h3>
                <p>
                  Required for login, authentication, and basic functionality.
                </p>
              </div>

              <div className="bg-gray-50 border rounded-xl p-5">
                <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                  Performance Cookies
                </h3>
                <p>
                  Help us understand platform usage and improve performance.
                </p>
              </div>

              <div className="bg-gray-50 border rounded-xl p-5">
                <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                  Preference Cookies
                </h3>
                <p>Store your preferences such as themes and settings.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Third-Party Services
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-xl p-5 bg-gray-50">
                <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                  Analytics
                </h3>

                <p>
                  We may use tools like Google Analytics to improve user
                  experience and understand usage patterns.
                </p>
              </div>

              <div className="border rounded-xl p-5 bg-gray-50">
                <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                  Authentication
                </h3>

                <p>
                  Third-party authentication providers may securely process
                  login credentials.
                </p>
              </div>

              <div className="border rounded-xl p-5 bg-gray-50">
                <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                  Hosting & Deployment
                </h3>

                <p>
                  Services such as Render, Vercel, or GitHub Pages may host our
                  platform.
                </p>
              </div>

              <div className="border rounded-xl p-5 bg-gray-50">
                <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                  Cloud Storage
                </h3>

                <p>
                  Certificates and platform assets may be stored securely on
                  cloud servers.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Data Security
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Encrypted passwords using bcrypt</li>
              <li>HTTPS secure communication</li>
              <li>Regular security monitoring</li>
              <li>Restricted access to sensitive data</li>
            </ul>

            <p className="mt-4">
              While we take strong precautions, no online platform can guarantee
              complete security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Data Retention
            </h2>

            <p>
              We retain user information while accounts remain active and for a
              limited period afterward for backup, compliance, and security
              purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Your Rights
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Access your personal data",
                "Correct inaccurate information",
                "Request account deletion",
                "Download your data",
                "Withdraw consent",
                "Opt-out of non-essential emails",
              ].map((item, index) => (
                <div key={index} className="border rounded-lg p-4 bg-indigo-50">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Children's Privacy
            </h2>

            <p>
              CodeVibe is not intended for children under 13 years of age. We do
              not knowingly collect information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Policy Updates
            </h2>

            <p>
              We may update this Privacy Policy from time to time. Changes will
              be reflected on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Contact Us
            </h2>

            <div className="bg-gray-100 rounded-xl p-6 space-y-3">
              <p>
                📧 Email:{" "}
                <a
                  href="mailto:privacy@codevibe.com"
                  className="text-indigo-600 hover:underline"
                >
                  privacy@codevibe.com
                </a>
              </p>

              <p>
                🔗 GitHub:{" "}
                <a
                  href="https://github.com/JiyaBatra/CODEVIBE-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  JiyaBatra/CODEVIBE-
                </a>
              </p>

              <p>
                💬 Discord:{" "}
                <a
                  href="https://discord.com/channels/1503405091875455107/1503405094933237853"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  Join our community
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              12. GDPR & Regional Compliance
            </h2>

            <p>
              If you are located in regions with data protection laws such as
              GDPR, we process your data lawfully and provide the rights
              described in this policy.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t px-8 py-6 bg-gray-50 text-center text-sm text-gray-500">
          © 2026 CodeVibe. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
