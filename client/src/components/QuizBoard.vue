<template>
  <div class="quiz-board p-3 flex-grow-1 d-flex flex-column">
      <h1 class="display-6 board-title pb-3">Find the right answer!</h1>
      <div class="question mt-3 d-flex flex-column align-items-center flex-grow-1">
          <p class="quiz-question">{{ quiz.question }}</p>
          <div class="container answers p-4 d-flex justify-content-center flex-column align-items-center">
              <b-row>
                <p class="option-answer shadow-sm pt-4 pb-4">{{ quiz.options.a }}</p>
              </b-row>
              <b-row>
                <p class="option-answer shadow-sm pt-4 pb-4">{{ quiz.options.b }}</p>
              </b-row>
              <b-row>
                <p class="option-answer shadow-sm pt-4 pb-4">{{ quiz.options.c }}</p>
              </b-row>
              <b-row>
                <p class="option-answer shadow-sm pt-4 pb-4">{{ quiz.options.d }}</p>
              </b-row>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      quiz: {
        id: 10,
        question: '_ is 1000 times _ _, what is _?',
        options: {
          a: 'D',
          b: 'M',
          c: 'C',
          d: 'F'
        },
        answer: 'b'
      }
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
  border-bottom: 1px solid rgb(37, 37, 37);
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
