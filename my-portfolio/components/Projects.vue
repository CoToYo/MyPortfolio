<!-- This component will be used in 'Projects' page. -->
<template>
    <v-container class="project-list-container">
      <v-row>
        <v-col>
          <div class="text-h3 font-weight-bold" style="color: white;">Projects</div>
        </v-col>
      </v-row>
      <v-row v-for="project in projectList">
        <v-col>
            <v-card variant="outlined" class="project-card">
                <v-card-title style="color: white" class="text-h4 font-weight-bold">{{ project.title }}</v-card-title>
                <v-card-subtitle style="color: white" class="text-h6 font-weight-bold">{{ project.dp }}</v-card-subtitle>
            </v-card>
        </v-col>
      </v-row>
    </v-container>
    
</template>

<script>
    // import projectList from '@/res/ProjectList.js'
    export default {
        data() {
            return {
                projectList: [
                    { title: 'Foo', dp: 'aaa'},
                    { title: 'Foo', dp: 'aaa'},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
  .project-list-container {
    background-color: black;
    /* display: flex; */
    position: relative;
    top: 600px;
    display: inline-block;
    justify-content: center;
    vertical-align: middle;
    width: 850px;
  }
  .project-card {
    border: 3px solid white;
  }
  .project-card:hover {
    /* border: 3px solid; */
    background: linear-gradient(to right, #606C5D, #75cd01);
    /* animation: background-color-transition 3s infinite; */
  }
  @keyframes background-color-transition {
    0% { background: linear-gradient(to right, red, blue); }
    40% { background: linear-gradient(to right, blue, green); }
    70% { background: linear-gradient(to right, green, red); }
    100% { background: linear-gradient(to right, red, blue); }
  }
</style>