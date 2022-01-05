//criando array
var Job = [{ "ID": 1, "descricao": "Importação de arquivos de fundos", "dataMaxima": "2019-11-10 12:00:00", "tempo": 2 }, 
{ "ID": 2, "descricao": "Importação de dados da Base Legada", "dataMaxima": "2019-11-11 12:00:00", "tempo": 4 }, 
{ "ID": 3, "descricao": "Consulta de dados", "dataMaxima": "2019-11-11 13:00:00", "tempo": 9 },
{ "ID": 4, "descricao": "Importação de dados de integração ", "dataMaxima": "2019-11-11 08:00:00", "tempo": 6 }]

//consulta de array
console.log("Array de Jobs:");
for (i = 0; i < Job.length; i++) {
    console.log("ID: ", Job[i].ID, " | Descrição: ", Job[i].descricao, " | Data Máxima de Conclusão: ", Job[i].dataMaxima, " | Tempo estimado: ", Job[i].tempo, " |");
}

//ordenando array por data
Job.sort(function(a, b) {
    var dataA = new Date (a.dataMaxima),
        dataB = new Date (b.dataMaxima);
    return dataA - dataB;
});

console.log("Array ordenado por data de execução:");
for (i = 0; i < Job.length; i++) {
     console.log("ID: ", Job[i].ID, " | Descrição: ", Job[i].descricao, " | Data Máxima de Conclusão: ", Job[i].dataMaxima, " | Tempo estimado: ", Job[i].tempo, " |");
   
}

//verificando se cada job foi executado em, no máximo, 8 horas
console.log("Jobs devem ser executados dentro de 8 horas:");
for (i = 0; i < Job.length; i++) { 
    if (Job[i].tempo <= 8) {
       console.log("O job com o ID: ", Job[i].ID, " foi realizado dentro do tempo solicitado.")
    } else{
        console.log("O job com o ID: ", Job[i].ID, " foi realizado fora do tempo solicitado.")
    }
}

//verificando se cada job está dentro da data e horário solicitados(janela de execuçao)
const dataInicio = new Date("2019-11-10 09:00:00");
const dataFim = new Date("2019-11-11 12:00:00");

var count = 0;

console.log("Jobs devem ser executados dentro da data solicitada:");
for (i = 0; i < Job.length; i++) { 
    if (dataInicio.getTime() <= new Date(Job[i].dataMaxima).getTime() && dataFim.getTime() >= new Date(Job[i].dataMaxima).getTime()) {
        console.log("O job do dia e horário ", Job[i].dataMaxima, " com o ID: ", Job[i].ID,  " está dentro do solicitado");
    } else {
        console.log("O job do dia e horário ", Job[i].dataMaxima," com o ID: ", Job[i].ID, " está fora do solicitado");
    }
}