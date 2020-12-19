module. exports = {
    extends:['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat', //新功能(feature)
                'fix', //修复bug
                'update', //对最近提交的新功能进行补充
                'pref', //性能相关
                'docs', //文档相关(documentation )
                'styles', //格式(不影响代码运行的变动)
                'refactor', //重构(既不是新增功能，也不是修改bug的代码变动)
                'test', //测试相关
                'css', // 样式相关
                'build', //修改项目构建相关，例如webpack、npm等
                'revert', //分支回溯
                'chore', //其他改动
            ],
        ],    
        'subject-full-stop': [0,'never'],
        'subject-case': [0,'never'],
    },
};  
