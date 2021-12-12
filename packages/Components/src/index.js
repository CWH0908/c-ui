import Button from "./Button/index.vue";

const components = [Button];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.extendOptions.name, component);
  });
};

export default { install, Button };
