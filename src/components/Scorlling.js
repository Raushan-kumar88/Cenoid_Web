import React from 'react'
import'./Scorlling.css'
function Scorlling() {
  return (
    <>
        <div className="container">
            <div className="left">
                {/* <p>left box</p> */}
                <img src="https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029__480.jpg" alt="" />
            </div>
            <div className="right">
                <div className="contain">
                    <h2>Flower Power for Your Feet</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse.</p>
                    <div className="scro flex h-52 w-auto mt-14">
                        <div className="scr flex">
                        <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" alt="1" />
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="2" />
                        <img src="https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1200&format=pjpg&exif=1&iptc=1" alt="3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Scorlling