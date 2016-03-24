/**
 * Created by xialei on 2016/3/23 0023.
 */
import React from 'react';
import NoteAction from '../action/NoteAction';
import NoteStore from '../store/NoteStore';
export default class NoteForm extends React.Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
		this.handleSetNote = this.handleSetNote.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.resetForm = this.resetForm.bind(this);
		this.state = {
			note: {
				id: 0,
				text: ''
			}
		};
	}

	componentDidMount() {
		NoteStore.bind('set', this.handleSetNote);
	}

	componentWillUnmount() {
		NoteStore.unbind('set', this.handleSetNote);
	}

	isCreate() {
		return this.state.note.id == 0;
	}

	handleClick() {
		let text = this.refs.input.value;
		if (text.length == 0) {
			alert('请输入日记内容');
			this.refs.input.focus();
			return;
		}
		if (this.isCreate()) {
			let id = 1;
			if (NoteStore.items.length > 0) {
				id = NoteStore.items[NoteStore.items.length - 1].id + 1;
			}
			NoteAction.create({
				id: id,
				text: text
			});
		}
		else {
			let note = this.state.note;
			note.text = text;
			NoteAction.update(note);
		}
		this.resetForm();
	}

	render() {
		let note = this.state.note.text;
		let btnText = this.isCreate() ? '创建' : '编辑';
		let tips = this.isCreate() ? '' : '当前编辑 [' + this.state.note.id + '] 号日记';
		return (
				<div className="note-form">
					<div>{tips}</div>
					<textarea ref="input" rows="8" placeholder="日记内容" value={note} onChange={this.handleChange}/>
					<button type="button" onClick={this.handleClick}>{btnText}</button>
					<button type="button" onClick={this.resetForm}>重置</button>
				</div>
		);
	}

	handleChange(e) {
		if (this.isCreate()) {
			this.setState({
				note: {
					id: 0,
					text: e.target.value
				}
			});
		}
		else {
			let id = this.state.note.id;
			this.setState({
				note: {
					id: id,
					text: e.target.value
				}
			});
		}
	}

	handleSetNote(note) {
		this.setState({note: note});
		console.log('set ', this.state.note);
	}

	resetForm() {
		this.setState({
			note: {
				id: 0,
				text: ''
			}
		});
	}
}