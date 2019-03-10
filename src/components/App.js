import React from 'react';
import UserCreate from './UserCreate';

class App extends React.Component {
    state = {
        language: 'english'
    }

    onLanguageChange = language => {
        this.setState({ language });
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Selete a language:
                    <i
                        className="flag us"
                        onClick={() => this.onLanguageChange('english')}
                    />
                    <i 
                        className="flag nl"
                        onClick={() => this.onLanguageChange('dutch')} 
                    />
                </div>
                <div>
                    {this.state.language}
                </div>
                <UserCreate language={this.state.language} />
            </div>
        )
    }
}

export default App;
