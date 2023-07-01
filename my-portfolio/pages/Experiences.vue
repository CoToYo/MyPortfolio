<template>
  <v-container class="timeline-container">
    <v-timeline align="start" line-color="white">
      <v-timeline-item v-for="(exp, i) in experiences" :key="i" :dot-color="exp.color" size="small">
        <template v-slot:opposite>
          <div :class="`pt-1 headline font-weight-bold text-${exp.color}`" v-text="exp.year"></div>
        </template>
        <div>
          <h2 :class="`mt-n1 headline font-weight-bold mb-4 text-${exp.color}`">
            {{ exp.orgnization }}
          </h2>
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-card v-bind="props" :color="isHovering ? exp.color : 'black'">
                <v-card-title class="font-weight-bold text-white">
                  {{ exp.title }}
                </v-card-title>
                <v-card-text class="text-white text-h7">
                  {{ exp.description }}
                </v-card-text>
              </v-card>
            </template>
          </v-hover>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>
<style>
.timeline-container {
  margin-top: 20%;
  margin-bottom: 10%;
  display: flex;
  justify-content: right;
}
</style>
<script>
export default {
  data: () => ({
    experiences: [
      {
        color: 'green',
        year: 'October 2021',
        orgnization: 'Hengdian Information Technology Co.,Ltd.',
        title: 'Software Engineer Intern(Backend)',
        description: 'Gained experience as a backend software engineer, specializing in Java and SpringBoot.'
      },
      {
        color: 'cyan-lighten-1',
        year: 'July 2022 (Graduation Date)',
        orgnization: 'South China Normal University',
        title: 'BEng of Computer Science and Technology',
        description: ''
      },
      {
        color: 'yellow-darken-2',
        year: 'May 2023',
        orgnization: 'Google Summer of Code 2023',
        title: 'Software Developer',
        description: 'Built an Cybersecurity News API for an open source organization.'
      },
      {
        color: 'deep-orange-darken-3',
        year: 'December 2023 (Graduation Date)',
        orgnization: 'Boston University',
        title: 'MS of Computer Science',
        description: ''
      },
      {
        color: 'lime-darken-1',
        year: '...',
        orgnization: 'To Be Continued',
        title: '...',
        description: '...'
      },
    ],
  }),
}
</script>