// @flow strict

import * as React from 'react';

function LandingPage() {
    return (
        <div className='row'>
            <div className='col-2'>
                <h1>Technology is best <br /> It brings people together</h1>
                <p>It is only when they go wrong that machines <br /> Remind you how powerful they are.</p>
                <a href='' className='explore_btn'>Explore Now</a>
            </div>
            <div className='col-2'>
                <img src='https://i.pinimg.com/564x/50/6a/59/506a5969c3b7ac6dd72c60647bf896c7.jpg' alt='image' width={400} height={400}/>
            </div>
            
        </div>
    );
};
export default LandingPage;