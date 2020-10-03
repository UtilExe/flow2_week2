const URL = "https://work.emucoach.com/REST_Persons/api/person/"

function handleHttpErrors(res){
    if(!res.ok){
      return Promise.reject({status: res.status, fullError: res.json() })
    }
    return res.json();
   }
  
   function makeOptions(method, body) {
    var opts =  {
      method: method,
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    }
    if(body){
      opts.body = JSON.stringify(body);
    }
    return opts;
   }

   function getAllPersons() {
    // Det sker asynkront det her, så vi kan returnere nummer 2 promise, der kommer ud.
    return fetch (URL + "all")
    .then(handleHttpErrors)
   }

   function addPerson(person) {
       const options = makeOptions("PUT", person)
    // Det sker asynkront det her, så vi kan returnere nummer 2 promise, der kommer ud.
    return fetch (URL, options)
    .then(handleHttpErrors)
   }

   const personFacade = {
       getAllPersons,
       addPerson,
   }

   export default personFacade;
