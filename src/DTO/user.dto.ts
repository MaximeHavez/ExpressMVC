export class UserDto {

    prenomNom : string;
    email : string;
    street : string;
    town : string;
    phone : number;
    company : string;
    pseudo : string;
    photo : string;
    suite : number;
    zipcode : number;
    website : string;
    slogan : string;

    constructor(prenomNom: string,
                email: string,
                street: string,
                town: string,
                phone: number,
                company: string,
                pseudo: string,
                photo: string,
                suite: number,
                zipcode: number,
                website: string,
                slogan: string) {
        this.prenomNom = prenomNom;
        this.email = email;
        this.street = street;
        this.town = town;
        this.phone = phone;
        this.company = company;
        this.pseudo = pseudo;
        this.photo = photo;
        this.suite = suite;
        this.zipcode = zipcode;
        this.website = website;
        this.slogan = slogan;
    }

}