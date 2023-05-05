// @flow strict

import * as React from 'react';

function Feature() {
    return (
        <div className='categories'>
            <div className='featured'>
                <h3>Categories</h3>
            </div>
            <div className='small-container'>
            <div className='row'>
                <div className='col-3'>
                    <img src='https://i.pinimg.com/236x/12/a8/da/12a8da3fbe365f0eb58e811b876d1f79.jpg' width={200} height={300} />
                </div>
                <div className='col-3'>
                    <img src='https://i.pinimg.com/236x/7d/d3/30/7dd3300967e8ce55195fc3a12dc81af7.jpg' width={200} height={300} />
                </div>
                <div className='col-3'>
                    <img src='https://i.pinimg.com/236x/ea/40/bf/ea40bf78d7afce553d4e179fb31d8a0c.jpg' width={200} height={300}/>
                </div>
                <div className='col-3'>
                    <img src='https://i.pinimg.com/236x/42/4b/21/424b21fbef615656031eb1d13248b1f8.jpg' width={200} height={300}/>
                </div>
            </div>

            </div>
           
        </div>
    );
};

export default Feature;