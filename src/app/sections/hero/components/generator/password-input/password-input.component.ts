import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { createPopper, Instance } from '@popperjs/core'

// https://stackoverflow.com/questions/71338835/how-to-use-popperjs-2-with-angular-13

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent implements OnInit {

  popperInstance!: Instance;

  @Input() password: string;
  @Output() regenerateEvent = new EventEmitter<string>();

  @ViewChild('bt', { static: true }) button!: ElementRef
  @ViewChild('tooltip', { static: true }) tooltip!: ElementRef

  constructor() { this.password = '' }
  ngOnInit(): void {
    this.popperInstance = createPopper(this.button.nativeElement, this.tooltip.nativeElement, {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    });
  }

  onRegenerate() {
    this.regenerateEvent.emit(this.password);
  }

  show(): void {
    // Make the tooltip visible
    this.tooltip.nativeElement.setAttribute('data-show', '');

    // Enable the event listeners
    this.popperInstance.setOptions((options: any) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: true },
      ],
    }));

    // Update its position
    this.popperInstance.update();

    setTimeout(() => this.hide(), 1000);
  }

  hide() {
    // Hide the tooltip
    this.tooltip.nativeElement.removeAttribute('data-show');

    // Disable the event listeners
    this.popperInstance.setOptions((options: any) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: false },
      ],
    }));
  }

}
