function solution(sticker) {
    if (sticker.length < 4) return Math.max(...sticker)
    
    const stickerLen = sticker.length + 2
    const arr1 = Array(stickerLen).fill(0)
    const arr2 = Array(stickerLen).fill(0)
    
    for (let i = 2; i < arr1.length; i++) {
        arr1[i] = Math.max(arr1[i - 1], arr1[i - 2] + sticker[i - 2])
    }
    for (let i = 3; i < arr2.length; i++) {
        arr2[i] = Math.max(arr2[i - 1], arr2[i - 2] + sticker[i - 2])
    }
    
    return Math.max(arr1[arr1.length - 2], arr2[arr2.length - 1]);
}