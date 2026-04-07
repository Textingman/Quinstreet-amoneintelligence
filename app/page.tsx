import Link from 'next/link';
import Image from 'next/image';
import { Phone, PhoneCall, PhoneIncoming, Clock, Heart, TrendingUp } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-2xl font-bold text-gray-900">Amone Intelligence</span>
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
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center">
              <PhoneCall className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
            Nurture Customers Into
            <span className="block text-gray-900">Live Phone Calls</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
            Amone Intelligence automatically follows up with your customers via SMS and guides them to call you. Build lasting relationships and convert interest into real conversations that close deals.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-4 bg-gray-900 text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition-colors shadow-lg flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Start Nurturing Customers
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

      {/* Stats Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-extrabold text-white">3x</p>
              <p className="mt-2 text-lg text-gray-300">More calls from existing customers</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold text-white">5 min</p>
              <p className="mt-2 text-lg text-gray-300">Average response time after SMS</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold text-white">60%</p>
              <p className="mt-2 text-lg text-gray-300">Of customers re-engaged via SMS call back</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Why Amone Intelligence Drives More Calls</h2>
          <p className="mt-4 text-xl text-gray-600">
            Automated SMS outreach that nurtures relationships and gets your phone ringing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-900 transition-all">
            <div className="flex justify-center mb-4">
              <PhoneIncoming className="w-12 h-12 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
              Instant Call-Back Prompts
            </h3>
            <p className="text-gray-600 text-center">
              Send SMS messages that include your phone number and a direct call-to-action, making it effortless for customers to call you back immediately.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-900 transition-all">
            <div className="flex justify-center mb-4">
              <Heart className="w-12 h-12 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
              Relationship-First Outreach
            </h3>
            <p className="text-gray-600 text-center">
              Build genuine connections with personalized, thoughtful messages that show customers you care — not just automated blasts.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-900 transition-all">
            <div className="flex justify-center mb-4">
              <TrendingUp className="w-12 h-12 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
              Higher Connect Rates
            </h3>
            <p className="text-gray-600 text-center">
              SMS open rates are 98%. When your message lands in their texts, they see it — and they call. Turn warm interest into live conversations.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-xl text-gray-600">
              From first touch to live call — automatically
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Steps */}
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Customer Shows Interest</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    A prospect fills out a form, visits your page, or starts an application — then leaves without calling.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Amone Intelligence Sends an SMS</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Within minutes, we automatically send a personalized text message with your phone number and a warm, compelling reason to call now.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Phone Rings</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    The customer calls you directly. No more chasing — just inbound calls from people who are ready to talk.
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-lg overflow-hidden sticky top-8 flex items-start justify-center">
              <Image 
                src="/Lendplan.png" 
                alt="Amone Intelligence Customer Nurturing" 
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
            <PhoneCall className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Your Phone Ringing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join businesses using Amone Intelligence to automatically nurture customers and convert interest into live phone calls — without lifting a finger.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Start Nurturing Customers Today
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Amone Intelligence</h3>
              <p className="text-gray-400">
                Automated SMS outreach that nurtures customers and drives phone calls.
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
                support@amoneintelligence.com
              </p>
              <p className="text-gray-400 mt-4">
                950 Tower Lane, Suite 1200<br />
                Foster City, California 94404<br />
                United States
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Amone Intelligence. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
