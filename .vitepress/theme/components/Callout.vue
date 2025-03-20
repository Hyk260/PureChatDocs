<script setup>
defineOptions({
  name: "Callout",
})

const props = defineProps({
  type: {
    type: String,
    default: "default",
    validator: (value) => {
      return ["default", "important", "tip", "warning"].includes(value);
    },
  },
});

const icon = {
  default: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2"/></svg>`,
  warning: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m13.299 3.148l8.634 14.954a1.5 1.5 0 0 1-1.299 2.25H3.366a1.5 1.5 0 0 1-1.299-2.25l8.634-14.954c.577-1 2.02-1 2.598 0M12 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-7a1 1 0 0 0-.993.883L11 9v4a1 1 0 0 0 1.993.117L13 13V9a1 1 0 0 0-1-1"/></g></svg>`,
  important: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 7q.425 0 .713-.288T13 6t-.288-.712T12 5t-.712.288T11 6t.288.713T12 7m-1 8h2V9h-2zm-9 7V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6zm3.15-6H20V4H4v13.125zM4 16V4z"/></svg>`,
  tip: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4"/></svg>`,
};
</script>

<template>
  <div :class="['layoutkit', type]">
    <span v-if="icon[type]" class="icon" v-html="icon[type]"></span>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.layoutkit {
  display: flex;
  padding: 16px;
  border-radius: 8px;
  margin: 16px 0;
  border: 1px solid transparent;
}
.layoutkit .icon {
  margin-block: 0.25em;
  margin-right: 0.25em;
}
.default {
  background: rgba(54, 158, 255, 0.1);
  border-color: rgba(54, 158, 255, 0.5);
  color: rgb(54, 158, 255);
}
.important {
  background: rgba(189, 84, 198, 0.1);
  border-color: rgba(189, 84, 198, 0.5);
  color: rgb(189, 84, 198);
}
.tip {
  background: rgba(85, 180, 103, 0.1);
  border-color: rgba(85, 180, 103, 0.5);
  color: rgb(85, 180, 103);
}
.warning {
  background: rgba(255, 128, 43, 0.1);
  border-color: rgba(255, 128, 43, 0.5);
  color: rgb(255, 128, 43);
}
</style>
