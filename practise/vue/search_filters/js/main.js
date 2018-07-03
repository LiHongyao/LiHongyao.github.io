



let model = {
    keyWords: "",
    columns: ["序号","角色", "定位", "特长", "技能", "位置"],
    keys: ["ordinal", "role", "position", "specialSkill", "skill", "location"],
    datas: [
        {
            ordinal: "D-001",
            role: "雅典娜",
            position: "战士/坦克",
            specialSkill: "突进",
            skill: "敬畏圣盾",
            location: "上路"
        },
        {
            ordinal: "D-002",
            role: "宫本武藏",
            position: "战士",
            specialSkill: "突进/收割",
            skill: "二天一流",
            location: "上路"
        },
        {
            ordinal: "D-003",
            role: "李鸿章",
            position: "辅助",
            specialSkill: "坦克/控制",
            skill: "金钟罩",
            location: "下路"
        },
        {
            ordinal: "D-004",
            role: "李白",
            position: "战士/刺客",
            specialSkill: "突进/收割",
            skill: "青莲剑歌",
            location: "野区"
        },
        {
            ordinal: "D-005",
            role: "王昭君",
            position: "法师",
            specialSkill: "团控",
            skill: "凛冬已至",
            location: "中路"
        },
        {
            ordinal: "D-006",
            role: "李元芳",
            position: "射手",
            specialSkill: "突进/收割",
            skill: "无间刃风",
            location: "野区"
        },
        {
            ordinal: "D-007",
            role: "花木兰",
            position: "战士/刺客",
            specialSkill: "突进/收割",
            skill: "绽放刀锋",
            location: "上路"
        },
        {
            ordinal: "D-008",
            role: "李鸿耀",
            position: "战士/刺客",
            specialSkill: "突进/收割",
            skill: "无限开车",
            location: "上路"
        }
    ]
}




let vm = new Vue({
    el: "#app",
    data: model,
    methods: {
        filterArr: function (heros) {
            let _this = this;
            return heros.filter(function (hero) {
                let reg = new RegExp(_this.keyWords);
                // 模糊查询
                return reg.test(JSON.stringify(hero));
            })
        }
    }
});

















