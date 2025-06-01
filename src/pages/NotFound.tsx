
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">৪০৪</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">পৃষ্ঠা পাওয়া যায়নি</h2>
          <p className="text-gray-600 mb-6">
            দুঃখিত! আপনি যে পৃষ্ঠাটি খুঁজছেন তা বিদ্যমান নেই।
          </p>
        </div>
        
        <div className="space-y-4">
          <Link to="/">
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
              <Home className="mr-2" size={20} />
              হোম পেজে ফিরে যান
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="w-full border-green-600 text-green-600 hover:bg-green-50"
          >
            <ArrowLeft className="mr-2" size={20} />
            পূর্ববর্তী পৃষ্ঠা
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
