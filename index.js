#!/usr/bin/env node
import { Command } from 'commander'
import fs from 'fs/promises'
import chalk from 'chalk'

const program = new Command()

program
    .name("Differ Tool")
    .description('A simple tool to show the difference in two files')
    .version('1.0.0')

program
    .argument('<oldFile>')
    .argument('<newFile>')

program.parse(process.argv)

const [oldFile, newFile] = program.args
const oldFileData = (await fs.readFile(oldFile, 'utf-8')).split('\n')
const newFileData = (await fs.readFile(newFile, 'utf-8')).split('\n')
get_diff(oldFileData, newFileData)

export function get_lcs(s1, s2) {
    const ROWS = s1.length
    const COLS = s2.length
    const dp = new Array(ROWS + 1).fill().map(() => new Array(COLS + 1).fill(0))
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
    let res = []
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


export function get_diff(s1, s2) {
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
        console.log(`- ${s1[s1_ind]}`)
        s1_ind++
    }

    while (s2_ind < s2.length) {
        console.log(`+ ${s2[s2_ind]}`)
        s2_ind++
    }

}

// const s1 = [
//     "Coding Challenges helps you become a better software engineer through that build real applications.",
//     "I share a weekly coding challenge aimed at helping software engineers level up their skills through deliberate practice.", 
//     "I've used or am using these coding challenges as exercise to learn a new programming language or technology.",
//     "Each challenge will have you writing a full application or tool. Most of which will be based on real world tools and utilities."
// ]
// const s2 = [
//     "Helping you become a better software engineer through coding challenges that build real applications.",
//     "I share a weekly coding challenge aimed at helping software engineers level up their skills through deliberate practice.",
//     "These are challenges that I've used or am using as exercises to learn a new programming language or technology.",
//     "Each challenge will have you writing a full application or tool. Most of which will be based on real world tools and utilities."
// ]

// get_diff(s1, s2)