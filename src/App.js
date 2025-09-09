import React, { useEffect } from 'react';
import Header from './components/Header';
import CareerObjective from './components/CareerObjective';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Languages from './components/Languages';
import SoftSkills from './components/SoftSkills';
import Activities from './components/Activities';
import './App.css';

function App() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="app">
      <div className="page-bg" />
      <div className="container">
        <Header />
        <section className="reveal"><CareerObjective/></section>
        <section className="reveal"><Skills /></section>
        <section className="reveal"><Projects /></section>
        <section className="reveal"><Education /></section>
        <section className="reveal"><Activities /></section>
        <section className="reveal"><SoftSkills /></section>
        <section className="reveal"><Languages /></section>
        <section className="reveal"><Contact /></section>
        <footer className="footer" lang="vi">© {new Date().getFullYear()} Nguyễn Tuấn Kiệt — Backend Developer</footer>
      </div>
    </main>
  );
}

export default App;
