import { Component, computed, inject, input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DriversService } from '../../../service/drivers.service';
import { PageMode } from '../../../model/enums.model';

@Component({
  selector: 'app-drivers-editor',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './drivers-editor.component.html',
  styleUrl: './drivers-editor.component.scss',
})
export class DriversEditorComponent implements OnInit {
  private _router = inject(Router);
  private _driversService = inject(DriversService);
  private _formBuilder = inject(FormBuilder);

  id = input.required<string | undefined>();
  pageMode = input.required<PageMode>();

  isEditor = computed(() => this.pageMode() !== PageMode.view);

  form: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      id: [Math.floor(Math.random() * 228), [Validators.required]],
      name: [{ value: '', disabled: !this.isEditor() }, [Validators.required]],
      lastName: [
        { value: '', disabled: !this.isEditor() },
        [Validators.required],
      ],
    });
    if (this.id()) this._prepareForms(+this.id()!);
  }

  private _prepareForms(id: number): void {
    const driver = this._driversService.drivers.find(
      (e) => e.id === +this.id()!
    );
    if (!driver) return;

    this.form.patchValue(driver);
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    this.pageMode() === PageMode.edit ? this._edit() : this._creat();
    this._router.navigateByUrl('/drivers');
  }

  private _edit(): void {
    const index = this._driversService.drivers.findIndex(
      (e) => e.id === +this.id()!
    );
    if (index < 0) return;
    this._driversService.drivers.splice(index, 1, this.form.getRawValue());
  }

  private _creat(): void {
    this._driversService.drivers.push(this.form.getRawValue());
  }
}
