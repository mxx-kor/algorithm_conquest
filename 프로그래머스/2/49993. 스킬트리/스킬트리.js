function solution(skill, skill_trees) {
    let ans = 0
    const regex = new RegExp(`[^${skill}]`, 'g');
    
    skill_trees.forEach((skill_tree) => {
        const skill_only = skill_tree.replace(regex, "")
        const trimed_skill = skill.slice(0, skill_only.length)
        if (trimed_skill === skill_only) {
            ans++
        }
    })
    
    return ans;
}