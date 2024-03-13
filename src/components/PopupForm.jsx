import React, { useState } from "react";
import jsPDF from "jspdf";

const PopupForm = ({ isVisible, onClose }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Certificat de Participation", 105, 20, null, null, "center");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(16);
    doc.text("Ce document certifie que", 105, 40, null, null, "center");
    doc.setFontSize(20);
    doc.text(`${surname} ${name}`, 105, 60, null, null, "center");
    doc.text("a participé à la journée porte ouverte de l'université.", 105, 80, null, null, "center");
    doc.text("Félicitations !", 105, 100, null, null, "center");
    doc.save("CertificatParticipation.pdf");
  };

  if (!isVisible) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Félicitations !</h2>
        <h3>Vous avez trouvé tous les mickeys, vous êtes un petit filou !</h3>
        <p>Veuillez entrer votre nom et prénom pour réclamer votre cadeau :</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nom"
            required
          />
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Prénom"
            required
          />
          <button type="submit">Soumettre</button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
