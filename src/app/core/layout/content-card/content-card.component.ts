import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition('* => final', [
        query('.card-main-content', style({ maxHeight: '100px' })),
        query('.card-projected-content', style({ opacity: 0 })),

        query('.card-main-content', stagger(0, [animate(400, style({ maxHeight: '2000px' }))])),
        query('.card-projected-content', stagger(0, [animate('800ms', style({ opacity: 1 }))]))
      ])
    ])
  ]
})
export class ContentCardComponent implements OnInit {
  @Input() loading?: boolean | null;
  @Input() isShowTitleBorder!: boolean;
  @Input() isShowCardBorder!: boolean;
  @Input() isShowShadow = true;
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() minHeigth = '100';


  constructor() { }

  ngOnInit() { }
}
