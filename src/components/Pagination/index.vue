<template>
  <div class="fr page">
    <div class="sui-pagination clearfix">
      <ul>

        <li>
          <a @click="$emit('pageJump',1)">第一页</a>
        </li>
        
        <li class="prev" :class="{'disabled' : pageNo == '1'}">
          <a @click="$emit('pageJump',-1)">«上一页</a>
        </li>
        
        <!-- 使用 v-for 生成分页 -->
        <li v-for="pageNumber in pageNumbers" :key="pageNumber" :class="{ 'active': pageNumber === pageNo }">
          <a @click="$emit('pageJump',pageNumber)">{{ pageNumber }}</a>
        </li>
        
        <li class="next" :class="{'disabled' : pageNo === TdP}">
          <a @click="$emit('pageJump',0)">下一页»</a>
        </li>

        <li>
          <a @click="$emit('pageJump',TdP)">最后一页</a>
        </li>

        <li>
          <h1>  
            共{{ TdP }}页    
          </h1>           
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['pageNo', 'pageSize', 'total', 'continue'],
  computed: {
    TdP() {
      return Math.ceil(this.total / this.pageSize);
    },
    // 计算分页数字
    pageNumbers() {
      const pageNumbers = [];
      const totalPages = this.TdP;

      if (totalPages <= this.continue * 2 + 1) {
        // 如果总页数小于等于 (2 * continue + 1)，直接生成所有页码
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // 否则，根据当前页码计算 start 和 end
        let start, end;

        if (this.pageNo <= this.continue) {
          // 当前页码靠近第一页
          start = 1;
          end = this.continue * 2 + 1;
        } else if (this.pageNo >= totalPages - this.continue) {
          // 当前页码靠近最后一页
          start = totalPages - this.continue * 2;
          end = totalPages;
        } else {
          // 当前页码在中间
          start = this.pageNo - this.continue;
          end = this.pageNo + this.continue;
        }

        for (let i = start; i <= end; i++) {
          pageNumbers.push(i);
        }
      }

      return pageNumbers;
    },
  },
};
</script>

<style lang="less">
.page {
        width: 733px;
        height: 66px;
        overflow: hidden;
        margin-left: 300px;
        .sui-pagination {
          margin: 18px 0px;

          ul {
            margin-left: 0;
            margin-bottom: 0;
            vertical-align: middle;
            float:left;

            li {
              line-height: 18px;
              display: inline-block;
              a {
                position: relative;
                float: left;
                line-height: 18px;
                text-decoration: none;
                background-color: #fff;
                border: 1px solid #e0e9ee;
                margin-left: -1px;
                font-size: 14px;
                padding: 9px 18px;
                color: #333;
              }

              &.active {
                a {
                  background-color: #fff;
                  color: #e1251b;
                  border-color: #fff;
                  cursor: default;
                }
              }

              &.prev {
                a {
                  background-color: #fafafa;
                }
              }

              &.disabled {
                a {
                  color: #c2c0c0;
                  cursor: default;
                }
              }

              &.dotted {
                span {
                  margin-left: -1px;
                  position: relative;
                  float: left;
                  line-height: 18px;
                  text-decoration: none;
                  background-color: #fff;
                  font-size: 14px;
                  border: 0;
                  padding: 9px 18px;
                  color: #333;
                }
              }

              &.next {
                a {
                  background-color: #fafafa;
                }
              }
            }
          }
        }
      }    
</style>