import React from 'react'
import newUser from './components/input/newUser.jsx'

function newUserRecord() {
    const [firstName, setFirstName] = React.useState('');
    const handleChange = (event) => setFirstName(event.target.value);
    return (
        <div className='container-person-details'>
            <form>
                <newUserer
                    value={value}
                    onChange={handleChange}
                    placeholder={props.placeholder}
                />
            </form>
        </div>
    )            
}

export default newUserRecord