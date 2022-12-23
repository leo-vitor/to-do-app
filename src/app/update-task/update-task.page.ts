import { Component, Input, OnInit } from '@angular/core';
import { IonInput, ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.page.html',
  styleUrls: ['./update-task.page.scss'],
})
export class UpdateTaskPage implements OnInit {
  @Input() task;
  categories: any=[]
  

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

    this.itemName = this.task.value.itemName
    this.itemDate = this.task.value.itemDate
    this.itemPriority = this.task.value.itemPriority
    this.itemCategory = this.task.value.itemCategory
    this.categorySelectedCategory = this.task.value.itemCategory


    console.log(this.task);
  }

  async dismis(){
   await this.modalCtrl.dismiss()
  }

  selectedCategory(index){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async update(){
   this.newTaskObj = ({itemName:this.itemName,
    itemDueDate:this.itemDate,
    itemPriority:this.itemPriority,
    itemCategory:this.categorySelectedCategory})
    
    let unique_id = this.task.key
    await this.todoService.updateTask(unique_id,this.newTaskObj)
    this.dismis()
  }
}


  
  

  
