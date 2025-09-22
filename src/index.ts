#!/usr/bin/env node
import { Command } from 'commander'
import fs from 'fs/promises'
import { get_diff } from './lib.js'
 
const program = new Command()

program
    .name("Differ Tool")
    .description('A simple tool to show the difference in two files')
    .version('1.0.0')

program
    .argument('<oldFile>')
    .argument('<newFile>')

program.parse(process.argv)

const [oldFile, newFile] : string[] = program.args
const oldFileData = (await fs.readFile(oldFile, 'utf-8')).split('\n')
const newFileData = (await fs.readFile(newFile, 'utf-8')).split('\n')
get_diff(oldFileData, newFileData)