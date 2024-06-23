import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./stepper.css";
import { TiTick } from 'react-icons/ti';

// steps progress bar
const Stepper = ({ currentStep, setCurrentStep, complete, setComplete }) => {
    // set up {12} steps (3 months)
    const steps = [];
    for (let i = 12; i > 0; i--) {
        steps.push(i);
    };
    const navigate = useNavigate();

    return (
        <div className="Stepper">
            <div className="steps-container">
                {/* map key to steps; show difference when active and complete */}
                {steps?.map((step, i) => (
                    <div className="step-item">
                        <div key={i} className={`step-circle ${i + 1 < currentStep || complete ? 'completed' : ''}`}>
                            <div className="step">
                                {i + 1 < currentStep || complete ? <TiTick className="custom-tick" size={24} /> : i + 1}</div>
                        </div>
                        <p className="step-markers">{step}</p>
                    </div>
                ))}
            </div>

            <div className="accomplish-btn">
                {/* state changes on button click; disable the button when complete */}
                {complete ? (<button className="btn" onClick={() => {navigate('/setting') }}>Set a new goal</button>) :
                    (<button className="btn" onClick={() => {currentStep === steps.length ? setComplete(true) :
                            setCurrentStep((prev) => prev + 1);
                    }}>Accomplish</button>)}</div>
        </div>
    );
};

export default Stepper;