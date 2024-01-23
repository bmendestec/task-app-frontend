import { useState } from 'react'
import '../../App.css'
import { Input, InputGroup } from '@chakra-ui/react'

function LoginPage(props) {  
  const [value, setValue] = React.useState('')
  const handleChange = (event) => setValue(event.target.value)
  return (
    <>
      <InputGroup>
        <Input 
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.handleChange}
        />
      </InputGroup>
    </>
  )
}

export default LoginPage
