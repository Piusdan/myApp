import { Component } from '@angular/core';

@Component({
  selector: 'signin',
  template: `<h1>login!
  <form action="submit">
    <input name="name" type="text"></input>
    <input name="password" type="password"></input>
  </form>
  </h1>`,
})
export class SigninComponent  { 
}
