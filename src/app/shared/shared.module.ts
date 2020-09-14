import { FilterInputWrapperComponent } from "./components/filter-input-wrapper/filter-input-wrapper.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ErrorMessageComponent } from "./components/error-message/error-message.component";
import { TitleComponent } from "./components/title/title.component";
import { ContactRowComponent } from "./components/contact-row/contact-row.component";
import { ItemComponent } from "./components/item/item.component";
import { FilterListComponent } from "./components/filter-list/filter-list.component";
import { FilterComponent } from "./components/filter/filter.component";
import { ImgPreviewComponent } from './components/img-preview/img-preview.component';

@NgModule({
  declarations: [
    ErrorMessageComponent,
    TitleComponent,
    ContactRowComponent,
    ItemComponent,
    FilterListComponent,
    FilterComponent,
    FilterInputWrapperComponent,
    ImgPreviewComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorMessageComponent,
    TitleComponent,
    ContactRowComponent,
    ItemComponent,
    FilterListComponent,
    FilterComponent,
    FilterInputWrapperComponent,
    FormsModule,
    ReactiveFormsModule,
    ImgPreviewComponent,
  ],
})
export class SharedModule {}
