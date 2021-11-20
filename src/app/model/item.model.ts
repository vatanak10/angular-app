export class ItemModel {
    constructor(
      public id: string,
      public category_id: string,
      public pic: string,
      public price: number,
      public title: string,
      public created_date: Date
    ) {}
  }
  
  export class ResponseResult {
    constructor(
      public resMessage?: string,
      public resCode?: string,
      public errCode?: string,
      public data?: ItemModel[]
    ) {}
  }
  