import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contac',
  templateUrl: './contac.component.html',
  styleUrls: ['./contac.component.css']
})
export class ContacComponent {

  myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required]],
      message: [null, [Validators.required]],
    });
  }
  async sendEmail(e: Event) {
    console.log(this.myForm.get('name')?.value)
    Object.keys(this.myForm.controls).forEach(controlName => {
      this.myForm.get('name')?.markAsTouched();
      this.myForm.get('phone')?.markAsTouched();
      this.myForm.get('email')?.markAsTouched();
      this.myForm.get('message')?.markAsTouched();

    });
    if (this.myForm.valid) {
      emailjs.init('xAHmWDxbOKt5Tbw5T');
      await emailjs.send("service_yd0690o", "template_gij5lms",
        {
          to_name: "Chatminds",
          from_name: "German",
          message: `
        Nombre: ${this.myForm.get('name')?.value},
        email: ${this.myForm.get('email')?.value},
        mensaje: ${this.myForm.get('message')?.value}
        telefono: ${this.myForm.get('phone')?.value}
        `,
        }).then(
          () => {
            alert('Thank you for contacting us, we will contact you as soon as possible.');
          },
          (error) => {
            console.log('FAILED...', (error as EmailJSResponseStatus).text);
          },
        );
    }
  }
  
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
