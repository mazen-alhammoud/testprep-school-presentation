import React, { useState, useEffect } from 'react';
import './App.css';
import { ReactComponent as LogoOnWhite } from './assets/logo_on_white.svg';
import { ReactComponent as DesignElement } from './assets/design_element.svg';
import studentImg1b from './assets/students/IMG_0438.JPG';
import studentImg2 from './assets/students/IMG_0440.JPG';
import studentImg3 from './assets/students/IMG_0451.JPG';
import studentImg4 from './assets/students/IMG_4976.jpg';
import studentImg5 from './assets/students/IMG_5004.jpg';
import studentImg6 from './assets/students/IMG_6521.jpg';
import studentImg7 from './assets/students/screenshot_student_1.png';
import studentImg8 from './assets/students/screenshot_student_2.png';

const STUDENTS = [
  { name: 'Isabelle Illya', school: 'American International School in Riyadh', score: 1570 },
  { name: 'Aneese Jaffa', school: 'American Community School', score: 1570 },
  { name: 'Zein Tannir', school: 'International College Ras Beirut', score: 1570 },
  { name: 'Karim Nasralah', school: 'International College Ras Beirut', score: 1540 },
  { name: 'Majd Jaffal', school: 'Beirut Annunciation Orthodox College', score: 1530 },
  { name: 'Karim El Rayess', school: 'Education & Teaching Secondary School', score: 1530 },
  { name: 'Rami Zein', school: 'College Protestant Francais', score: 1520 },
  { name: 'Ali Madi', school: 'Beachside High School', score: 1520 },
  { name: 'Antoine Tabet', school: 'College Louis Wegmann', score: 1510 },
  { name: 'Feras Amhaz', school: 'College Protestant Francais', score: 1500 },
  { name: 'Khalil Youssef', school: 'College Louis Wegmann', score: 1500 },
  { name: 'Ali Hallal', school: 'Al Mustafa High School', score: 1500 },
  { name: 'Adam Moussa', school: 'International College Ras Beirut', score: 1540 },
  { name: 'Sarmad Othman', school: 'International College Ras Beirut', score: 1530 },
  { name: 'Mariam Slim', school: 'Al Batoul High School', score: 1540 },
  { name: 'Lynn Chehab', school: 'College Protestant Francais', score: 1510 },
];

const SLIDESHOW_IMAGES = [
  { src: studentImg1b, alt: 'TestPrep student' },
  { src: studentImg2, alt: 'TestPrep student' },
  { src: studentImg3, alt: 'TestPrep student' },
  { src: studentImg4, alt: 'TestPrep student' },
  { src: studentImg5, alt: 'TestPrep student' },
  { src: studentImg6, alt: 'TestPrep student' },
  { src: studentImg7, alt: 'TestPrep student' },
  { src: studentImg8, alt: 'TestPrep student' },
];

const TitleSlide = () => {
  const [visible, setVisible] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slide slide-title">
      {/* Background effects */}
      <div className="title-gradient-orb title-orb--1" />
      <div className="title-gradient-orb title-orb--2" />
      <div className="title-grid-overlay" />

      <div className={`title-split ${visible ? 'visible' : ''}`}>
        {/* Left column — text */}
        <div className="title-left">
          <div className="title-badge">
            <span className="title-badge__dot" />
            SAT Excellence Program
          </div>

          <h1 className="title-heading">
            <span className="title-heading__line title-heading__line--1">SAT Presentation</span>
            <span className="title-heading__with">with</span>
            <span className="title-heading__logo">
              <LogoOnWhite />
            </span>
          </h1>

          <div className="title-divider">
            <span className="title-divider__line" />
            <span className="title-divider__diamond" />
            <span className="title-divider__line" />
          </div>

          <p className="title-subtitle">
            Building Your Roadmap to Your Dream University &amp; Major
          </p>
        </div>

        {/* Right column — image slideshow */}
        <div className="title-right">
          <div className="title-slideshow">
            {/* Decorative circle behind */}
            <div className="title-slideshow__circle">
              <DesignElement />
            </div>

            {/* Image stack */}
            <div className="title-slideshow__images">
              {SLIDESHOW_IMAGES.map((img, i) => (
                <div
                  key={i}
                  className={`title-slideshow__slide ${i === activeImg ? 'active' : ''} ${
                    i === (activeImg - 1 + SLIDESHOW_IMAGES.length) % SLIDESHOW_IMAGES.length ? 'prev' : ''
                  }`}
                >
                  <img src={img.src} alt={img.alt} />
                </div>
              ))}
            </div>

            {/* Dots indicator */}
            <div className="title-slideshow__dots">
              {SLIDESHOW_IMAGES.map((_, i) => (
                <span
                  key={i}
                  className={`title-slideshow__dot ${i === activeImg ? 'active' : ''}`}
                />
              ))}
            </div>

            {/* Floating metric cards */}
            <div className="title-float-card title-float-card--1">
              <span className="title-float-card__number">20,000+</span>
              <span className="title-float-card__label">Students</span>
            </div>
            <div className="title-float-card title-float-card--2">
              <span className="title-float-card__number">6,000+</span>
              <span className="title-float-card__label">Courses</span>
            </div>
            <div className="title-float-card title-float-card--3">
              <span className="title-float-card__number">12+</span>
              <span className="title-float-card__label">Years of Experience</span>
            </div>
          </div>
        </div>
      </div>

      <div className="title-shine" />
    </div>
  );
};

const ScorersSlide = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="slide slide-scorers">
      {/* Background effects */}
      <div className="scorers-gradient-orb scorers-orb--1" />
      <div className="scorers-gradient-orb scorers-orb--2" />
      <div className="title-grid-overlay" />

      <div className={`scorers-content ${visible ? 'visible' : ''}`}>
        {/* Header */}
        <div className="scorers-header">
          <div className="scorers-header__badge">
            <span className="title-badge__dot" />
            Our Top Achievers
          </div>
          <h2 className="scorers-header__title">SAT Scorers</h2>
          <p className="scorers-header__sub">Real students. Real scores. Real results.</p>
        </div>

        {/* Cards grid */}
        <div className="scorers-grid">
          {STUDENTS.map((student, i) => (
            <div
              key={i}
              className="scorer-card"
              style={{ '--delay': `${0.05 * i}s` }}
            >
              <div className="scorer-card__avatar">
                <span>{student.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div className="scorer-card__info">
                <span className="scorer-card__name">{student.name}</span>
                <span className="scorer-card__school">{student.school}</span>
              </div>
              <div className="scorer-card__score">
                {student.score} <span className="scorer-card__smiley"></span>
              </div>
              {/* Glow on hover */}
              <div className="scorer-card__glow" />
            </div>
          ))}
        </div>
      </div>

      <div className="title-shine" />
    </div>
  );
};

const ProblemSlide = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="slide slide-problem">
      <div className="title-gradient-orb problem-orb--1" />
      <div className="title-gradient-orb problem-orb--2" />
      <div className="title-grid-overlay" />

      <div className={`problem-content ${visible ? 'visible' : ''}`}>
        <div className="problem-left">
          <h2 className="problem-headline">
            The SAT isn't the problem.
            <span className="problem-headline__accent"> Preparation is.</span>
          </h2>

          <div className="problem-stat">
            <span className="problem-stat__number">73%</span>
            <span className="problem-stat__text">
              of students underperform relative to their potential.
            </span>
          </div>

          <p className="problem-body">
            Despite high effort, outcomes remain inconsistent due to:
          </p>
        </div>

        <div className="problem-right">
          <div className="problem-triangle">
            {/* SVG connecting lines */}
            <svg className="problem-triangle__lines" viewBox="0 0 400 380" fill="none">
              <path d="M200 30 L60 340" stroke="rgba(220,50,50,0.15)" strokeWidth="2" strokeDasharray="6 4" />
              <path d="M200 30 L340 340" stroke="rgba(220,50,50,0.15)" strokeWidth="2" strokeDasharray="6 4" />
              <path d="M60 340 L340 340" stroke="rgba(220,50,50,0.15)" strokeWidth="2" strokeDasharray="6 4" />
            </svg>

            {/* Top node */}
            <div className="problem-node problem-node--top">
              <div className="problem-node__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 22h20L12 2z" stroke="#DC3232" strokeWidth="2" fill="none"/>
                  <path d="M12 10v4M12 17h.01" stroke="#DC3232" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="problem-node__label">Lack of strategic<br/>approach</span>
            </div>

            {/* Bottom-left node */}
            <div className="problem-node problem-node--bl">
              <div className="problem-node__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="3" stroke="#DC3232" strokeWidth="2" fill="none"/>
                  <path d="M8 12h8M12 8v8" stroke="#DC3232" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="problem-node__label">Absence of structured<br/>planning</span>
            </div>

            {/* Bottom-right node */}
            <div className="problem-node problem-node--br">
              <div className="problem-node__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#DC3232" strokeWidth="2" fill="none"/>
                  <path d="M12 7v5l3 3" stroke="#DC3232" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="problem-node__label">No performance<br/>measurement system</span>
            </div>

            {/* Center label */}
            <div className="problem-triangle__center">
              <span className="problem-triangle__center-icon">!</span>
              <span className="problem-triangle__center-label">Inconsistent<br/>Results</span>
            </div>
          </div>
        </div>
      </div>

      <div className="title-shine" />
    </div>
  );
};

const ComparisonSlide = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const studentA = {
    score: 1050,
    label: 'Average Score',
    color: '#DC3232',
    admissions: 'Limited to local or less competitive universities',
    scholarships: 'Minimal financial aid opportunities',
    global: 'Few international options available',
  };

  const studentB = {
    score: 1450,
    label: 'High Score',
    color: '#1740A9',
    admissions: 'Access to top-tier universities worldwide',
    scholarships: 'Eligible for merit-based scholarships & grants',
    global: 'Doors open to prestigious global programs',
  };

  return (
    <div className="slide slide-comparison">
      <div className="title-gradient-orb comparison-orb--1" />
      <div className="title-gradient-orb comparison-orb--2" />
      <div className="title-grid-overlay" />

      <div className={`comparison-content ${visible ? 'visible' : ''}`}>
        {/* Header */}
        <div className="comparison-header">
          <div className="comparison-header__badge">
            <span className="title-badge__dot" />
            Why Your Score Matters
          </div>
          <h2 className="comparison-header__title">
            Your Scores Determine More Than You Think
          </h2>
        </div>

        {/* Student identity row */}
        <div className="comparison-student-row">
          <div className="comparison-student-identity">
            <div className="comparison-student-avatar">
              <span>SA</span>
            </div>
            <div className="comparison-student-info">
              <span className="comparison-student-name">Same Student</span>
              <span className="comparison-student-desc">Same GPA. Same extracurriculars. Same essays.</span>
            </div>
          </div>
          <div className="comparison-arrow-connector">
            <span className="comparison-arrow-text">Different Score</span>
            <div className="comparison-arrow-line" />
          </div>
          <span className="comparison-arrow-result">Completely Different Future</span>
        </div>

        {/* Comparison columns */}
        <div className="comparison-columns">
          {[studentA, studentB].map((s, idx) => (
            <div key={idx} className={`comparison-col comparison-col--${idx === 0 ? 'low' : 'high'}`}>
              {/* Score badge */}
              <div className="comparison-score-badge" style={{ '--col-color': s.color }}>
                <span className="comparison-score-badge__number">{s.score}</span>
                <span className="comparison-score-badge__label">{s.label}</span>
              </div>

              {/* Impact rows */}
              <div className="comparison-impacts">
                <div className="comparison-impact-row">
                  <div className="comparison-impact-icon" style={{ '--col-color': s.color }}>
                    <span>1</span>
                  </div>
                  <div className="comparison-impact-info">
                    <span className="comparison-impact-title">Admissions</span>
                    <span className="comparison-impact-desc">{s.admissions}</span>
                  </div>
                </div>
                <div className="comparison-impact-row">
                  <div className="comparison-impact-icon" style={{ '--col-color': s.color }}>
                    <span>2</span>
                  </div>
                  <div className="comparison-impact-info">
                    <span className="comparison-impact-title">Scholarships</span>
                    <span className="comparison-impact-desc">{s.scholarships}</span>
                  </div>
                </div>
                <div className="comparison-impact-row">
                  <div className="comparison-impact-icon" style={{ '--col-color': s.color }}>
                    <span>3</span>
                  </div>
                  <div className="comparison-impact-info">
                    <span className="comparison-impact-title">Global Opportunities</span>
                    <span className="comparison-impact-desc">{s.global}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Center divider */}
          <div className="comparison-center-vs">
            <span>VS</span>
          </div>
        </div>
      </div>

      <div className="title-shine" />
    </div>
  );
};

const WhatIsSATSlide = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const months = ['MAR', 'MAY', 'JUN', 'AUG', 'OCT', 'NOV', 'DEC'];

  return (
    <div className="slide slide-whatsat">
      <div className="title-gradient-orb whatsat-orb--1" />
      <div className="title-gradient-orb whatsat-orb--2" />
      <div className="title-grid-overlay" />

      <div className={`whatsat-content ${visible ? 'visible' : ''}`}>
        {/* Header */}
        <div className="whatsat-header">
          <div className="whatsat-header__badge">
            <span className="title-badge__dot" />
            Understanding the Exam
          </div>
          <h2 className="whatsat-header__title">What is the SAT?</h2>
          <p className="whatsat-header__sub">
            The SAT is a globally recognized standardized exam used by universities to evaluate academic readiness and compare students across systems.
          </p>
        </div>

        {/* Main grid */}
        <div className="whatsat-grid">
          {/* Tested Areas */}
          <div className="whatsat-card whatsat-card--areas">
            <div className="whatsat-card__header">
              <div className="whatsat-card__icon whatsat-card__icon--blue">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" stroke="#1740A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="whatsat-card__title">Tested Areas</span>
            </div>
            <div className="whatsat-areas-tags">
              <span className="whatsat-tag whatsat-tag--blue">Math</span>
              <span className="whatsat-tag whatsat-tag--blue">Evidence-Based Reading &amp; Writing</span>
              <span className="whatsat-tag whatsat-tag--blue">Critical Analysis &amp; Reasoning</span>
            </div>
          </div>

          {/* Section & Structure */}
          <div className="whatsat-card whatsat-card--structure">
            <div className="whatsat-card__header">
              <div className="whatsat-card__icon whatsat-card__icon--orange">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" stroke="#FF963E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="whatsat-card__title">Section &amp; Structure</span>
            </div>
            <div className="whatsat-sections">
              <div className="whatsat-section-row">
                <span className="whatsat-section-label">English</span>
                <div className="whatsat-section-detail">
                  <span className="whatsat-section-modules">2 modules</span>
                  <span className="whatsat-section-meta">32 min each &middot; 27 questions</span>
                </div>
              </div>
              <div className="whatsat-section-divider" />
              <div className="whatsat-section-row">
                <span className="whatsat-section-label">Math</span>
                <div className="whatsat-section-detail">
                  <span className="whatsat-section-modules">2 sections</span>
                  <span className="whatsat-section-meta">35 min each &middot; 22 questions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Score Distribution */}
          <div className="whatsat-card whatsat-card--score">
            <div className="whatsat-card__header">
              <div className="whatsat-card__icon whatsat-card__icon--blue">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" stroke="#1740A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="whatsat-card__title">Score Distribution</span>
            </div>
            <div className="whatsat-score-range">
              <span className="whatsat-score-min">400</span>
              <div className="whatsat-score-bar">
                <div className="whatsat-score-bar__fill" />
              </div>
              <span className="whatsat-score-max">1600</span>
            </div>
          </div>

          {/* Test Time */}
          <div className="whatsat-card whatsat-card--time">
            <div className="whatsat-card__header">
              <div className="whatsat-card__icon whatsat-card__icon--orange">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="#FF963E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="whatsat-card__title">Test Time</span>
            </div>
            <div className="whatsat-time-display">
              <span className="whatsat-time-number">2</span>
              <span className="whatsat-time-unit">hrs</span>
              <span className="whatsat-time-number">15</span>
              <span className="whatsat-time-unit">min</span>
            </div>
          </div>

          {/* Official Dates — full width */}
          <div className="whatsat-card whatsat-card--dates">
            <div className="whatsat-card__header">
              <div className="whatsat-card__icon whatsat-card__icon--blue">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" stroke="#1740A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="whatsat-card__title">Official Test Dates</span>
            </div>
            <div className="whatsat-dates-row">
              {months.map((m, i) => (
                <div key={i} className="whatsat-date-chip">
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="title-shine" />
    </div>
  );
};

const WHO_METRICS = [
  { number: '20,000+', label: 'Students Trained' },
  { number: '6,000+', label: 'Programs Delivered' },
  { number: '40+', label: 'Expert Instructors' },
  { number: '5+', label: 'Countries Served' },
];

const WhoWeAreSlide = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="slide slide-who">
      <div className="title-gradient-orb who-orb--1" />
      <div className="title-gradient-orb who-orb--2" />
      <div className="title-grid-overlay" />

      <div className={`who-content ${visible ? 'visible' : ''}`}>
        {/* Left — text */}
        <div className="who-left">
          <div className="who-badge">
            <span className="title-badge__dot" />
            About Us
          </div>

          <h2 className="who-headline">Who We Are</h2>

          <p className="who-tagline">
            A Leading Standardized Test Preparation Ecosystem
          </p>

          <div className="who-divider">
            <span className="title-divider__line" />
            <span className="title-divider__diamond" />
            <span className="title-divider__line" />
          </div>

          <p className="who-subhead">
            Delivering measurable academic performance at scale.
          </p>

          <p className="who-body">
            TestPrep is a performance-driven academic platform specializing in standardized test preparation. Through a structured system combining diagnostics, expert instruction, customization, and performance analytics, we deliver measurable outcomes across diverse academic profiles.
          </p>
        </div>

        {/* Right — metrics grid */}
        <div className="who-right">
          <div className="who-metrics">
            {WHO_METRICS.map((m, i) => (
              <div
                key={i}
                className="who-metric-card"
                style={{ '--delay': `${0.4 + i * 0.12}s` }}
              >
                <span className="who-metric-card__number">{m.number}</span>
                <span className="who-metric-card__label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="title-shine" />
    </div>
  );
};

const FAMILY_IMAGES = [
  studentImg1b, studentImg2, studentImg3, studentImg4,
  studentImg5, studentImg6, studentImg7, studentImg8,
];

const FamilySlide = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="slide slide-family">
      <div className="title-gradient-orb family-orb--1" />
      <div className="title-gradient-orb family-orb--2" />
      <div className="title-grid-overlay" />

      <div className={`family-content ${visible ? 'visible' : ''}`}>
        <div className="family-header">
          <div className="family-header__badge">
            <span className="title-badge__dot" />
            Our Community
          </div>
          <h2 className="family-header__title">
            But Before Everything,<br />
            <span className="family-header__accent">We Are a Family.</span>
          </h2>
        </div>

        <div className="family-grid">
          {FAMILY_IMAGES.map((src, i) => (
            <div
              key={i}
              className="family-grid__item"
              style={{ '--delay': `${0.15 + i * 0.08}s` }}
            >
              <img src={src} alt={`TestPrep family ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="title-shine" />
    </div>
  );
};

const PERF_STEPS = [
  { num: '01', title: 'Diagnostic Assessment', desc: 'Baseline evaluation to identify strengths, weaknesses, and scoring gaps.' },
  { num: '02', title: 'Academic Profiling', desc: 'Build a comprehensive learner profile based on diagnostic data.' },
  { num: '03', title: 'Customized Planning', desc: 'Tailored study plan aligned with individual goals and timelines.' },
  { num: '04', title: 'Strategic Preparation', desc: 'Targeted content delivery with proven test-taking strategies.' },
  { num: '05', title: 'Performance Execution', desc: 'Simulated exams and real-time performance tracking under test conditions.' },
  { num: '06', title: 'Continuous Optimization', desc: 'Ongoing analysis and plan adjustments to maximize score trajectory.' },
];

const PerformanceSlide = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="slide slide-perf">
      <div className="title-gradient-orb perf-orb--1" />
      <div className="title-gradient-orb perf-orb--2" />
      <div className="title-grid-overlay" />

      <div className={`perf-content ${visible ? 'visible' : ''}`}>
        {/* Left — text */}
        <div className="perf-left">
          <div className="perf-header__badge">
            <span className="title-badge__dot" />
            Our Methodology
          </div>

          <h2 className="perf-header__title">We Engineer Performance</h2>

          <p className="perf-header__sub">
            Our approach is customized, data-driven, and continuously optimized.
          </p>

          <div className="perf-divider">
            <span className="title-divider__line" />
            <span className="title-divider__diamond" />
            <span className="title-divider__line" />
          </div>

          {/* Post-course follow-up callout */}
          <div className="perf-followup">
            <div className="perf-followup__icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.992 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" stroke="#1740A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="perf-followup__text">
              <span className="perf-followup__title">Post-Course Follow-Up</span>
              <span className="perf-followup__desc">
                Continued support, score review sessions, and guidance even after the program ends.
              </span>
            </div>
          </div>
        </div>

        {/* Right — cycle graphic */}
        <div className="perf-right">
          <div className="perf-cycle">
            {/* Rotating cycle ring */}
            <svg className="perf-cycle__arrows" viewBox="0 0 700 700" fill="none">
              <path d="M350 60 A290 290 0 0 1 601 205" stroke="rgba(23,64,169,0.12)" strokeWidth="2" strokeDasharray="6 4" />
              <path d="M601 205 A290 290 0 0 1 601 495" stroke="rgba(23,64,169,0.12)" strokeWidth="2" strokeDasharray="6 4" />
              <path d="M601 495 A290 290 0 0 1 350 640" stroke="rgba(23,64,169,0.12)" strokeWidth="2" strokeDasharray="6 4" />
              <path d="M350 640 A290 290 0 0 1 99 495" stroke="rgba(23,64,169,0.12)" strokeWidth="2" strokeDasharray="6 4" />
              <path d="M99 495 A290 290 0 0 1 99 205" stroke="rgba(23,64,169,0.12)" strokeWidth="2" strokeDasharray="6 4" />
              <path d="M99 205 A290 290 0 0 1 350 60" stroke="rgba(23,64,169,0.12)" strokeWidth="2" strokeDasharray="6 4" />
              <circle cx="350" cy="350" r="288" stroke="rgba(77,160,255,0.08)" strokeWidth="1.5" fill="none" strokeDasharray="4 8" className="perf-cycle__ring" />
            </svg>

            {/* 6 nodes positioned in a circle */}
            {PERF_STEPS.map((step, i) => {
              const angle = -90 + i * 60;
              const rad = (angle * Math.PI) / 180;
              const radius = 42;
              const x = 50 + radius * Math.cos(rad);
              const y = 50 + radius * Math.sin(rad);
              return (
                <div
                  key={i}
                  className={`perf-node ${i === 5 ? 'perf-node--final' : ''}`}
                  style={{
                    '--x': `${x}%`,
                    '--y': `${y}%`,
                    '--delay': `${0.3 + i * 0.1}s`,
                  }}
                >
                  <div className={`perf-node__num ${i === 5 ? 'perf-node__num--final' : ''}`}>
                    <span>{step.num}</span>
                  </div>
                  <span className="perf-node__title">{step.title}</span>
                </div>
              );
            })}

            {/* Center icon */}
            <div className="perf-center" style={{ '--delay': '0.95s' }}>
              <div className="perf-center__pulse" />
              <div className="perf-center__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.992 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="title-shine" />
    </div>
  );
};

const JOURNEY_STEPS = [
  { num: '01', title: 'Understand Your Starting Point', desc: 'The diagnostic reveals your real level', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016Z' },
  { num: '02', title: 'Build Your Strategy', desc: 'Personalized plan based on your gaps', icon: 'M12 6V4m0 2a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m-6 8a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4' },
  { num: '03', title: 'Train With Structure', desc: 'Guided sessions + targeted practice', icon: 'M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342' },
  { num: '04', title: 'Perform With Confidence', desc: 'Exam-ready with strategy and timing', icon: 'M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z' },
];

const JourneySlide = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="slide slide-journey">
      <div className="title-gradient-orb journey-orb--1" />
      <div className="title-gradient-orb journey-orb--2" />
      <div className="title-grid-overlay" />

      <div className={`journey-content ${visible ? 'visible' : ''}`}>
        <div className="journey-header">
          <div className="journey-header__badge">
            <span className="title-badge__dot" />
            The Process
          </div>
          <h2 className="journey-header__title">Your Journey With TestPrep</h2>
        </div>

        <div className="journey-timeline">
          <div className="journey-timeline__line">
            <div className="journey-timeline__line-fill" />
          </div>

          {JOURNEY_STEPS.map((step, i) => (
            <div
              key={i}
              className={`journey-step ${i === JOURNEY_STEPS.length - 1 ? 'journey-step--final' : ''}`}
              style={{ '--delay': `${0.3 + i * 0.15}s` }}
            >
              <div className="journey-step__marker">
                <div className={`journey-step__dot ${i === JOURNEY_STEPS.length - 1 ? 'journey-step__dot--final' : ''}`}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d={step.icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="journey-step__num">{step.num}</span>
              </div>
              <div className="journey-step__content">
                <h3 className="journey-step__title">{step.title}</h3>
                <p className="journey-step__desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="title-shine" />
    </div>
  );
};

const CTASlide = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="slide slide-cta">
      <div className="title-gradient-orb cta-orb--1" />
      <div className="title-gradient-orb cta-orb--2" />
      <div className="title-grid-overlay" />

      <div className={`cta-content ${visible ? 'visible' : ''}`}>
        <div className="cta-left">
          <div className="cta-badge">
            <span className="title-badge__dot" />
            Get Started
          </div>

          <h2 className="cta-headline">
            Ready to reach your<br />
            <span className="cta-headline__accent">full potential?</span>
          </h2>

          <p className="cta-subtitle">
            Scan the QR code to request more information and take the first step toward your dream score.
          </p>

          <div className="cta-divider">
            <span className="title-divider__line" />
            <span className="title-divider__diamond" />
            <span className="title-divider__line" />
          </div>

          <div className="cta-steps">
            <div className="cta-step">
              <span className="cta-step__num">1</span>
              <span className="cta-step__text">Scan the QR code</span>
            </div>
            <div className="cta-step">
              <span className="cta-step__num">2</span>
              <span className="cta-step__text">Fill in your details</span>
            </div>
            <div className="cta-step">
              <span className="cta-step__num">3</span>
              <span className="cta-step__text">We'll reach out with next steps</span>
            </div>
          </div>
        </div>

        <div className="cta-right">
          <div className="cta-qr-card">
            <div className="cta-qr-card__glow" />
            {/* QR code placeholder — replace src with your real QR code image */}
            <div className="cta-qr-card__code">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=https://testprep.com/info&color=1740A9"
                alt="Scan for more info"
              />
            </div>
            <span className="cta-qr-card__label">Scan to get started</span>
            <div className="cta-qr-card__logo">
              <LogoOnWhite />
            </div>
          </div>
        </div>
      </div>

      <div className="title-shine" />
    </div>
  );
};

const slides = [
  TitleSlide,
  ScorersSlide,
  ProblemSlide,
  ComparisonSlide,
  WhatIsSATSlide,
  WhoWeAreSlide,
  FamilySlide,
  PerformanceSlide,
  JourneySlide,
  CTASlide,
];

function App() {
  const [current, setCurrent] = useState(0);

  const goNext = () => setCurrent((prev) => Math.min(prev + 1, slides.length - 1));
  const goPrev = () => setCurrent((prev) => Math.max(prev - 1, 0));

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') goNext();
    if (e.key === 'ArrowLeft') goPrev();
  };

  return (
    <div className="presentation" tabIndex={0} onKeyDown={handleKeyDown}>
      <div
        className="slide-track"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((Slide, i) => (
          <Slide key={i} />
        ))}
      </div>

      <div className="nav-buttons">
        <button onClick={goPrev} disabled={current === 0}>←</button>
        <span>{current + 1} / {slides.length}</span>
        <button onClick={goNext} disabled={current === slides.length - 1}>→</button>
      </div>
    </div>
  );
}

export default App;
