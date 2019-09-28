<style scoped>
.expand-row {
  margin-bottom: 16px;
}
</style>
<template>
  <div>
    <Row class="expand-row">
      <Col span="6">
        <span class="expand-key">邮箱:</span>
        <span class="expand-value">{{ row.user_email == null ? '未绑定' : row.user_email }}</span>
      </Col>
      <Col span="6">
        <span class="expand-key">密码:</span>
        <span class="expand-value">{{ row.user_pwd }}</span>
      </Col>
      <Col span="6">
        <span class="expand-key">状态:</span>
        <span class="expand-value">{{ row.user_gender }}</span>
      </Col>
      <Col span="6">
        <span class="expand-key">用户等级:</span>
        <span class="expand-value">{{ row.user_level }}</span>
      </Col>
    </Row>
    <Row>
      <Col span="6">
        <span class="expand-key">注册时间:</span>
        <span class="expand-value">{{ row.user_createTime }}</span>
      </Col>
      <Col span="6">
        <span class="expand-key">地区:</span>
        <span class="expand-value">{{ row.user_status }}</span>
      </Col>
      <Col span="6">
        <span class="expand-key">生日:</span>
        <span class="expand-value">{{ row.user_birthday == null ? '未绑定' : row.user_birthday }}</span>
      </Col>
      <Col span="6">
        <span class="expand-key">性别:</span>
        <span class="expand-value">{{ row.user_gender == null ? '未绑定' : row.user_gender }}</span>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  props: {
    row: Object
  }
};
</script>