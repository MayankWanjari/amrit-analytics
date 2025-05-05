AMRIT Analytics Integration with Matomo

Overview
This project integrates Matomo analytics into the AMRIT Angular application to track user visits and key interactions.

KPIs Tracked
Page Views: Every visit to any page is tracked.

Custom Button Clicks: Each click on the "Track Custom Event" button is logged.

Form Submissions: Each submission of the demo form is tracked as a custom event.

User Sessions: Total and unique user sessions are visible in the Matomo dashboard.

Real-Time Activity: Live user activity can be monitored in the Matomo dashboard.

Setup Instructions
Matomo Integration
The Matomo tracking script is included in src/index.html.

Custom event tracking functions are implemented in src/app/app.component.ts.

The Matomo Cloud instance is configured at: https://amritanalyticsdemo.matomo.cloud

How to Track More Events
Add a new function in your Angular component using _paq.push(['trackEvent', ...]).

Call this function from your HTML using Angular event bindings, e.g. (click)="trackCustomEvent()".

How to View Analytics
Log in to the Matomo Cloud dashboard.

Use the dashboard widgets to view page views, events, and real-time activity.

Privacy & Compliance
A privacy banner is displayed at the top of the app to inform users that analytics tracking is in use:

We use analytics to improve your experience. By using this app, you agree to data collection for analytics purposes.

By using the app, users are notified about data collection for analytics purposes.

For production, consider implementing user consent options and configuring further privacy settings in Matomo (such as IP anonymization).

Matomo is a privacy-friendly analytics platform.