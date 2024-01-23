import React from 'react'
import "../../App.css"
import "./loginPage.css"
import { Input } from '@chakra-ui/react'

function newUser(props) {  
  const [value, setValue] = React.useState('')
  const handleChange = (event) => setValue(event.target.value)
  return (
    <>
      <div className="login-container">
        <label className='label'>{props.label}</label>
        <Input 
          placeholder={props.placeholder}
          value={value}
          onChange={handleChange}
        />                
      </div>
    </>
  )
}

export default newUser