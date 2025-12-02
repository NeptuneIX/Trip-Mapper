import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { AppShell } from '@mantine/core';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';

import HomePage from './pages/HomePage';
import TripsPage from './pages/TripsPage';
import PinsPage from './pages/PinsPage';
import CategoriesPage from './pages/CategoriesPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <Router>
      <AppShell
        padding="md"
        header={{ height: 60 }}     
        navbar={{ width: 250 }}     
        footer={{ height: 30 }}     
      >
        
        <AppShell.Header>
          <Header />
        </AppShell.Header>

        <AppShell.Navbar>
          <Sidebar />
        </AppShell.Navbar>

        <AppShell.Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trips" element={<TripsPage />} />
            {/* ProtectedRoute is a higher order component that checks for user authentication */}
            <Route path="/pins" element={<ProtectedRoute><PinsPage /></ProtectedRoute>} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </AppShell.Main>

        <AppShell.Footer>
          <Footer />
        </AppShell.Footer>

      </AppShell>
    </Router>
  );
}

export default App;
