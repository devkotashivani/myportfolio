import React from 'react';

import { Calendar } from 'react-bootstrap-icons';

export default function Experience() {
  return (


    <div className='main-timeline  mt-3'>
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

      <div className='timeline right'>


        <h5 class="fw-bold">Software Developer Internship</h5>
        <p class="text-muted mb-2 fw-bold">Saras Care</p>
        <div className='icon'>
          <Calendar></Calendar>
          <p class="text-muted">
          Dec 2020 - Mar 2021
        </p>
        </div>
        
      </div>

      <div className='timeline left'>

        <h5 class="fw-bold">Cafe Manager</h5>
        <p class="text-muted mb-2 fw-bold">Tres Cafe</p>
        <div className='icon'>
          <Calendar></Calendar>
          <p class="text-muted">
          Mar 2020 - April 2021
        </p>
        </div>
        
       
      </div>

      <div className='timeline right'>


        <h5 class="fw-bold">Supervisor</h5>
        <p class="text-muted mb-2 fw-bold">Baguette</p>
        <div className='icon'>
          <Calendar></Calendar>
          <p class="text-muted">
          Mar 2018 - Mar 2020
        </p>
        </div>
        
      </div>

      <div className='timeline left'>

        <h5 class="fw-bold">Junior Software Developer</h5>
        <p class="text-muted mb-2 fw-bold">Bajra Technologies</p>
        <div className='icon'>
          <Calendar></Calendar>
          <p class="text-muted">
          Mar 2017 - Nov 2017
        </p>
        </div>
       
      </div>


    </div>



  )
}
