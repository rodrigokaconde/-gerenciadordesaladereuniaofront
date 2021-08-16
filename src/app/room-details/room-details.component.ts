import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {
  id: number;
  room: Room;

  constructor(private route:ActivatedRoute,
              private router: Router,
              private roomSerice: RoomService) { }

  ngOnInit(): void {
    this.room = new Room();
    this.id = this.route.snapshot.params['id'];
    this.roomSerice.getRoom(this.id).subscribe
    (data=> {
      console.log(data);
      this.room = data;
    }, error=> console.log(error));
  }

  list(){
    this.router.navigate(['rooms']);
  }

}
