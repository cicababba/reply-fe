import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-new-request',
  imports: [MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './new-request.component.html',
  styleUrl: './new-request.component.scss',
})
export class NewRequestComponent {
  newRequestForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.newRequestForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  submit() {}
}
