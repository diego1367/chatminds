import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
interface CarouselItem {
  src: string;
}

@Component({
  selector: 'app-ourtestimonials',
  templateUrl: './ourtestimonials.component.html',
  styleUrls: ['./ourtestimonials.component.css']
})
export class OurtestimonialsComponent {
  products = [
    { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 3', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 3', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Product 3', image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Product 3', image: 'https://via.placeholder.com/150' },

    // Add more products as needed
  ];
  testimonials = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel elit at libero fermentum sodales.',
      author: 'John Doe'
    },
    {
      text: 'Integer auctor risus sit amet arcu maximus, eget volutpat urna aliquet. Fusce congue quam ut tellus finibus.',
      author: 'Jane Smith'
    },
    {
      text: 'Suspendisse potenti. Sed vel elit vel ligula posuere vulputate. Vestibulum tincidunt, nunc nec euismod cursus.',
      author: 'David Johnson'
    },
    {
      text: 'diego',
      author: 'John Doe'
    },
    {
      text: 'diego',
      author: 'Jane Smith'
    },
    {
      text: 'Suspendisse potenti. Sed vel elit vel ligula posuere vulputate. Vestibulum tincidunt, nunc nec euismod cursus.',
      author: 'David Johnson'
    },
    // Add more testimonials as needed
  ];

  testimonialsPerPage = 2;
  currentSlide = 0;
  testimonialSlides: any[][] = [];

  constructor() {
    this.generateTestimonialSlides();
  }

  generateTestimonialSlides() {
    for (let i = 0; i < this.testimonials.length; i += this.testimonialsPerPage) {
      this.testimonialSlides.push(this.testimonials.slice(i, i + this.testimonialsPerPage));
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.testimonialSlides.length;
  }
}
