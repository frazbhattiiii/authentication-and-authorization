class tokensRepository {
	constructor(connection) {
		this.connection = connection
	}
    add(entity) {
		return new Promise((resolve, reject) => {
			this.connection.query(
				`INSERT INTO token SET ?`,
				[entity],
				(err, results) => {
					if (err) {
						return reject(err)
					}
					return resolve(entity);
				}
			)
		})
	}
	fetchById(userID) {
		return new Promise((resolve, reject) => {
			this.connection.query(
				"SELECT * FROM `token` where userID = ?",
				[userID],
				(err, results) => {
					if (err) {
						return reject(err)
					}
					return resolve(results)
				}
			)
		})
	} 
	update(entity) {
		return new Promise((resolve, reject) => {
	this.connection.query(
						`UPDATE token SET ? WHERE userId = ? AND type = ?`,
						[entity, entity.userId, entity.type],
						(err, results) => {
		if (err) {
			return reject(err)
		}
		return resolve(true);
	})
})
}
}

module.exports=tokensRepository;