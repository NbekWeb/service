<script lang="ts" setup>
import { ref } from "vue";
const dialog = ref(false);
const checkedRef = ref();
function open() {
	dialog.value = true;
}
defineExpose({
	open,
});
function handleModal() {
	dialog.value = false;
	checkedRef.value.open();
}
</script>

<template>
	<div>
		<!-- <CheckedModal ref="checkedRef" /> -->
		<v-dialog v-model="dialog" max-width="606" persistent>
			<v-card class="p-54">
				<img class="img-center" src="@/assets/img/check.svg" alt="" />
				<h3 class="img-center item-m">Заявление успешно подано !</h3>
				<p class="title">
					Как только документы будут зарегистрированы - вам поступит смс
					уведомление на указанный номер телефона
				</p>

				<v-btn @click="handleModal" class="btnn">Отслеживать</v-btn>
			</v-card>
		</v-dialog>
	</div>
</template>
<style>
.img-center {
	margin: 0px auto;
}
.btnn {
	display: inline;
	width: max-content;
	margin: 0px auto;
	height: 52px !important;
	margin-top: 6px;
	font-size: 20px !important;
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
}
.p-54 {
	padding: 54px;
}
</style>
