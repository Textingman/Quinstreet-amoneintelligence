import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-2xl font-bold text-gray-900">AmOne AI</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
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
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            About AmOne AI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We help businesses nurture customers into live phone calls — automatically. AmOne AI uses intelligent SMS outreach to build relationships and get your phone ringing with people who are ready to talk.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-4">
            AmOne AI was built to solve one of the biggest problems in business: customers who show interest but never follow through. Every day, businesses lose revenue because prospects fill out a form or visit a page — and then disappear.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            We fix that. Our platform automatically sends personalized SMS messages to those customers, nurturing the relationship and prompting them to pick up the phone and call you. No manual follow-up. No missed opportunities. Just more inbound calls.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
          <p className="text-lg text-gray-600 mb-4">
            AmOne AI provides an automated SMS-to-call platform that helps businesses nurture customers and convert interest into live phone conversations. Our service includes:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 mb-8 space-y-2">
            <li>Automated SMS follow-ups that prompt customers to call</li>
            <li>Intelligent timing to reach customers when they're most likely to answer</li>
            <li>Personalized call-to-action messaging</li>
            <li>Multi-step follow-up sequences</li>
            <li>Real-time call tracking and analytics</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
          <p className="text-lg text-gray-600 mb-4">
            Phone calls close deals. Studies show that customers contacted by phone are 8x more likely to convert than those reached by email alone. AmOne AI bridges the gap — using SMS to nurture your customers and get them on the phone, where your team can build relationships and close deals. We're dedicated to helping you maximize inbound call volume through intelligent, automated outreach.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">Our Address</h2>
          <p className="text-lg text-gray-600">
            950 Tower Lane, Suite 1200<br />
            Foster City, CA 94404<br />
            United States
          </p>
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
              Join businesses using AmOne AI to automatically nurture customers and convert interest into live phone calls — without lifting a finger.
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
              <h3 className="text-xl font-bold mb-4">AmOne AI</h3>
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
                support@amoneai.com
              </p>
              <p className="text-gray-400 mt-4">
                950 Tower Lane, Suite 1200<br />
                Foster City, CA 94404<br />
                United States
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AmOne AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
