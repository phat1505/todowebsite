import type { Route } from "../+types/root";
import { Link } from "react-router";
import { Search } from "lucide-react"

type HeaderProps = {
    searchText : string;
    setSearchText: (value: string) => void;
};
export default function Header({searchText, setSearchText}: HeaderProps) {
    return (
        <div className="flex text-white w-full bg-violet-600 h-[60px] items-center">
            <Link to="#" className="md:w-3/10 md:text-4xl text-lg w-1/4">Ko Làm Thì Bị Lụi</Link>
            <div className="w-full flex justify-center items-center ">
                <div className="bg-violet-900 flex rounded-3xl items-center h-10 md:w-[450px] w-[200px]">
                    <Search className="md:w-7 md:h-7 mx-2 w-4 h-4 " />
                    <input type="text" placeholder="Search your plan" value={searchText}
                     onChange={(e) => setSearchText(e.target.value)}
                     className="md:text-3xl text-lg h-8 md:w-[400px] w-[150px] focus:outline-none " />
                </div>
            </div>
        </div>
    );
}