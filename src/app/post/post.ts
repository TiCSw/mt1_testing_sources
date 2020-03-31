export class Post {

  constructor(private nameA: string, private contentA: string) { }
  get name(): string { return this.nameA; }
  get content(): string { return this.contentA; }
}
