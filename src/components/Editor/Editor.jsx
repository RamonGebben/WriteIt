import React from 'react';

class Editor extends React.Component  {

	constructor(props){
		super(props);
		this.state = { data: props.data };
	}

	componentDidMount(){
		const self = this;
		let ts = 'ace_' + Date.now();
		let w = $(`<div class="ace" id="${ ts }">${ this.props.data }</div>`);
		this.refs.aceEditor.getDOMNode().innerHTML = "";
		w.appendTo( this.refs.aceEditor.getDOMNode() );
		let editor = ace.edit( ts );
		editor.setOptions({ maxLines: Infinity, minLines: 20, showPrintMargin: false });
		editor.setAutoScrollEditorIntoView(true);
		editor.getSession().setMode("ace/mode/markdown");
		editor.setTheme("ace/theme/clouds");
		editor.on('input', () => {
			let result = editor.getSession().getValue();
			console.log({ data: result });
			self.update( result );
		});
	}

	update(val){
		this.setState({ data: val });
		this.props.onInput( val );
	}

	render(){
		return <div className='Editor'><div ref="aceEditor"></div></div>;
	}
}

export default Editor;
