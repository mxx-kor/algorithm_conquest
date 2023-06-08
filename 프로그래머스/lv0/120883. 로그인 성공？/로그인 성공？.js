function solution(id_pw, db) {
    const [id, pw] = id_pw
    const users = new Map(db)
    if (!users.get(id)) return 'fail'
    if (users.get(id) === pw) return 'login'
    return 'wrong pw'
}