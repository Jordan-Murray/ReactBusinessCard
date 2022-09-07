import React from "react"

export default function Info()
{
    return(
        <div className="InfoSection">
            <img className="ProfilePicture" src="./Me.jpg"></img>
            <p className="ProfileName">Jordan Murray</p>
            <p className="JobTitle">Software Developer</p>
            <p className="Website">JordanMurray.website</p>
            <div className="ContactButtons">
                <button className="Email"><i className="fa fa-envelope" aria-hidden="true"></i>Email</button>
                <button className="LinkedIn"><i className="fab fa-linkedin"></i>LinkedIn</button>
                            
            </div>
        </div>
    )
} 