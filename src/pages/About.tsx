import { ShieldCheckIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function About() {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Trusted Professionals',
      description: 'All our service providers are thoroughly vetted and background checked.',
    },
    {
      icon: UserGroupIcon,
      title: 'Customer Satisfaction',
      description: 'We prioritize your satisfaction with a 100% satisfaction guarantee.',
    },
    {
      icon: SparklesIcon,
      title: 'Quality Service',
      description: 'Get top-quality service from experienced professionals.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">About ServicePro</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              ServicePro is your trusted platform for finding and booking professional services. 
              We connect customers with skilled professionals for a wide range of services, 
              from home maintenance to personal care.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <feature.icon className="w-12 h-12 mx-auto text-primary-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Our mission is to revolutionize the way people access professional services 
              by providing a seamless, reliable, and convenient platform that connects 
              customers with trusted service providers.
            </p>

            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Verified professionals with proven expertise</li>
              <li>Secure and convenient booking system</li>
              <li>Transparent pricing with no hidden fees</li>
              <li>24/7 customer support</li>
              <li>Satisfaction guaranteed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}