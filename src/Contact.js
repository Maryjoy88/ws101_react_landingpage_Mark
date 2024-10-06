import React, { useState } from 'react';
import './Contact.css'; // Import CSS

const Contact = () => {
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send the message to an API)
        alert(`Message sent: ${message}`);
        setMessage(''); // Clear the message box after submission
    };

    return (
        <footer id="footer" className="footer-section">
            <div className="container">
                <p>&copy; 2024 MarkFreires All rights reserved.</p>
                <p>Email: <a href="mailto:freiresmark@gmail.com">freiresmark@gmail.com</a></p>
                <p>Follow me on <a href="https://web.facebook.com/profile.php?id=100086581766132" target="_blank" rel="noopener noreferrer">facebook</a> and <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">IG</a></p>
                
                {/* Message Box */}
                <div className="message-box">
                    <h2>Message Us</h2>
                    <form onSubmit={handleSubmit}>
                        <textarea 
                            placeholder="Your message here..." 
                            rows="4" 
                            value={message} 
                            onChange={handleInputChange}
                        ></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Contact;