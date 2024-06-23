import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import $ from 'jquery'
import axios from 'axios'
import '@mui/material'
import "./usersettings.css";

const Usersettings = ({ userInfo, setUserInfo }) => {

  // store user info in an array
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [treat1, setTreat1] = useState('');
  const [treat2, setTreat2] = useState('');
  const [finalAward, setFinalAward] = useState('');
  const [editMode, setEditMode] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo.length > 0) {
      const { name, goal, treat1, treat2, finalAward } = userInfo[0];
      setName(name);
      setGoal(goal);
      setTreat1(treat1);
      setTreat2(treat2);
      setFinalAward(finalAward);
      setEditMode(false);
    } else {
      setName('');
      setGoal('');
      setTreat1('');
      setTreat2('');
      setFinalAward('');
      setEditMode(true);
    }
  }, [userInfo]);

  const saveInfo = (e) => {
    e.preventDefault();

    const newUser = { name, goal, treat1, treat2, finalAward };

    if (editMode && userInfo.length > 0) {
      // update user info if in edit mode
      const updatedInfo = userInfo.map((user) =>
        user.name === userInfo[0].name ? newUser : user
      );
      setUserInfo(updatedInfo);
      setEditMode(false);
    } else {
      setUserInfo([newUser]);
      setEditMode(false);
    }

    // clear form fields
    setName('');
    setGoal('');
    setTreat1('');
    setTreat2('');
    setFinalAward('');

    // navigate to Journal page after saving
    navigate('/journal');
  };

  const handleClearForm = () => {
    setUserInfo([]);
  };

  const handleEdit = () => {
    setEditMode(true);
  }

  const handleCancel = () => {
    setEditMode(false);
  }

  const handleReset = () => {
    // reset form fields
    setName(userInfo.length > 0 ? userInfo[0].name : '');
    setGoal(userInfo.length > 0 ? userInfo[0].goal : '');
    setTreat1(userInfo.length > 0 ? userInfo[0].treat1 : '');
    setTreat2(userInfo.length > 0 ? userInfo[0].treat2 : '');
    setFinalAward(userInfo.length > 0 ? userInfo[0].finalAward : '');
  };

  return (
    <div className="UserSettings">
      <div className="setting-top">
        <div className="info-container" id="info-container">
          <h5 className="intro">Please set up your profile.</h5>
          <div className="input-field">
            <form className="info-input-form" onSubmit={saveInfo} onReset={handleReset}>
              <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required={editMode} disabled={!editMode} />
              <input type="text" name="goal" placeholder="Goal " value={goal} onChange={(e) => setGoal(e.target.value)} required={editMode} disabled={!editMode} />
              <input type="text" name="treat1" placeholder="Small Award" value={treat1} onChange={(e) => setTreat1(e.target.value)} required={editMode} disabled={!editMode} />
              <input type="text" name="treat2" placeholder="Medium Award" value={treat2} onChange={(e) => setTreat2(e.target.value)} required={editMode} disabled={!editMode} />
              <input type="text" name="finalAward" placeholder="Final Big Award" value={finalAward} onChange={(e) => setFinalAward(e.target.value)} required={editMode} disabled={!editMode} />
            </form>
          </div>
          <div className="btn-wrapper">
            {!editMode && (
              <>
                <button className="btn userBtn" type="submit">Save</button>
                {userInfo.length > 0 && (
                  <button className="btn userBtn" type="button" onClick={handleEdit}>Edit</button>
                )}
                <button className="btn userBtn" type="button" onClick={handleClearForm}>Clear</button>
              </>
            )}
            {editMode && (
              <>
                <button className="btn userBtn" id="edit-save-btn" type="button" onClick={saveInfo}>Save</button>
                <button className="btn userBtn" type="reset" onClick={handleReset}>Reset</button>
                {userInfo.length > 0 && (<button className="btn userBtn" type="button" onClick={handleCancel}>Cancel</button>)}
              </>
            )}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Usersettings;