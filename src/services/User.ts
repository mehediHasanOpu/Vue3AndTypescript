export class User {
  private id?: string;
  private name: string;
  private password: string;
  private active: boolean = true;

  constructor(name: string, password: string) {
    this.password = password;
    this.name = name;
  }

  public save(): void {
    this.id = crypto.randomUUID();
  }

  public update(): void {
    this.save()
  }
}


export class UserService {
  public saveUser(name: string, password: string) {
    //const user = new User(); //Error Expected 2 arguments, but got 0
    const user = new User(name, password);
    user.save();
  }
}
