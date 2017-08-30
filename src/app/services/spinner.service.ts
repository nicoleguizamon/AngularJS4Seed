import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject} from 'rxjs';

@Injectable()
export class SpinnerService {

    loading: boolean = false;
    loadingVisibleChange: Subject<boolean> = new Subject<boolean>();

      toggleSidebar() {
        this.loadingVisibleChange.next(!this.loading);
      }
      setFalse() {
        this.loadingVisibleChange.next(false);
      }
      setTrue() {
        this.loadingVisibleChange.next(true);
      }
  constructor() {
    this.loadingVisibleChange.subscribe((value) => {
        this.loading = value
    });
   }

}
