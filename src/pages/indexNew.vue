<template>
  <div class="wrapper-body">
      <bfe-tabs class="warnTabs" v-model="activeName2" type="card" @tab-click="handleClick" v-if='isWrapperForm'>
        <bfe-tab-pane label="供给物品" name="first" class="warn-tab-pane">
          <bfe-form :model="supplyForm" :rules="rules" ref="supplyForm" label-width="106px" class="demo-ruleForm">
            <div class="row seconds-title">
              <div class="col-md-4 col">
                <bfe-form-item label="供给方名称" prop="supplyName">
                  <bfe-input v-model="supplyForm.supplyName" :disabled="true"></bfe-input>
                </bfe-form-item>
              </div>
              <div class="col-md-4 col">
                <bfe-form-item label="供给物品名称" prop="name">
                  <bfe-input v-model="supplyForm.name"></bfe-input>
                </bfe-form-item>
              </div>
              <div class="col-md-4 col">
                <bfe-form-item label="供给方ID" prop="provider">
                  <bfe-input v-model="supplyForm.provider"></bfe-input>
                </bfe-form-item>
              </div>
              <div class="col-md-4 col">
                <bfe-form-item label="供给物品ID" prop="supplyId">
                  <bfe-input v-model="supplyForm.supplyId"></bfe-input>
                </bfe-form-item>
              </div>
              <div class="col-md-4 col">
                <bfe-form-item label="数量" prop="amount">
                  <bfe-input v-model="supplyForm.amount"></bfe-input>
                </bfe-form-item>
              </div>
              <div class="col-md-4 col">
                <bfe-form-item label="单位" prop="unit">
                  <bfe-input v-model="supplyForm.unit"></bfe-input>
                </bfe-form-item>
              </div>
              <div class="col-md-4 col">
                <bfe-form-item label="单位价格" prop="unitPrice">
                  <bfe-input v-model="supplyForm.unitPrice"></bfe-input>
                </bfe-form-item>
              </div>
              <div class="col-md-12 col">
                <bfe-form-item class="commit">
                  <bfe-button type="primary" @click="submitSupplyForm">提交</bfe-button>
                  <bfe-button @click="resetSupplyForm" class="bfe-button--primary">重置</bfe-button>
                </bfe-form-item>
              </div>
            </div>
          </bfe-form>
        </bfe-tab-pane>
        <!-- 财务信息页面  -->
        <bfe-tab-pane label="需求物品" name="second">
          <bfe-form :model="demandForm" :rules="demanRrules" ref="demandForm" label-width="106px" class="demo-ruleForm">
            <div class="row seconds-title">
              <div class="col-md-4 col">
                <bfe-form-item label="需求方ID" prop="DemanderId">
                  <bfe-input v-model="demandForm.DemanderId"></bfe-input>
                </bfe-form-item>
              </div>
              <div class="col-md-4 col">
                <bfe-form-item label="需求物品ID" prop="demandId">
                  <bfe-input v-model="demandForm.demandId"></bfe-input>
                </bfe-form-item>
              </div>
              <div class="col-md-4 col">
                <bfe-form-item label="需求物品名称" prop="name">
                  <bfe-input v-model="demandForm.name"></bfe-input>
                </bfe-form-item>
              </div>
              <div class="col-md-4 col">
                <bfe-form-item label="需求物品种类" prop="category">
                  <bfe-input v-model="demandForm.category"></bfe-input>
                </bfe-form-item>
              </div>
              <div class="col-md-4 col">
                <bfe-form-item label="数量" prop="amount">
                  <bfe-input v-model="demandForm.amount"></bfe-input>
                </bfe-form-item>
              </div>
              <div class="col-md-4 col">
                <bfe-form-item label="单位" prop="unit">
                  <bfe-input v-model="demandForm.unit"></bfe-input>
                </bfe-form-item>
              </div>
              <div class="col-md-12 col">
                <bfe-form-item class="commit">
                  <bfe-button type="primary" @click="submmitDemandForm">提交</bfe-button>
                  <bfe-button @click="resetDemandForm" class="bfe-button--primary">重置</bfe-button>
                </bfe-form-item>
              </div>
            </div>
          </bfe-form>
        </bfe-tab-pane>
      </bfe-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isWrapperForm: true,
      activeName2: 'first',
      supplyForm: {
        supplyName: '',
        name: '',
        provider: '',
        supplyId: '',
        amount: '',
        unit: '',
        unitPrice: ''
      },
      rules: {
        supplyName: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        provider: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        supplyId: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        amount: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        unit: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        unitPrice: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      },
      demandForm: {
        DemanderId: '',
        name: '',
        category: '',
        demandId: '',
        amount: '',
        unit: ''
      }
      // demanRrules: {
      //   category: [
      //     { required: true, message: '请输入活动名称', trigger: 'blur' },
      //     { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      //   ],
      //   name: [
      //     { required: true, message: '请选择活动区域', trigger: 'change' }
      //   ],
      //   DemanderId: [
      //     { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
      //   ],
      //   demandId: [
      //     { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
      //   ],
      //   amount: [
      //     { type: 'Number', required: true, message: '请输入一个整数', trigger: 'change' }
      //   ],
      //   unit: [
      //     { required: true, message: '请选择活动资源', trigger: 'change' }
      //   ]
      // }
    }
  },
  methods: {
    submitSupplyForm() {
      this.$refs.supplyForm.validate((valid) => {
        if (valid) {
          this.$router.push("/supplyDemand")
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetSupplyForm() {
      this.$refs.supplyForm.resetFields();
    },
    submmitDemandForm() {
      this.$refs.demandForm.validate((valid) => {
        if (valid) {
          // this.axios.post('')
          // .then(res => {
          //   if (this.$CU.isOK(res)) {
          //     this.$router.push("/supplyDemand")
          //   } else {
          //     this.$alert('暂无数据', '提示', {
          //       confirmButtonText: '确定',
          //       type: 'info'
          //     });
          //   }
          // })
          // .catch(err => {
          //   this.$alert('请求失败! ' + err, '提示', {
          //     confirmButtonText: '确定',
          //     type: 'error'
          //   });
          // })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetDemandForm() {
      this.$refs.demandForm.resetFields();
    }
  }
}
</script>

<style>
  .wrapper-body {
    margin-top: 10px;
    margin-bottom: 10px;
    overflow: hidden;
  }
  
  .bfe-breadcrumb {
    font-size: 14px;
    line-height: 14px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .warnTabs {
    margin: 25px auto;
    border: 0;
  }
  
  .warnTabs>.bfe-tabs__header {
    border-bottom: 0;
    margin: 0 0 50px 0;
  }
  
  .warnTabs>.bfe-tabs__content {
    height: 900px;
  }
  
  .warnTabs>.bfe-tabs__header>.bfe-tabs__nav-wrap>.bfe-tabs__nav-scroll {
    display: flex;
    justify-content: center;
  }
  
  .warnTabs>.bfe-tabs__header>.bfe-tabs__nav-wrap>.bfe-tabs__nav-scroll>.bfe-tabs__nav>.bfe-tabs__item {
    padding: 0 40px;
    color: #337ab7;
  }
  .warnTabs>.bfe-tabs__header>.bfe-tabs__nav-wrap>.bfe-tabs__nav-scroll>.bfe-tabs__nav>.bfe-tabs__item:hover {
    background-color: #e7e7e7;
    border-radius: 3px;
  }

  .warnTabs>.bfe-tabs__header>.bfe-tabs__nav-wrap>.bfe-tabs__nav-scroll>.bfe-tabs__nav>.bfe-tabs__item.is-active {
    color: #555;
  }
  
  .warn-tab-pane {
    line-height: 60px;
    font-size: 25px;
  }
  
  .seconds-title {
    width: 850px;
    margin: auto;
  }
  .bfe-form-item {
    margin-right: 20px;
  }
  .commit {
    margin-top: 30px;
  }
  .commit .bfe-form-item__content {
    margin-left: 690px !important;
  }
</style>