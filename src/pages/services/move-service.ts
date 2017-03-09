import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class MoveService {

    private data: any;
    public response: any;
    payload : any;

    basicOptions:RequestOptionsArgs = {
        url:'http://127.0.0.1:8080/get',
        search: null,
        headers: new Headers({'Content-Type': 'application/json'}),
    };

constructor(private http: Http){}

    move(data: any){
    

    this.http.post("/get", JSON.stringify(data), this.basicOptions).subscribe(response => {
     this.data = response.json();
     console.log(this.data);
    });


}
}

