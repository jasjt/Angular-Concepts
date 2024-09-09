import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
    registrationForm!: FormGroup;
  
    // Dropdown options
    countries = [
      { value: 'IN', viewValue: 'India' },
      { value: 'US', viewValue: 'United States' },
      { value: 'CA', viewValue: 'Canada' },
    ];
  
    constructor(private fb: FormBuilder, private dialog: MatDialog) {
      this.registrationForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        address: this.fb.group({
          street: ['', Validators.required],
          city: ['', Validators.required],
          postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]]
        }),
        bio: ['', [Validators.maxLength(200)]],
        country: ['', Validators.required],
        subscribe: [false],
        age: ['', [Validators.required, Validators.min(18), Validators.max(65)]]
      });
    }
  
    // Convenience getter for easy access to form fields in the template
    get f() {
      return this.registrationForm?.controls;
    }
  
    // Submit Handler
    onSubmit() {
      if (this.registrationForm.valid) {
        this.dialog.open(SuccessDialogComponent);  // Opens the success dialog
        this.registrationForm.reset();  // Reset form after submission
      }
    }
}
