<template lang="">
  <div class="flex flex-col justify-center items-center">
    <WorkshopVideo
      :reverseOrder="false"
      videoUrl="StefanMartinRico.mp4"
      title="Workshop for better cooperation"
      description="GreenLead is a company
    that specializes in making green visions a reality, partly in cooperation
    with investors and also in cooperation with the industry in the transition
    to green energy. GreenLead advises on renewable energy systems - We have a
    large portfolio of projects and a broad network of investors - we often work
    in the empty space between financing and the project. We specialize in
    designing green projects and describing the project to investors as well as
    finding the right projects for the right investor. This means making the
    green transition a reality."
    />
    <h1 class="text-center my-5">Hvad vores tidligere klienter siger om os</h1>

    <WorkshopVideo
      class="my-5"
      :reverseOrder="true"
      videoUrl="StefanMartinRico.mp4"
      title="Stefan, Martin og Rico"
      description="GreenLead is a company
    that specializes in making green visions a reality, partly in cooperation
    with investors and also in cooperation with the industry in the transition
    to green energy. GreenLead advises on renewable energy systems - We have a
    large portfolio of projects and a broad network of investors - we often work
    in the empty space between financing and the project. We specialize in
    designing green projects and describing the project to investors as well as
    finding the right projects for the right investor. This means making the
    green transition a reality."
    />

    <WorkshopVideo
      class="my-5"
      :reverseOrder="false"
      videoUrl="StefanMartinRico.mp4"
      title="Workshop for better cooperation"
      description="GreenLead is a company
    that specializes in making green visions a reality, partly in cooperation
    with investors and also in cooperation with the industry in the transition
    to green energy. GreenLead advises on renewable energy systems - We have a
    large portfolio of projects and a broad network of investors - we often work
    in the empty space between financing and the project. We specialize in
    designing green projects and describing the project to investors as well as
    finding the right projects for the right investor. This means making the
    green transition a reality."
    />
    <WorkshopVideo
      class="my-5"
      :reverseOrder="true"
      videoUrl="StefanMartinRico.mp4"
      title="Workshop for better cooperation"
      description="GreenLead is a company
    that specializes in making green visions a reality, partly in cooperation
    with investors and also in cooperation with the industry in the transition
    to green energy. GreenLead advises on renewable energy systems - We have a
    large portfolio of projects and a broad network of investors - we often work
    in the empty space between financing and the project. We specialize in
    designing green projects and describing the project to investors as well as
    finding the right projects for the right investor. This means making the
    green transition a reality."
    />

    <GetInTouchButton />
  </div>
</template>
<script>
import WorkshopVideo from "./WorkshopVideo.vue";
import GetInTouchButton from "./GetInTouchButton.vue";
export default {
  components: { WorkshopVideo, GetInTouchButton },
};
</script>
<style lang=""></style>
