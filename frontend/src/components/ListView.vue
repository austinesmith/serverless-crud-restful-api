<template>
  <vec-fragment>
    <td>{{ item.name }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.age }}</td>
    <td><b>{{ item.jobtitle }}</b></td>
    <td>{{ item.company }}</td>
  </vec-fragment>
</template>

<script>
export default {
  props: {
    item: { type: Object, required: true, default: () => { } }
  }
}
</script>
