declare var _paq: any;

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // <-- Note the "s" and array brackets
})
export class AppComponent {
  title = 'amrit-analytics';

  trackCustomEvent() {
    _paq.push(['trackEvent', 'Button', 'Click', 'Custom Button']);
  }

  trackFormSubmission() {
    _paq.push(['trackEvent', 'Form', 'Submit', 'Demo Form']);
  }
}
