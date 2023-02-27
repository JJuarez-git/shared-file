import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['../style.css', './file.component.css']
})
export class FileComponent implements OnInit {

  @Input() name!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
