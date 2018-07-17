import Vue from 'vue'
const vue = new Vue();

let Ping = {

  pingIt() {
    return new Promise((res, rej) => {
      vue.$http.get(`/ping`)
        .then(response => {
          res(response.body.result);
        })
        .catch(error => {
          rej(error);
        })
    })
  }

}

export default Ping;