export interface Recipe {
    _id: number; // campo che useremo con MongoDb / ID scritto con l'uderscore perchè mongoDb usa questa sintassi
    image: string;  // percordo dell'immagine
    title: string;
    description: string;
    difficulty: number;
    date: string;
    published: boolean;
    // published?: boolean; se mettiamo il punto interrogativo stiamo dicendo che il parametro è facoltativo.ng
}
