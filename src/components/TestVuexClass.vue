<template>
    <div class="container">
        <h2>vuex-class ：在 vue-class-component 写法中 绑定 vuex</h2>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State, Getter, Mutation, Action, namespace } from "vuex-class";

const ModuleGetter = namespace("path/to/module", Getter);
export default class MyComp extends Vue {
  @State("foo") stateFoo;
  @State(state => state.bar) stateBar;
  @Getter("foo") getterFoo;
  @Mutation("foo") mutationFoo;
  @Action("foo") actionFoo;
  @ModuleGetter("foo") moduleGetterFoo;

  // If the argument is omitted, use the property name
  // for each state/getter/action/mutation type
  @State foo;
  @Getter bar;
  @Action baz;
  @Mutation qux;

  created() {
    console.log("console vuex start");
    console.log("this.store.state.foo: %s", this.stateFoo);
    console.log("this.store.state.bar: %s", this.stateBar);
    console.log("this.store.getters.getterFoo: %s", this.getterFoo);
    // -> store.dispatch('foo', { value: true })
    console.log(
      "this.store.action.actionFoo: %s",
      this.actionFoo({ value: true })
    );
    // -> store.commit('foo', { value: true })
    console.log(
      "this.store.action.mutationFoo: %s",
      this.mutationFoo({ value: true })
    );
    // -> store.getters['path/to/module/foo']
    console.log("this.store.getters.moduleGetterFoo: %s", this.moduleGetterFoo);
  }
}
</script>

