<template>
    <div class="task1">
      <div>
        <template v-for="(item, key) in expression">
          <template v-if="item.type==='fraction'">
            <Fraction
              v-bind:value="item"
              v-bind:key="key"
              v-bind:id="key"
              v-on:update:fraction="updateFraction"
            />
          </template>
          <template v-else>
            <Operation
              v-bind:value="item"
              v-bind:key="key"
              v-bind:id="key"
              v-on:update:operation="updateOperation"
            />
          </template>
        </template>
        =
        <div class="result">
          <div>{{result.dividend}}</div>
          <div>{{result.divider}}</div>
        </div>
      </div>
      <div>
        <button @click="addFraction">ADD FRACTION</button>
      </div>
    </div>
</template>

<script>
    import Fraction from '@/components/Fraction'
    import Operation from '@/components/Operation'
    import fraction from '@/modules/fraction'
    import rpn from '@/modules/rpn'
    import {add, mul, sub, div} from '@/modules/fraction-operations'

    const ops =  {'+': add, '-': sub, '*': mul, '/': div};

    export default {
      name: "Fractions",
      components: {
        Fraction,
        Operation
      },
      created(){
        this.defaultExpression();
        this.updateExpression();
      },
      data(){
        return {
          expression: [],
          result: []
        }
      },
      methods: {
        initFraction(dividend=1, divider=1){
          return fraction(dividend, divider)
        },
        initOperation(sign="+"){
          return sign
        },
        defaultExpression(){
          this.expression.push(this.initFraction());
          this.expression.push(this.initOperation('+'));
          this.expression.push(this.initFraction());
        },
        addFraction(){
          this.expression.push(this.initOperation('+'));
          this.expression.push(this.initFraction());

          this.updateExpression();
        },
        updateFraction(id, val, part){
          this.expression[id][part] = val;
          this.updateExpression();
        },
        updateOperation(id, val){
          this.expression[id] = val;
          this.updateExpression();
        },
        updateExpression(){
          this.result = this.calculate();
          console.log(this.result)
        },
        calculate(){
          let result = rpn(this.expression);
          let resultLength = result.length;
          let temp = [];
          for(let i = 0; i < resultLength; i++){
            if(result[i].hasOwnProperty('type')){
              temp.push(result[i]);
            } else {
              const [fr2, fr1] = [temp.pop(), temp.pop()];
              let sign = result[i];
              if(sign in ops){
                let sum = ops[sign](fr1, fr2);
                temp.push(sum);
              }
            }
          }
          return temp.pop()
        }
      }
    }
</script>

<style scoped>
.fraction, .operation, .result {
  display: inline-block;
}
.task1 {
  padding: 20px;
}
</style>
