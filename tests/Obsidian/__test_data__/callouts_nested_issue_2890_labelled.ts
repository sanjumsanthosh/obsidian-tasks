export const callouts_nested_issue_2890_labelled = {
    filePath: 'Test Data/callouts_nested_issue_2890_labelled.md',
    fileContents:
        ' > [!Calendar]+ MONTH\n' +
        ' >> [!Check]+ GROUP\n' +
        ' >>> [!Attention]+ Correction TITLE\n' +
        ' >>> Some stuff goes here\n' +
        ' >>> - [ ] #task Correction1\n' +
        ' >>> - [ ] #task Correction2\n' +
        ' >>> - [ ] #task Correction3\n' +
        ' >>> - [ ] #task Correction4\n' +
        '\n' +
        '```tasks\n' +
        'not done\n' +
        'path includes {{query.file.path}}\n' +
        '```\n',
    cachedMetadata: {
        tags: [
            {
                tag: '#task',
                position: {
                    start: {
                        line: 4,
                        col: 11,
                        offset: 115,
                    },
                    end: {
                        line: 4,
                        col: 16,
                        offset: 120,
                    },
                },
            },
            {
                tag: '#task',
                position: {
                    start: {
                        line: 5,
                        col: 11,
                        offset: 144,
                    },
                    end: {
                        line: 5,
                        col: 16,
                        offset: 149,
                    },
                },
            },
            {
                tag: '#task',
                position: {
                    start: {
                        line: 6,
                        col: 11,
                        offset: 173,
                    },
                    end: {
                        line: 6,
                        col: 16,
                        offset: 178,
                    },
                },
            },
            {
                tag: '#task',
                position: {
                    start: {
                        line: 7,
                        col: 11,
                        offset: 202,
                    },
                    end: {
                        line: 7,
                        col: 16,
                        offset: 207,
                    },
                },
            },
        ],
        sections: [
            {
                type: 'callout',
                position: {
                    start: {
                        line: 0,
                        col: 0,
                        offset: 0,
                    },
                    end: {
                        line: 7,
                        col: 28,
                        offset: 219,
                    },
                },
            },
            {
                type: 'code',
                position: {
                    start: {
                        line: 9,
                        col: 0,
                        offset: 221,
                    },
                    end: {
                        line: 12,
                        col: 3,
                        offset: 276,
                    },
                },
            },
        ],
        listItems: [
            {
                parent: -4,
                task: ' ',
                position: {
                    start: {
                        line: 4,
                        col: 5,
                        offset: 109,
                    },
                    end: {
                        line: 4,
                        col: 28,
                        offset: 132,
                    },
                },
            },
            {
                parent: -4,
                task: ' ',
                position: {
                    start: {
                        line: 5,
                        col: 5,
                        offset: 138,
                    },
                    end: {
                        line: 5,
                        col: 28,
                        offset: 161,
                    },
                },
            },
            {
                parent: -4,
                task: ' ',
                position: {
                    start: {
                        line: 6,
                        col: 5,
                        offset: 167,
                    },
                    end: {
                        line: 6,
                        col: 28,
                        offset: 190,
                    },
                },
            },
            {
                parent: -4,
                task: ' ',
                position: {
                    start: {
                        line: 7,
                        col: 5,
                        offset: 196,
                    },
                    end: {
                        line: 7,
                        col: 28,
                        offset: 219,
                    },
                },
            },
        ],
        v: 1,
    },
    obsidianApiVersion: '1.7.7',
    getAllTags: ['#task', '#task', '#task', '#task'],
    parseFrontMatterTags: null,
};
