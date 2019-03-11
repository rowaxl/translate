import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
    renderLabel = value => {
        return value === 'english' ? 'Name' : 'Naam';
    }

    render() {
        return (
            <div className="ui field">
                <label>
                    <LanguageContext.Consumer>
                        { (value) => this.renderLabel(value) }
                    </LanguageContext.Consumer>
                </label>
                <input type="text" />
            </div>
        );
    }
}

export default Field;