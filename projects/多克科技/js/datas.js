

let getData = (key) => {
    // 主页
    let home = {
        "path": "./images/home/",
        "flashInfos": [
            {
                imgName: "flash-01.jpg",
                title: "因为专业，所以值得信赖",
                des: "多克的开发与运维服务拥有高质量和轻重量的优势，去除了传统外包技术公司高价格、低效率的缺点， 同时拥有不亚于其他传统外包技术公司的技术实力和高于其他外包公司的客户对接服务能力。 术业有专攻，多克坚信将点的技术服务做到极致，将收获面的回报。多克期待与您的合作。"
            },
            {
                imgName: "flash-02.jpg",
                title: "多克，一家与众不同的IT服务商",
                des: "互联网IT技术外包是一门技术，也是一门艺术。现在中国干这行的人，层出不穷，但客户作为一个外行， 却不明白其中的鱼目混珠。就因为有太多的三流技术人员，即使得这个行业一直处于打价格战的惨 烈状态，也使得一些客户,在刚建设完自己公司网站或网络系统后不久，不得不面临重建或改版的后悔局面， 最后还会因此与不靠谱的公司或人僵持不下。如何让我们获得您的信任呢？"
            },
            {
                imgName: "flash-03.jpg",
                title: "我们是从事多年web开发的前端工程师",
                des: "在做过那么多项目中，我们深知前端开发环节在整个项目中的重要性以及前端技术人才在市场的稀缺性， 所以我们组建工作室，力求为客户提供最优的前端解决方案。在一线城市，招聘一位全职前端开发人员， 我们中的成员均有5年以上的网页制作经验，其中部分成员曾在BAT公司就职过，每个队员擅长的侧重点也各不尽相同 （移动端,pc端,性能优化,等等）,我们相信术业有专攻且有能力提供最完美的WEB前端解决方案，如果您需要这方面的业务需求， 那么请毫不犹豫的联系我们。"
            }
        ],
        "contents": [
            {
                "class": "about-us",
                "subTitle": "about us",
                "title": "关于<span>我们</span>",
                "des": "成都多克科技有限公司是一家IT服务咨询等服务，</br>汇集IT人才精英，深度钻研于IT技术领域,</br>技术人员80%以上拥有劳动局及信息产业部颁发的工程师资质认证。",
                "icons": [
                    {
                        "imgName": "aboutus-service.png",
                        "title": "IT咨询服务"
                    },
                    {
                        "imgName": "aboutus-resources.png",
                        "title": "方案推荐"
                    },
                    {
                        "imgName": "aboutus-technology.png",
                        "title": "信息安全评估"
                    }
                ]
            },
            {
                "class": "we-do",
                "subTitle": "What We Do",
                "title": "我们<span>做什么？</span>",
                "des": "我们为客户提供涵盖桌面端、移动终端、服务器、网络及应用等以企业云为基础的IT服务。",
                "food": {
                    "imgName": "food.jpg",
                    "cName": "某知名餐饮公司",
                    "des": "营销和预约、排队、点餐、支付等服务，从线下拓展到线上，打造了商户与顾客之间、线上与线下高效连接的一体化全新生态服务体系。"
                },
                "list": [
                    {
                        "date": {
                            "day": "18",
                            "yearMonth": "2018-03"
                        },
                        "cname": "某知名制造公司",
                        "introduce": "客户将所有IT设备服务外包，引进了先进的ITIL服务架构体系，优化IT业务处理流程，同时去人事方面的一些成本,数据安全得到极大保障，员工对于网络资源的访问有序可控，极大提高了业务效率，年度IT运行报告让管理层对于本年度IT所发生的问题有全面了解，为将来IT规划与预算提供决策依据。",
                        "link": {
                            "tagName": "icon-tag.png",
                            "net": "javascript:;",
                            "text": "CRM业务处理系统"
                        }
                    },
                    {
                        "date": {
                            "day": "23",
                            "yearMonth": "2017-11"
                        },
                        "cname": "华浔品味装饰集团",
                        "introduce": "浔品味装饰集团有限公司，成立于1998年，已经成为中国室内装饰行业领军品牌，专业从事家居、写字楼、商铺、酒店等设计与施工，取得了国家建设部门颁发的设计、施工资质。先后被评为全国住宅装饰装修行业知名品牌企业、全国住宅装饰装修行业绿色低碳企业、全国住宅装饰装修行业质量、服务、诚信五星级企业。",
                        "link": {
                            "tagName": "icon-tag.png",
                            "net": "http://nnhxdec.h1.feishuhl.cn/",
                            "text": "http://nnhxdec.h1.feishuhl.cn/"
                        }
                    },
                    {
                        "date": {
                            "day": "08",
                            "yearMonth": "2017-09"
                        },
                        "cname": "领达电子有限公司",
                        "introduce": "领达电子技术有限公司是专业的工业在线连续式喷码设备供应商。从成立至今，公司致力于为客户提供完美的产品标识解决方案，营造高品质、高稳定性、最有性价比的喷码机。 公司主要经营英国领达小字符喷码系列、激光喷码机、大字符喷码机、 高解析喷码机、手持喷码机、输送设备、喷码机油墨溶剂耗材。产品广泛应用于电子、食品、饮料、医药、日用化工、汽车电器、鸡蛋、线材、管材等行业标记及防伪。可实现在产品上喷生产日期、批号、各种图形徽记、文字、二维码、条码等可变信息，并可配套高速生产。",
                        "link": {
                            "tagName": "icon-tag.png",
                            "net": "http://gxlddz.h1.feishuhl.cn/",
                            "text": "http://gxlddz.h1.feishuhl.cn/"
                        }
                    }
                ]
            },
            {
                "class": "service-proj",
                "subTitle": "Service Project",
                "title": "服务<span>项目</span>",
                "des": "我们为您的企业量身定制适合您的服务方案，</br>帮助企业建立企业信息战略架构，提供可预期的IT建设路线图，提高企业应对业务变化和抗风险的能力。",
                "items": [
                    {
                        "imgName": "service-item-01.png",
                        "des": "手机、微信、APP等移动端页面、响应式页面前端制作。",
                        "bgColor": "#f7a72d"
                    },
                    {
                        "imgName": "service-item-02.png",
                        "des": "客户提供PSD和接口文档，前端独立开发。",
                        "bgColor": "#e15e2b"
                    },
                    {
                        "imgName": "service-item-03.png",
                        "des": "承接大型项目前端开发任务，如oa,crm,erp系统前端开发。",
                        "bgColor": "#c32202"
                    }
                ]
            },
            {
                "class": "contact-us",
                "subTitle": "Contact Us",
                "title": "<span>联系</span>我们",
                "des": "",
                "map": "contactus-map.png",
                "bgImgName": "contactus-bg.jpg",
                "contact":"24小时联系电话：13552765305</br>公司邮箱：272784868@qq.com</br>公司地址：成都市高新区天府软件园B5"
            },
            {
                "class": "customer",
                "subTitle": "Customer",
                "title": "我们的<span>客户</span>",
                "des": "",
                "imgNames": [
                    [
                        "Customer-01.jpg",
                        "Customer-02.jpg",
                        "Customer-03.jpg",
                        "Customer-04.jpg"
                    ],
                    [
                        "Customer-05.jpg",
                        "Customer-06.jpg",
                        "Customer-07.jpg",
                        "Customer-08.jpg"
                    ]
                ]
            }
        ]
    }
    // 服务项目
    let serviceProj = {
        "path": "../images/service-proj/",
        infos: [
            {
                title: "网站服务",
                subTitle: "Web Services",
                des: "提供精美的前端页面",
                contents: [
                    {
                        bgColor: "#b7b940",
                        iconName: "icons-01.jpg",
                        title: "产品展示型",
                        des: "初创期企业，产品官网。以展示和宣传产品为主要方向。支持平台：手机、PC、APP、微信"
                    },
                    {
                        bgColor: "#47bf82",
                        iconName: "icons-02.jpg",
                        title: "企业官网型",
                        des: "发展期企业，初创期企业，企业官网。以展示企业实力和品牌战略为主要方向。支持平台：手机、PC、APP、微信"
                    },
                    {
                        bgColor: "#6e8bd6",
                        iconName: "icons-03.jpg",
                        title: "外贸专业型",
                        des: "外贸企业，多语言版本企业网站。支持语言：English。支持平台：手机、PC、APP、微信"
                    },
                    {
                        bgColor: "#ad53c4",
                        iconName: "icons-04.jpg",
                        title: "会员服务型",
                        des: "互联网投资企业、行业协会、行业领军企业、产业整合类企业。支持平台：手机、PC、APP、微信"
                    },
                    {
                        bgColor: "#e05d6d",
                        iconName: "icons-05.jpg",
                        title: "企业电商型",
                        des: "电商企业、传统企业转型、自建电商平台的淘企业。支持平台：手机、PC、APP、微信"
                    },
                ]
            },
            {
                title: "搜索服务",
                subTitle: "Seo Services",
                des: "万千世界更易找到您",
                contents: {
                    tag1: "搜索引擎聚合",
                    tag2: "锁定排名",
                    imgName: "search.png"
                }
            },
            {
                title: "后端服务",
                subTitle: "Backend Services",
                des: "科技帮助您飞跃发展",
                contents: [
                    {
                        iconName: "calculate.png",
                        title: "计算"
                    },
                    {
                        iconName: "storage.png",
                        title: "存储"
                    },
                    {
                        iconName: "net.png",
                        title: "网络"
                    },
                    {
                        iconName: "security.png",
                        title: "安全"
                    },
                ]
            },
            {
                title: "更多服务",
                subTitle: "More Services",
                des: "开启美好科技新生活",
                contents: [
                    {
                        title: "Web开发",
                        imgName: "more-service-01.jpg"
                    },
                    {
                        title: "应用开发",
                        imgName: "more-service-02.jpg"
                    },
                    {
                        title: "CRM",
                        imgName: "more-service-03.jpg"
                    },
                    {
                        title: "OA",
                        imgName: "more-service-04.jpg"
                    },
                    {
                        title: "ERP",
                        imgName: "more-service-05.jpg"
                    },
                    {
                        title: "IT咨询",
                        imgName: "more-service-06.jpg"
                    },
                    {
                        title: "产品解决方案",
                        imgName: "more-service-07.jpg"
                    },
                    {
                        title: "前后端一站式开发",
                        imgName: "more-service-08.jpg"
                    },
                    {
                        title: "网页设计",
                        imgName: "more-service-09.jpg"
                    },
                    {
                        title: "专属定制开发",
                        imgName: "more-service-10.jpg"
                    }
                ]
            }
        ]
    }
    // 制造流程
    let makeProcess = {
        "path": "../images/make-process/",
        infos: [
            {
                title: "我们的服务",
                subTitle: "Ours Services",
                des: "您只需提供一张网页效果图",
                imgName: "page.jpg"
            },
            {
                title: "项目合作",
                des: "专题设计、前端、开发一条龙服务，做完即可直接上线。</br>设计、前端、后台分类管理。",
                tagName: "cooperation.png",
                icons: [
                    {
                        title: "提交需求",
                        imgName: "icons-01.png"
                    },
                    {
                        title: "确立合作",
                        imgName: "icons-02.png"
                    },
                    {
                        title: "开发进行",
                        imgName: "icons-03.png"
                    },
                    {
                        title: "项目验收",
                        imgName: "icons-04.png"
                    }
                ],
                items: [
                    "我们的团队都是前端资深爱好者，工作细腻负责，每一笔订单都是一件代码艺术品，我们会精心为您雕琢。 写出的代码兼容IE6-11、谷歌、火狐、360浏览器、猎豹、搜狗等主流浏览器。",
                    "html5-01.jpg",
                    "html5-02.jpg",
                    "我们会适当的运动到您的网站，在各种高级浏览器上浏览，会让您的页面看起来，高端、大气、上档次。 我们会为订单项目提供前端技术支持和跟踪服务，直到项目顺利上线为止。"
                ]
            }
        ]
    }
    // 案例展示
    let caseDisplay = {
        "path": "../images/case-display/",
        infos: [
            {
                title: "会计财务报表系统",
                desList: [
                    "1、客户背景：代理记账，公司注册公司。客户的业务量挺大的，需要系统性管理业务。",
                    "2、服务方式：直接外包，发包方只需提出自己的意见与合理的需求。",
                    "3、it服务内容：提供技术支持、咨询服务、系统功能介绍、后期系统维护。",
                    "4、服务效果：通过4个月坚持不懈的努力，实现了企业平台化管理，包括业务，员工等方面。"
                ],
                imgName: "case-display-01.png"
            },
            {
                title: "留学住宿咨询站",
                desList: [
                    "1、客户背景：办理留国出学业务。目的为每一个出国学生找到更好，更有保障的住宿",
                    "2、服务方式：直接外包，发包方只需提出自己的意见与合理的需求",
                    "3、it服务内容：提供技术支持、咨询服务、网站信息更新介绍、后期网站维护。",
                    "4、服务效果：通过此平台学生可以直接在国内就可以找到自己心仪的公寓，不用东奔西跑了。"
                ],
                imgName: "case-display-02.png"
            },
            {
                title: "古摄影婚纱",
                desList: [
                    "1、客户背景：为行业著名婚纱摄影公司，全国各地都有其分公司",
                    "2、服务方式：1个项目经理 + 1个前端工程师+2个后台工程师 -> 驻场服务",
                    "3、it服务内容：提供技术支持、咨询服务、网站信息更新介绍、后期网站维护",
                    "4、服务效果：提升用户使用体验，提升公司发展声誉。"
                ],
                imgName: "case-display-03.png"
            },
            {
                title: "古摄影婚纱微信端",
                desList: [
                    "1、客户背景：为行业著名婚纱摄影公司，全国各地都有其分公司",
                    "2、服务方式：1个项目经理 + 1个前端工程师+2个后台工程师 -> 驻场服务。",
                    "3、it服务内容：提供技术支持、咨询服务、网站信息更新介绍、后期网站维护。",
                    "4、服务效果：提升用户使用体验，提升公司发展声誉。用户通过微信快速关注公司最新活动"
                ],
                imgName: "case-display-04.png"
            }
        ]
    }
    // 关于我们
    let aboutUs = {
        "path": "../images/about-us/",
        infos: [
            {
                title: "设计<span class='special-title'>理念</span>",
                des: "多克科技服务公司，我们作为国内互联网信息咨询服务机构，诚信、专业、规范、高效是我们的服务宗旨！信守千金诺！我们愿与您携手共同开创中国互联网发展的新未来！",
                imgName: "about-us-idea.png"
            },
            {
                title: "人才<span class='special-title'>招聘</span>",
                des: "虽然我们的开发设计人员具有多年的设计理念，但相比行业巨头我们还有很多不足，我们将在人才招聘方面严格层层把控，另外我们将在保持“专业的技能、规范高效的运作、周到的服务”的同时，稳步壮大技术团队、完善管理体系。争取早日成为国内最具影响力的互联网信息咨询服务机构之一。",
                imgName: "about-us-goal.png"
            },
            {
                title: "企业<span class='special-title'>文化</span>",
                des: "展望未来，多克科技将逐步汇聚、人才、技术等优势，进一步加强资源优化整合，形成整体经济合力，促进企业化深入发展，从而为客户提供更优质的服务，创造更大的经济效益和社会效益，为不断规范行业建设、促进行业发展和地方的经济腾飞作出积极贡献！",
                imgName: "about-us-vision.png"
            }
        ]
    };
    
    switch(key) {
        case "home": {
            return home;
        }break;
        case "serviceProj": {
            return serviceProj;
        }break;
        case "makeProcess": {
            return makeProcess;
        }break;
        case "caseDisplay": {
            return caseDisplay;
        }break;
        case "aboutUs": {
            return aboutUs;
        }break;

    }
}




















