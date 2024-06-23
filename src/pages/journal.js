import { React } from 'react';
import './journal.css';
import Stepper from '../components/Stepper/Stepper';

const Journal = ({ userInfo, currentStep, setCurrentStep, complete, setComplete }) => {
    return (
        <div className="Journal">
            <div className="top">
                <div className="summary">
                    <div className="progress">
                        {userInfo.length > 0 ? (
                            userInfo.map((user, index) => (
                                <div key={index} className="user-info">
                                    <h2>Welcom back, {user.name}!</h2>
                                    <h1>Your current goal is to <span className="highlight-container"><span className="highlight"> {user.goal}</span></span></h1>
                                    <div className="info-paragraph">{5 - currentStep > 0 ? (<p>Only {5 - currentStep} more weeks you are going to treat yourself with <span className="highlight-container"><span className="highlight"> <b>{user.treat1}</b></span></span> because you started strong!</p>) : ('')}
                                        {9 - currentStep > 0 ? (<p>Only {9 - currentStep} more weeks to have <span className="highlight-container"><span className="highlight"><b>{user.treat2}</b></span></span> because you didn't give up!</p>) : ('')}
                                        {12 - currentStep > 0 ? (<p>Keep going till the last week and you should award yourself with <span className="highlight-container"><span className="highlight"><b>{user.finalAward}</b></span></span> because...</p>) : ('')}</div>
                                    {complete && <h1 className="congrats">and...congratulations!<br></br>You DID it!!! 🥹 🎉 ❤️</h1>}
                                </div>
                            ))
                        ) : (<p className="no-info">No user information available.</p>
                        )}
                    </div>
                </div>
                <div className="stepper-bar">
                    <div><h3>Weekly Marker</h3></div>
                    <div>
                        <Stepper currentStep={currentStep} setCurrentStep={setCurrentStep} complete={complete} setComplete={setComplete} /></div>
                </div>
            </div>
        </div>
    );
}

export default Journal;