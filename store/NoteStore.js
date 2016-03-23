/**
 * Created by xialei on 2016/3/23 0023.
 */
import AppDispatcher from '../dispatcher/AppDispatcher';
import MicroEvent from 'microevent';
class NoteStore {
	constructor() {
		this.items = [];
	}
}
MicroEvent.mixin(NoteStore);
let store = new NoteStore();
AppDispatcher.register((payload)=> {
	let index = -1;
	switch (payload.eventName) {
		case 'create-note':
			store.items.push(payload.item);
			store.trigger('change');
			break;
		case 'update-note':
			index = store.items.indexOf(payload.item);
			if (index > -1) {
				store.items[index] = payload.item;
				store.trigger('change');
			}
			break;
		case 'remove-note':
			index = store.items.indexOf(payload.item);
			if (index > -1) {
				store.items.splice(index, 1);
				store.trigger('change');
			}
			break;
		case 'set-note':
			store.trigger('set', payload.item);
			break;
	}
	return true;
});
export default store;