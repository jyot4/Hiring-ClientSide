import React from 'react'
import { useContext } from 'react'
import { HireContext } from '../../App';

function Resume() {

  const { condedate , jwttoken} = useContext(HireContext);
  return ( 
    <>
    <div className='resume'>
        <section>
          <h1>{condedate.fullname}</h1>
          <h2>{condedate.course}</h2>
          <div className='social'>
              <button className='whatshap'>Whatshap</button>
              <button className='gmail'>Gmail</button>
          </div>
        </section>
    </div>
    </>
  )
}

export default Resume