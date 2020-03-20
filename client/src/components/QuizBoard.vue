<template>
  <div class="quiz-board p-3 flex-grow-1 d-flex flex-column">
      <h1 class="display-6 board-title pb-3 color-white">Find the right answer!</h1>
      <div class="question mt-3 d-flex flex-column align-items-center flex-grow-1">
          <p class="quiz-question">{{ quiz.question }}</p>
          <div class="container answers p-4 d-flex justify-content-center flex-column align-items-center">
              <b-row
                v-for="(value, key, i) in quiz.options"
                :key="i"
                @click="answer(key)"
              >
                <p class="option-answer shadow-sm pt-4 pb-4">
                  {{ value }}
                </p>
              </b-row>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'QuizBoard',
  props: {
    quiz: Object
  },
  methods: {
    answer (answer) {
      this.$emit('answer', answer)
    }
  }
}
</script>

<style>
.quiz-question {
  font-size: 28px !important;
  background-color: whitesmoke;
  font-family: 'Montserrat', sans-serif;
  font-weight: bolder;
  border-radius: 12px;
  width: 40rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.board-title {
  font-size: 16px;
  border-bottom: 1px solid rgb(241, 241, 241);
}
.option {
  margin-bottom: 0 !important;
  font-size: 12px;
}
.option-answer  {
  border-radius: 10px;
  background-color: whitesmoke;
  width: 40rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: bolder;
  cursor: pointer;
}
.option-answer:hover  {
  background-color: rgb(8, 77, 25) !important;
  color: white;
}
.answers {
  border-radius: 20px;
}

</style>
