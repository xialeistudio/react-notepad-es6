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
	}

	componentDidMount() {
		NoteStore.bind('set', this.handleSetNote);
	}

	componentWillUnmount() {
		NoteStore.unbind('set', this.handleSetNote);
	}

	isCreate() {
		return this.props.note === undefined;
	}

	handleClick() {
		let text = this.refs.input.value;
		if (text.length == 0) {
			alert('请输入日记内容');
			this.refs.input.focus();
			return;
		}
		this.refs.input.value = '';
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
			let note = this.props.note;
			note.text = text;
			NoteAction.update(note);
		}
	}

	render() {
		let btnText = this.isCreate() ? '创建' : '编辑';
		let tips = this.isCreate() ? '' : '当前编辑 [' + this.props.note.id + '] 号日记';
		return (
				<div className="note-form">
					<div>{tips}</div>
					<textarea ref="input" rows="8" placeholder="日记内容"/>
					<button type="button" onClick={this.handleClick}>{btnText}</button>
				</div>
		);
	}

	handleSetNote(note) {
		console.log('set-note', note);
	}
}