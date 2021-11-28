import { ErrorDialogComponent } from './components/error/error-dialog/error-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material/app-material.module';
import { CategoryPipe } from './pipes/category.pipe';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';
import { CustomInputDateComponent } from './components/custom-input-date/custom-input-date.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomSeparatorComponent } from './components/custom-separator/custom-separator.component';
import { CustomTextareaComponent } from './components/custom-textarea/custom-textarea.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatOption } from '@angular/material/core';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,
    CustomInputDateComponent,
    CustomInputComponent,
    CustomTextareaComponent,
    CustomSeparatorComponent,
    CustomHeaderComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatDatepickerModule,
    MatInputModule
  ],
  exports: [
    ErrorDialogComponent,
    CategoryPipe,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    CustomInputDateComponent,
    CustomInputComponent,
    CustomTextareaComponent,
    CustomSeparatorComponent,
    CustomHeaderComponent,
    MatInputModule

  ]
})
export class SharedModule { }
