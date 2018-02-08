const listeners = [];

var numToLoad = 0;

export default class Async {

  constructor() {
    listeners.push(this)
    console.log("Pushing ", this)
    numToLoad++;
  }

  done() {
    numToLoad--;
    console.log("Loaded ", this)
    if (numToLoad === 0) {
      listeners.forEach( inst => {
        inst.onLoaded();
      })

      listeners.length = 0;
    }
  }

  onLoaded() {

  }


}
