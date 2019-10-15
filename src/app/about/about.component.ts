import { Component, OnInit } from '@angular/core';
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
  version: string | null = environment.version;
  private theme: ThemeService;

  constructor(private _theme: ThemeService) {
    this.theme = _theme;
  }

  ngOnInit() {}

  changeTheme(name: string) {
    this.theme.setTheme(themes[name]);
  }

  changeSpeed(val: string) {
    this.theme.setVariable('--speed', `${val}ms`);
  }
}
