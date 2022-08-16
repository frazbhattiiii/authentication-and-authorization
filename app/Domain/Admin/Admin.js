const { v4: uuid } = require('uuid');

class Admin {
    constructor(adminId, props) {
        this._adminId = adminId;
        this._props = props;
    }

    adminId() {
        return this._adminId;
    }

    email(){
        return this._props.email
    }

    name(){
        return this._props.name
    }

    password(){
        return this._props.password
    }

    static create(adminProps, adminId) {
        if (!adminId) {
            adminId = uuid();
        }
        return new Admin(adminId, adminProps);
    }
}

module.exports = Admin;