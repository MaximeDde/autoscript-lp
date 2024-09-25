import React from 'react';
import './ProcessFlow.css';

const ProcessFlow = () => {
  return (
    <div className="process-flow">
      {/* Step 1 */}
      <div className="step">
        <div className="circle">1</div>
        <div className="line"></div>
        <p className="step-text">
          Enregistrez votre résumé, ou la consultation complète
        </p>
      </div>

      {/* Split Paths */}
      <div className="split">
        {/* Path A */}
        <div className="step">
          <div className="line"></div>
          <div className="circle">2A</div>
          <p className="step-text">
            Votre secrétaire valide le compte-rendu
          </p>
        </div>
        {/* Path B */}
        <div className="step">
          <div className="line"></div>
          <div className="circle">2B</div>
          <p className="step-text">
            Vous validez votre compte-rendu
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="step">
        <div className="line"></div>
        <div className="circle">3</div>
        <p className="step-text">
          Votre compte-rendu est prêt à être envoyé, exporté, ou imprimé
        </p>
      </div>
    </div>
  );
};

export default ProcessFlow;
