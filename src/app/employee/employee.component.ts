import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  
  }



  employeeForm = new FormGroup({
    username : new FormControl('',[Validators.required]),
    fathername : new FormControl('',[Validators.required]),
    mothername : new FormControl('',[Validators.required]),
    dob : new FormControl('',[Validators.required]),
    address : new FormControl('',[Validators.required]),
    education : this.fb.array([this.educationField()]),
    email : new FormControl('',[Validators.required]),
    contact : new FormControl('',[Validators.required]),
    experience : this.fb.array([this.experienceField()]),
  })

  // Education Field
  get newEducationField(){
    return this.employeeForm.get('education') as FormArray
  }

  educationField(){
    return this.fb.group({
      edu:['',[Validators.required]],
      from:['',[Validators.required]],
      to:['',[Validators.required]]
    })
  }

  deleteEducationField(index:number){
    this.newEducationField.removeAt(index)
  }
  
  addEducationField(){
    this.newEducationField.push(this.educationField())
  }

  
  // Experience Field
  get newExperienceField(){
    return this.employeeForm.get('experience') as FormArray
  }

  experienceField(){
    return this.fb.group({
      exp:['',[Validators.required]],
      from:['',[Validators.required]],
      to:['',[Validators.required]]
    })
  }

  deleteExperienceField(value:number){
    this.newExperienceField.removeAt(value)
  }
  
  addExperienceField(){
    this.newExperienceField.push(this.experienceField())
  }
  


  submit(){
    if(this.employeeForm.valid){
      console.log(this.employeeForm.value);
      alert("form is Sucessfully Submitted")
      this.employeeForm.reset();
    }
    else{
      alert("Fill the Form Completely to Submit")
    } 
  }


}
