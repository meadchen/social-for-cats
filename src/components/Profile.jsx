import React from "react";


const Profile = () =>{
    return(
        <div className="content">
            <div>
                <img className="bg" src="https://pbs.twimg.com/media/CzwEh6qXcAAkw55.jpg" alt=""/>
            </div>
            <div className="profileContainer">
                <div className="profileInfo">
                    <img src="https://i.pinimg.com/280x280_RS/11/b1/48/11b14839f406eeeaeee00a7d2cec1f2e.jpg" alt=""/>
                    <div>
                        <h2>Main Cat Vasiliy</h2>
                        <p>City: <span>Nikolaew</span></p>
                        <p>Interests: <span>eating and playing</span></p>
                        <p>Web Site: <a href="https://let-date-new.date">https://let-date-new.date</a></p>
                    </div>
                </div>
                <div className="posts">
                    My posts
                    <div>new post</div>
                    <div>add post</div>
                </div>

            </div>
        </div>
    );
}

export default Profile;