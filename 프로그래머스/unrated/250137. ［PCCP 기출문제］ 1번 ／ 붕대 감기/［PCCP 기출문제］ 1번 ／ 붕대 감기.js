function solution(bandage, health, attacks) {
    let currentHealth = health
    const [t, x, y] = bandage
    for (let i = 0; i < attacks.length; i++) {
        if (i !== 0) {
            const bandTime = attacks[i][0] - attacks[i - 1][0] - 1
            const heal = (bandTime * x) + (Math.floor(bandTime / t) * y)  
            currentHealth = Math.min(currentHealth + heal, health)
        }
        
        currentHealth -= attacks[i][1]
        
        if (currentHealth <= 0) {
            return -1
        }
    }
    
    return currentHealth;
}