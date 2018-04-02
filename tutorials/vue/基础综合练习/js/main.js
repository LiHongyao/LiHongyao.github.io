/**
 * 功能：vue 基础练习
 * 作者：李鸿耀
 * 时间：2017/11/22
 */

Vue.config.silent = true;

new Vue({
    el: "#app",
    data: {
        buttonName: "创建角色",
        modifyStatus: false,
        operateObjIndex: NaN,
        hero: {
            name: "",
            position: "",
            skill: "",
            road: ""
        },
        heros: [
            {
                name: "露娜",
                position: "打野",
                skill: "月下无限连",
                road: "野区"
            },
            {
                name: "哪吒",
                position: "战士",
                skill: "炙炼火种",
                road: "上路"
            },
            {
                name: "雅典娜",
                position: "战士",
                skill: "真神觉醒",
                road: "上路"
            }
        ]
    },
    methods: {
        // 创建角色
        createHero: function () {
            if(this.modifyStatus) {
                this.heros.splice(this.operateObjIndex, 1, this.hero);
                this.buttonName = "创建角色";
            }else {
                this.modifyStatus = false;
                this.heros.push(this.hero);
            }

            this.hero = {
                name: "",
                position: "",
                skill: "",
                road: ""
            }
        },
        // 删除角色
        deleteHero: function (index) {
            this.heros.splice(index, 1);
        },
        // 编辑角色
        editHero: function (index) {
            this.operateObjIndex = index;
            this.modifyStatus = true;
            this.buttonName = "确认修改";
            this.hero = {
                name: this.heros[index].name,
                position: this.heros[index].position,
                skill: this.heros[index].skill,
                road: this.heros[index].road
            };
        }
    }
});







