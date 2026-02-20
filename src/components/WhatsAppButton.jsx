import React from 'react';
import { Whatsapp } from 'react-bootstrap-icons';

const WhatsAppButton = () => {
  const phoneNumber = "5491159490184"; 
  const message = "Hola, necesito asesoramiento técnico.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={url} 
      className="whatsapp-float d-none d-md-flex" 
      target="_blank" 
      rel="noopener noreferrer"
      id="whatsapp-floating-button"
    >
      <Whatsapp size={24} />
      <span>👉 Asesoramiento técnico inmediato</span>
    </a>
  );
};

export default WhatsAppButton;
