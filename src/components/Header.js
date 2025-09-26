import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const [isSearchExpanded, setSearchExpanded] = useState(false);
  const router = useRouter();
  const isHomepage = router.pathname === '/';

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
          
          {/* User Profile Section - Hidden on Homepage */}
          {!isHomepage && (
            <div className="user-profile">
              <img src="/user-avatar.png" alt="User" className="user-avatar" />
              <span className="username">#user_name</span>
            </div>
          )}
        </div>

        {/* Right Side: Icons Bar */}
        <div className={`icons-bar ${isSearchExpanded ? 'expanded' : ''}`}>
          <button 
            className="icon-button search-icon"
            onClick={() => setSearchExpanded(!isSearchExpanded)}
          >
            🔍
          </button>

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
