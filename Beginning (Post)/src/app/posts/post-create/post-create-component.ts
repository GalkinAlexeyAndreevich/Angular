import { Component,EventEmitter, Output } from "@angular/core";
import { Post } from "../post.model";
@Component({
  selector:'app-post-create',
  templateUrl:'./post-create-component.html',
  styleUrls:["./post-create-component.css"]
})
export class PostCreateComponent{
  enteredTitle = ""
  enteredContent = ""

  @Output() postCreated = new EventEmitter<Post>()

  onAddPost(){
    console.log(this.enteredTitle,this.enteredContent);

    const post:Post = {
      title:this.enteredTitle,
      content:this.enteredContent,
    }
    this.postCreated.emit(post)
  }
}
