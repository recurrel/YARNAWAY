import Layout from '../components/Layout';
import { useState } from 'react';

export default function MainPage() {
  const [activeContainer, setActiveContainer] = useState(null);

  // Stats data - similar to your inspiration
  const userStats = {
    completedProjects: 35,
    skeinsUsed: 115,
    gramsUsed: 5750,
    metersUsed: 13700
  };

  const activeProjects = [
    { name: "Stockholm Sweater", recipient: "Me", startDate: "10.01.2024" },
    { name: "Olive Cardigan", recipient: "Hedda", startDate: "18.12.2024" }
  ];

  const categories = [
    { name: "Project Inventory", path: "/project-inventory", color: "#E8F5E8", activeColor: "#4CAF50", icon: "📁" },
    { name: "Yarn & Tools Inventory", path: "/yarns-tools-inventory", color: "#E3F2FD", activeColor: "#2196F3", icon: "🧶" },
    { name: "Budget Control", path: "/budget-control", color: "#FFF3E0", activeColor: "#FF9800", icon: "💰" },
    { name: "Yarn Stash Buster", path: "/yarn-stash-buster", color: "#FCE4EC", activeColor: "#E91E63", icon: "✨" },
    { name: "Stitch Counter", path: "/stitch-counter", color: "#F3E5F5", activeColor: "#9C27B0", icon: "🔢" },
    { name: "Timer", path: "/timer", color: "#E0F2F1", activeColor: "#009688", icon: "⏱️" },
    { name: "Follow Along", path: "/follow-along", color: "#E8EAF6", activeColor: "#3F51B5", icon: "👣" },
    { name: "Color Combo", path: "/color-combo", color: "#FFF8E1", activeColor: "#FFC107", icon: "🎨" },
    { name: "Color Chart", path: "/color-chart", color: "#EFEBE9", activeColor: "#795548", icon: "📊" },
    { name: "Gauge Converter", path: "/gauge-converter", color: "#E0F7FA", activeColor: "#00BCD4", icon: "📏" },
    { name: "Charts & Utilities", path: "/charts-utilities", color: "#F1F8E9", activeColor: "#8BC34A", icon: "📑" },
    { name: "Storage Label Generator", path: "/storage-label-generator", color: "#FFEBEE", activeColor: "#F44336", icon: "🏷️" },
    { name: "Market Table", path: "/market-table", color: "#ECEFF1", activeColor: "#607D8B", icon: "🛒" },
    { name: "Yarn Trails", path: "/yarn-trails", color: "#FFFDE7", activeColor: "#CDDC39", icon: "🛤️" }
  ];

  const handleContainerClick = (path) => {
    window.location.href = path;
  };

  return (
    <Layout>
      <div className="main-content">
        {/* Header Section inspired by your design */}
        <div className="app-header">
          <div className="user-greeting">
            <div className="avatar-container">
              <img src="/user-avatar.png" alt="User" className="user-avatar" />
            </div>
            <div className="greeting-text">
              <h1>Good morning, Aurora</h1>
              <p> keep up the progress 🧶 Your stats this year:</p>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{userStats.completedProjects}</div>
              <div className="stat-label">completed projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{userStats.skeinsUsed}</div>
              <div className="stat-label">skeins used</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{userStats.gramsUsed}g</div>
              <div className="stat-label">grams used</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{userStats.metersUsed}m</div>
              <div className="stat-label">meters used</div>
            </div>
          </div>
        </div>

        {/* Active Projects Section */}
        <div className="active-projects-section">
          <div className="section-header">
            <h2>Active projects</h2>
            <a href="/projects" className="see-all-link">See all</a>
          </div>
          <div className="projects-grid">
            {activeProjects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.name}</h3>
                <p>To: {project.recipient}</p>
                <p>Started: {project.startDate}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="section-header">
          <h2>All Tools</h2>
        </div>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="category-card"
              style={{ 
                backgroundColor: activeContainer === index ? category.activeColor : category.color 
              }}
              onClick={() => handleContainerClick(category.path)}
              onTouchStart={() => setActiveContainer(index)}
              onTouchEnd={() => setActiveContainer(null)}
            >
              <div className="category-icon">{category.icon}</div>
              <div className="category-name">{category.name}</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
