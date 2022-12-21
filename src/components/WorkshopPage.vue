<template lang="">
  <div class="flex flex-col justify-center items-center">
    <WorkshopVideo
      :reverseOrder="false"
      videoUrl="GreenLeadMorten.mp4"
      title="Workshop for en bedre samarbejde"
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
    <TitleWithUnderline
      class="my-10"
      title="Hvad vores tidligere klienter siger om os"
    />
    <!-- <h1 class="text-center my-5">Hvad vores tidligere klienter siger om os</h1> -->

    <WorkshopVideo
      class="my-20"
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
      class="my-20"
      :reverseOrder="false"
      videoUrl="PerJan.mp4"
      title="Per og Jan"
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
    <!-- <WorkshopVideo
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
    /> -->

    <GetInTouchButton />
  </div>
</template>
<script>
import WorkshopVideo from "./WorkshopVideo.vue";
import GetInTouchButton from "./GetInTouchButton.vue";
import TitleWithUnderline from "./TitleWithUnderline.vue";
export default {
  components: { WorkshopVideo, GetInTouchButton, TitleWithUnderline },
};
</script>
<style lang=""></style>
