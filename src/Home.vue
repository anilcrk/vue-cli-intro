<template>
<div>
  <lamp-status v-for="lamp in 5"></lamp-status>
</div>
</template>
<script>
// lampStatus'u burada gösteriyoruz
import LampStatus from "./LampStatus";

export default{
components : {
  "lamp-status" : LampStatus
}
}
</script>
