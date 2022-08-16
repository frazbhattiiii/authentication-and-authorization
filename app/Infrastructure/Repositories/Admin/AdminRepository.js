class AdminRepository {
	constructor(connection) {
		this.connection = connection
	}

    add(entity) {
		return new Promise((resolve, reject) => {
			this.connection.query(
				`INSERT INTO admins SET ?`,
				[entity],
				(err, results) => {
					if (err) {
						return reject(err)
					}
					return resolve(true);
				}
			)
		})
	}

	update(entity) {
        return new Promise((resolve, reject) => {
			this.connection.query(
                `UPDATE admins SET ? WHERE adminId = ?`,
                [entity, entity.adminId],
                (err, results) => {
				if (err) {
					return reject(err)
				}
				return resolve(true);
			})
		})
	}

	fetchById(adminId) {
		return new Promise((resolve, reject) => {
			this.connection.query(
				"SELECT * FROM `admins` where adminId = ?",
				[adminId],
				(err, results) => {
					if (err) {
						return reject(err)
					}
                    
                    return resolve(
                        results.map((row) => {
                            return AdminMap.toDomain(row);
                        })
                    )
				}
			)
		})
	}

    fetchByEmail(adminEmail) {
		return new Promise((resolve, reject) => {
			this.connection.query(
				"SELECT * FROM `admins` where email = ?",
				[adminEmail],
				(err, results) => {
					if (err) {
						return reject(err)
					}

                    return resolve(
                        results.map((row) => {
                            return AdminMap.toDomain(row);
                        })
                    )
				}
			)
		})
	}

	fetchAll() {
		return new Promise((resolve, reject) => {
			this.connection.query("SELECT * FROM `admins`", (err, results) => {
				if (err) {
					return reject(err)
				}
                
				return resolve(
                    results.map((row) => {
                        return AdminMap.toDomain(row);
                    })
                )
			})
		})
	}

	remove(adminId) {
		return new Promise((resolve, reject) => {
			this.connection.query(
				"DELETE FROM `admins` WHERE adminId = ?",
				[adminId],
				(err, results) => {
					if (err) {
						return reject(err)
					}
					return resolve(true);
				}
			)
		})
	}
}

module.exports = AdminRepository;