import React from 'react'
import { Adduser } from './Adduser'
import PlanIncludes from './PlanIncludes'
import Pricing from './Pricing'
import { Summary } from './Summary'

export const PringAndPayment = () => {
  return (
    <div className="body-conect">
      <div className='content-card'>
        <div className='d-flex'>
          <div className='row-left'>
            <Pricing />
            <PlanIncludes />
            <Adduser />
          </div>
          <div className='row-right'>
            <Summary />
          </div>
        </div>
      </div>
    </div>
  )
}
