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
	switch (payload.eventName) {
		case 'create-note':
			store.items.push(payload.item);
			store.trigger('change');
			break;
		case 'update-note':
			store.items.forEach(function(i, index2) {
				if (i.id == payload.item.id) {
					store.items[index2] = payload.item;
					store.trigger('change');
				}
			});
			break;
		case 'remove-note':
			store.items.forEach(function(i, index2) {
				if (i.id == payload.item.id) {
					store.items.splice(index2, 1);
					store.trigger('change');
				}
			});
			break;
		case 'set-note':
			store.trigger('set', payload.item);
			break;
	}
	return true;
});
export default store;