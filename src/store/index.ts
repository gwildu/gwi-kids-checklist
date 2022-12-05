import { useLocalStorage } from "@vueuse/core";

export interface ICheckItem {
  image: string;
  text: string;
  isChecked: boolean;
}
interface IStore {
  items: ICheckItem[];
  mode: "parent" | "child";
}

export const useStore = () => {
  const store = useLocalStorage<IStore>("gwi-kids-checklist-store-items", {
    items: [],
    mode: "parent",
  });
  const pushItem = (item: ICheckItem) => store.value.items.push(item);
  const insertItem = (item: ICheckItem, index: number) =>
    store.value.items.splice(index, 0, item);
  const deleteItemAtIndex = (index: number) => {
    if (index > -1) {
      store.value.items.splice(index, 1);
    }
  };
  const deleteItem = (item: ICheckItem) => {
    const index = store.value.items.indexOf(item);
    deleteItemAtIndex(index);
  };
  const resetAll = () => {
    store.value.items.forEach((item, index) => {
      store.value.items[index] = { ...item, isChecked: false };
    });
    console.log({ items: [...store.value.items] });
  };
  const toggleItemAtIndex = (index: number) => {
    const oldValue = store.value.items[index].isChecked;
    store.value.items[index].isChecked = !oldValue;
    console.log("------", store.value.items[index].isChecked);
  };
  const toggleItem = (item: ICheckItem) => {
    const index = store.value.items.indexOf(item);
    toggleItemAtIndex(index);
  };

  console.log({ items: store.value.items, store: store.value });
  return {
    items: store.value.items,
    pushItem,
    insertItem,
    deleteItem,
    deleteItemAtIndex,
    resetAll,
    toggleItem,
    toggleItemAtIndex,
  };
};
