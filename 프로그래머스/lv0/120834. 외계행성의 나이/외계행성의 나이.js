function solution(age) {
    const ageDigit = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    return String(age).split('').map(el => ageDigit[el]).join('')
}