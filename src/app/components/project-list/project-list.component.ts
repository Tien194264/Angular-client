import { Project } from './../../models/project';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { DataService } from 'src/app/services/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  projects!: Project[];
  btnDisabled: boolean = false;
  url = 'http://localhost:3000/api/v1/accounts';
  deleteId!: string;
  confirmMessage = '';

  constructor(
    private rest: RestApiService,
    private data: DataService,
    private modalService: NgbModal
  ) {}

  confirmDeleteProject(
    confirmDialog: TemplateRef<any>,
    id: string,
    name: string
  ) {
    this.confirmMessage = `Do you want to delete the project ${name}`;
    this.deleteId = id;
    this.modalService
      .open(confirmDialog, {
        ariaDescribedBy: 'modal-basic-title',
      })
      .result.then((result) => {
        this.deleteId = '';
      })
      .catch((error) => {});
    this.confirmDeleteProject;
  }

  deleteProject() {
    if (this.deleteId != '') {
      this.rest
        .delete(this.url, this.deleteId)
        .then((data) => {
          this.modalService.dismissAll();
          this.ngOnInit();
        })
        .catch((error) => {
          this.data.error(error['message']);
        });
    }
  }
  ngOnInit() {
    this.btnDisabled = true;

    this.rest
      .get(this.url)
      .then((data) => {
        this.projects = (data as { projects: Project[] }).projects;
        this.btnDisabled = false;
      })
      .catch((error) => {
        this.data.error(error['message']);
        this.btnDisabled = false;
      });
  }

  finishAndAlert(message: string) {
    this.data.success(message);
    this.ngOnInit();
  }
  // delete(id: string) {
  //   this.rest
  //     .delete(this.url, id)
  //     .then((data) => {
  //       this.data.success((data as { message: string }).message);
  //       this.btnDisabled = false;

  //       this.ngOnInit();
  //     })
  //     .catch((error) => {
  //       this.data.error(error['message']);
  //       this.btnDisabled = false;
  //     });
  // }
}
