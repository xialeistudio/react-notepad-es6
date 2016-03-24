/**
 * Created by xialei on 2016/3/23 0023.
 */
import React from 'react';
import NoteAction from '../action/NoteAction';
export default class Note extends React.Component {
	// static propTypes = {
	// 	note: React.PropTypes.object.isRequired
	// }
	constructor() {
		super();
		this.handleDelete = this.handleDelete.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
	}

	handleUpdate() {
		NoteAction.setNote(this.props.note);
	}

	handleDelete() {
		if (confirm('确定删除吗?')) {
			NoteAction.remove(this.props.note);
		}
	}

	render() {
		return (
				<div className="note-item">
					<div className="id">{this.props.note.id}</div>
					<div className="text">{this.props.note.text}</div>
					<div className="operation">
						<button type="button" onClick={this.handleUpdate}>编辑</button>
						<button type="button" onClick={this.handleDelete}>删除</button>
					</div>
				</div>
		);
	}
}