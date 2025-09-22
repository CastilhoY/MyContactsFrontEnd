export default class EventManager {
  constructor() {
    this.listners = new Map();
  }

  on(event, listner) {
    if (!this.listners.has(event)) {
      this.listners.set(event, []);
    }

    this.listners.get(event).push(listner);
  }

  emit(event, payload) {
    if (!this.listners.has(event)) {
      return;
    }

    this.listners.get(event).forEach((listner) => {
      listner(payload);
    });
  }

  removeListener(event, listnerToRemove) {
    const listeners = this.listners.get(event);

    if (!listeners) {
      return;
    }

    const filteredLiseners = listeners.filter(
      (listener) => listener !== listnerToRemove,
    );

    this.listeners.set(event, filteredLiseners)
  }
}
