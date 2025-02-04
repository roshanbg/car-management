import { Component, computed, inject, input, OnInit } from '@angular/core';
import { CarsService } from '../../../service/car.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PageMode } from '../../../model/enums.model';
import { MaintenanceRecord } from '../../../model/car.model';
import { AlphabetOnlyDirective } from '../../../directive/alphabet-only.directive';
import { MaintenanceComponent } from '../../separateComponent/maintenance/maintenance.component';

@Component({
  selector: 'app-cars-editor',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    AlphabetOnlyDirective,
    MaintenanceComponent,
  ],
  templateUrl: './cars-editor.component.html',
  styleUrl: './cars-editor.component.scss',
})
export class CarsEditorComponent implements OnInit {
  private _router = inject(Router);
  private _carsService = inject(CarsService);
  private _formBuilder = inject(FormBuilder);

  id = input<string | undefined>();
  pageMode = input.required<PageMode>();

  isEditor = computed(() => this.pageMode() !== PageMode.view);

  form: FormGroup = new FormGroup({});
  repairLogs: MaintenanceRecord[] = [];

  public ngOnInit(): void {
    this.form = this._formBuilder.group({
      maintenanceHistory: null,
      code: [
        { value: '', disabled: !this.isEditor() },
        [Validators.required, Validators.minLength(5)],
      ],
      company: [
        { value: '', disabled: !this.isEditor() },
        [Validators.required],
      ],
      model: [{ value: '', disabled: !this.isEditor() }, [Validators.required]],
      color: [{ value: '', disabled: !this.isEditor() }, [Validators.required]],
      id: [Math.floor(Math.random() * 228), [Validators.required]],
    });

    if (this.id()) this._prepareForms(+this.id()!);
  }

  onSubmit() {
    if (this.form.invalid) return;

    this.form.get('maintenanceHistory')?.setValue(this.repairLogs);

    this.pageMode() === PageMode.edit ? this._edit() : this._creat();

    this._router.navigateByUrl('/cars');
  }

  private _prepareForms(id: number): void {
    const car = this._carsService.cars.find((e) => e.id === +this.id()!);

    if (!car) return;

    this.form.patchValue(car);
    this.repairLogs = car.maintenanceHistory;
  }

  private _edit(): void {
    const index = this._carsService.cars.findIndex((e) => e.id === +this.id()!);

    if (index < 0) return;

    this._carsService.cars.splice(index, 1, this.form.getRawValue());
  }

  private _creat(): void {
    this._carsService.cars.push(this.form.getRawValue());
  }
}
