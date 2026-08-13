import React, { useState, useMemo } from 'react';
import { MODULES_DATA, CATEGORIES } from '../data/modulesData';
import { 
  Search, Filter, ArrowRight, Check, X, 
  LayoutDashboard, User, MessageSquare, Clock, Calendar, 
  CreditCard, MapPin, DollarSign, FolderCheck, Laptop, 
  ShoppingBag, Award, Key, Utensils, LogOut, Wrench, 
  FileSpreadsheet, ShieldAlert, Settings, Sliders, Lock, 
  UserPlus, SlidersHorizontal 
} from 'lucide-react';

const ICON_MAP = {
  LayoutDashboard, User, MessageSquare, Clock, Calendar,
  CreditCard, MapPin, DollarSign, FolderCheck, Laptop,
  ShoppingBag, Award, Key, Utensils, LogOut, Wrench,
  FileSpreadsheet, ShieldAlert, Settings, Sliders, Lock,
  UserPlus, SlidersHorizontal
};

export const ModulesExplorer = () => {
  const [activeCategory, setActiveCategory] = useState("All Modules");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedModule, setSelectedModule] = useState(null);

  const filteredModules = useMemo(() => {
    return MODULES_DATA.filter((mod) => {
      const matchesCategory = activeCategory === "All Modules" || mod.category === activeCategory;
      const matchesSearch = mod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            mod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            mod.subModules.some(sm => sm.name.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const renderIcon = (iconName) => {
    const Component = ICON_MAP[iconName] || LayoutDashboard;
    return <Component size={22} />;
  };

  return (
    <section id="modules" className="modules-explorer-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge">
            <span>23 CORE MODULES & 100+ SUB-MODULES</span>
          </div>
          <h2>Explore The Complete <span className="text-gradient">HRMS Ecosystem</span></h2>
          <p>
            From daily biometric attendance and mobile geofencing to WPS payroll processing, meal passes, and digital document archiving—everything is integrated.
          </p>
        </div>

        {/* Controls: Category Filter Tabs & Search Bar */}
        <div className="modules-controls glass-panel">
          {/* Tabs */}
          <div className="category-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search module or feature (e.g. Geofence, Payroll, Gate Pass)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="module-search-input"
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => setSearchQuery("")}>
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Modules Cards Grid */}
        <div className="modules-grid">
          {filteredModules.length > 0 ? (
            filteredModules.map((mod) => (
              <div 
                key={mod.id} 
                className="module-card glass-panel glass-panel-hover"
                onClick={() => setSelectedModule(mod)}
              >
                <div className="module-card-top">
                  <div className="module-icon-wrap">
                    {renderIcon(mod.icon)}
                  </div>
                  <span className="module-number">#{String(mod.id).padStart(2, '0')}</span>
                </div>

                <div className="module-card-category">{mod.category}</div>
                <h3 className="module-card-title">{mod.name}</h3>
                <p className="module-card-desc">{mod.shortDesc}</p>

                <div className="submodules-preview">
                  <span className="submodules-count">{mod.subModules.length} Sub-Modules</span>
                  <div className="submodules-tags">
                    {mod.subModules.slice(0, 2).map((sm, idx) => (
                      <span key={idx} className="sm-tag">{sm.name}</span>
                    ))}
                    {mod.subModules.length > 2 && (
                      <span className="sm-tag sm-more">+{mod.subModules.length - 2} more</span>
                    )}
                  </div>
                </div>

                <div className="module-card-footer">
                  <span className="view-details-link">
                    View Sub-Modules & Specs
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results glass-panel">
              <Search size={40} className="text-muted" />
              <h3>No modules matched your search</h3>
              <p>Try searching for terms like "Payroll", "Biometric", "Leave", or "WPS".</p>
              <button className="btn btn-secondary" onClick={() => { setSearchQuery(""); setActiveCategory("All Modules"); }}>
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Module Detail Modal */}
        {selectedModule && (
          <div className="modal-overlay" onClick={() => setSelectedModule(null)}>
            <div className="module-modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setSelectedModule(null)}>
                <X size={20} />
              </button>

              <div className="modal-header">
                <div className="module-icon-wrap large">
                  {renderIcon(selectedModule.icon)}
                </div>
                <div>
                  <div className="badge">{selectedModule.category} • Module #{selectedModule.id}</div>
                  <h2>{selectedModule.name}</h2>
                </div>
              </div>

              <p className="modal-description">{selectedModule.description}</p>

              {/* Sub-Modules List */}
              <div className="modal-section">
                <h3>Sub-Modules Overview</h3>
                <div className="submodules-detail-grid">
                  {selectedModule.subModules.map((sm, idx) => (
                    <div key={idx} className="submodule-detail-card">
                      <div className="sm-name">{sm.name}</div>
                      <div className="sm-desc">{sm.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features Bullets */}
              <div className="modal-section">
                <h3>Key Features & System Capabilities</h3>
                <ul className="modal-features-list">
                  {selectedModule.features.map((feat, idx) => (
                    <li key={idx}>
                      <Check size={16} className="text-success" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-actions">
                <button className="btn btn-primary w-full" onClick={() => setSelectedModule(null)}>
                  Close Module Overview
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
