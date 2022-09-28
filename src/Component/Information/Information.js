import React from 'react';
import image from '../../images/7083.jpg'
import './Information.css'

const Information = () => {
    return (
        <div className='information'>
            <div className='img-name'>
                <img src={image} alt="" />
                <p>Hiru Dey</p>
            </div>
            <div className='important-roles'>
                <p>Revised</p>
                <p>Practice</p>
                <p>Sincerity</p>
            </div>
            <h4>Added a Break</h4>
            <div className='important-roles'>
                <button>10s</button>
                <button>40s</button>
                <button>30s</button>
                <button>20</button>
            </div>
        </div>
    );
};

export default Information;