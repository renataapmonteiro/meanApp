import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
    enteredTitle='';
    enteredContent='';
    
    @Output() createdPost= new EventEmitter();
    

    onAddPost(){
       const post={ 
           title: this.enteredTitle, 
           content: this.enteredContent 
        }
       this.createdPost.emit(post);
    }
}