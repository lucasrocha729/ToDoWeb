import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from "@angular/core";
import { isSameDay, isSameMonth } from "date-fns";
import { Subject } from "rxjs";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
  MOMENT,
} from "angular-calendar";
import { ToDoService } from "src/app/services/to-do.service";
import ToDo from "src/app/models/ToDo";

const colors: any = {
  pink: {
    primary: "#ffc1f3",
    secondary: "#a30383",
  },
  blue: {
    primary: "#f9f7d9",
    secondary: "#f9f7d9",
  },
  yellow: {
    primary: "#ffc1f3",
    secondary: "#ffc1f3",
  },
};
@Component({
  selector: "app-calendar",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./calendar.component.css"],
  templateUrl: "./calendar.component.html",
})
export class CalendarComponent {
  events: CalendarEvent[] = [];
  dataTodo: ToDo[] = [];
  toDo: number = 0;
  workInProgress: number = 0;
  done: number = 0;
  abandoned: number = 0;
  constructor(private toDoService: ToDoService, private modal: NgbModal) {}

  ngOnInit(): void {
    this.toDoService.listAllToDo().subscribe((toDo: any) => {
      this.dataTodo = toDo;
      this.dataTodo.forEach((data) => {
        switch (data.toDoStatus?.toString()) {
          case "A realizar":
            this.toDo++;
            break;
          case "Em andamento":
            this.workInProgress++;
            break;
          case "Finalizada":
            this.done++;
            break;
          case "Abandonada":
            this.abandoned++;
        }

        this.events.push({
          id: data.id,
          start: new Date(data.toDoDate!),
          end: new Date(data.toDoDateEnd!),
          title: data.toDoName,
          color: colors.pink,
          actions: this.actions,
          meta: data,
        });
      });
    });
  }

  @ViewChild("modalContent", { static: true }) modalContent:
    | TemplateRef<any>
    | undefined;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData:
    | {
        action: string;
        event: CalendarEvent;
      }
    | undefined;

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: "Edit",
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent("Edited", event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: "Delete",
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent("Deleted", event);
      },
    },
  ];

  refresh: Subject<any> = new Subject();

  activeDayIsOpen: boolean = true;

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent("Dropped or resized", event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: "lg" });
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  toDoDelete(id: number): void {
    console.log(typeof id);
    this.toDoService.deleteToDo(id).subscribe(() => {
      window.location.reload();
    });
  }
}
