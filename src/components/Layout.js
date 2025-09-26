import { useState } from 'react';
import Header from './Header';


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
