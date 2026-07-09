import React, { useState } from 'react';

const Contact = () => {
  const [btnText, setBtnText] = useState('📨 Send Message');
  const [disabled, setDisabled] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [visitorType, setVisitorType] = useState('Recruiter');

  const showNotification = (msg, type = 'success') => {
    const id = Date.now();
    setNotifications(prev => [{ id, msg, type }, ...prev]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnText('⏳ Sending...');
    setDisabled(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, subject, message })
      });

      if (response.ok) {
        showNotification('✅ Message sent! I will get back to you soon.', 'success');
        form.reset();
      } else {
        showNotification('❌ Oops! There was a problem. Try again.', 'error');
      }
    } catch (error) {
      showNotification('❌ Something went wrong. Check your connection.', 'error');
    } finally {
      setBtnText('📨 Send Message');
      setDisabled(false);
    }
  };

  return (
    <section id="contact" className="section">
      {notifications.map(n => (
        <div key={n.id} className={`notification notification--${n.type}`}>
          <div className="notification-content">
            <span className="notification-message">{n.msg}</span>
            <button className="notification-close" onClick={() => setNotifications(prev => prev.filter(item => item.id !== n.id))}>✕</button>
          </div>
        </div>
      ))}
      <div className="container">
        <h2 className="section-title reveal">✉️ <span className="accent">Get In</span> Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect & Collaborate</h3>
            <p>I'm actively looking for opportunities in <strong>Software Engineering</strong> and <strong>AI/ML</strong>.
              Whether it's an internship, research collaboration, or a full-time role — let's connect!</p>
            <div className="contact-details">
              <div className="contact-item reveal">
                <div className="contact-icon">📧</div>
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">atulk864943@gmail.com</span>
                </div>
              </div>
              <div className="contact-item reveal">
                <div className="contact-icon">📍</div>
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Dehradun, Uttarakhand, India</span>
                </div>
              </div>
              <div className="contact-item reveal">
                <div className="contact-icon">🐙</div>
                <div>
                  <span className="contact-label">GitHub</span>
                  <a href="https://github.com/atul-kumar-30" target="_blank" rel="noreferrer"
                    className="contact-value">github.com/atul-kumar-30</a>
                </div>
              </div>
              <div className="contact-item reveal">
                <div className="contact-icon">💼</div>
                <div>
                  <span className="contact-label">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/atul-kumar-805477335/" target="_blank" rel="noreferrer"
                    className="contact-value">linkedin.com/in/atul-kumar</a>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form reveal" id="contact-form" action="https://formspree.io/f/mlgoprap" method="POST" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" placeholder="john@email.com" required />
              </div>
            </div>
            
            <div className="form-group">
              <label>I am a:</label>
              <div className="pills-container">
                {['Recruiter', 'Developer', 'Student', 'Other'].map(type => (
                  <button
                    key={type}
                    type="button"
                    className={`pill-btn ${visitorType === type ? 'active' : ''}`}
                    onClick={() => setVisitorType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <input type="hidden" name="Visitor Type" value={visitorType} />
              
              {visitorType === 'Other' && (
                <div style={{ marginTop: '1rem' }}>
                  <input type="text" name="Specific Visitor Type" placeholder="Please specify who you are..." required />
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Let's collaborate!" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..."
                required></textarea>
            </div>
            <button type="submit" className="btn btn--primary btn--full" disabled={disabled}>{btnText}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
