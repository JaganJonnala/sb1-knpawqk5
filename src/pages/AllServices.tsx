import { SERVICE_CATEGORIES } from '../constants/services';
import { Link } from 'react-router-dom';

export default function AllServices() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICE_CATEGORIES.map((category) => (
          <Link
            key={category.id}
            to={`/services/${category.id}`}
            className="group bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-200"
          >
            <div className="flex flex-col items-center text-center">
              <span className="text-6xl mb-6 transition-transform duration-200 group-hover:scale-110">
                {category.icon}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {category.title}
              </h3>
              <p className="text-gray-600">
                {category.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}