
import { Car, Mountain } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      <div className="relative">
        <Mountain className="h-8 w-8 text-green-700 dark:text-green-400" />
        <Car className="h-4 w-4 text-green-600 dark:text-green-300 absolute -bottom-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-0.5" />
      </div>
    </div>
  );
};

export default Logo;
