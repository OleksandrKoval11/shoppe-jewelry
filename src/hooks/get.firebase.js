import { getDatabase, ref, get, set, push } from "firebase/database";
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

export const usePostFirebaseDatabase = () => {
    const postOrSetData = async (path, data, isSet = true) => {
        const database = getDatabase(app);
        const dbRef = ref(database, path);

        try {
            if (isSet) {
                // Если вы хотите установить новые данные, используйте set
                await set(dbRef, data);
            } else {
                // Если вы хотите добавить новые данные с уникальным ключом, используйте push
                await push(dbRef, data);
            }
        } catch (error) {
            throw new Error(`Ошибка при отправке данных: ${error.message}`);
        }
    };

    return { postOrSetData };
};