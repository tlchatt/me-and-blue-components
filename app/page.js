'use client'
import { createPortal } from 'react-dom';
import React, { useState, useEffect } from 'react';

export default function Page({ section, appearance, branding, handleContactToggle, contactOpen }) {
    const [contactForm, setContactForm] = useState(null);
    useEffect(() => {
        var contactForm = document.querySelector ('#technologic-contact'); 
        if (contactForm){
            setContactForm(contactForm)
        }
      }, []);

      {contactForm !== null && createPortal(
        <p>Hello from React!</p>,
        contactForm
      )}



}