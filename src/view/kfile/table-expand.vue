<style scoped>
.expand-row {
  margin-bottom: 16px;
}
</style>
<template>
  <div>
    <Row class="expand-row">
      <Col span="6">
        <span class="expand-key">密钥大小:</span>
        <span class="expand-value">{{ row.kfile_size == null ? '未绑定' : row.kfile_size }}</span>
      </Col>
      <Col span="6">
        <span class="expand-key">加密算法:</span>
        <span class="expand-value">{{ row.kfile_algorithm == null ? '未绑定' : row.kfile_algorithm}}</span>
      </Col>
      <Col span="6">
        <span class="expand-key">密钥上传时间:</span>
        <span class="expand-value">{{ row.kfile_uploadtime == null ? '未绑定' : row.kfile_uploadtime}}</span>
      </Col>
      <Col span="6">
        <span class="expand-key">文件段号:</span>
        <span class="expand-value">{{ row.kfile_num == null ? '未绑定' : row.kfile_num}}</span>
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