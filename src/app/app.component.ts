import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    template: `
    <main class="min-h-screen bg-gray-50">
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {}