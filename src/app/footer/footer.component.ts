import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private sanitizer: DomSanitizer) { }

  openLinkedInProfile(id: any) {
    let linkedinUrl;
    switch (id) {
      case 1:
        linkedinUrl = 'https://www.instagram.com/chatmindsdev?igsh=MWp3ZW0xaHloMzFrYg%3D%3D&utm_source=qr';
        break;
      case 2:
        const phoneNumber = '16478094452';
        const message = 'Hello, I would like information about Chatminds';
        linkedinUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        break;
      case 3:
        linkedinUrl = 'https://www.linkedin.com/company/chatminds-development/';
        break;
    }
    window.open(linkedinUrl?.toString(), '_blank');
  }
}
