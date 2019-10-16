import { Component, OnInit, HostBinding, ElementRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from '@env/environment';
import { ThemeService } from '@app/core';

const themes = {
  autumn: {
    primary: '#F78154',
    secondary: '#4D9078',
    tertiary: '#B4436C',
    light: '#FDE8DF',
    medium: '#FCD0A2',
    dark: '#B89876'
  },
  night: {
    primary: '#8CBA80',
    secondary: '#FCFF6C',
    tertiary: '#FE5F55',
    medium: '#BCC2C7',
    dark: '#F7F7FF',
    light: '#495867'
  },
  neon: {
    primary: '#39BFBD',
    secondary: '#4CE0B3',
    tertiary: '#FF5E79',
    light: '#F4EDF2',
    medium: '#B682A5',
    dark: '#34162A'
  }
};

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  quantum = 4; // spacing-unit
  borderWidth = 0;
  borderRadius = 0;
  columns = 3; // margins
  gutter = 2; // grid-columns
  version: string | null = environment.version;
  private theme: ThemeService;

  constructor(private _theme: ThemeService, private elementRef: ElementRef) {
    this.theme = _theme;
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.setProperty('--spacing-unit', this.quantum + 'px');
    this.elementRef.nativeElement.style.setProperty('--grid-columns', this.columns);
    this.elementRef.nativeElement.style.setProperty('--margins', this.gutter);
  }

  borderWidthChange() {
    this.elementRef.nativeElement.style.setProperty('--border-width', this.borderWidth + 'px');
    console.log('borderWidth', this.borderWidth);
  }

  borderRadiusChange() {
    this.elementRef.nativeElement.style.setProperty('--border-radius', this.borderRadius + 'px');
    console.log('borderRadius', this.borderRadius);
  }

  quantumChange() {
    this.elementRef.nativeElement.style.setProperty('--spacing-unit', this.quantum + 'px');
    console.log('quantum', this.quantum);
  }

  columnsChange() {
    this.elementRef.nativeElement.style.setProperty('--grid-columns', this.columns);
    console.log('columns', this.columns);
  }

  gutterChange() {
    this.elementRef.nativeElement.style.setProperty('--grid-gutter', this.gutter + 'px');
    console.log('gutter', this.gutter);
  }

  changeTheme(name: string) {
    this.theme.setTheme(themes[name]);
  }

  changeSpeed(val: string) {
    this.theme.setVariable('--speed', `${val}ms`);
  }
}
