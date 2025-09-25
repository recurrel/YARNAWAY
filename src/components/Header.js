import { useState } from 'react';

export default function Header() {
  const [isSearchExpanded, setSearchExpanded] = useState(false);

  return (
    <header className="header">
      {/* Background Image */}
      <div className="background-image"></div>
      
      {/* Header Content */}
      <div className="header-content">
        {/* Left Side: Logo */}
        <div className="header-left">
          <a href="/" className="logo-link">
            <img src="/logo.png" alt="Yarnaway Logo" className="logo" />
          </a>
          
          {/* User Profile Section */}
          <div className="user-profile">
            <img src="/user-avatar.png" alt="User" className="user-avatar" />
            <span className="username">#user_name</span>
          </div>
        </div>

        {/* Right Side: Icons Bar */}
        <div className={`icons-bar ${isSearchExpanded ? 'expanded' : ''}`}>
          {/* Search Icon - Triggers Expansion */}
          <button 
            className="icon-button search-icon"
            onClick={() => setSearchExpanded(!isSearchExpanded)}
          >
            🔍
          </button>

          {/* Expanded Icons (shown when search is clicked) */}
          <div className="expanded-icons">
            <a href="/settings" className="icon-button">
              ⚙️
            </a>
            <a href="/notifications" className="icon-button">
              🔔
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}