export default class User {
    id;
    firstName;
    lastName;
    email;
    birthdate;
    street;
    zip;
    city;
    dummy = {
        id: "1",
        firstName: "Max",
        lastName: "Mustermann",
        email: "Max.mustermann@gmail.com",
        birthdate: "01.01.2001",
        street: "Musterstraße 1",
        zip: "12345",
        city: "Musterstadt",
    };

    constructor(
        obj = {
            id: "1",
            firstName: "Max",
            lastName: "Mustermann",
            email: "Max.mustermann@gmail.com",
            birthdate: "01.01.2001",
            street: "Musterstraße 1",
            zip: "12345",
            city: "Musterstadt",
        }
    ) {
        this.id = obj.id;
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.email = obj.email;
        this.birthdate = obj.birthdate;
        this.street = obj.street;
        this.zip = obj.zip;
        this.city = obj.city;
    }

    toJSON() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthdate: this.birthdate,
            street: this.street,
            zip: this.zip,
            city: this.city,
        };
    }
}