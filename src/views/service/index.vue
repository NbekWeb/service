<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
const selectedOption = ref(null); // Tanlangan qiymat
const selectedOption2 = ref(null); // Tanlangan qiymat
const selectedOption3 = ref(null); // Tanlangan qiymat
const selectedOption4 = ref(null); // Tanlangan qiymat
const selectedDate = ref(null); // Tanlangan sana
const selectedDate2 = ref(null); // Tanlangan sana
const selectedDate3 = ref(null); // Tanlangan sana
const options = ref(["По смерти", "Иное"]); // Variantlar
const options2 = ref([
	"Договор SIN 114009 от 21.09.2023",
	"Договор ATB №21/HC/000300008280",
	"Договор ATB №21/HC/000300008280",
]); // Variantlar

const menu = ref(false); // Menu ochilish holati
const menu2 = ref(false); // Menu ochilish holati
const menu3 = ref(false); // Menu ochilish holati

// Formatlangan sana
const formattedDate = computed(() => {
	if (!selectedDate.value) return "";
	const date = new Date(selectedDate.value);
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = date.getFullYear();
	return `${day}.${month}.${year}`;
});
const formattedDate2 = computed(() => {
	if (!selectedDate2.value) return "";
	const date = new Date(selectedDate2.value);
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = date.getFullYear();
	return `${day}.${month}.${year}`;
});
const formattedDate3 = computed(() => {
	if (!selectedDate3.value) return "";
	const date = new Date(selectedDate3.value);
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = date.getFullYear();
	return `${day}.${month}.${year}`;
});
const onDateSelect = (newDate) => {
	selectedDate.value = newDate;
	menu.value = false; // Modalni yopish
};
const onDateSelect2 = (newDate) => {
	selectedDate2.value = newDate;
	menu2.value = false; // Modalni yopish
};
const onDateSelect3 = (newDate) => {
	selectedDate3.value = newDate;
	menu3.value = false; // Modalni yopish
};
</script>

<template>
	<div class="container">
      
		<h1>Сервисы</h1>
		<div class="service">
			<h2>Подать заявление по страховому событию</h2>
			<v-select
				class="sel"
				v-model="selectedOption"
				:items="options"
				placeholder="Укажите событие"
			></v-select>
			<v-select
				class=""
				v-model="selectedOption2"
				:items="options2"
				placeholder="Укажите номер договора"
			></v-select>
			<v-menu
				v-model="menu"
				:close-on-content-click="true"
				:nudge-right="40"
				transition="scale-transition"
				offset-y
				max-width="290px"
				min-width="290px"
			>
				<template #activator="{ props }">
					<v-text-field
						v-bind="props"
						v-model="formattedDate"
						label="Выберите дату"
						readonly
						placeholder="ДД.ММ.ГГГГ"
					></v-text-field>
				</template>

				<!-- Date Picker -->
				<v-date-picker
					v-model="selectedDate"
					locale="ru"
					:show-adjacent-months="false"
					:show-action-buttons="false"
					@input="onDateSelect"
				></v-date-picker>
			</v-menu>
			<h2>Подать заявление на выплату по риску «Дожитие»</h2>

			<v-select
				class=""
				v-model="selectedOption3"
				:items="options2"
				placeholder="Укажите номер договора"
			></v-select>
			<v-menu
				v-model="menu2"
				:close-on-content-click="true"
				:nudge-right="40"
				transition="scale-transition"
				offset-y
				max-width="290px"
				min-width="290px"
			>
				<template #activator="{ props }">
					<v-text-field
						v-bind="props"
						v-model="formattedDate2"
						label="Выберите дату"
						readonly
						placeholder="ДД.ММ.ГГГГ"
					></v-text-field>
				</template>

				<!-- Date Picker -->
				<v-date-picker
					v-model="selectedDate2"
					locale="ru"
					:show-adjacent-months="false"
					:show-action-buttons="false"
					@input="onDateSelect2"
				></v-date-picker>
			</v-menu>
			<h2>Подать заявление о расторжении</h2>

			<v-select
				class=""
				v-model="selectedOption4"
				:items="options2"
				placeholder="Укажите номер договора"
			></v-select>
			<v-menu
				v-model="menu3"
				:close-on-content-click="true"
				:nudge-right="40"
				transition="scale-transition"
				offset-y
				max-width="290px"
				min-width="290px"
			>
				<template #activator="{ props }">
					<v-text-field
						v-bind="props"
						v-model="formattedDate3"
						label="Выберите дату"
						readonly
						placeholder="ДД.ММ.ГГГГ"
					></v-text-field>
				</template>

				<!-- Date Picker -->
				<v-date-picker
					v-model="selectedDate3"
					locale="ru"
					:show-adjacent-months="false"
					:show-action-buttons="false"
					@input="onDateSelect3"
				></v-date-picker>
			</v-menu>
			<v-btn @click="router.push('/order')" v-if="formattedDate && selectedOption2 && selectedOption" block class="custom-button" color="primary">Далее</v-btn>
		</div>
	</div>
</template>
<style lang="scss">
.service {
	margin-top: 60px;
	.sel {
		margin-top: 10px;
	}
	.custom-button {
		display: block !important;
		height: 65px;
		font-size: 22px;
	}
}
</style>
