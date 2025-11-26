import { Outlet } from "react-router-dom";
import { useTodos } from "../data/useTodos";
import Header from "../components/Header";
import { useState } from "react";
import Footer from "../components/Footer";

export default function Layout() {
  const [todos, setTodos] = useTodos();
  const [searchText, setSearchText] = useState("");

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header searchText={searchText} setSearchText={setSearchText} />
      
      {/* Context giờ sẽ hoạt động! */}
      <Outlet context={{ todos, setTodos, searchText }} />

      <Footer />
    </div>
  );
}