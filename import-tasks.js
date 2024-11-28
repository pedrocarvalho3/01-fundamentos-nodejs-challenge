import fs from "node:fs";
import { parse } from "csv-parse";
import http from "node:http";

const csvFilePath = "./tasks.csv";

async function postTask(title, description) {
  const data = JSON.stringify({ title, description });

  const options = {
    hostname: "localhost",
    port: 3333,
    path: "/tasks",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      if (res.statusCode === 201) {
        console.log(`Task "${title}" enviada com sucesso.`);
        resolve();
      } else {
        console.error(`Erro ao enviar task "${title}": ${res.statusCode}`);
        reject(new Error(`HTTP ${res.statusCode}`));
      }
    });

    req.on("error", (error) => {
      console.error(`Erro na requisição: ${error.message}`);
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

async function importTasksFromCSV() {
  const parser = fs
    .createReadStream(csvFilePath)
    .pipe(parse({ columns: true }));

  for await (const record of parser) {
    const { title, description } = record;

    try {
      await postTask(title, description);
    } catch (error) {
      console.error(`Erro ao processar a task "${title}": ${error.message}`);
    }
  }

  console.log("Importação de tasks concluída.");
}

importTasksFromCSV().catch((error) => {
  console.error(`Erro durante a importação: ${error.message}`);
});
