// components/Search.tsx
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const Search = () => {
  return (
    <div className="flex items-center gap-2 w-full">
      {/* Full width Search Input */}
      <Input type="text" placeholder="Search..." className="flex-1" />

      {/* Filter Button */}
      <Button variant="outline" size="icon">
        <Filter className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Search;
