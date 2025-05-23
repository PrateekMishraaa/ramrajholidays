import React from 'react';
import styled from 'styled-components';

const Switch = () => {
  return (
    <StyledWrapper>
      <div className="toggle-switch">
        <input className="toggle-input" id="toggle" type="checkbox" />
        <label className="toggle-label" htmlFor="toggle" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* Genel stil */
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
    margin: 10px;
  }

  /* Giriş stil */
  .toggle-switch .toggle-input {
    display: none;
  }

  /* Anahtarın stilinin etrafındaki etiketin stil */
  .toggle-switch .toggle-label {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 24px;
    background-color: #2196F3;
    border-radius: 34px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  /* Anahtarın yuvarlak kısmının stil */
  .toggle-switch .toggle-label::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    background-color: #fff;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s;
  }

  /* Anahtarın etkin hale gelmesindeki stil değişiklikleri */
  .toggle-switch .toggle-input:checked + .toggle-label {
    background-color: #4CAF50;
  }

  .toggle-switch .toggle-input:checked + .toggle-label::before {
    transform: translateX(16px);
  }

  /* Light tema */
  .toggle-switch.light .toggle-label {
    background-color: #BEBEBE;
  }

  .toggle-switch.light .toggle-input:checked + .toggle-label {
    background-color: #9B9B9B;
  }

  .toggle-switch.light .toggle-input:checked + .toggle-label::before {
    transform: translateX(6px);
  }

  /* Dark tema */
  .toggle-switch.dark .toggle-label {
    background-color: #4B4B4B;
  }

  .toggle-switch.dark .toggle-input:checked + .toggle-label {
    background-color: #717171;
  }

  .toggle-switch.dark .toggle-input:checked + .toggle-label::before {
    transform: translateX(16px);
  }`;

export default Switch;
