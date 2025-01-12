<script setup>
import { ref, computed } from "vue";
import SendModal from "@/components/SendModal.vue";
import CancelModal from "@/components/CancelModal.vue";
const sendRef = ref()
const cancelRef = ref()

const val = ref("one");
const val2 = ref("one");
const menu = ref(false);
const menu1 = ref(false);
const menu2 = ref(false);
const menu3 = ref(false);
const menu4 = ref(false);
const menu5 = ref(false);
const menu6 = ref(false);
const menu7 = ref(false);
const menu8 = ref(false);
const item = ref({
	phoneNumber: "",
	selectedDate: null,
	phoneNumber: "",
	name: "",
	seria: "",
	number: "",
	info: "",
	one: "",
	two: "",
	three: "",
	four: "",
	five: "",
	disability1: "",
	disability2: null,
	disability3: null,
	trauma1: "",
	trauma2: null,
	hospital1: "",
	hospital2: "",
	operatsion1: "",
	operatsion2: null,
	operatsion3: null,
	diagnosis: "",
	diagnosis3: "",
	diagnosis5: "",
	diagnosis2: null,
	diagnosis4: null,
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
const formattedDate1 = computed(() => {
	if (!item.value.disability2) return "";
	const date = new Date(item.value.disability2);

	if (isNaN(date.getDate())) return ""; // agar invalid sana bo'lsa

	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = date.getFullYear();
	return `${day}.${month}.${year}`;
});

const onDateSelect1 = (newDate) => {
	item.value.disability2 = newDate;
	menu2.value = false; // Modalni yopish
};

const formattedDate2 = computed(() => {
	if (!item.value.disability3) return "";
	const date = new Date(item.value.disability3);

	if (isNaN(date.getDate())) return ""; // agar invalid sana bo'lsa

	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = date.getFullYear();
	return `${day}.${month}.${year}`;
});

const onDateSelect2 = (newDate) => {
	item.value.disability3 = newDate;
	menu3.value = false; // Modalni yopish
};
const formattedDate3 = computed(() => {
	if (!item.value.trauma2) return "";
	const date = new Date(item.value.trauma2);

	if (isNaN(date.getDate())) return ""; // agar invalid sana bo'lsa

	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = date.getFullYear();
	return `${day}.${month}.${year}`;
});

const onDateSelect3 = (newDate) => {
	item.value.trauma2 = newDate;
	menu4.value = false; // Modalni yopish
};

const formattedDate4 = computed(() => {
	if (!item.value.operatsion2) return "";
	const date = new Date(item.value.operatsion2);

	if (isNaN(date.getDate())) return ""; // agar invalid sana bo'lsa

	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = date.getFullYear();
	return `${day}.${month}.${year}`;
});

const onDateSelect4 = (newDate) => {
	item.value.operatsion2 = newDate;
	menu5.value = false; // Modalni yopish
};
const formattedDate5 = computed(() => {
	if (!item.value.operatsion3) return "";
	const date = new Date(item.value.operatsion3);

	if (isNaN(date.getDate())) return ""; // agar invalid sana bo'lsa

	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = date.getFullYear();
	return `${day}.${month}.${year}`;
});

const onDateSelect5 = (newDate) => {
	item.value.operatsion3 = newDate;
	menu6.value = false; // Modalni yopish
};
const formattedDate6 = computed(() => {
	if (!item.value.diagnosis2) return "";
	const date = new Date(item.value.diagnosis2);

	if (isNaN(date.getDate())) return ""; // agar invalid sana bo'lsa

	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = date.getFullYear();
	return `${day}.${month}.${year}`;
});

const onDateSelect6 = (newDate) => {
	item.value.diagnosis2 = newDate;
	menu7.value = false; // Modalni yopish
};
const formattedDate7 = computed(() => {
	if (!item.value.diagnosis4) return "";
	const date = new Date(item.value.diagnosis4);

	if (isNaN(date.getDate())) return ""; // agar invalid sana bo'lsa

	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = date.getFullYear();
	return `${day}.${month}.${year}`;
});

const onDateSelect7 = (newDate) => {
	item.value.diagnosis2 = newDate;
	menu8.value = false; // Modalni yopish
};
</script>

<template>
	<div class="container">
      <SendModal ref="sendRef" />
      <CancelModal ref="cancelRef" />
		<h1>Договор ATB 23/НС/003000007195 от 05.06.2023</h1>
		<p class="p-italic">Программа страхования - Программа “АТБ 2.6”</p>
		<p class="p-500">
			Уважаемый клиент, перед подачей заявления о страховой выплате,
			пожалуйста, ознакомьтесь с памяткой, в которой находятся все
			необходимые данные о перечне документов, которые необходимо
			предоставить в компанию.
		</p>
		<br />
		<p>
			Если вы желаете заполнить заявление вручную, можете
			<a class="link" href="#">скачать бланк</a>
			заявления
		</p>
		<v-radio-group class="fl" v-model="val">
			<v-radio
				color="primary"
				label="Электронное заявление"
				value="one"
			></v-radio>
			<v-radio
				color="primary"
				label="Заявление, заполненное вручную"
				value="two"
			></v-radio>
		</v-radio-group>
		<div v-if="val == 'one'">
			<h2>Заявление по страховому событию</h2>
			<div class="w-840">
				<div class="grid-3">
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
				<p class="p-500 mt40">Документ, удостоверяющий личность</p>
				<p class="p-italic1">
					для несовершеннолетнего - видетельство о рождении
				</p>
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
			<div class="main">
				<h2>Прошу произвести страховую выплату по договору в связи с:</h2>
				<div class="mt40">
					<v-checkbox
						color="primary"
						label="Установлением инвалидности"
						v-model="item.one"
					></v-checkbox>
					<div class="grid-3 w-874 mt20" v-if="item.one">
						<div>
							<p style="margin-bottom: 6px">
								Группа/категория инвалидности
							</p>
							<v-text-field
								v-model="item.disability1"
								variant="solo-filled"
							></v-text-field>
						</div>
						<div>
							<p style="margin-bottom: 6px">
								Дата установления инвалидности
							</p>

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
										variant="solo-filled"
										v-bind="props"
										v-model="formattedDate1"
										readonly
										placeholder="ДД.ММ.ГГГГ"
									></v-text-field>
								</template>

								<!-- Date Picker -->
								<v-date-picker
									v-model="item.disability2"
									locale="ru"
									:show-adjacent-months="false"
									:show-action-buttons="false"
									@input="onDateSelect1"
								></v-date-picker>
							</v-menu>
						</div>

						<div>
							<p style="margin-bottom: 6px">
								Дата причиной инвалидности
							</p>
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
										variant="solo-filled"
										v-bind="props"
										v-model="formattedDate2"
										readonly
										placeholder="ДД.ММ.ГГГГ"
									></v-text-field>
								</template>

								<!-- Date Picker -->
								<v-date-picker
									v-model="item.disability3"
									locale="ru"
									:show-adjacent-months="false"
									:show-action-buttons="false"
									@input="onDateSelect2"
								></v-date-picker>
							</v-menu>
						</div>
					</div>
					<v-checkbox
						color="primary"
						label="Травмой"
						v-model="item.two"
					></v-checkbox>
					<div class="grid-3 w-874 mt20" v-if="item.two">
						<div>
							<p style="margin-bottom: 6px">Укажите характер травмы</p>
							<v-text-field
								v-model="item.trauma1"
								variant="solo-filled"
							></v-text-field>
						</div>
						<div>
							<p style="margin-bottom: 6px">Дата несчастного случая</p>

							<v-menu
								v-model="menu4"
								:close-on-content-click="true"
								:nudge-right="40"
								transition="scale-transition"
								offset-y
								max-width="290px"
								min-width="290px"
							>
								<template #activator="{ props }">
									<v-text-field
										variant="solo-filled"
										v-bind="props"
										v-model="formattedDate3"
										readonly
										placeholder="ДД.ММ.ГГГГ"
									></v-text-field>
								</template>

								<!-- Date Picker -->
								<v-date-picker
									v-model="item.trauma2"
									locale="ru"
									:show-adjacent-months="false"
									:show-action-buttons="false"
									@input="onDateSelect3"
								></v-date-picker>
							</v-menu>
						</div>
					</div>
					<v-checkbox
						color="primary"
						label="Госпитализацией"
						v-model="item.three"
					></v-checkbox>
					<div class="grid-3 w-874 mt20" v-if="item.three">
						<div>
							<p style="margin-bottom: 6px">Сроки госпитализации</p>
							<v-text-field
								v-model="item.hospital1"
								placeholder="Госпитализировали с "
								variant="solo-filled"
							></v-text-field>
						</div>
						<div>
							<p style="margin-bottom: 6px"></p>
							<v-text-field
								v-model="item.hospital1"
								placeholder="Госпитализировали по"
								variant="solo-filled"
							></v-text-field>
						</div>
					</div>
					<v-checkbox
						color="primary"
						label="Проведением хирургической операции"
						v-model="item.four"
					></v-checkbox>
					<div class="grid-3 w-874 mt20" v-if="item.four">
						<div>
							<p style="margin-bottom: 6px">Сроки госпитализации</p>
							<v-text-field
								v-model="item.operatsion1"
								placeholder="Укажите операцию"
								variant="solo-filled"
							></v-text-field>
						</div>
						<div>
							<p style="margin-bottom: 6px">Дата несчастного случая</p>

							<v-menu
								v-model="menu5"
								:close-on-content-click="true"
								:nudge-right="40"
								transition="scale-transition"
								offset-y
								max-width="290px"
								min-width="290px"
							>
								<template #activator="{ props }">
									<v-text-field
										variant="solo-filled"
										v-bind="props"
										v-model="formattedDate4"
										readonly
										placeholder="ДД.ММ.ГГГГ"
									></v-text-field>
								</template>

								<!-- Date Picker -->
								<v-date-picker
									v-model="item.operatsion2"
									locale="ru"
									:show-adjacent-months="false"
									:show-action-buttons="false"
									@input="onDateSelect4"
								></v-date-picker>
							</v-menu>
						</div>
						<div>
							<p style="margin-bottom: 6px">
								Дата причины проведения операции
							</p>

							<v-menu
								v-model="menu6"
								:close-on-content-click="true"
								:nudge-right="40"
								transition="scale-transition"
								offset-y
								max-width="290px"
								min-width="290px"
							>
								<template #activator="{ props }">
									<v-text-field
										variant="solo-filled"
										v-bind="props"
										v-model="formattedDate5"
										readonly
										placeholder="ДД.ММ.ГГГГ"
									></v-text-field>
								</template>

								<!-- Date Picker -->
								<v-date-picker
									v-model="item.operatsion3"
									locale="ru"
									:show-adjacent-months="false"
									:show-action-buttons="false"
									@input="onDateSelect5"
								></v-date-picker>
							</v-menu>
						</div>
					</div>
					<v-checkbox
						color="primary"
						label="Диагностированием критического заболевания"
						v-model="item.five"
					></v-checkbox>
					<div class="grid-4 mt20" v-if="item.five">
						<div>
							<p style="margin-bottom: 6px">Укажите заболевание</p>
							<v-text-field
								v-model="item.trauma1"
								variant="solo-filled"
							></v-text-field>
						</div>
						<div>
							<p style="margin-bottom: 6px">
								Дата диагностирования заболевания
							</p>

							<v-menu
								v-model="menu7"
								:close-on-content-click="true"
								:nudge-right="40"
								transition="scale-transition"
								offset-y
								max-width="290px"
								min-width="290px"
							>
								<template #activator="{ props }">
									<v-text-field
										variant="solo-filled"
										v-bind="props"
										v-model="formattedDate6"
										readonly
										placeholder="ДД.ММ.ГГГГ"
									></v-text-field>
								</template>

								<!-- Date Picker -->
								<v-date-picker
									v-model="item.diagnosis2"
									locale="ru"
									:show-adjacent-months="false"
									:show-action-buttons="false"
									@input="onDateSelect6"
								></v-date-picker>
							</v-menu>
						</div>
						<div>
							<p style="margin-bottom: 6px">Номер договора</p>
							<v-text-field
								v-model="item.diagnosis3"
								variant="solo-filled"
							></v-text-field>
						</div>
						<div>
							<p style="margin-bottom: 6px">Дата заключения договора</p>

							<v-menu
								v-model="menu8"
								:close-on-content-click="true"
								:nudge-right="40"
								transition="scale-transition"
								offset-y
								max-width="290px"
								min-width="290px"
							>
								<template #activator="{ props }">
									<v-text-field
										variant="solo-filled"
										v-bind="props"
										v-model="formattedDate7"
										readonly
										placeholder="ДД.ММ.ГГГГ"
									></v-text-field>
								</template>

								<!-- Date Picker -->
								<v-date-picker
									v-model="item.diagnosis4"
									locale="ru"
									:show-adjacent-months="false"
									:show-action-buttons="false"
									@input="onDateSelect7"
								></v-date-picker>
							</v-menu>
						</div>
					</div>
					<div v-if="item.five" class="mt20">
						<p style="margin-bottom: 6px">Обстоятельства события</p>
						<v-textarea
							placeholder="Пожалуйста, подробно укажите обстоятельства, причины, место события и прочее"
							v-model="item.diagnosis5"
							variant="solo-filled"
						></v-textarea>
					</div>
				</div>
				<div class="mt80">
					<h2>
						Денежные средства прошу перечислить по следующим реквизитам:
					</h2>
					<div class="grid-3 mt40">
						<div>
							<p>Получатель (ФИО)</p>
							<v-text-field variant="solo-filled"></v-text-field>
						</div>
						<div>
							<p>Наименование банка</p>
							<v-text-field
								placeholder="Наименование банка"
								variant="solo-filled"
							></v-text-field>
						</div>
						<div>
							<p>БИК</p>
							<v-text-field variant="solo-filled"></v-text-field>
						</div>
						<div>
							<p>ИНН</p>
							<v-text-field variant="solo-filled"></v-text-field>
						</div>
						<div>
							<p>Расчетный счет</p>
							<v-text-field variant="solo-filled"></v-text-field>
						</div>
						<div>
							<p>Корреспондентский счет банка</p>
							<v-text-field variant="solo-filled"></v-text-field>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-else>
			<h2>Отправка дополнительных документов</h2>

			<v-btn class="sizB">Дослать документы</v-btn>
		</div>
		<div class="mt80 fl2">
			<v-btn @click="sendRef.open()" class="sizB" style="height: 70px" color="primary"
				>Отправить заявление</v-btn
			>
			<v-btn v-if="val == 'one'" class="sizB" style="height: 70px" color=""
				>Вложить дополнительный документ</v-btn
			>
			<v-btn @click="cancelRef.open()" class="sizB" style="height: 70px" color="">Отменить</v-btn>
		</div>
		<div class="mt20">
			<v-checkbox
				color="primary"
				label="Декларация Заявителя: "
			></v-checkbox>
			<p class="text-400">
				1. Настоящим Заявитель подтверждает, что не имеет гражданства США,
				разрешения на постоянное пребывание в США и не является налоговым
				резидентом США.<br />
				2. Настоящим Заявитель подтверждает, что не является:<br />
				а) иностранным публичным должностным лицом, должностным лицом
				публичных международных организаций;<br />
				б) лицом, замещающим (занимающим) государственные должности РФ,
				должности членов Совета директоров ЦБ РФ, должности федеральной
				государственной службы, назначение на которые и освобождение от
				которых осуществляется Президентом РФ или Правительством РФ,
				должности в ЦБ РФ, государственных корпорациях и иных организациях,
				созданных РФ на основании федеральных законов, включенные в перечни
				должностей, определяемые Президентом РФ;<br />
				в) супругой(-ом), близким родственником лиц, указанных в настоящем
				подпункте.
			</p>

			<v-checkbox
				color="primary"
				label="Получать статус рассмотрения заявления по электронной почте"
			></v-checkbox>
		</div>
	</div>
</template>

<style lang="scss">
.v-checkbox .v-selection-control {
	min-height: 42px !important;
}
.text-400 {
	font-weight: 400;
}
.sizB {
	margin-top: 10px;
	height: 70px !important;
	font-size: 20px;
}
.fl2 {
	display: flex;
	column-gap: 20px;
}
.main {
	margin-top: 80px;
}
.mt20 {
	margin-top: 20px;
}
.mt40 {
	margin-top: 40px;
}
.mt80 {
	margin-top: 80px;
}
.v-input__details {
	display: none;
}
.input {
	margin-top: 8px;
}
.p-500 {
	font-weight: 500;
}
.link {
	color: #005fad;
}
.w-840 {
	margin-top: 40px;
	max-width: 840px;
	width: 100%;
}
.w-874 {
	margin-top: 40px;
	max-width: 980px;
	width: 100%;
}
.grid-3 {
	column-gap: 30px;
	row-gap: 30px;
	align-items: end;
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	margin-bottom: 20px;
}
.grid-4 {
	max-width: 1300px;
	width: 100%;
	column-gap: 30px;
	row-gap: 30px;
	align-items: end;
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	margin-bottom: 20px;
}
.fl {
	display: flex;
	column-gap: 74px;
	margin-top: 20px;
	margin-bottom: 60px;
	.v-selection-control-group {
		flex-direction: row;
		column-gap: 74px;
	}
	.v-label {
		font-size: 20px;
		font-weight: 400;
		font-style: italic;
	}
	.v-selection-control {
		flex: none;
	}
}
.p-italic {
	font-weight: 400;
	font-family: Inter;
	font-size: 14px;
	color: #212325b2;
	font-style: italic;
	margin-top: 20px;
	margin-bottom: 4px;
}
.p-italic1 {
	font-weight: 400;
	font-family: Inter;
	font-size: 14px;
	color: #212325b2;
	font-style: italic;
	margin-top: 4px;
	margin-bottom: 20px;
}
</style>
