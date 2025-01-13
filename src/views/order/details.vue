<script setup>
import { ref, computed } from "vue";

const item = ref({
	phoneNumber: "",
	selectedDate: null,
	phoneNumber: "",
	name: "",
	plase: "",
	degree: "",
	seria: "",
	number: "",
	info: "",
	seria1: "",
	number1: "",
	info1: "",
	one: "",
	two: "",
	three: "",
	four: "",
	five: "",
});
const formattedDate = computed(() => {
	if (!item.value.selectedDate) return "";
	const date = new Date(item.value.selectedDate);

	if (isNaN(date.getDate())) return ""; // agar invalid sana bo'lsa

	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = date.getFullYear();
	return `${day}.${month}.${year}`;
});

const onDateSelect = (newDate) => {
	item.value.selectedDate = newDate;
	menu.value = false; // Modalni yopish
};
</script>

<template>
	<div>
		<div class="w-840">
			<h2>Сведения о Заявителе</h2>
			<div class="grid-3 mt40">
				<div>
					<p>ФИО</p>
					<v-text-field
						placeholder="Иванов Иван Иванович"
						class="input"
						variant="solo-filled"
					></v-text-field>
				</div>
				<div>
					<p style="margin-bottom: 7px">Дата рождения</p>
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
								variant="solo-filled"
								readonly
								placeholder="ДД.ММ.ГГГГ"
							></v-text-field>
						</template>

						<!-- Date Picker -->
						<v-date-picker
							v-model="item.selectedDate"
							locale="ru"
							:show-adjacent-months="false"
							:show-action-buttons="false"
							@input="onDateSelect"
						></v-date-picker>
					</v-menu>
				</div>
				<div>
					<p style="margin-top: 7px">Телефон</p>

					<v-text-field
						v-model="item.phoneNumber"
						variant="solo-filled"
						placeholder="+7 (___) ___-__-__"
						v-mask="'+7 (###) ###-##-##'"
						maxlength="18"
					/>
				</div>
			</div>

			<div class="grid-3">
				<div class="col-span-22">
					<p>Место рождения</p>
					<v-text-field
						v-model="item.plase"
						placeholder="Страна, город, улица, дом"
						class="input"
						variant="solo-filled"
					></v-text-field>
				</div>
				<div>
					<p>Степень родства</p>
					<v-text-field
						v-model="item.degree"
						placeholder="Степень родства"
						class="input"
						variant="solo-filled"
					></v-text-field>
				</div>
			</div>
			<p class="p-500 mt40">Документ, удостоверяющий личность</p>
			<p class="p-italic1">для несовершеннолетнего</p>
			<div class="grid-3">
				<v-text-field
					v-model="item.name"
					placeholder="Наименование"
					class="input"
					variant="solo-filled"
				></v-text-field>
				<v-text-field
					v-model="item.seria"
					placeholder="Серия"
					class="input"
					variant="solo-filled"
				></v-text-field>
				<v-text-field
					v-model="item.number"
					placeholder="Номер"
					class="input"
					variant="solo-filled"
				></v-text-field>
			</div>
			<v-text-field
				class="mt20"
				v-model="item.info"
				placeholder="Кем и когда выдан"
				variant="solo-filled"
			></v-text-field>
		</div>
		<p class="p-500 mt40">Для иностранных граждан и лиц без гражданства</p>
		<p class="p-italic1">
			сведения о миграционной карте <br />
			свдения о документе, подтверждающем право иностранного гражданина или
			лиц без гражданства на пребывание(проживающие) в РФ
		</p>
		<div class="grid-4_d">
			<v-text-field
				v-model="item.seria1"
				placeholder="Серия"
				class="input"
				variant="solo-filled"
			></v-text-field>
			<v-text-field
				v-model="item.number1"
				placeholder="Номер"
				class="input"
				variant="solo-filled"
			></v-text-field>
			<v-text-field
				v-model="item.info1"
				placeholder="Дата начала и окончания срока действия права прибывания"
				class="input col-span-22"
				variant="solo-filled"
			></v-text-field>
		</div>
		<p class="p-500 mt40">Адрес места жительства</p>
		<p class="p-italic1">(регистрации)</p>
		<div class="w-840 grid-3">
			<v-text-field
				placeholder="Индекс"
				class="input"
				variant="solo-filled"
			></v-text-field>
			<v-text-field
				placeholder="Область/регион"
				class="input"
				variant="solo-filled"
			></v-text-field>
			<v-text-field
				placeholder="Город"
				class="input"
				variant="solo-filled"
			></v-text-field>
			<v-text-field
				placeholder="Улица"
				class="input"
				variant="solo-filled"
			></v-text-field>
			<v-text-field
				placeholder="Квартира"
				class="input"
				variant="solo-filled"
			></v-text-field>
			<v-text-field
				placeholder="Дом/корпус"
				class="input"
				variant="solo-filled"
			></v-text-field>
		</div>
		<p class="p-500 mt40">Связь</p>
		<div class="w-840 grid-33 mt20 mb40">
			<v-text-field
				placeholder="Мобильный"
				class="input"
				variant="solo-filled"
			></v-text-field>
			<v-text-field
				placeholder="e-mail"
				class="input"
				variant="solo-filled"
			></v-text-field>
		</div>
		<h2>Прошу произвести страховую выплату по договору страхования</h2>
		<p class="italic-24">в связи со смертью застрахованного лица:</p>
		<div class="grid-4_d mt40">
			<v-text-field
				placeholder="Номер договора страхования"
				class="input"
				variant="solo-filled"
			></v-text-field>
			<v-text-field
				placeholder="Дата договора страхования"
				class="input"
				variant="solo-filled"
			></v-text-field>
		</div>
		<div class="grid-4_d">
			<div>
				<p class="p-500">ФИО</p>
				<p class="p-italic11">застрахованного лица</p>
				<v-text-field class="input" variant="solo-filled"></v-text-field>
			</div>
			<div>
				<p class="p-500">Дата смерти</p>
				<p class="p-italic11">застрахованного лица</p>
				<v-text-field class="input" variant="solo-filled"></v-text-field>
			</div>
			<div class="col-span-22">
				<p class="p-500">Дата несчастного случая</p>
				<p class="p-italic11">
					если смерть произошла в результате несчастного случая
				</p>
				<v-text-field class="input" variant="solo-filled"></v-text-field>
			</div>
			<div class="col-span-22">
				<p class="p-500">Причина смерти</p>
				<p class="p-italic11">застрахованного лица</p>
				<v-text-field class="input" variant="solo-filled"></v-text-field>
			</div>
			<div class="col-span-4">
				<p class="p-500">Обстоятельства смерти</p>
				<p class="p-italic11">застрахованного лица</p>
				<v-textarea
					rows="6"
					placeholder="укажите, пожалуйста, подробно обстоятельства, причины и место смерти застрахованного лица"
					class="input"
					variant="solo-filled"
				></v-textarea>
			</div>
		</div>
		<div class="w-1100 mt80">
			<h2>Страховую выплату прошу перечислить по следующим реквизитам</h2>
			<p class="italic-24">
				(если заявитель является несовершеннолетним, в качестве получателя
				следует указать несовершеннолетнего заявителя и заполнять банковские
				реквизиты самого несовершеннолетнего):
			</p>
			<div class="grid-7">
				<div class="col-span-22 mt40">
					<p class="p-500">ФИО</p>
					<v-text-field
						placeholder="Иванов Иван Иванович"
						class="input"
						variant="solo-filled"
					></v-text-field>
				</div>
				<div class="col-span-33 mt40">
					<p class="p-500">Наименование банка</p>
					<v-text-field class="input" variant="solo-filled"></v-text-field>
				</div>
				<div class="col-span-22 mt40">
					<p class="p-500">БИК</p>
					<v-text-field class="input" variant="solo-filled"></v-text-field>
				</div>
				<div class="col-span-22">
					<p class="p-500">ИНН</p>
					<v-text-field class="input" variant="solo-filled"></v-text-field>
				</div>
				<div class="col-span-22">
					<p class="p-500">Расчетный счет</p>
					<v-text-field class="input" variant="solo-filled"></v-text-field>
				</div>
				<div class="col-span-22">
					<p class="p-500">Корреспондентский счет банка</p>
					<v-text-field class="input" variant="solo-filled"></v-text-field>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.col-span-22 {
	grid-column: span 2 / span 2;
}
.col-span-33 {
	grid-column: span 3 / span 3;
}
.italic-24 {
	font-style: italic;
	font-size: 24px;
	font-weight: 400;
}
.grid-4_d {
	max-width: 1100px;
	width: 100%;
	column-gap: 30px;
	row-gap: 30px;
	align-items: end;
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	margin-bottom: 30px;
}
</style>
