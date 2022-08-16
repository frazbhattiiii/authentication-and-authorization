class NotesRepository {
	constructor(connection) {
		this.connection = connection
	}

    add(entity) {
		return new Promise((resolve, reject) => {
			this.connection.query(
				`INSERT INTO notes SET ?`,
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
                `UPDATE notes SET ? WHERE noteId = ?`,
                [entity, entity.noteId],
                (err, results) => {
				if (err) {
					return reject(err)
				}
				return resolve(results);
			})
		})
	}

	fetchById(noteId) {
		return new Promise((resolve, reject) => {
			this.connection.query(
				"SELECT * FROM `notes` where noteId = ?",
				[noteId],
				(err, results) => {
					if (err) {
						return reject(err)
					}
                    
          return resolve(results)
				}
			)
		})
	}

    fetchByTitle(title) {
		return new Promise((resolve, reject) => {
			this.connection.query(
				"SELECT * FROM `notes` where title = ?",
				[title],
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
			this.connection.query("SELECT * FROM `notes`", (err, results) => {
				if (err) {
					return reject(err)
				}
                
				return resolve(results);
                
			})
		})
	}

	remove(noteId) {
		return new Promise((resolve, reject) => {
			this.connection.query(
				"DELETE FROM `notes` WHERE noteId = ?",
				[noteId],
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

module.exports = NotesRepository;