export class Post {

  constructor(private idA: number, private nameA: string, private contentA: string) { }
  get id(): number { return this.idA }
  get name(): string { return this.nameA; }
  get content(): string { return this.contentA; }
}
