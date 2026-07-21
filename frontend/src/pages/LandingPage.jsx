import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard, Zap, Users, Shield, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="landing-container">
      {/* Dynamic 3D Background */}
      <div className="dynamic-3d-bg"></div>
      <div className="mesh-overlay"></div>

      <nav className="landing-nav">
        <div className="brand">
          <span className="brand-logo">AgileBoard</span>
          <span className="brand-tag">Premium</span>
        </div>
        <div>
          <button className="btn btn-secondary" onClick={() => navigate('/board')}>
            Go to Workspace
          </button>
        </div>
      </nav>

      <main className="landing-main">
        <motion.div 
          className="hero-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            ✨ Forge 2 Qualifier Edition
          </motion.div>
          <motion.h1 className="hero-title" variants={itemVariants}>
            Orchestrate Your Work with <br/>
            <span className="text-gradient">Intelligent Clarity</span>
          </motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants}>
            A premium, high-performance Kanban board designed to bring order to chaos. Built with a fluid glassmorphic UI and robust Laravel backend.
          </motion.p>
          <motion.div className="hero-cta" variants={itemVariants}>
            <button className="btn btn-primary btn-large" onClick={() => navigate('/board')}>
              Open Your Board <ArrowRight size={18} />
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon-wrapper"><LayoutDashboard className="text-primary" size={24} /></div>
            <h3>Fluid Swimlanes</h3>
            <p>Drag and drop tasks effortlessly across beautifully designed, responsive columns with zero lag.</p>
          </motion.div>

          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon-wrapper"><Users className="text-primary" size={24} /></div>
            <h3>Team Sync</h3>
            <p>Assign members, track responsibilities, and use color-coded avatars to see who's doing what instantly.</p>
          </motion.div>

          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon-wrapper"><Zap className="text-primary" size={24} /></div>
            <h3>AI Orchestrated</h3>
            <p>Built from the ground up utilizing specialized autonomous agents for planning and execution.</p>
          </motion.div>

          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon-wrapper"><Shield className="text-primary" size={24} /></div>
            <h3>Enterprise Ready</h3>
            <p>Backed by a robust REST API written in Laravel, ready to scale from SQLite to enterprise databases.</p>
          </motion.div>
        </motion.div>
      </main>

      <footer className="landing-footer">
        <p>Built for the Forge 2 Qualifier. Designed by Swastik.</p>
      </footer>
    </div>
  );
}
