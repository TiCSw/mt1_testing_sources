export class Post {

  constructor(private _id?: number, private _name?: string, private _content?: string) { }
  get id(): number { return this._id }
  get name(): string { return this._name; }
  get content(): string { return this._content; }
}
