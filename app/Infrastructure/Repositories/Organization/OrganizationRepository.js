class OrganizationRepository {
	constructor(connection) {
		this.connection = connection
	}

    add(entity) {
		return new Promise((resolve, reject) => {
			this.connection.query(
				`INSERT INTO organization SET ?`,
				[entity],
				(err, results) => {
					if (err) {
						return reject(err)
					}
					return resolve(results);
				}
			)
		})
	}

	update(entity) {
        return new Promise((resolve, reject) => {
			this.connection.query(
                `UPDATE organization SET ? WHERE orgId = ?`,
                [entity, entity.orgId],
                (err, results) => {
				if (err) {
					return reject(err)
				}
				return resolve(results);
			})
		})
	}

	fetchById(orgId) {
		return new Promise((resolve, reject) => {
			this.connection.query(
				"SELECT * FROM `organization` where orgId = ?",
				[orgId],
				(err, results) => {
					if (err) {
						return reject(err)
					}
                    
          return resolve(results)
				}
			)
		})
	}

    fetchByName(name) {
		return new Promise((resolve, reject) => {
			this.connection.query(
				"SELECT * FROM `organization` where name = ?",
				[name],
				(err, results) => {
					if (err) {
						return reject(err)
					}

                    return resolve(results)
                    
				}
			)
		})
	}

	fetchAll() {
		return new Promise((resolve, reject) => {
			this.connection.query("SELECT * FROM `organization`", (err, results) => {
				if (err) {
					return reject(err)
				}
                
				return resolve(results);
                
			})
		})
	}

	remove(orgId) {
		return new Promise((resolve, reject) => {
			this.connection.query(
				"DELETE FROM `organization` WHERE orgId = ?",
				[orgId],
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

module.exports = OrganizationRepository;