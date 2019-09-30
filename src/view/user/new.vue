<template>
  <div class="container">
    <Card id="card-container">
      <p slot="title">
        <span>新增用户</span>
        <span
          @click="$router.back(-1)"
          style="margin-left: 15px;color :red;display: inline-block;cursor: pointer"
        >返回</span>
      </p>
      <div>
        <Row class="row">
          <Col span="8" class="column">用户名</Col>
          <Col span="16" class="column">
            <Input v-model="user2Update.user_name" />
          </Col>
        </Row>
        <Row class="row">
          <Col span="8" class="column">密码</Col>
          <Col span="16" class="column">
            <Input v-model="user2Update.user_pwd" />
          </Col>
        </Row>
        <Row class="row">
          <Col span="8" class="column">电话</Col>
          <Col span="16" class="column">
            <Input v-model="user2Update.user_phone" />
          </Col>
        </Row>
        <Row class="row">
          <Col span="8" class="column">电子邮件</Col>
          <Col span="16" class="column">
            <Input v-model="user2Update.user_email" />
          </Col>
        </Row>
        <Row class="row">
          <Col span="8" class="column">性别</Col>
          <Col span="16" class="column">
            <Input v-model="user2Update.user_gender" />
          </Col>
        </Row>
        <Row class="row">
          <Col span="8" class="column">生日</Col>
          <Col span="16" class="column">
            <Input v-model="user2Update.user_birthday" />
          </Col>
        </Row>
        <Row class="row">
          <Col span="8" class="column">地区</Col>
          <Col span="16" class="column">
            <Input v-model="user2Update.user_region" />
          </Col>
        </Row>
        <!-- <Row class="row">
          <Col span="8" class="column">状态</Col>
          <Col span="16" class="column">
            <Input v-model="user2Update.user_status" />
          </Col>
        </Row>
        <Row class="row">
          <Col span="8" class="column">123</Col>
          <Col span="16" class="column">
            <Input v-model="user2Update.user_createTime" />
          </Col>
        </Row>
        <Row class="row">
          <Col span="8" class="column">123</Col>
          <Col span="16" class="column">
            <Input v-model="user2Update.user_level" />
          </Col>
        </Row>-->
      </div>
      <div id="btn-group">
        <Button type="warning" @click="handleCancelEditing" :disabled="isLoading">取消</Button>
        <Button type="info" @click="handleSubmitEditing">提交</Button>
      </div>
    </Card>
  </div>
</template>
<script>
import "iview/dist/styles/iview.css";
export default {
  data() {
    return {
      nameMap: {
        user_id: "用户ID",
        user_phone: "用户电话",
        user_email: "用户电子邮箱",
        user_pwd: "密码",
        user_name: "用户名",
        user_gender: "用户性别",
        user_birthday: "用户生日",
        user_region: "用户地区",
        user_status: "用户状态",
        user_createTime: "用户注册时间",
        user_level: "用户等级"
      },
      isLoading: false,
      user2Update: {
        user_id: "",
        user_phone: "",
        user_email: "",
        user_pwd: "",
        user_name: "",
        user_gender: "",
        user_birthday: "",
        user_region: "",
        user_status: "",
        user_createTime: "",
        user_level: ""
      }
    };
  },
  methods: {
    handleCancelEditing() {
      this.isEditing = false;
    },
    handleSubmitEditing() {
      console.log(this.user2Update);
    }
  }
};
</script>
<style`>
.row {
  margin: 10px 0;
  display: flex;
  align-items: center;
}
.not-editing {
  height: 30px;
}
.column {
  text-align: center;
}
#card-container {
  height: 60%;
  width: 50%;
  min-width: 600px;
  min-height: 560px;
  margin: 40px auto;
}
#btn-group {
  display: flex;
  margin-top: 30px;
  justify-content: space-around;
}
#btn-group > * {
  width: 40%;
}
</style>