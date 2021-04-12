module.exports = {
    lintOnSave: false,
    configureWebpack: {},
    devServer: {
        open: true,
        before: app => {
            app.get('/api/goods', function (res, reps) {
                reps.json({
                    "code": 0,
                    "data": {
                        "aside": [
                            {
                                "name": "导航一",
                                "index": "1",
                                "icon": "el-icon-menu",
                                "group": [
                                    {
                                        "name": "分组一",
                                        "group": [
                                            {
                                                "name": "选项1",
                                                "index": "1-1"
                                            },
                                            {
                                                "name": "选项2",
                                                "index": "1-2"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "导航一",
                                "index": "2",
                                "icon": "el-icon-menu",
                                "group": [
                                    {
                                        "name": "分组一",
                                        "group": [
                                            {
                                                "name": "选项1",
                                                "index": "2-1"
                                            },
                                            {
                                                "name": "选项2",
                                                "index": "2-2"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                })
            })
        }
    }
}
