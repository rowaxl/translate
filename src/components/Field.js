import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
    renderLabel = language => {
        return language === 'english' ? 'Name' : 'Naam';
    }

    render() {
        return (
            <div className="ui field">
                <label>
                    <LanguageContext.Consumer>
                        {({ language }) => this.renderLabel(language)}
                    </LanguageContext.Consumer>
                </label>
                <input type="text" />
            </div>
        );
    }
}

export default Field;