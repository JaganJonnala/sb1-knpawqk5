import { HeartIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { mockServiceProviders } from '../constants/mockData';

export default function Favorites() {
  // For demo, show first 3 providers as favorites
  const favoriteProviders = mockServiceProviders.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Favorites</h1>

      {favoriteProviders.length === 0 ? (
        <div className="text-center py-12">
          <HeartIcon className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600">You haven't added any favorites yet.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {favoriteProviders.map((provider) => (
            <Link
              key={provider.id}
              to={`/service/${provider.id}`}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <img
                  src={provider.avatar}
                  alt={provider.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h2 className="text-xl font-semibold">{provider.name}</h2>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <span>⭐</span>
                    <span className="text-gray-600">
                      {provider.rating} ({provider.reviews} reviews)
                    </span>
                  </div>
                </div>
                <div className="ml-auto">
                  <span className="text-xl font-semibold text-primary-600">
                    ${provider.price}/hr
                  </span>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{provider.description}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}