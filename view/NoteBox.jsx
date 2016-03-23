/**
 * Created by xialei on 2016/3/23 0023.
 */
import  NoteList from './NoteList';
import NoteForm from './NoteForm';
import React from 'react';
export default class NoteBox extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
				<div className="note-box">
					<NoteList/>
					<NoteForm/>
				</div>
		)
	}
}