import { BrowserModule, Title, DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    CoreModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ) {
    this.registerIcons();
  }

  private registerIcons() {
    const namespace = 'icons';
    const createPath: (iconName: string) => string = name =>
      `assets/icons/${name}.svg`;
    const createIconMetadata: (icon: string) => IconMetaData = name => ({
      name,
      namespace,
      path: createPath(name)
    });
    const icons: string[] = ['heart', 'github', 'bookshelf', 'angular'];
    this.register(icons.map(createIconMetadata));
  }

  private register(icons: IconMetaData[]) {
    icons.forEach(({ name, path, namespace }) =>
      this._iconRegistry.addSvgIconInNamespace(
        namespace,
        name,
        this._domSanitizer.bypassSecurityTrustResourceUrl(path)
      )
    );
  }
}

interface IconMetaData {
  name: string;
  path: string;
  namespace: string;
}
