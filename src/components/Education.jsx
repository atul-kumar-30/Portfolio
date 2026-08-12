import React from 'react';
import { GraduationCap, Laptop, Building2, MapPin, Calendar, School, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title reveal"><GraduationCap className="section-icon" /> <span className="accent">Education</span></h2>
        <div className="edu-card">
          <div className="edu-header" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', flex: 1, minWidth: '300px' }}>
              <div className="edu-icon"><GraduationCap size={32} /></div>
              <div className="edu-info">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.6rem' }}>Bachelor of Technology</h3>
                <span style={{ display: 'inline-block', width: 'fit-content', padding: '6px 14px', background: 'rgba(56, 189, 248, 0.1)', color: 'var(--primary)', border: '1px solid rgba(56, 189, 248, 0.2)', borderRadius: '20px', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.5px' }}>
                  <Laptop size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} /> Computer Science & Engineering
                </span>
              </div>
              <div className="edu-tags" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center' }}><Building2 size={16} style={{ marginRight: '6px' }} /> Graphic Era Hill University, Dehradun</span>
                  <span style={{ display: 'flex', alignItems: 'center' }}><MapPin size={16} style={{ marginRight: '6px' }} /> Dehradun, India</span>
                </div>
                <div style={{ display: 'flex' }}>
                  <span style={{ display: 'flex', alignItems: 'center' }}><Calendar size={16} style={{ marginRight: '6px' }} /> 2022 – 2026 (Completed)</span>
                </div>
              </div>
              </div>
            </div>
            <div className="edu-image" style={{ width: '100%', maxWidth: '320px', height: '200px', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--glass-border)', flexShrink: 0, alignSelf: 'flex-start' }}>
              <img src="/GEHU_Dehradun_Campus.jpg" alt="Graphic Era Hill University" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid var(--glass-border)', margin: '3rem 0' }} />
          
          <div className="edu-header" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', flex: 1, minWidth: '300px' }}>
              <div className="edu-icon"><School size={32} /></div>
              <div className="edu-info">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.6rem' }}>Schooling (Class XII)</h3>
                <span style={{ display: 'inline-block', width: 'fit-content', padding: '6px 14px', background: 'rgba(56, 189, 248, 0.1)', color: 'var(--primary)', border: '1px solid rgba(56, 189, 248, 0.2)', borderRadius: '20px', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.5px' }}>
                  <BookOpen size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} /> Physics, Chemistry, Mathematics (PCM)
                </span>
              </div>
              <div className="edu-tags" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center' }}><Building2 size={16} style={{ marginRight: '6px' }} /> Army Public School No. 2, Roorkee</span>
                  <span style={{ display: 'flex', alignItems: 'center' }}><MapPin size={16} style={{ marginRight: '6px' }} /> Roorkee, India</span>
                </div>
                <div style={{ display: 'flex' }}>
                  <span style={{ display: 'flex', alignItems: 'center' }}><Calendar size={16} style={{ marginRight: '6px' }} /> 2022 (Completed)</span>
                </div>
              </div>
              </div>
            </div>
            <div className="edu-image" style={{ width: '100%', maxWidth: '320px', height: '200px', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--glass-border)', flexShrink: 0, alignSelf: 'flex-start' }}>
              <img src="/School.jpeg" alt="Army Public School No. 2 Roorkee" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
