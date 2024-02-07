function solution(files) {
    const splitByRule = (file) => {
        const match = file.match(/^([^\d]+)(\d+)(.*)$/)
        return [match[1].toLowerCase(), match[2], match[3]]
    }

    return files.sort((curr, prev) => {
        let [currHead, currNumber, ] = splitByRule(curr)
        let [prevHead, prevNumber, ] = splitByRule(prev)

        if (currHead < prevHead) return -1;
        if (currHead > prevHead) return 1;

        return currNumber - prevNumber
    })
}