<template>
    <div>
        <div class="list">
            <div class="menu-list">
                <!--  <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-submenu index="1" v-for="item in menuList" :key="item.id">
                        <template slot="title">
                            <span>{{ item.title }}</span>
                            <span class="right-dian">...</span>
                        </template>
                        <el-menu-item-group v-for="child in item.children" :key="child.id">
                            <template slot="title">{{ child.title }}</template>
                        </el-menu-item-group>

                    </el-submenu>
                </el-menu> -->
                <el-button type="paramy" @click="appendFirs">添加名称大类</el-button>
                <el-tree :data="menuList" :props="defaultProps" @node-click="handleNodeClick">
                    <span class="custom-tree-node" slot-scope="{ node, data }">
                        <span>{{ node.label }}</span>
                        <span>
                            <el-button type="text" v-if="data.children" size="mini" icon="el-icon-plus"
                                @click="() => append(data)"></el-button>
                            <el-button type="text" size="mini" icon="el-icon-edit" @click="() => edit(data)"> </el-button>
                            <el-button type="text" size="mini" icon="el-icon-delete"
                                @click="() => remove(node, data)"></el-button>
                        </span>
                    </span>
                </el-tree>
            </div>
            <div class="table-list">
                <el-table :data="tableData" :span-method="arraySpanMethod" border style="width: 100%">
                    <el-table-column prop="id" label="ID" width="180">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名">
                    </el-table-column>
                    <el-table-column prop="amount1" sortable label="数值 1">
                    </el-table-column>
                    <el-table-column prop="amount2" sortable label="数值 2">
                    </el-table-column>
                    <el-table-column prop="amount3" sortable label="数值 3">
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script>
let id = 1000;
export default {

    data() {
        return {
            tableData: [
                {
                    id: '12987122',
                    name: '王小虎',
                    amount1: '234',
                    amount2: '3.2',
                    amount3: 10
                }, {
                    id: '12987124',
                    name: '王小虎',
                    amount1: '165',
                    amount2: '4.43',
                    amount3: 12
                }, {
                    id: '12987124',
                    name: '王小虎',
                    amount1: '324',
                    amount2: '1.9',
                    amount3: 9
                }, {
                    id: '12987125',
                    name: '王小虎',
                    amount1: '621',
                    amount2: '2.2',
                    amount3: 17
                }, {
                    id: '12987126',
                    name: '王小虎',
                    amount1: '539',
                    amount2: '4.1',
                    amount3: 15
                }
            ],
            menuList: [
                {
                    id: 1,
                    title: '目录一',
                    children: [
                        {
                            id: '1-1',
                            title: '黑名单'
                        },
                        {
                            id: '1-2',
                            title: '白名单'
                        }
                    ],
                }
            ],
            defaultProps: {
                label: 'title',
                children: 'children'
            }
        };
    },
    methods: {
        /*  合并的方法，里面row，colomn是这一行这一列的对象，rowIndex和colIndex就是行列的index 
          从0-n  rowspan表示合并的行 大于1表示要往下合并了，然后下方被合并的rowspan就是0，0代表被合并了，1代表正常情况 */
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            console.log(row, column,);
            //columnIndex代表哪几列需要合并，后面会用
            let columnArr = [0]
            let jobArr = [];  //所有职业id  从第一个数据到最后一个
            for (let k in this.tableData) {
                jobArr.push(this.tableData[k].id)
            }
            /* 
                获取到每个id出现的次数
            */
            let obj = {}
            for (let i = 0; i < jobArr.length; i++) {
                if (obj[jobArr[i]] == undefined) {
                    obj[jobArr[i]] = 1
                } else {
                    obj[jobArr[i]]++
                }
            }
            // console.log("obj", obj);   //包含每个id以及其出现的次数，为后面合并做铺垫
            let spanArr = [];  //每一行就是一条数据，该数组每一个值就是当前行的rowspan数
            let doneArr = []   //保存被合并了的id，如果再出现，表示被合并
            for (let i = 0; i < jobArr.length; i++) {
                //看看个数
                if (doneArr.includes(jobArr[i])) {
                    //如果这个id被合并过了，说明刚刚上方有一样的id，这一项就是被合并的
                    spanArr.push(0)
                } else {
                    //如果没合并，就往下合并，spanArr里推入这个id的个数，在obj中就有
                    spanArr.push(obj[jobArr[i]])
                    //别忘了合并完把id放进doneArr中
                    doneArr.push(jobArr[i])
                }
            }
            //如果是第0列和第3列
            if (columnArr.includes(columnIndex)) {
                //遍历合并个数的数组
                for (let i = 0; i < spanArr.length; i++) {
                    //如果是该行，行合并个数就是这一项的值，列不合并，所以是1
                    if (rowIndex == i) {
                        return {
                            rowspan: spanArr[i],
                            colspan: 1
                        }
                    }
                }
            }
        },
        handleNodeClick(data) {
            console.log(data);
        },
        appendFirs() { },
        append(data) {
            console.log('data', data);
            const newChild = { id: id++, label: 'testtest', children: [] };
            if (!data.children) {
                this.$set(data, 'children', []);
            }
            data.children.push(newChild);
        },
        edit(data) {
            console.log(data);
        },
        remove(node, data) {
            const parent = node.parent;
            const children = parent.data.children || parent.data;
            const index = children.findIndex(d => d.id === data.id);
            children.splice(index, 1);
        },
    },

};
</script>
<style lang="less" scoped>
.list {
    display: flex;
    padding: 20px;
}

.menu-list {
    width: 200px;
}

.table-list {
    flex: 1
}

/deep/ .el-submenu__title {
    display: flex;
    justify-content: space-around;
}

.right-dian {
    display: inline-block;
    transform: rotate(-90deg);
    color: #1770ff;
}

/deep/ i.el-submenu__icon-arrow.el-icon-arrow-down {
    position: absolute;
    margin: auto;
    top: 24px;
    left: -105px;
}

span.custom-tree-node {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-right: 30px
}
</style>