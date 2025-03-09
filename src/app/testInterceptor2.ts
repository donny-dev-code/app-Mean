import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent,HttpResponse, HttpEventType } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable,tap } from "rxjs";
@Injectable()
export class TestInterceptor2 implements HttpInterceptor{
    intercept (req:HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>>{
        console.log(req);
        return next 
        .handle(req)
        .pipe(tap(event=>{if (event.type === HttpEventType.Response){
            console.log(event);
        }}));
    }
}