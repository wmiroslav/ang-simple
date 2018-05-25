import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss']
})
export class MailListComponent implements OnInit, OnDestroy {

  mails: any;
  activeId: number;
  mailSubscribtion: Subscription;
  @Output() selected: EventEmitter<any> = new EventEmitter<any>();

  constructor(private api: ApiService) { }

  // get data from fake API
  refreshData() {
  }

  selectMail(mail) {
    this.activeId = mail.id;
    this.selected.emit(mail);
  }

  ngOnInit() {
    this.refreshData();
  }

  ngOnDestroy() {
    this.mailSubscribtion.unsubscribe();
  }

}
