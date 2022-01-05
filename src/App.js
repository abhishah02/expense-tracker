import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import AddExpense from "./pages/add-expense";
import Home from "./pages/home";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/expense-tracker/" element={<Home />} />
        <Route path="/expense-tracker/add-expense" element={<AddExpense />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
