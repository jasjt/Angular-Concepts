import { FlatTreeControl } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
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
    // MatSliderModule,
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
  treeControl = new FlatTreeControl<YourNodeType>(node => node.level, node => node.expandable);
  
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
  treeData: YourNodeType[] = [
    {
      name: 'Node 1',
      level: 0,
      expandable: true,
    },
    {
      name: 'Node 2',
      level: 1,
      expandable: false,
    },
  ];
  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {}

  openSnackBar() {
    const snackBarRef = this.snackBar.open('Message archived', 'Undo', {
      duration: 5000, // Set to 5 seconds for example
    });

    // Close the snackbar after 2 seconds
    setTimeout(() => {
      snackBarRef.dismiss();
    }, 2000);
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

export interface YourNodeType {
  name: string;
  level: number;
  expandable: boolean;
  // Other properties like id, children, etc., can be added here if needed.
}