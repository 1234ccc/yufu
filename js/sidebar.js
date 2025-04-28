import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            tables: [
                {
                    caption: '各类资源',
                    colWidths: ['33%', '33%', ''],
                    rows: [
                        [
                            { text: '翻墙', href: '../index.html' },
                            { text: '暗网', href: './dark_net.html' },
                            { text: '接码平台', href: './jie_ma.html' }
                        ],
                        [
                            { text: '图书网站', href: './book_website.html' },
                            { text: '各类书籍', href: './fen_lei_book.html' },
                            { text: '天涯神贴', href: './tian_ya.html' }
                        ],
                        [
                            { text: '绝版书', href: './jue_ban_book.html' },
                            { text: '书籍格式转换', href: './book_trans.html' },
                            { text: '虚拟币', href: './btc.html' }
                        ],
                        [
                            { text: '传输工具', href: './chuan_shu_tool.html' },
                            { text: '新闻网站', href: './news_website.html' }
                        ]
                    ]
                },
                {
                    caption: '账号注册',
                    colWidths: ['50%', ''],
                    rows: [
                        [
                            { text: '谷歌', href: './google_re.html' },
                            { text: '其他账号', href: './account_re.html' }
                        ]
                    ]
                },
                {
                    caption: 'CC说词',
                    colWidths: ['33%', '33%', ''],
                    rows: [
                        [
                            { text: '博弈', href: './CC_say.html' },
                            { text: '信息传播', href: './CC_say.html' },
                            { text: '政治', href: './CC_say.html' }
                        ],
                        [
                            { text: '时间', href: './CC_say.html' },
                            { text: '朋友', href: './CC_say.html' },
                            { text: '...', href: './CC_say.html' }
                        ]
                    ]
                },{
                    caption: '战争',
                    colWidths: ['50%', ''],
                    rows: []
                }
            ]
        };
    }
}).mount('.sidebar');