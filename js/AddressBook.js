class AddressBookData{

    get name() {
        return this._name;
    }
    set name(name) {    
        console.log(name);
        let nameRegex = RegExp('^([A-Z]{1}[a-zA-Z]{2,})+\\s{1}([A-Z]{1}[a-zA-Z]{2,})+\\s{1}([A-Z]{1}[a-zA-Z]{2,})+$');
        if (nameRegex.test(name))
            this._name = name;
        else
            throw 'Incorrect Name';   
    }

    get address() {
        return this._address;
    }
    set address(address) {
        console.log(address)
        let addressRegex = RegExp('^[a-zA-Z\s]+(\.)? [a-z A-Z]{3,}$');
        if (addressRegex.test(address))
            this._address = address;
        else
            throw 'Incorrect Address';
    }

    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }

    get state(){
        return this._state;
    }
    set state(state) {
        this._state = state;
    }

    get zipcode() {
        return this._zipcode;
    }
    set zipcode(zipcode) {
        console.log(zipcode)
        let zipRegex = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
        if(zipRegex.test(zipcode))
            this._zipcode = zipcode;
        else
            throw 'Invalid ';  
    }

    get phonenumber() {
        return this._phonenumber = this.phonenumber;
    }
    set phonenumber(phonenumber) {
        console.log(phonenumber)
        let phoneRegex = RegExp('^[+]{0,1}[0-9]{2}\\s{0,1}[1-9]{1}[0-9]{9}$');
        if (phoneRegex.test(phonenumber))
            this._phonenumber = phonenumber;
        else
            throw 'Incorrect Phone Number';
    }
    
    toString() {
        return "name="+this.name+" address="+this.address+" city="+this.city+" state="+this.state+
        " zipcode="+this.zipcode+" phonenumber="+this.phonenumber;
    }

}  