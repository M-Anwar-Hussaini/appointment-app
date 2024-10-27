import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './appointment-list.component.html',
})
export class AppointmentListComponent {
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = [];

  addAppointment() {
    this.appointments.push({
      date: this.newAppointmentDate,
      id: this.appointments.length + 1,
      title: this.newAppointmentTitle,
    });
    this.newAppointmentTitle = '';
    this.newAppointmentDate = new Date();
    console.log(this.appointments);
  }

  deleteAppointment(id: number) {
    this.appointments = this.appointments.filter((app) => app.id !== id);
  }
}
