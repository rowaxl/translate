import React from 'react';
import Field from './Field';
import Button from './Button';

class UserCreate extends React.Component {
    render() {
        console.log(this.props);
        return(
            <div>
                <Field />
                <Button />
            </div>
        )
    }
}

export default UserCreate;