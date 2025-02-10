import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entity } from '../model/entity';

@Injectable({
  providedIn: 'root'
})
export class OrchestratorService {

  headers: HttpHeaders;
  platform: string = '';

//  private createDataUrl = 'http://localhost:8080/rabbitmq/data/create';
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    });
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    this.headers.append('Access-Control-Allow-Origin', '*');
   }

   public setPlatform(name: any){
       this.platform = name;
   }

  public createEvent(entity: Entity) {
  //  return this.http.post<Entity>(this.createDataUrl, entity);
    const postUrl = 'http://localhost:8080/'+this.platform+'/event/create';
    let body = JSON.stringify(entity);
    console.log(postUrl);
    console.log(entity);
    return this.http.post<Entity>(postUrl, JSON.stringify(entity), {headers: this.headers});

  }
  public createRule(entity: Entity) {
    const postUrl = 'http://localhost:8080/'+this.platform+'/rule/create';
    let body = JSON.stringify(entity);
    console.log(postUrl);
    console.log(entity);
    return this.http.post<Entity>(postUrl, JSON.stringify(entity), {headers: this.headers});
  }

  public updateRule(entity: Entity) {
    const putUrl = 'http://localhost:8080/'+this.platform+'/rule/update';
    let body = JSON.stringify(entity);
    console.log(putUrl);
    console.log(entity);
    return this.http.put<Entity>(putUrl, JSON.stringify(entity), {headers: this.headers});
  }

  public deleteRule(entity: Entity) {
    const deleteUrl = 'http://localhost:8080/'+this.platform+'/rule/delete';
    let body = JSON.stringify(entity);
    console.log(deleteUrl);
    console.log(entity);
    return this.http.delete<Entity>(deleteUrl, {
      headers: this.headers,
      body: body
   });
  }
}
