import React from 'react';
import { 
  Star, 
  Video, 
  Bell, 
  ShoppingBag, 
  Zap,
  MessageCircle,
  Check,
  ArrowRight,
  Clock,
  AlertTriangle
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Price Increase Banner */}
      <div className="bg-ccn-mint py-2 sm:py-3 px-2 sm:px-4">
        <div className="container mx-auto flex items-center justify-center gap-2 text-center">
          <AlertTriangle className="hidden sm:block w-5 h-5 text-ccn-dark" />
          <p className="text-xs sm:text-sm font-medium text-ccn-dark px-2">
            Last chance: Price increasing to £695 soon - Lock in the current price today!
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 sm:py-16 text-center">
        <div className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-ccn-mint bg-opacity-20 rounded-full border border-ccn-mint">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-ccn-dark" />
            <span className="text-xs sm:text-sm font-semibold text-ccn-dark">Limited Time Offer</span>
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-ccn-dark leading-tight">
          Final Chance: CCN Pro Membership at £550
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-3 sm:mb-4">
          Take your reselling game to the next level with exclusive features and premium support
        </p>
        <p className="text-base sm:text-lg text-ccn-dark font-semibold">
          Price increases to £695 soon - Save £145 by joining today
        </p>
      </div>

      {/* Video Section */}
      <div className="container mx-auto px-4 mb-8 sm:mb-16">
        <div className="rounded-lg shadow-xl sm:shadow-2xl overflow-hidden">
          <div className="wistia_responsive_padding" style={{padding:'64.79% 0 0 0', position:'relative'}}>
            <div className="wistia_responsive_wrapper" style={{height:'100%', left:0, position:'absolute', top:0, width:'100%'}}>
              <iframe 
                src="https://fast.wistia.net/embed/iframe/9thdgj7ys3?web_component=true&seo=false" 
                title="CCN Pro Membership Video"
                allow="autoplay; fullscreen" 
                allowTransparency={true}
                frameBorder="0" 
                scrolling="no" 
                className="wistia_embed" 
                name="wistia_embed" 
                width="100%" 
                height="100%"
              />
            </div>
          </div>
          <script src="https://fast.wistia.net/player.js" async></script>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-16">
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-ccn-dark">Pro Benefits</h2>
            <div className="space-y-4 sm:space-y-6">
              <BenefitItem icon={Star} text="Exclusive Extra Pro Only Flips" />
              <BenefitItem icon={Video} text="26+ Video Lesson Reselling Mentorship" />
              <BenefitItem icon={Bell} text="Exclusive Restock Monitor for Pro Flips" />
              <BenefitItem icon={ShoppingBag} text="Instant access to the Nike Outlet Section" />
              <BenefitItem icon={Zap} text="Early Access To Beta Features" />
              <BenefitItem icon={MessageCircle} text="Exclusive Pro Chat" />
              <BenefitItem icon={Check} text="Everything included in standard CCN Membership" />
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="bg-ccn-mint bg-opacity-10 border border-ccn-mint rounded-lg p-3 sm:p-4 mb-6 sm:mb-8">
              <p className="text-center font-semibold text-ccn-dark">
                🚨 Price increasing to £695 soon!
                <br />
                <span className="text-xs sm:text-sm text-gray-600">Lock in the lower price now before it's too late</span>
              </p>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-ccn-dark">Current Pricing</h2>
            
            {/* One-time Payment */}
            <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-white rounded-lg relative overflow-hidden border-2 border-ccn-mint">
              <div className="absolute top-2 right-2 bg-ccn-mint text-ccn-dark text-xs font-bold px-2 py-1 rounded">
                SAVE £145
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-ccn-dark">One-time Payment</h3>
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <p className="text-3xl sm:text-4xl font-bold text-ccn-dark">£550</p>
                <p className="text-base sm:text-lg line-through text-gray-500">£695</p>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Full access forever</p>
              <button className="w-full bg-ccn-mint hover:bg-opacity-90 text-ccn-dark font-bold py-3 px-4 sm:px-6 rounded-lg transition duration-300 flex items-center justify-center text-sm sm:text-base">
                Lock In This Price Now <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
              </button>
            </div>

            {/* Monthly Payment */}
            <div className="p-4 sm:p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-ccn-dark">Monthly Payments</h3>
              <p className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-ccn-dark">£45/month</p>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Split over 12 months</p>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-ccn-dark font-bold py-3 px-4 sm:px-6 rounded-lg transition duration-300 flex items-center justify-center text-sm sm:text-base">
                Choose Monthly Plan <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center space-y-3 sm:space-y-4">
          <p className="text-sm sm:text-base text-ccn-dark font-semibold">
            ⚡ Don't miss out on the current price - Upgrade now before it increases to £695
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            * Calendar booking for onboarding call will be provided after upgrade
          </p>
        </div>
      </div>
    </div>
  );
}

function BenefitItem({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-center space-x-3 sm:space-x-4">
      <div className="flex-shrink-0">
        <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-ccn-mint" />
      </div>
      <p className="text-base sm:text-lg text-ccn-dark">{text}</p>
    </div>
  );
}

export default App;