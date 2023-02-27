import React from 'react';
import { Calendar } from 'react-bootstrap-icons';


export default function Education() {
    return (
        <div className='main-timeline  mt-3'>
            <div className='timeline left'>

                <h5 class="fw-bold">Masters In IT</h5>
                <p class="text-muted mb-2 fw-bold">Swinburne University of Technology</p>
                <div className='icon'>
                    <Calendar></Calendar>
                    <p class="text-muted">
                        Feb 2017 - Dec 2019
                    </p>
                </div>
            </div>

            <div className='timeline right'>


                <h5 class="fw-bold">Bachlor of Computer Science and Technology</h5>
                <p class="text-muted mb-2 fw-bold">St. Xaviers College</p>
                <div className='icon'>
                    <Calendar></Calendar>
                    <p class="text-muted">
                        April 2012 - December 2016
                    </p>
                </div>
            </div>
            <div className='timeline left'>

                <h5 class="fw-bold">Cafe Manager</h5>
                <p class="text-muted mb-2 fw-bold">Stella's By the Lake</p>
                <div className='icon'>
                    <Calendar></Calendar>
                    <p class="text-muted">
                        April 2021 - present
                    </p>
                </div>
            </div>
        </div>
    )
}
