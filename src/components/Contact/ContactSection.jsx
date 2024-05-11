import React from 'react';

const ContactSection = () => {
  return (
    <div style={{ 
      backgroundColor: '#111043',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}>
      <h2 style={{ 
        fontSize: '24px',
        color: '#fff',
        fontweight: 700,
        }}>Contact Us</h2>
      <form style={{ 
        display: 'flex',
        flexDirection: 'column',
        }}>
        <input 
          type="text"
          placeholder="Name"
          style={{ 
            marginBottom: '10px',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <input 
          type="email"
          placeholder="Email"
          style={{ 
            marginBottom: '10px',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <textarea 
          placeholder="Message"
          style={{ 
            marginBottom: '10px',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            resize: 'none',
          }}
        ></textarea>
        <button 
          type="submit"
          style={{ 
            backgroundColor: 'rgb(59 129 245)',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactSection;