/**
 * Created by xialei on 2016/3/23 0023.
 */
import React from 'react';
import NoteStore from '../store/NoteStore';
import Note from './Note';
export default class NoteList extends React.Component {
	constructor() {
		super();
		this.handleChanged = this.handleChanged.bind(this);
	}

	componentDidMount() {
		NoteStore.bind('change', this.handleChanged);
	}

	componentWillUnmount() {
		NoteStore.unbind('change', this.handleChanged);
	}

	handleChanged() {
		this.forceUpdate();
	}

	render() {
		var notes = NoteStore.items.map((item)=> {
			return <Note note={item} key={item.id}/>;
		});
		return (
				<div className="note-list">{notes}</div>
		);
	}
}