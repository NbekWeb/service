<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import SingInModal from "./components/SingInModal.vue";
const signRef = ref()
</script>

<template>
	<div class="">
      <SingInModal ref="signRef" />
		<div class="container">
			<div class="fl">
				<v-btn class="h50" @click="signRef.open()">Выход</v-btn>
			</div>
		</div>
		<RouterView />
	</div>
</template>

<style lang="scss" scoped>
.fl {
	display: flex;
	justify-content: end;
}
</style>
