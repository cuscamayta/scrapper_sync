import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    public loadingSubject:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    showLoader(){
        this.loadingSubject.next(true);
    }

    hideLoader(){
        this.loadingSubject.next(false);
    }

}