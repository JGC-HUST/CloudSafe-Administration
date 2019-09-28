<template>
  <div id="container">
    <Input v-model="inputValue" id="search" size="large" @on-change="handleChange">
      <Select v-model="selectValue" slot="prepend" style="width: 100px">
        <Option value="uid">用户ID</Option>
        <Option value="uphone">用户电话</Option>
        <Option value="uname">用户名</Option>
        <Option value="uemail">用户邮箱</Option>
      </Select>
      <Button slot="append" icon="ios-search"></Button>
    </Input>
    <div v-if="loading" class="wrapper">
      <Col class="demo-spin-col" span="8">
        <Spin fix>
          <Icon type="ios-loading" size="18" class="demo-spin-icon-load"></Icon>
          <div>Loading</div>
        </Spin>
      </Col>
    </div>
    <div v-else class="wrapper">
      <Table :columns="columns10" :data="data2Display" width="1500"></Table>
      <Page
        :current="1"
        :total="$store.getters.getUserList.length"
        @on-change="changePage"
        simple
        id="page"
      />
    </div>
  </div>
</template>
<script>
import expandRow from "./table-expand.vue";
export default {
  components: { expandRow },
  data() {
    return {
      curIndex: 0,
      inputValue: "",
      selectValue: "uid",
      columns10: [
        {
          type: "expand",
          width: 50,
          render: (h, params) => {
            return h(expandRow, {
              props: {
                row: params.row
              }
            });
          }
        },
        {
          title: "Id",
          key: "user_id"
        },
        {
          title: "用户名",
          key: "user_name"
        },
        {
          title: "电话",
          key: "user_phone"
        }
      ]
    };
  },
  computed: {
    loading() {
      return this.$store.getters.getUserList.length == 0;
    },
    data2Display() {
      return this.$store.getters.getUserList.slice(
        this.curIndex * 10,
        this.curIndex * 10 + 10
      );
    }
  },
  beforeMount() {
    this.$store.dispatch("pullUserList");
    this.$store;
  },
  methods: {
    changePage(num) {
      console.log(num);
      this.curIndex = num - 1;
    },
    handleChange(event) {
      if (this.inputValue) {
        return;
      } else {
        this.$store.dispatch("resetUserList");
      }
    }
  }
};
</script>
<style scoped>
#container {
  display: flex;
  flex-direction: column;
  position: relative;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#search {
  width: 80%;
  margin: 40px auto;
}
#page {
  left: 50%;
  margin: 60px auto 50px;
}
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.demo-spin-col {
  height: 616px;
  width: 1500px;
  position: relative;
  border: 1px solid #eee;
}
</style>