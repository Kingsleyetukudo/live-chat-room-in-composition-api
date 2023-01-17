import { ref } from "vue";
import { projectFirestor } from "@/firebase/config";

const useCollection = (collection) => {
  const error = ref(null);

  const addDoc = async (doc) => {
    error.value = null;

    try {
      await projectFirestor.collection(collection).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = "Could not send the message";
    }
  };

  return { error, addDoc };
};

export default useCollection;
