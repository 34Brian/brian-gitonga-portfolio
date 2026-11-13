import { FaWhatsapp } from "react-icons/fa";
import "./whatsapp.css";

function WhatsAppButton() {
  const phoneNumber = "2547XXXXXXXX"; // Replace with your WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with me on WhatsApp"
    >
      <FaWhatsapp />
      <span className="whatsapp-tooltip">Let's chat on WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;