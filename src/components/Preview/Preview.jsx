

import React from 'react';
import marked from 'marked';

class Preview extends React.Component  {

	constructor(props){
		super(props);
		this.state = {};
		marked.setOptions({
			renderer: new marked.Renderer(),
			gfm: true,
			tables: true,
			breaks: false,
			pedantic: false,
			sanitize: false,
			smartLists: true,
			smartypants: false
		});
	}

	componentDidMount(){
		return {};
	}

	render(){
		// return <div className='Preview' dangerouslySetInnerHTML={__html:  } />;
		let markdown = marked(this.props.data);
		return <div className="Preview" dangerouslySetInnerHTML={{__html: markdown}} />
	}
}


export default Preview;
