class UserDetails {
    constructor(firstname, lastname, city, contactno) {
        // always initialize all instance properties
        this.firstname = firstname;
        this.lastname = lastname;
        this.city = city;
        this.contactno = contactno;
    }
    getFirstName() {
        return this.firstname;
    }
    getLastName() {
        return this.lastname;
    }
    getCity() {
        return this.city;
    }
    getContactNo() {
        return this.contactno;
    }
}


module.exports = UserDetails
