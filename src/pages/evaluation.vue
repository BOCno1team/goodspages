<template>
  <div class="wrapper-body">
      <bfe-tabs class="warnTabs" v-model="activeName2" type="card" @tab-click="handleClick" v-if='isWrapperForm'>
        <bfe-tab-pane label="供给方指标评价" name="first" class="warn-tab-pane">
          <bfe-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <div class="row seconds-title">
              <div class="col-md-4 col">
                <bfe-form-item label="物资质量">
                  <bfe-rate
                    v-model="value2"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']" allow-half="true" :max="10">
                  </bfe-rate>
                </bfe-form-item>
              </div>
              <div class="col-md-4 col">
                <bfe-form-item label="供给速度">
                  <bfe-rate
                    v-model="value2"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']" allow-half="true" :max="10">
                  </bfe-rate>
                </bfe-form-item>
              </div>
              <div class="col-md-4 col">
                <bfe-form-item label="信息准确">
                  <bfe-rate
                    v-model="value2"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']" allow-half="true" :max="10">
                  </bfe-rate>
                </bfe-form-item>
              </div>
              <div class="col-md-4 col">
                <bfe-form-item label="按时交付">
                  <bfe-rate
                    v-model="value2"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']" allow-half="true" :max="10">
                  </bfe-rate>
                </bfe-form-item>
              </div>
              <div class="col-md-4 col">
                <bfe-form-item label="服务质量">
                  <bfe-rate
                    v-model="value2"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']" allow-half="true" :max="10">
                  </bfe-rate>
                </bfe-form-item>
              </div>
              <div class="col-md-12 col">
                <bfe-form-item class="commit">
                  <bfe-button type="primary" @click="submitForm('ruleForm')">提交</bfe-button>
                </bfe-form-item>
              </div>
            </div>
          </bfe-form>
        </bfe-tab-pane>
        
        <bfe-tab-pane label="需求方指标评价" name="second">
          <bfe-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <div class="row seconds-title">
              <div class="col-md-4 col">
                <bfe-form-item label="准确验收">
                  <bfe-rate
                    v-model="value2"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']" allow-half="true" :max="10">
                  </bfe-rate>
                </bfe-form-item>
              </div>
              <div class="col-md-4 col">
                <bfe-form-item label="实事求是">
                  <bfe-rate
                    v-model="value2"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']" allow-half="true" :max="10">
                  </bfe-rate>
                </bfe-form-item>
              </div>
              <div class="col-md-4 col">
                <bfe-form-item label="沟通态度">
                  <bfe-rate
                    v-model="value2"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']" allow-half="true" :max="10">
                  </bfe-rate>
                </bfe-form-item>
              </div>
              <div class="col-md-4 col">
                <bfe-form-item label="诚信守约">
                  <bfe-rate
                    v-model="value2"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']" allow-half="true" :max="10">
                  </bfe-rate>
                </bfe-form-item>
              </div>
              <div class="col-md-4 col">
                <bfe-form-item label="待定">
                  <bfe-rate
                    v-model="value2"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']" allow-half="true" :max="10">
                  </bfe-rate>
                </bfe-form-item>
              </div>
              <div class="col-md-12 col">
                <bfe-form-item class="commit">
                  <bfe-button type="primary" @click="submitForm('ruleForm')">提交</bfe-button>
                </bfe-form-item>
              </div>
            </div>
          </bfe-form>
        </bfe-tab-pane>

        <bfe-tab-pane label="实施方指标评价" name="three">
          <bfe-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <div class="row seconds-title">
              <div class="col-md-4 col">
                <bfe-form-item label="实施质量">
                  <bfe-rate
                    v-model="value2"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']" allow-half="true" :max="10">
                  </bfe-rate>
                </bfe-form-item>
              </div>
              <div class="col-md-4 col">
                <bfe-form-item label="服务态度">
                  <bfe-rate
                    v-model="value2"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']" allow-half="true" :max="10">
                  </bfe-rate>
                </bfe-form-item>
              </div>
              <div class="col-md-4 col">
                <bfe-form-item label="诚信守时">
                  <bfe-rate
                    v-model="value2"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']" allow-half="true" :max="10">
                  </bfe-rate>
                </bfe-form-item>
              </div>
              <div class="col-md-4 col">
                <bfe-form-item label="物尽其用">
                  <bfe-rate
                    v-model="value2"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']" allow-half="true" :max="10">
                  </bfe-rate>
                </bfe-form-item>
              </div>
              <div class="col-md-4 col">
                <bfe-form-item label="实施效率">
                  <bfe-rate
                    v-model="value2"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']" allow-half="true" :max="10">
                  </bfe-rate>
                </bfe-form-item>
              </div>
              <div class="col-md-12 col">
                <bfe-form-item class="commit">
                  <bfe-button type="primary" @click="submitForm('ruleForm')">提交</bfe-button>
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
      value2: null
    }
  },
  updated() {
    console.log(this.value2)
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
  .bfe-rate {
    width: 130px;
  }
</style>