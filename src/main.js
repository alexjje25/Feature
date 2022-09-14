import { createApp } from 'vue'
import App from './App.vue'

console.log('t4este')

// eslint-disable-next-line no-undef
var Emprego =  [
    { 
		"ID": 1,
		"Descrição": "Importação de arquivos de fundos", 
		"Data Máxima de conclusão": '2021-02-04 12:00:00', 
		"Tempo estimado": '8 horas'
	},
    { 
		"ID": 2,
		"Descrição": 'Importação de dados da Base Legada', 
		"Data Máxima de conclusão": '2021-02-04 12:00:00', 
		"Tempo estimado": '4 horas'
	},
    { 
		"ID": 3,
		"Descrição": 'Importação de dados', 
		"Data Máxima de conclusão": '2021-02-02 12:00:00', 
		"Tempo estimado": '6 horas'
	},
    { 
		"ID": 4,
		"Descrição": 'Desenvolver historia 745', 
		"Data Máxima de conclusão": '2021-02-02 12:00:00', 
		"Tempo estimado": '2 horas'
	},
	{ 
		"ID": 5,
		"Descrição": 'Gerar QRCode', 
		"Data Máxima de conclusão": '2020-02-15 12:00:00', 
		"Tempo estimado": '6 horas'
	},
	{
		"ID": 6,
		"Descrição": 'Importação de dados de integração', 
		"Data Máxima de conclusão": '2020-02-15 12:00:00', 
		"Tempo estimado": '8 horas'
	},
]

console.log(Emprego);
const dateStart = new Date(' 2019-11-10 08:00:00');
// Data final
const dateEnd = new Date('2019-11-11 12:00:00');

var count = 0;

// eslint-disable-next-line no-undef
for (i = 0; i < Emprego.length; i++) {
    // eslint-disable-next-line no-undef
    var dateIndex = Emprego[i].MaxDate;
    // eslint-disable-next-line no-undef
    console.log(Emprego[i].MaxDate)
    // eslint-disable-next-line no-undef
    if (dateStart.getTime() <= new Date(Emprego[i].MaxDate).getTime() && dateEnd.getTime() >= new Date(Emprego[i].MaxDate).getTime()) {
        console.log('A data ', dateIndex, ' está dentro do período especificado');
    } else {
        // eslint-disable-next-line no-undef
        console.log('A data ', Emprego[i].MaxDate, ' está fora do período especificado');
    }
}


console.log('Consultando array antes de ordenar');
// eslint-disable-next-line no-undef
for (i = 0; i < Emprego.length; i++) {
    // eslint-disable-next-line no-undef
    console.log(Emprego[i].MaxDate, Emprego[i].ID);
}


// eslint-disable-next-line no-undef
Emprego.sort(function(a, b) {
    var dateA = new Date(a.MaxDate),
        dateB = new Date(b.MaxDate);
    return dateA - dateB;
});


console.log('Consultando array depois de ordenar');
// eslint-disable-next-line no-undef
for (i = 0; i < Emprego.length; i++) {
    // eslint-disable-next-line no-undef
    console.log(Emprego[i].MaxDate, Emprego[i].ID);
}


console.log('Imprimindo agenda');

// eslint-disable-next-line no-undef
for (i = 0; i < Job.length; i++) {
// eslint-disable-next-line no-undef
    count = count + Emprego[i].time;
    // eslint-disable-next-line no-undef
    var print = Emprego[i].ID
    document.write(print);

    if (count == 8) {
        // Pular linha
        document.writeln(' <br/>');
        count = 0;
    }
}

createApp(App).mount('#app')
