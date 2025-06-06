import React from "react";
import PropTypes from "prop-types";
import "./App.css";

function ATMCard({ cardNumber, cvc, bankName, expiry, bankLogo, cardHolder, backDescriptionText }) {
  return (
    <div className="atm-card-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <div className="atm-card" style={{ width: '350px', height: '200px', borderRadius: '15px', padding: '15px', position: 'relative' }}>
        <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <img src={bankLogo} alt="Bank Logo" className="bank-logo" style={{ width: '60px', marginBottom: '5px' }} />
            <div className="chip" style={{ width: '40px', height: '30px', backgroundColor: 'gold', borderRadius: '5px' }}></div>
          </div>
          <span className="credit-text" style={{ fontSize: '14px', fontWeight: 'bold' }}>Credit Card</span>
        </div>
        <div className="card-number" style={{ textAlign: 'center', marginTop: '20px', fontSize: '18px' }}>{cardNumber}</div>
        <div className="cvc-container" style={{ textAlign: 'center', fontSize: '14px' }}>
          <span className="cvc">{cvc}</span>
        </div>
        <div className="expiry" style={{ textAlign: 'center', fontSize: '14px' }}>Expires End {expiry}</div>
        <div className="card-holder" style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10px' }}>{cardHolder}</div>
        <div className="card-back" style={{ textAlign: 'center', fontSize: '12px', marginTop: '10px' }}>
          <p>{backDescriptionText}</p>
        </div>
      </div>
    </div>
  );
}

// PropTypes validation
ATMCard.propTypes = {
  cardNumber: PropTypes.string.isRequired,
  cvc: PropTypes.string.isRequired,
  bankName: PropTypes.string.isRequired,
  expiry: PropTypes.string.isRequired,
  bankLogo: PropTypes.string.isRequired,
  cardHolder: PropTypes.string.isRequired,
  backDescriptionText: PropTypes.string.isRequired,
};

export default ATMCard;
