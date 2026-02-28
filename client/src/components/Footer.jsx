import React from 'react'
import { Heart } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-left'>
          <div className='footer-logo'>
            <div className='logo-icon'>
              <Heart size={18} color='white' fill='white' />
            </div>
            <span className='logo-text'>HealthCare</span>
          </div>
        </div>
        <div className='footer-right'>
          <p>© 2025 HealthCare. Your trusted medical booking platform.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
