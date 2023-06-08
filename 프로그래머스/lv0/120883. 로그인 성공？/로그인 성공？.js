function solution(id_pw, db) {
    const [id, pw] = id_pw
    const users = new Map()
    db.map((user) => {
        users.set(user[0], user[1])
    })
    if (!users.get(id)) return 'fail'
    if (users.get(id) === pw) return 'login'
    return 'wrong pw'
}