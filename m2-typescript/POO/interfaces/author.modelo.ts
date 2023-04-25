

interface IAuthor {
    idAuthor: number,
    firstName: string,
    dateFrom: Date,
    dateTo: Date | undefined,
    ciudad: string,
    bio: string
}



let aunthor1: IAuthor = {
    idAuthor:1,
    firstName: "Nerduda",
    dateFrom: new Date(2001, 1, 1),
    dateTo: undefined,
    city: "Madrid",
    bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea`
}

let aunthor2: IAuthor = {
    idAuthor:2,
    firstName: "Isabel Allende",
    dateFrom: new Date(2005, 2, 1),
    dateTo: undefined,
    city: "California",
    bio: `Lorem ipsum dolor sit amet, consectetur adipiscing `
}