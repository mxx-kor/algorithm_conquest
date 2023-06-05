function solution(today, terms, privacies) {
    const ans = []
    const now = new Date(today)
    const hashTerms = new Map()
    
    terms.map((term) => {
        const [type, months] = term.split(' ')
        hashTerms.set(type, Number(months))
    })
    
    privacies.map((privacy, idx) => {
        const [date, type] = privacy.split(' ')
        const contractDate = new Date(date)
        const isExpired = contractDate.setMonth(contractDate.getMonth() + hashTerms.get(type))
        if (now >= isExpired) ans.push(idx + 1)
    })
    
    return ans;
}