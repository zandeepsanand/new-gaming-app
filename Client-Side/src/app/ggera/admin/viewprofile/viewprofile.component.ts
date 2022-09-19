import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { AdminService } from 'src/app/common/service/admin.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.scss']
})
export class ViewprofileComponent implements OnInit {
user:any
  constructor(private route: ActivatedRoute,private router:Router,private admin:AdminService) { }

  ngOnInit(): void {
    //this.user=this.route.data;
    var id=this.route.snapshot.paramMap.get('userid');
    this.user=this.admin.getProUser(id)
    console.log('user',this.user)
    
  }

}
