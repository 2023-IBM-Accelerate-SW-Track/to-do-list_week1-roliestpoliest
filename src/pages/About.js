import React, { Component } from 'react';
import "./About.css";
import profile_pic from "..\\src\\assets\\profile_pic.jpg"; 

export default class About extends Component {
  render() {
    return (
      <div>
        <p>
          {/* Design your About me page */}
          <div>
              <div className="split left">
                <div className="centered">
                  <img 
                    className="profile_image"
                    src={profile_pic}
                    alt="Profile Pic"
                    ></img>
                </div>
              </div>
              <div className="split right">
                <div className="centered">
                  <div className="name_title">Ana Heron</div>
                  <div className="brief_description">
                    I am a computer science student!
                    I am from Houston, TX!
                  </div>
                </div>
              </div>
            </div>

        </p>
      </div>
    )
  }
}