
   
const Admin = require("./Admin");

class AdminMap {
    static toDomain(adminObj) {
        return Admin.create({...adminObj}, adminObj.adminId);
    }

    static toPersistence(adminEntity) {
        return {
            adminId: adminEntity.adminId(),
            email: adminEntity.email(),
            name: adminEntity.name(),
            password: adminEntity.password()
        }
    }

    static toDTO(adminEntity){
        return {
            adminId: adminEntity.adminId(),
            email: adminEntity.email(),
            name: adminEntity.name(),
            password: adminEntity.password()
        }
    }

}

module.exports = AdminMap;