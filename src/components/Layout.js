import { useState } from 'react';
import Header from './Header';
import '../styles/globals.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="main-content-area">
        {children}
      </main>
    </div>
  );
}