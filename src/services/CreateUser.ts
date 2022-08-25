import { Course } from '../dto/index';

class CreateUser {
  execute({ name, dev }: Course): void {
    console.log(name, dev)
  }
}

//export default new CreateUser();
export { CreateUser };
