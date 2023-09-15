'use client'
import { createPortal } from 'react-dom';
import React, { useState, useEffect } from 'react';

export default function Page({ section, appearance, branding, handleContactToggle, contactOpen }) {
    console.log('Page')
    const [contactForm, setContactForm] = useState(null);
    useEffect(() => {
        console.log('useEffect')
        var contactForm = document.querySelector ('#technologic-contact'); 
        console.log('contactForm' ,contactForm)
        if (contactForm){
            console.log('if (contactForm){')
            setContactForm(contactForm)
        }
      }, []);

      return(<p>test</p>)
      {contactForm !== null && createPortal(
        <p>Hello from React!</p>,
        contactForm
      )}



}