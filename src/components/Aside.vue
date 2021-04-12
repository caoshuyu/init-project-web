<template>
    <div id="Aside">
        <el-radio-group :v-model="isCollapse" style="margin-bottom: 20px;">
            <el-button @click="changeButtonType">{{buttonText}}</el-button>
        </el-radio-group>
        <div class="aside">
            <div :class="{open:!isCollapse}">
                <el-menu class="el-menu-vertical"
                         :collapse="isCollapse">
                    <el-submenu v-for="(aside,index) in asideList" :key="index" :index="aside.index">
                        <template slot="title">
                            <i :class="aside.icon"></i>
                            <span slot="title">{{aside.name}}</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item v-for="(v,i) in aside.group" :key="i" :index="v.index">{{v.name}}</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"

    export default {
        name: "Aside",
        data() {
            return {
                isCollapse: true,
                buttonText: '>>',
                asideList:{}
            };
        },
        async created() {
            try {
                const resp = await axios.get('/api/goods');
                this.asideList = resp.data.data.aside
            } catch (e) {
                console.log(e)
            }
        },
        methods: {
            changeButtonType() {
                if (this.isCollapse) {
                    this.isCollapse = false;
                    this.buttonText = '<<';
                } else {
                    this.isCollapse = true;
                    this.buttonText = '>>';
                }
            }
        }
    }
</script>

<style scoped>
    .aside {
        min-height: 900px;
        text-align: center;
    }

    .open {
        min-width: 200px;
    }

</style>