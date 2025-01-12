<script lang="ts" setup>
import { ref } from "vue";
const dialog = ref(false);

function open() {
	dialog.value = true;
}
defineExpose({
	open,
});
</script>

<template>
	<div>
		<v-dialog class="modal" v-model="dialog" max-width="607" persistent>
			<v-card class="p-54">
				<v-checkbox
					color="primary"
					label="Просмотр фамилии, имени и отчества"
				></v-checkbox>
				<v-checkbox
					color="primary"
					label="Просмотр даты рождения"
				></v-checkbox>
				<v-checkbox color="primary" label="Просмотр ИНН"></v-checkbox>
				<v-checkbox
					color="primary"
					label="Просмотр номера мобильного телефона"
				></v-checkbox>
				<v-checkbox color="primary" label="Просмотр пола"></v-checkbox>
				<v-checkbox color="primary" label="Просмотр СНИЛС"></v-checkbox>
				<v-checkbox
					color="primary"
					label="Просмотр данных о документе, удостоверяющем личность"
				></v-checkbox>
				<v-checkbox
					color="primary"
					label="Просмотр данных об адресах"
				></v-checkbox>
				<v-checkbox
					color="primary"
					label="Просмотр адреса электронной почты"
				></v-checkbox>
				<div class="btn-center">
					<v-btn @click="dialog = false" class="btnn1" color="primary">Подтвердить</v-btn>
					<v-btn @click="dialog = false" class="btnn1">Назад</v-btn>
				</div>
			</v-card>
		</v-dialog>
	</div>
</template>
<style lang="scss">
.modal {
	.v-checkbox .v-selection-control {
		min-height: 42px !important;
	}
	.btn-center {
      margin-top: 20px;
		display: flex;
		justify-content: center;
      column-gap: 20px;
	}
	.v-input__details {
		display: none !important;
	}
	.v-selection-control--density-default {
		--v-selection-control-size: 40px !important;
	}
	.v-selection-control__wrapper {
		width: 50px !important;
		height: 20px !important;
	}
	.v-label {
		font-weight: 500;
		font-family: Inter;
		line-height: 16px;
		height: 20px;
	}
	.btnn1 {
	
		height: 52px !important;
		margin-top: 6px;
		font-size: 20px !important;
      font-weight: 600;
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
}
</style>
