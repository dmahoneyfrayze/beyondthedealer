import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/used?search=${encodeURIComponent(query)}`);
        }
    };

    return (
        <form onSubmit={handleSearch} className="flex w-full max-w-3xl mx-auto gap-2">
            <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                    type="text"
                    placeholder="Search by make, model, or keyword..."
                    className="pl-10 h-12 text-lg bg-background/80 backdrop-blur-sm border-white/20 text-foreground placeholder:text-muted-foreground focus-visible:ring-accent"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <Button type="submit" size="lg" className="h-12 px-8 bg-accent text-primary hover:bg-accent/90 font-semibold">
                Search
            </Button>
        </form>
    );
};

export default SearchBar;
