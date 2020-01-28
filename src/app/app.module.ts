import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WebkeysComponent } from "./webkeys/webkeys.component";
import { TodoService } from "./services/todo.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, WebkeysComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
