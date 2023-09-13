import { getDatabase, ref, get } from "firebase/database";
import { app } from "../firebase";

export const useFirebaseDatabase = () => {
    const request = async (path) => {
        const database = getDatabase(app);
        const dbRef = ref(database, path);

        try {
            const snapshot = await get(dbRef);
            if (snapshot.exists()) {
                return snapshot.val();
            } else {
                throw new Error("Данные не найдены");
            }
        } catch (error) {
            throw new Error(`Ошибка при чтении данных: ${error.message}`);
        }
    };

    return { request };
};
