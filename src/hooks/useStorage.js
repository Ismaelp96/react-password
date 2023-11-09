import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
  const getItem = async (key) => {
    try {
      const passwords = await AsyncStorage.getItem(key);
      return JSON.parse(passwords) || [];
    } catch (err) {
      alert("Erro ao buscar", err);
      return [];
    }
  };

  const saveItem = async (key, value) => {
    try {
      let passwords = await getItem(key);

      passwords.push(value);
      await AsyncStorage.setItem(key, JSON.stringify(passwords));
    } catch (err) {
      alert("ERRO AO SALVAR", err);
    }
  };
  const removeItem = async (key, item) => {
    let passwords = await getItem(key);
    let myPasswords = passwords.filter((password) => {
      return password !== item;
    });
    await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
    return myPasswords;
    try {
    } catch (err) {
      alert("ERRO AO DELETAR", err);
    }
  };

  return {
    getItem,
    saveItem,
    removeItem,
  };
};

export default useStorage;
