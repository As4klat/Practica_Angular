import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portafolio-app';
  public cards:Array<any> = []

  ngOnInit(): void{
    this.cards = [
      {
        title: 'Video 1',
        subtitle: 'Subtitle video 1',
        image: 'https://i.ytimg.com/an_webp/FfGmODpqVGs/mqdefault_6s.webp?du=3000&sqp=CIvRwo0G&rs=AOn4CLBI76xwGCDzkpRC3ELi3duJgsFDIw'
      },
      {
        title: 'Video 2',
        subtitle: 'Subtitle video 2',
        image: 'https://i.ytimg.com/an_webp/5Q2Pc-e-8Qc/mqdefault_6s.webp?du=3000&sqp=CM7Awo0G&rs=AOn4CLAbPewddflK0XEjo2mpT8X9BY12RQ'
      },
      {
        title: 'Video 3',
        subtitle: 'Subtitle video 3',
        image: 'https://i.ytimg.com/an_webp/SvfSgCAOB7M/mqdefault_6s.webp?du=3000&sqp=CPy4wo0G&rs=AOn4CLCdsNDGUEWTymoTzeJwN-BYFkdl8g'
      },
      {
        title: 'Video 4',
        subtitle: 'Subtitle video 4',
        image: 'https://i.ytimg.com/an_webp/TkXtJCSJX9A/mqdefault_6s.webp?du=3000&sqp=CLDZwo0G&rs=AOn4CLDZTJ55MQ2V9uvcgq2ll2R7k0Dcaw'
      }
    ]
  }
}