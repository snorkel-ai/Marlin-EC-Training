import { useState, useEffect } from 'react';
import './GuidelineSection.css';
import './Sidebar.css';
import Content from './Content';

function GuidelineSection({ section, onNavigate }) {
  if (!section) return null;

  const isWorkflow = section.id === 'workflow';
  
  const workflowSections = [
    { id: 'workflow-overview', title: 'Environment Setup and Tasking Workflow' },
    { id: 'high-level', title: 'High-Level Tasking Workflow' },
    { id: 'initial-setup', title: 'Initial Setup (one-time)' },
    { id: 'completing-task', title: 'Completing a Task' },
    { id: 'videos', title: 'Task Walkthrough Videos' },
  ];

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (!isWorkflow) return;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (let i = workflowSections.length - 1; i >= 0; i--) {
        const element = document.getElementById(workflowSections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(workflowSections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isWorkflow]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="guideline-section-page">
      <header className="guideline-section-header">
        <button className="back-button" onClick={() => onNavigate('home')}>
          ← Back to Home
        </button>
        <div className="section-logo">{section.title}</div>
      </header>
      
      <main className="guideline-section-main" style={{ position: 'relative', backgroundColor: isWorkflow ? 'transparent' : '#ffffff', borderRadius: isWorkflow ? '0' : '12px', boxShadow: isWorkflow ? 'none' : '0 2px 8px rgba(0, 0, 0, 0.05)' }}>
        {isWorkflow && (
          <div style={{ position: 'relative', width: '100%' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
              <aside style={{
                position: 'absolute',
                right: 'calc((100% - 1200px) / 2 - 240px)',
                top: 0,
                width: '180px',
                paddingRight: '1rem',
                zIndex: 10,
                borderRight: '2px solid #e2e8f0'
              }}>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {workflowSections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    style={{
                      padding: '0.5rem 0.75rem',
                      textAlign: 'left',
                      border: 'none',
                      background: 'transparent',
                      color: activeSection === s.id ? '#1e40af' : '#64748b',
                      fontSize: '0.813rem',
                      fontWeight: activeSection === s.id ? 600 : 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      position: 'relative',
                      paddingLeft: '1rem'
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== s.id) {
                        e.target.style.color = '#1e293b';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeSection !== s.id) {
                        e.target.style.color = '#64748b';
                      }
                    }}
                  >
                    {activeSection === s.id && (
                      <span style={{
                        position: 'absolute',
                        right: '-1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '2px',
                        height: '100%',
                        backgroundColor: '#1e40af'
                      }}></span>
                    )}
                    {s.title}
                  </button>
                ))}
              </nav>
            </aside>
            </div>
          </div>
        )}
        <div style={isWorkflow ? { maxWidth: '1000px', margin: '0 auto' } : {}}>
          <Content section={section} />
        </div>
      </main>

      <footer className="guideline-section-footer">
        <p>&copy; 2025 Terminus EC Training. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default GuidelineSection;

