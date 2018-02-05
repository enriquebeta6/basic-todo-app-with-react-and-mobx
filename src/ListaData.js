import { extendObservable } from 'mobx';

class ListaData {
  constructor() {
    extendObservable(this,
     {tareas: ['test1', 'test2']}
    );
  }

  addTarea(tarea) {
    this.tareas.push(tarea);
  }

  removeTarea(index) {
    this.tareas.splice(index, 1);
  }
}

const listaData = new ListaData();

export default listaData;