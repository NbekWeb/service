<script lang="ts" setup>
import ProfilModal from "./ProfilModal.vue";
import { ref } from "vue";
const dialog = ref(false);
const _profileRef = ref();
function open() {
	dialog.value = true;
}
defineExpose({
	open,
});

function handleModal2() {
	dialog.value = false;
	_profileRef.value.open();
}
</script>

<template>
	<div>
		<ProfilModal ref="_profileRef" />
		<v-dialog v-model="dialog" max-width="815" persistent>
			<v-card class="p-54">
				<img class="img-center" src="@/assets/img/warning.svg" alt="" />
				<h3 class="img-center item-m">Продолжите вход</h3>
				<p class="title">
					К сожалению, мы не смогли вас идентифицировать. Если Вам
					необходимо подать документы в компанию, пожалуйста, выполните
					вход, пройдя по ссылке:
				</p>
				<p @click="handleModal2" class="text-link">1. Ссылка .......</p>
				<p @click="handleModal2" class="text-link">2. Ссылка .......</p>
			</v-card>
		</v-dialog>
	</div>
</template>
<style>
.img-center {
	margin: 0px auto;
}
.item-m {
	margin-top: 26px;
	margin-bottom: 12px;
}
.text-link {
	font-size: 22px;
	font-weight: 500;
	font-family: Inter;
	text-align: center;
	color: #005fad;
	cursor: pointer;
}
.title {
	text-align: center;
	padding: 4px 12px 16px 12px;
	font-size: 22px;
	font-weight: 500;
	font-family: Inter;
	color: #6b7280;
	@media (max-width: 700px) {
		font-size: 16px;
	}
}
.p-54 {
	padding: 54px;
	@media (max-width: 700px) {
		padding: 24px;
	}
}
</style>
