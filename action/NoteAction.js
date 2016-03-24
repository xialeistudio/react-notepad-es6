/**
 * Created by xialei on 2016/3/23 0023.
 */
import AppDispatcher from '../dispatcher/AppDispatcher';
export default class NoteAction {
	static create(item) {
		AppDispatcher.dispatch({
			eventName: 'create-note',
			item: item
		});
	}

	static update(item) {
		AppDispatcher.dispatch({
			eventName: 'update-note',
			item: item
		});
	}

	static remove(item) {
		AppDispatcher.dispatch({
			eventName: 'remove-note',
			item: item
		});
	}

	static setNote(item) {
		AppDispatcher.dispatch({
			eventName: 'set-note',
			item: item
		});
	}
}