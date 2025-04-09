
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="py-20 px-4 text-center">
      <h1 className="text-8xl font-bold text-aruna-purple mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">Oops! Page not found</p>
      <p className="text-gray-600 max-w-md mx-auto mb-8">
        The page you are looking for might have been removed, had its name changed, 
        or is temporarily unavailable.
      </p>
      <Link to="/">
        <Button className="bg-aruna-purple hover:bg-aruna-dark-purple text-white">
          Return to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
