import fs from 'node:fs'
import { parse } from 'csv-parse'

const __dirname = new URL('./fs_read.csv', import.meta.url)

export const processFile = async () => {
  const parser = fs
    .createReadStream(__dirname)
    .pipe(parse({
      delimiter: ',',
      skipEmptyLines: true,
      from_line: 2
    }))

  for await (const record of parser) {
    const [title, description] = record
    await fetch('http://localhost:3333/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
      })
    })
  }
}

(async () => {
  await processFile();
  console.log('Importação das tasks concluída com sucesso!')
})();