import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BubbleMenu from './components/BubbleMenu';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Tools from './pages/Tools';
import Blog from './pages/Blog';

const menuItems = [
  {
    label: 'home',
    href: '/',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#F46C38', textColor: '#ffffff' }
  },
  {
    label: 'projects',
    href: '/projects',
    ariaLabel: 'Projects',
    rotation: 8,
    hoverStyles: { bgColor: '#C5FF41', textColor: '#151312' }
  },
  {
    label: 'experience',
    href: '/experience',
    ariaLabel: 'Experience',
    rotation: -8,
    hoverStyles: { bgColor: '#F46C38', textColor: '#ffffff' }
  },
  {
    label: 'tools',
    href: '/tools',
    ariaLabel: 'Tools',
    rotation: 8,
    hoverStyles: { bgColor: '#C5FF41', textColor: '#151312' }
  },
  {
    label: 'blog',
    href: '/blog',
    ariaLabel: 'Blog',
    rotation: -8,
    hoverStyles: { bgColor: '#F46C38', textColor: '#ffffff' }
  }
];

export default function App() {
  return (
    <BrowserRouter>
      <BubbleMenu
        logo={<span style={{ fontWeight: 700, color: '#151312' }}>JP</span>}
        items={menuItems}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#151312"
        useFixedPosition={true}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}
