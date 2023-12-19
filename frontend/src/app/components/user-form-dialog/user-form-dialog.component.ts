import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.css'],
})
export class UserFormDialogComponent {
  userForm!: FormGroup;
  companyList: string[] = ['Trishala', 'Shanti', 'F-31'];

  constructor(
    public dialogRef: MatDialogRef<UserFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.initializeForm();
  }

  initializeForm() {
    this.userForm = this.fb.group({
      userName: [this.data?.userName || '', Validators.required],
      address: [this.data?.address || '', Validators.required],
      mobileNumber: [this.data?.mobileNumber || '', Validators.required],
      email: [this.data?.email || '', Validators.required],
      password: [this.data?.password || '', Validators.required],
      companies:[this.data?.companies || [], Validators.required]
    });
  }

  onSave(): void {
    if (this.userForm.valid) {
      const selectedCompaines = this.companyList.filter((company) =>
        this.userForm.get('companies')?.value.includes(company)
      );

      this.userForm.get('companies')?.setValue(selectedCompaines);

      this.dialogRef.close(this.userForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  get companiesControl(): FormControl | null{
    return this.userForm.get('companies') as FormControl | null
  }
}
