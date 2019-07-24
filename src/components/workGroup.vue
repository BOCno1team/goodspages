<template>
	<div class="workGroup">
		<p>说明: 请发布最新救援工作状态/Instructions: Please release the latest rescue status</p>
		<el-tabs v-model="editableTabsValue" type="card">
			<el-tab-pane v-for="(item, index) in editableTabs" :key="index" :label="item.name + - + item.id">
				{{item.content}}
			</el-tab-pane>
		</el-tabs>
		<div style="margin-bottom: 20px;">
			<el-input
				type="textarea"
				autosize
				placeholder="请输入内容"
				v-model="publisherInfo">
			</el-input>
			<el-button size="small"	@click="addInfo" class="addInfoBtn">
					发布
			</el-button>
		</div>
    <el-form ref="workGroupForm" :model="workGroupForm" label-width="100px">
			<el-form-item label="供应方" class="supplyItem">
				<el-button  class="ipt">{{supplyName + '-' + supplyID}}</el-button>
				<el-checkbox name="supplyType" v-model="checked1" :disabled="disabledSupply"></el-checkbox>
			</el-form-item>
			<el-form-item label="需求方" class="demandItem">
				<el-button  class="ipt">{{demandName-demandID}}</el-button>
				<el-checkbox name="demandItemType" v-model="checked2" :disabled="disabledDemand"></el-checkbox>
			</el-form-item>
			<el-form-item label="实施方" class="demandItem">
				<el-button class="ipt">{{implementName-implementID}}</el-button>
				<el-checkbox name="implementType" v-model="checked3" :disabled="disabledImplement"></el-checkbox>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit" class="addInfoBtn">评价</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
export default {
	data() {
		return {
			editableTabsValue: '2',
			editableTabs: [{
				id: null,
				name: null,
				content: null
			}],
			publisherInfo: null,
			tabIndex: '',
			demandId: '',
			checked1: true,
			disabledSupply: true,
			checked2: false,
			disabledDemand: false,
			checked3: true,
			disabledImplement: true,
			workGroupForm: {
				supplierUser: '',
				supplyType: [],
				demandItemType: [],
				implementType: []
			},
			userInfos: '',
			supplyName: '小明',
			supplyID: '01',
			demandName: null,
			demandID: null,
			implementName: null,
			implementID: null
		}
	},
	mounted() {
		console.log(JSON.parse(this.$route.query.DemandID))
		this.demandId = JSON.parse(this.$route.query.DemandID)
  },
	methods: {
		addInfo() {
			let userInfo = {
				goodsId: this.demandId,
				content: this.publisherInfo
			}
			if(this.publisherInfo !== null) {
				this.axios.post('/awp/WorkingMessageServlet', userInfo)
				.then(res => {
					if (this.$CU.isOK(res)) {
						res.data.orgList.map(item => {
							console.log(item)
							this.userInfos = item
						})
						let newTabName = ++this.tabIndex + '';
						this.editableTabs.push({
							id: this.userInfos,
							name: this.userInfos,
							content: this.publisherInfo
						});
						this.editableTabsValue = newTabName;
						this.publisherInfo = null
					} else {
						this.loading = false
						this.$alert('暂无数据', '提示', {
							confirmButtonText: '确定',
							type: 'info'
						});
					}
				})
				.catch(err => {
					console.log(err)
					this.loading = false
					this.$alert('请求失败! ' + err, '提示', {
						confirmButtonText: '确定',
						type: 'error'
					});
				})
			}else {
				this.$alert('请输入内容', '提示', {
					confirmButtonText: '确定',
					type: 'info'
				});
			}
		},
		onSubmit() {

		}
	}
}
</script>
<style>
.workGroup{
	width: 750px;
	margin: auto;
}
.workGroup p{
	color: #be2e3e;
	font-size: 18px;
	font-weight: 600;
	text-align: center;
	margin: 20px 0;
}
.workGroup .el-tabs {
	width: 750px;
	margin: auto;
	margin-bottom: 20px;
	height: 430px;
	overflow-y: scroll;
	border: 1px solid #c5c5c5;
}
.workGroup .el-tabs>.el-tabs__header {
	width: 150px;
	float: left;
}
.workGroup .el-tabs>.el-tabs__header .el-tabs__item {
	display: block;
	color: #be2e3e;
}
.workGroup .el-textarea {
	width: 680px;
}
.workGroup .el-textarea>.el-textarea__inner {
	min-height: 39px !important;
	height: 39px !important;
}
.workGroup .el-textarea>.el-textarea__inner:focus {
	border: 1px solid #be2e3e !important;
}
.workGroup .el-form-item .el-form-item__content {
	margin-left: 50px !important;
}
.workGroup .addInfoBtn {
	float: right;
	background: #be2e3e;
	border: 0;
	color: #fff;
	padding: 12px 15px;
	font-size: 14px;
}
.workGroup .el-button:hover {
	opacity: .8;
}
.workGroup .el-button:active {
	opacity: .8;
}
#tab-0 {
	display: none;
}
.ipt {
	width: 120px;
	float: left;
	margin-right: 20px;
	margin-top: 5px;
	height: 35px;
}
.supplyItem {
	float: left;
}
.demandItem {
	float: left;
}
.supplyItem .el-form-item__label {
	width: 60px !important;
}
.supplyItem .el-form-item__content {
	width: 170px !important;
}
.demandItem .el-form-item__label {
	width: 60px !important;
}
.demandItem .el-form-item__content {
	width: 170px !important;
}
</style>

