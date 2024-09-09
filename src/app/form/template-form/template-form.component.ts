import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  
  // Submit Handler
  countries = [
    { value: 'us', viewValue: 'United States' },
    { value: 'in', viewValue: 'India' },
    { value: 'uk', viewValue: 'United Kingdom' }
  ];

  constructor(private dialog: MatDialog) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.dialog.open(SuccessDialogComponent);  // Opens the success dialog
      form.reset();  // Reset form after submission
    }
  }
}
