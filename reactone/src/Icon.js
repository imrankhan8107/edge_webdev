import React from 'react'

export default function Icon({ name }){
    return (
        <div onClick={()=>{console.log(name)}} className='icon'>
            { name }
        </div>
    )
}


export function Icon1({ name }) {
  return (
    <div>
      { name }
    </div>
  )
}

export function Icon2({ name }) {
    return (
      <div>
        { name }
      </div>
    )
}

// we have 2 export from this file, we can import them in other files like this: import { Icon, Icon2 } from './Icon'
// But we cannot import the default export like this
// we need to impoort it as : import Icon from './Icon'
