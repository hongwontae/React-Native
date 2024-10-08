import * as Sqlite from "expo-sqlite/legacy";

const database = Sqlite.openDatabase("places.db");

export function init() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `
                    CREATE TABLE IF NOT EXISTS places (
                        id INTEGER PRIMARY KEY NOT NULL,
                        title TEXT NOT NULL,
                        imageUri TEXT NOT NULL,
                        address TEXT NOT NULL,
                        lat REAL NOT NULL,
                        lng REAL NOT NULL
                    )
                `,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
}

export function insertPlace(place){
    const promise = new Promise((resolve, reject)=>{
        database.transaction((tx)=>{
            tx.executeSql(`INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?,?,?,?,?)`, [
                place.title,
                place.imageUri,
                place.address,
                place.location.lat,
                place.loaction.lng
            ],
            (result)=>{
                console.log(result);
                resolve(result);
            },
            (_, error)=>{
                reject(error)
            }
        )
        })
    })
    return promise;
}
