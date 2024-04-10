<script></script>

<template>
  <div class="col">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="../assets/img/avatar.svg" class="card-img-top" alt="..." />
          <h2 class="prj-title poppins">Titolo Progetto</h2>
        </div>
        <div class="flip-card-back">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flip-card {
  perspective: 1000px;
  width: 18rem;
  background-color: #ffffff;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.prj-title{
  color: #cc0029;
}

.card-text{
  color: #999999;
}

.flip-card-back {
  transform: rotateY(180deg);
}
</style>