import { get_lcs } from '../index.js'

describe('Longest Common Subsequence', () => {
    test('should return "ABCDEF" as lcs of "ABCDEF" and "ABCDEF"', () => {
        const s1 = 'ABCDEF'
        const s2 = 'ABCDEF'
        const lcs = get_lcs(s1, s2).map(([i, j]) => s1[i]).join('')
        expect(lcs).toBe('ABCDEF')
    })

    test('should return "" as lcs of "ABD" and "XYZ"', () => {
        const s1 = 'ABC'
        const s2 = 'XYZ'
        const lcs = get_lcs(s1, s2).map(([i, j]) => s1[i]).join('')
        expect(lcs).toBe('')
    })

    test('should return "XY" as lcs of "AABCXY" and "XYZ"', () => {
        const s1 = 'AABCXY'
        const s2 = 'XYZ'
        const lcs = get_lcs(s1, s2).map(([i, j]) => s1[i]).join('')
        expect(lcs).toBe('XY')
    })

    test('should return "" as lcs of "" and ""', () => {
        const s1 = ''
        const s2 = ''
        const lcs = get_lcs(s1, s2).map(([i, j]) => s1[i]).join('')
        expect(lcs).toBe('')
    })

    test('should return "AC" as lcs of "ABCD" and "AC"', () => {
        const s1 = 'ABCD'
        const s2 = 'AC'
        const lcs = get_lcs(s1, s2).map(([i, j]) => s1[i]).join('')
        expect(lcs).toBe('AC')
    })

    test('should return "this is the lcs" as lcs of ["This is a test which contains:", "this is the lcs"] and ["this is the lcs", "we\'re testing"]', () => {
        const s1 = ["This is a test which contains:", "this is the lcs"]
        const s2 = ["this is the lcs", "we're testing"]
        const lcs = get_lcs(s1, s2).map(([i, j]) => s1[i]).join('\n')
        expect(lcs).toBe("this is the lcs")
    })

    test('should return the longest common subsequence', () => {
        const s1 = [
            "Coding Challenges helps you become a better software engineer through that build real applications.",
            "I share a weekly coding challenge aimed at helping software engineers level up their skills through deliberate practice.", "I've used or am using these coding challenges as exercise to learn a new programming language or technology.",
            "Each challenge will have you writing a full application or tool. Most of which will be based on real world tools and utilities."
        ]
        const s2 = [
            "Helping you become a better software engineer through coding challenges that build real applications.",
            "I share a weekly coding challenge aimed at helping software engineers level up their skills through deliberate practice.",
            "These are challenges that I've used or am using as exercises to learn a new programming language or technology.",
            "Each challenge will have you writing a full application or tool. Most of which will be based on real world tools and utilities."
        ]
        const lcs = get_lcs(s1, s2).map(([i, j]) => s1[i]).join('\n')
        expect(lcs).toBe("I share a weekly coding challenge aimed at helping software engineers level up their skills through deliberate practice.\nEach challenge will have you writing a full application or tool. Most of which will be based on real world tools and utilities.")
    })

}) 