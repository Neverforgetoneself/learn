<template>
  <div id="app">
    <!-- <dc-form :model="formData" ref="fromRule" :rules="formRules" label-width="80px">

      <dc-form-item label="爱好1" prop="hobby5" placeholder="输入hobby5" type="text" v-model="formData.hobby5" />


      <dc-form-item label="爱好2" prop="hobby1" :readonly="false" placeholder="输入爱好"
        :inTextSuffix="['el-icon-delete-solid', '元']" :inTextPrefix="['人', 'el-icon-user']" type="text" :clearable="true"
        v-model="formData.hobby1" :rules="{ required: true, message: '输入爱好', trigger: 'blur' }" /> -->

    <!--  <dc-form-item label="爱好2" name="hobby1" :readonly="false" placeholder="输入爱好"
        :inTextSuffix="['el-icon-delete-solid', '元']" :inTextPrefix="['人', 'el-icon-user']" type="text" :clearable="true"
         :rules="{ required: true, message: '输入爱好', trigger: 'blur' }" /> -->

    <!-- <dc-form-item label="爱好3" prop="hobby2" :readonly="false" placeholder="输入爱好" type="text"
        outTextPrepend="el-icon-user" outTextAppend="元" v-model="formData.hobby2"
        :rules="{ required: true, message: '输入爱好', trigger: 'blur' }" />

      <dc-form-item label="爱好4" prop="hobby6" :readonly="false" placeholder="输入爱好" :inTextSuffix="['元']"
        :inTextPrefix="['人']" type="text" outTextAppend="el-icon-delete-solid" outTextPrepend="el-icon-user"
        v-model="formData.hobby6" :rules="{ required: true, message: '输入爱好', trigger: 'blur' }" />

      <dc-form-item label="爱好5" prop="hobby4" :readonly="false" placeholder="输入爱好" type="text"
        :outTextBtn="[{ icon: 'el-icon-zoom-in', content: '增加1', slot: 'append' }, { icon: 'el-icon-search', content: '增加2', slot: 'prepend' }]"
        v-model="formData.hobby4" />

      <dc-form-item label="爱好6" prop="hobby3" placeholder="输入爱好" type="textTootipy" :isShowTooltip="true"
        v-model="formData.hobby3" />

      <dc-form-item label="备注1" prop="remarks" placeholder="输入1备注" type="textarea" maxlength="30" show-word-limit
        v-model="formData.remarks" :rules="remarks" />

      <dc-form-item label="备注2" prop="remarks2" paceholder="输入2备注" type="textarea" maxlength="30" show-word-limit
        v-model="formData.remarks2" />

      <dc-form-item label="时间1" prop="date1" placeholder="选择时间1" type="date" v-model="formData.date1" />
      <dc-form-item label="时间1" prop="date4" placeholder="选择周" type="date" date-type="week" format="yyyy年第MM周"
        v-model="formData.date4" />

      <dc-form-item label="时间5" prop="dateStart" start-placeholder="选择日期" end-placeholder="自定义值" type="dateSE"
        :start-date.sync="formData.dateStart" :end-date.sync="formData.dateEnd" />

      <el-row>
        <el-col :span="10">
          <dc-form-item label="时间2" prop="date2" type="date" date-type="daterange" v-model="formData.date2" />
        </el-col>
        <el-col :span="10">
          <dc-form-item label="时间3" prop="date3" type="date" date-type="daterange" v-model="formData.date3"
            range-separator="至" start-placeholder="自定义值" end-placeholder="自定义值" />
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="10">
          <dc-form-item type="select" label="选择1" prop="check" dictCode="DEMO" :isMultiple="false"
            v-model="formData.check" :isDictFilter="true" :excludeCodes="['1']" />
        </el-col>
        <el-col :span="10">
          <dc-form-item type="select" label="选择2" dictCode="DEMO" :isMultiple="true" :multipleLimit="2"
            v-model="formData.dictList" :isDictFilter="true" :includeCodes="['2', '3', '4']">
          </dc-form-item>
        </el-col>
      </el-row>


    </dc-form>
    <el-button @click="save" type="primary">提交</el-button> -->
    <!--  <router-link to="/home"></router-link>

    <button @click='addNum'>首页</button>
    <hr /> <router-view name="default"></router-view>
    <hr />
    <router-view name="two"></router-view>
    <hr />
    <router-view name="three"></router-view> -->

    <!-- <dc-table></dc-table> -->
    <HomeC />
    <router-view></router-view>
    <el-button type="paramy">返回</el-button>
  </div>
</template>

<script>
// import DcTable from './dcTable/dcTable.vue';
import HomeC from './home.vue'
export default {
  name: 'App',
  data() {
    return {
      formData: {
        name: 'qw',
        remarks: '',
        age: '',
        dictList: [],
        check: '',
        date4: [],
        dateStart: '2023-06-27',
        dateEnd: '2023-06-28',
      },
      formRules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        check: { required: true, message: '内容不能为空', trigger: 'blur' },
        hobby3: { required: true, message: '内容不能为空', trigger: 'blur' },
        date1: { required: true, message: '内容不能为空', trigger: 'blur' },
        date5: { required: true, message: '内容不能为空', trigger: 'blur' },
      },
      remarks: {
        required: true, message: '不能为空', trigger: 'change'
      },
    }
  },
  methods: {
    addNum() {
      this.$router.push({
        path: '/about',
        query: {
          list: [{ x: '112', x2: null, x3: undefined }, { x: '112', x2: '112', x3: '112' }, { x: '112', x2: '112', x3: '112' }, { x: '112', x2: '112', x3: '112' }],
          name: '123'
        }
      })
    },
    btnClick() {
      console.log('xxxx');
    },
    save() {
      this.$refs.fromRule.validate(valid => {
        console.log('valid', valid);
      })
    },
  },
  components: {
    // DcTable
    HomeC
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
