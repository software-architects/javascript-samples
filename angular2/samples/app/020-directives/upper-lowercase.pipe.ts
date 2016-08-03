import { Pipe, PipeTransform, Component } from '@angular/core';

@Pipe({
    name: 'upperLowercase'
})
export class UpperLowercasePipe implements PipeTransform {
  transform(value: string): string {
      if (value) {
        return value.substring(0, 1).toUpperCase() + value.substring(1);
      } else {
          return "";
      }
  }
}

@Component({
    selector: 'pipe-demo',
    template: `
        <h2>Custom Pipe Demo</h2>
        <form>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="enter lowercase name" [(ngModel)]="name" name="nameField">
                {{ name | upperLowercase }}
            </div>
        </form>
    `,
    pipes: [ UpperLowercasePipe ]
})
export class CustomPipeDemoComponent {
    public name: string;
}