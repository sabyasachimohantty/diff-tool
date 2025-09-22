import chalk from 'chalk'

export function get_lcs(s1: string[], s2: string[]): [number, number][] {
    const ROWS = s1.length
    const COLS = s2.length
    const dp = new Array(ROWS + 1).fill(0).map(() => new Array(COLS + 1).fill(0))
    for (let r = ROWS - 1; r >= 0; r--) {
        for (let c = COLS - 1; c >= 0; c--) {
            if (s1[r] === s2[c]) {
                dp[r][c] = 1 + dp[r + 1][c + 1]
            } else {
                dp[r][c] = Math.max(dp[r + 1][c], dp[r][c + 1])
            }
        }
    }

    let r = 0
    let c = 0
    let res: [number, number][] = []
    while (r < ROWS && c < COLS) {
        if (s1[r] === s2[c]) {
            res.push([r, c])
            r++
            c++
        } else {
            if (dp[r + 1][c] >= dp[r][c + 1]) {
                r++
            } else {
                c++
            }
        }
    }

    return res
}

export function get_diff(s1: string[], s2: string[]): void {
    const common = get_lcs(s1, s2)
    let s1_ind = 0, s2_ind = 0
    for (let i = 0; i < common.length; i++) {
        while (s1_ind < common[i][0]) {
            console.log(chalk.redBright.bold(`- ${s1[s1_ind]}`))
            s1_ind++
        }
        s1_ind++
        while (s2_ind < common[i][1]) {
            console.log(chalk.greenBright.bold(`+ ${s2[s2_ind]}`))
            s2_ind++
        }
        s2_ind++
        console.log(s1[common[i][0]])
    }

    while (s1_ind < s1.length) {
        console.log(chalk.redBright.bold(`- ${s1[s1_ind]}`))
        s1_ind++
    }

    while (s2_ind < s2.length) {
        console.log(chalk.greenBright.bold(`+ ${s2[s2_ind]}`))
        s2_ind++
    }

}