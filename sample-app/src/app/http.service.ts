import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
    constructor(private _http: HttpClient) {}
    getTasks(){
    return this._http.get('/tasks')

 }

    getTask(id){
      return this._http.get(`/tasks/${id}`)

    }

    addTask(newtask){
      return this._http.post('/task', newtask)

    }

    
    updateR(id, newTask){
      console.log('in service');
      console.log(id);
      console.log(newTask)
      return this._http.post(`/tasks/${id}`, newTask )

    }

    delete(id){
      console.log('in service');

      return this._http.delete(`/tasks/${id}`)

    }


}





