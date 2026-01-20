import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Zap, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-2xl font-bold text-gray-900">LendPlan</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Terms
                </Link>
                <Link href="/signup" className="bg-gray-900 text-white hover:bg-gray-800 px-4 py-2 rounded-md text-sm font-medium">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
            Automate Customer Outreach
            <span className="block text-gray-900">Drive Meaningful Conversations</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
            Follow up with users automatically through SMS and drive engagement. Turn abandoned interactions into completed conversions with intelligent, automated outreach.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-4 bg-gray-900 text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition-colors shadow-lg"
            >
              Get Started Free
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-gray-900"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Why Choose LendPlan?</h2>
          <p className="mt-4 text-xl text-gray-600">
            Trusted by businesses to re-engage customers and drive conversions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-900 transition-all">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-12 h-12 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
              Automated Follow-Ups
            </h3>
            <p className="text-gray-600 text-center">
              Automatically reach out to users who haven't completed their journey, bringing them back to finish what they started.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-900 transition-all">
            <div className="flex justify-center mb-4">
              <Zap className="w-12 h-12 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
              Intelligent Timing
            </h3>
            <p className="text-gray-600 text-center">
              Send messages at the perfect moment to maximize engagement and response rates with smart scheduling.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-900 transition-all">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
              Personalized Messaging
            </h3>
            <p className="text-gray-600 text-center">
              Craft personalized outreach campaigns that resonate with your users and drive meaningful conversations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-xl text-gray-600">
              Automated outreach that drives real results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Solutions List */}
            <div className="space-y-12">
              {/* Solution 1 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Abandoned Form Recovery</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Automatically follow up with users who started but didn't complete your forms. Send personalized SMS reminders that bring them back to finish their application.
                </p>
              </div>

              {/* Solution 2 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Document Completion Reminders</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Send timely reminders for pending document signatures and submissions. Increase completion rates by reaching users directly on their mobile devices.
                </p>
              </div>

              {/* Solution 3 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Engagement Campaigns</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Create automated SMS campaigns to re-engage inactive users, share updates, and drive them back into your conversion funnel with targeted messaging.
                </p>
              </div>
            </div>

            {/* Single Image */}
            <div className="rounded-lg overflow-hidden sticky top-8 flex items-start justify-center">
              <Image 
                src="/Lendplan.png" 
                alt="LendPlan Solutions" 
                width={350} 
                height={350}
                className="w-auto h-auto object-contain max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-6 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Boost Your Conversions?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join businesses that trust LendPlan to automate customer outreach and drive meaningful conversations.
            </p>
            <Link
              href="/signup"
              className="inline-block px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LendPlan</h3>
              <p className="text-gray-400">
                Automated customer outreach that drives results.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="text-gray-400 hover:text-white">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                support@trylendplan.com
              </p>
              <p className="text-gray-400 mt-4">
                6 Themistokli Dervi<br />
                Flat/Office 4D<br />
                1066 Nicosia, Cyprus
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 LendPlan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
