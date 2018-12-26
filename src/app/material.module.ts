import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule,
          MatFormFieldModule, MatListModule, MatIconModule, MatSnackBarModule, MatSliderModule,
          MatSlideToggleModule,
          MatSelectModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatIconModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  exports : [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatIconModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
