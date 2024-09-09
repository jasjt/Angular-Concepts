import { Component, ViewChild } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { SuccessDialogComponent } from '../../form/success-dialog/success-dialog.component';

@Component({
  selector: 'app-material-table',
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatTreeModule,
    MatChipsModule,
    MatAutocompleteModule
  ],
  templateUrl: './material-table.component.html',
  styleUrl: './material-table.component.css'
})
export class MaterialTableComponent {
  @ViewChild(MatSort) sort!: MatSort;
  
  materialComponents : PeriodicElement[] = [
    { tag: 'mat-menu', module: 'MatMenuModule', component: 'menu' },
    { tag: 'mat-toolbar', module: 'MatToolbarModule', component: 'toolbar' },
    { tag: 'mat-sidenav', module: 'MatSidenavModule', component: 'sidenav' },
    { tag: 'mat-dialog', module: 'MatDialogModule', component: 'dialog' },
    { tag: 'mat-card', module: 'MatCardModule', component: 'card' },
    { tag: 'mat-form-field', module: 'MatFormFieldModule', component: 'form-field' },
    { tag: 'mat-input', module: 'MatInputModule', component: 'input' },
    { tag: 'mat-button', module: 'MatButtonModule', component: 'button' },
    { tag: 'mat-checkbox', module: 'MatCheckboxModule', component: 'checkbox' },
    { tag: 'mat-radio', module: 'MatRadioModule', component: 'radio' },
    { tag: 'mat-select', module: 'MatSelectModule', component: 'select' },
    { tag: 'mat-slider', module: 'MatSliderModule', component: 'slider' },
    { tag: 'mat-slide-toggle', module: 'MatSlideToggleModule', component: 'slide-toggle' },
    { tag: 'mat-progress-bar', module: 'MatProgressBarModule', component: 'progress-bar' },
    { tag: 'mat-progress-spinner', module: 'MatProgressSpinnerModule', component: 'progress-spinner' },
    { tag: 'mat-snack-bar', module: 'MatSnackBarModule', component: 'snack-bar' },
    { tag: 'mat-table', module: 'MatTableModule', component: 'table' },
    { tag: 'mat-sort', module: 'MatSortModule', component: 'sort' },
    { tag: 'mat-paginator', module: 'MatPaginatorModule', component: 'paginator' },
    { tag: 'mat-expansion', module: 'MatExpansionModule', component: 'expansion' },
    { tag: 'mat-tree', module: 'MatTreeModule', component: 'tree' },
    // { tag: 'mat-chips', module: 'MatChipsModule', component: 'chips' },
    { tag: 'mat-autocomplete', module: 'MatAutocompleteModule', component: 'autocomplete' }
  ];

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {}

  openSnackBar() {
    this.snackBar.open('Message archived', 'Undo', {
      duration: 2000,
    });
  }

  dataSource = new MatTableDataSource(this.materialComponents);

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  openDialog(): void {
    this.dialog.open(SuccessDialogComponent);
  }
}

export interface PeriodicElement {
  tag: string;
  module: string;
  component: string;
}