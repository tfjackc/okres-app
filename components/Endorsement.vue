<script setup lang="ts">

</script>

<template>
  <v-row>
    <v-col class="mb-10" cols="12">
      <v-card class="card-with-bar">
        <div class="italic font-sans p-5">
          "Paige has been an extremely versatile member of the Orion team, providing pertinent engineering and financial input, for all of our exploration and development projects over the many years she has been involved. An energetic team member, a true data miner, who envisions opportunities in an “outside of the box “manner, with the ability to utilize conventional technologies to analyze and predict valid outcomes. She is well versed in field operations, with the ability to identify problems and bring real world solutions to the table for discussion and operational improvement. Paige has a resourceful understanding of providing sound reservoir characterization, production analysis and valid financial criteria, for projecting future values of producing oil and gas properties, with a good understanding of both the purchasers and seller perspectives. Paige is a keen asset to any team in the oil and gas industry."
        </div>
        <div class="text-xl text-gray-600 p-5 grid justify-items-end">
          -Skip Honeyman, VP New Ventures at Orion Exploration
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<style>
.card-with-bar {
  position: relative;
  padding-left: 20px; /* Adjust padding to make space for the bar */
}

.card-with-bar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 10px; /* Adjust width of the bar */
  height: 100%;
  background-color: #8d4f2f; /* Adjust the color of the bar */
}
</style>
