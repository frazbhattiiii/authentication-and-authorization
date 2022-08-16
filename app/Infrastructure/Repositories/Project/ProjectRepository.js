class ProjectRepository {
	constructor(connection) {
		this.connection = connection
	}

    add(entity) {
		return new Promise((resolve, reject) => {
			this.connection.query(
				`INSERT INTO project SET ?`,
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
                `UPDATE project SET ? WHERE projId = ?`,
                [entity, entity.projId],
                (err, results) => {
				if (err) {
					return reject(err)
				}
				return resolve(results);
			})
		})
	}

	fetchById(projId) {
		return new Promise((resolve, reject) => {
			this.connection.query(
				"SELECT * FROM `project` where projId = ?",
				[projId],
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
				"SELECT * FROM `project` where name = ?",
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
			this.connection.query("SELECT * FROM `project`", (err, results) => {
				if (err) {
					return reject(err)
				}
                
				return resolve(results);
                
			})
		})
	}

	remove(projId) {
		return new Promise((resolve, reject) => {
			this.connection.query(
				"DELETE FROM `project` WHERE projId = ?",
				[projId],
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

module.exports = ProjectRepository;