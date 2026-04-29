<template>
  <div class="content">
    <div class="content-container">
      <main class="main">
        <div class="vp-doc">
          <h2 id="meet-the-team">Meet The Team</h2>
          <div>
            <VPTeamMembers size="small" :members="teamMembers" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VPTeamMembers } from "vitepress/theme";
import { teamMembers } from "@/utils/contributors";

defineOptions({
  name: "HomePage",
})

</script>

<style scoped>
.vp-doc {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2.5rem;
}
</style>
