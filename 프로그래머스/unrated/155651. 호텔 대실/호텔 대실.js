function solution(book_time) {
    const rooms = []
    //입실 시간 정렬
    const sorted_book_time = book_time.sort()
    
    const cal_next_time = (time) => {
        const [h, m] = time.split(':')
        
        return Number(h) * 60 + (Number(m) + 10)
    }
    
    sorted_book_time.forEach((check) => {
        const [h, m] = check[0].split(':')
        const startTime = Number(h) * 60 + Number(m);
        let flag = false
        
        //방이 없다면 새로운 방 추가
        if (!rooms.length) return rooms.push(cal_next_time(check[1]))
        
        for (let i = 0; i < rooms.length; i++) {
            if (startTime >= rooms[i]) {
                flag = true
                rooms[i] = cal_next_time(check[1])
                break
            }
        }
        //시간이 안맞으면 새로운 방 추가
        if (!flag) return rooms.push(cal_next_time(check[1]))
    })
    return rooms.length;
}