export class CreateTodoDto {
    title:String;
  description:String;
  completed:Boolean
  priority: todoPriority; 
  dueAt : Date;
  completedAT: Date;
  userID :String;
  createdAt: Date;
  updatedAT: Date;
}
  
enum todoPriority{
    LOW = 'low',
    MEDIUM = 'MEDIUM',
    HIGH = 'HEIGH'
    
}