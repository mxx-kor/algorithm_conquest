function solution(fees, records) {
    var answer = [];
    let [bt, bf, t, tp] = fees
    let parkinglot = new Map()
    let parkFees = new Map()
    
    for (let i of records) {
        let [time, car_num, inAndOut] = i.split(" ")
        let total_min = 0
        // in and out 확인
        // 차 확인 후 없으면 그냥 넣고 시간 정리
        if (inAndOut === 'IN') {
            parkinglot[car_num] = time
        } else {
            //시간 계산 요금 parkfees에 넣고 parking lot에서 빼준다
            let [inHour, inMin] = parkinglot[car_num].split(":")
            let [outHour, outMin] = time.split(":")
            let cal_hour = (Number(outHour) - Number(inHour)) * 60
            let cal_min = Number(outMin) - Number(inMin)
            if (cal_min < 0) {
                total_min = cal_hour - Math.abs(cal_min)
            } else {
                total_min = cal_hour + cal_min
            }
            delete parkinglot[car_num]
            if (car_num in parkFees) {
                parkFees[car_num] = parkFees[car_num] + total_min
            } else {
                parkFees[car_num] = total_min
            }    
        }
    }
    // 파킹랏에 남아있는차 계산 해주자
    let remain_cars = Object.keys(parkinglot)
    for (let i = 0; i < remain_cars.length; i++) {
      const key = remain_cars[i]
      const value = parkinglot[key]
      let total_min = 0
      let [inHour, inMin] = value.split(":")
      let [outHour, outMin] = [23, 59]
      let cal_hour = (Number(outHour) - Number(inHour)) * 60
      let cal_min = Number(outMin) - Number(inMin)
      if (cal_min < 0) {
          total_min = cal_hour - Math.abs(cal_min)
      } else {
          total_min = cal_hour + cal_min
      }
        delete parkinglot[key]
        if (key in parkFees) {
            parkFees[key] = parkFees[key] + total_min
        } else {
            parkFees[key] = total_min
        }  
    }
    // parkFees 정렬
    let ordered_parkFees = Object.entries(parkFees)
    ordered_parkFees.sort((a, b) => +a[0] - +b[0])
    for (let i of ordered_parkFees) {
        //bt, bf, t, tp
        if (i[1] <= bt) {
            answer.push(bf)
        } else {
            answer.push(bf + Math.ceil((i[1] - bt) / t) * tp)
        }
    } 
    return answer;
}