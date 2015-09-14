import React from 'react';
import Editor from './components/Editor'
import Preview from './components/Preview'

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = { data: '# Hello World' };
        this.onInput = this.onInput.bind( this );
    }

    onInput(val) {
        console.log('setting state for data:', { data: val } );
        this.setState({ data: val });
        console.log('set state for data:', val );
    }

    render() {
        return (
            <div>
                <Editor data={ this.state.data }
                        onInput={this.onInput} />
                <Preview data={ this.state.data } />
            </div>
        )
    }
};


export default App;
