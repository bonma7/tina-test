import React from 'react'
// 1. Import `InlineTextarea`
import { InlineTextarea } from 'react-tinacms-inline'

export function Hero() {

  // 2. Replace `data` with Inline Fields
  return (
    <div className="hero">
      <div className="wrapper wrapper--narrow">
       <h1>
        <InlineTextarea name="headline" />
       </h1>
       <div>
         <InlineTextarea name="subtext" />
       </div>
      </div>
    </div>
  )
}