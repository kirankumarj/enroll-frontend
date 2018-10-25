import { Component, OnInit } from '@angular/core';
import { UserIdleService } from 'angular-user-idle';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private userIdle: UserIdleService) {
  }
  ngOnInit() {
    // // setInterval(function()  {console.log('Session'); }, 1000);
    // this.userIdle.startWatching();
    // // Start watching when user idle is starting.
    // this.userIdle.onTimerStart().subscribe(count => console.log(count));

    // // Start watch when time is up.
    // this.userIdle.onTimeout().subscribe(() => {
    //   alert('User Logout');
    //   // console.log('logout..!');
    // });
  }
  // stop() {
  //   this.userIdle.stopTimer();
  // }
  // stopWatching() {
  //   this.userIdle.stopWatching();
  // }
  // startWatching() {
  //   this.userIdle.startWatching();
  // }
  // restart() {
  //   this.userIdle.resetTimer();
  // }

}
