import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>Welcome {{ name.toUpperCase() }}</h2>
    <h2>{{ greetUser() }}</h2>
    <h2>{{ siteUrl }}</h2>
    <input [id]="myId" type="text" value="John" />
    <input [disabled]="isDisabled" id="{{ myId }}" type="text" value="John" />
  `,
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  public name = 'Johnno';
  // These are properties
  // We will bind this value to the HTML ID property of the input element at line 9
  // Interpolation works only with strings, so for HTML properties using boolean values we need to bind to them
  public myId = 'testId';
  public siteUrl = window.location.href;
  public isDisabled = false;
  constructor() {}

  ngOnInit(): void {}

  greetUser() {
    return 'Hello ' + this.name;
  }
}
