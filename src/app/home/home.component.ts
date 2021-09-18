import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  constructor(private metaService: Meta) {}

  ngOnInit() {
    this.metaService.addTag({
      name: 'description',
      content: 'Official website of Mogyuchi.',
    });
    this.metaService.addTag({ property: 'og:title', content: 'Mogyuchi' });
    this.metaService.addTag({ property: 'og:locale', content: 'ja_JP' });
    this.metaService.addTag({
      property: 'og:description',
      content: 'Official website of Mogyuchi.',
    });
    this.metaService.addTag({ property: 'og:type', content: 'website' });
    this.metaService.addTag({
      property: 'og:url',
      content: 'https://mogyuchi.com',
    });
    this.metaService.addTag({
      property: 'og:image',
      content: 'https://mogyuchi.com/assets/ogp.jpg',
    });
    this.metaService.addTag({
      property: 'twitter:card',
      content: 'summary_large_image',
    });
    this.metaService.addTag({ property: 'twitter:site', content: '@Mogyuchi' });
    this.metaService.addTag({
      property: 'twitter:creator',
      content: '@Mogyuchi',
    });
  }
}
