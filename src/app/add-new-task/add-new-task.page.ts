import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  categories: any = []

  categorySelectedCategory

  newTaskObj = {}  
  itemName
  itemDate
  itemPriority
  itemCategory
  itemObject
  constructor(public modalCtrl:ModalController,public todoService:TodoService) { }

  ngOnInit() {
    this.categories.push('work')
    this.categories.push('personnel')
  }
  async dismis(){
   await this.modalCtrl.dismiss(this.newTaskObj)
  }

  selectedCategory(index){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async add(){
  this.newTaskObj = ({itemName:this.itemName,
                      itemDueDate:this.itemDate,
                      itemPriority:this.itemPriority,
                      itemCategory:this.categorySelectedCategory})
  console.log(this.newTaskObj)                    
  
  let unique_id = this.itemName + this.itemDate

  if(unique_id){
    await this.todoService.addTask(unique_id,this.newTaskObj)
  }else{
    console.log("Can't save empty task")
  }

  this.dismis()

  }

  
}
