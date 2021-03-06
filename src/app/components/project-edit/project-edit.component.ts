import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from 'src/app/models/project';
import { DataService } from 'src/app/services/data.service';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css'],
})
export class ProjectEditComponent implements OnInit {
  doing: boolean = false;
  project: Project;
  url = 'http://localhost:3000/api/v1/projects';

  @Input('id')
  editId!: string;

  @Output()
  updateFinished: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private modelService: NgbModal,
    private rest: RestApiService,
    private data: DataService
  ) {
    this.project = new Project();
  }

  ngOnInit() {
    this.doing = true;
    this.rest
      .getOne(this.url, this.editId)
      .then((data) => {
        this.doing = false;
        this.project = (data as { data: Project }).data;
      })
      .catch((error) => {
        this.doing = false;
        this.data.error(error['message']);
      });
  }

  open(content: TemplateRef<any>) {
    this.modelService.open(content, { ariaDescribedBy: 'modal-basic-title' });
  }

  update() {
    this.doing = true;
    this.rest
      .put(this.url, this.editId, this.project)
      .then((data) => {
        this.doing = false;
        this.updateFinished.emit('Project was updated');
        this.modelService.dismissAll();
        this.project = new Project();
      })
      .catch((error) => {
        this.doing = false;
        this.data.error(error['message']);
      });
  }
}
