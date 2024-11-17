export class User {
  private id: string;
  private name: string;
  private password?: string;
  private active: boolean = true;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  public save(): void {
    this.password = crypto.randomUUID();
  }
}


export class UserService {
  public saveUser(id: string, name: string) {
    //const user = new User(); //Error Expected 2 arguments, but got 0
    const user = new User(id, name);
    user.save();
  }
}
