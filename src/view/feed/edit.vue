<template>
  <div class="container">
    <Card id="card-container">
      <p slot="title">
        <span>编辑用户</span>
        <span
          @click="$router.back(-1)"
          style="margin-left: 15px;color :red;display: inline-block;cursor: pointer"
          v-if="!isEditing"
        >返回</span>
      </p>
      <a href="#" slot="extra" @click.prevent="isEditing = true" v-if="!isEditing">
        <Icon type="ios-loop-strong"></Icon>编辑
      </a>
      <div>
        <Row
          v-for="(item, key, index) in user"
          :key="key"
          class="row"
          :class="{'not-editing': !isEditing}"
        >
          <Col span="8" class="column">{{nameMap[key]}}</Col>
          <Col span="16" class="column">
            <Input v-if="isEditing" v-model="user2Update[key]" />
            <span v-else>{{item}}</span>
          </Col>
        </Row>
      </div>
      <div v-if="isEditing" id="btn-group">
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
      userInfo: this.$route.params.userInfo,
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
      isEditing: false,
      isLoading: false,
      user2Update: {}
    };
  },
  computed: {
    user() {
      let newObj = {};
      Object.keys(this.userInfo).forEach(element => {
        console.log(element.indexOf("_"));
        if (element.indexOf("_") !== 0) {
          console.log(element);
          newObj[element] = this.userInfo[element];
        }
      });
      console.log(newObj);
      return newObj;
    }
  },
  methods: {
    handleCancelEditing() {
      this.isEditing = false;
    },
    handleSubmitEditing() {
      console.log(this.user2Update);
    },
    changeLimit() {
      function getArrayItems(arr, num) {
        const temp_array = [];
        for (let index in arr) {
          temp_array.push(arr[index]);
        }
        const return_array = [];
        for (let i = 0; i < num; i++) {
          if (temp_array.length > 0) {
            const arrIndex = Math.floor(Math.random() * temp_array.length);
            return_array[i] = temp_array[arrIndex];
            temp_array.splice(arrIndex, 1);
          } else {
            break;
          }
        }
        return return_array;
      }
      this.randomMovieList = getArrayItems(this.movieList, 5);
    }
  },
  mounted() {
    this.user2Update = this.user;
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