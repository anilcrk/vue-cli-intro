<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
<app-servers></app-servers>
      <app-server-details></app-server-details>
    </div>
    <hr>
<app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import Servers from "./Servers";
import ServerDetails from "./ServerDetails"
export default{
components : {
  "app-header" : Header,
  "app-footer" : Footer,
  "app-servers" : Servers,
  "app-server-details" : ServerDetails
}
}
</script>

<style>

</style>
