<script lang="ts" setup>
// import v-checkbox from "./v-checkbox.vue";
import { ref } from "vue";
const dialog = ref(false);
const isChecked = ref(false);
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
			<v-card class="p-54 fd">
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
					<v-btn @click="dialog = false" class="btnn1" color="primary"
						>Подтвердить</v-btn
					>
					<v-btn @click="dialog = false" class="btnn1">Назад</v-btn>
				</div>
			</v-card>
		</v-dialog>
	</div>
</template>
<style lang="scss">
.modal {
	.custom-checkbox {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		border: 2px solid blue;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: transparent;
		cursor: pointer;
		transition: background-color 0.2s, border-color 0.2s;
	}

	.custom-checkbox.checked {
		background-color: blue; /* Checked holatida fon rangi */
		border-color: blue; /* Checked holatida chegarasi rangi */
	}
	.fd {
		display: flex;
		flex-direction: column;
		row-gap: 14px;
	}
	.v-checkbox .v-selection-control {
		min-height: auto !important;
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
		line-height: 20px;
		@media (max-width: 700px) {
			font-size: 14px;
		}
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
}
</style>
