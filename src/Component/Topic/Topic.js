import React, { useState } from 'react';
import { useEffect } from 'react';
import Course from '../Course/Course';
import Information from '../Information/Information';
import './Topic.css'

const Topic = () => {
    const [courses, setCourse] = useState([]);

    useEffect(() => {
        fetch('information.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    return (
        <div>
            <div className='topic'>
                <div>
                    <h3>Today routine Details</h3>
                    <h5>Topic section</h5>
                    <div className='load-course'>
                        {
                            courses.map(course => <Course
                                course={course}
                                key={course.id}
                            ></Course>)
                        }
                    </div>
                </div>
                <div className='information-section'>
                    <Information></Information>
                </div>
            </div>
        </div>
    );
};

export default Topic;