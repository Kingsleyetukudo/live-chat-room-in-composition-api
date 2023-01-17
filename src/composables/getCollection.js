import { ref, watchEffect } from "vue";
import { projectFirestor } from "@/firebase/config";

const getCollection = (collection) => {
  const documents = ref(null);

  const error = ref(null);

  let collectionRef = projectFirestor
    .collection(collection)
    .orderBy("createdAt");

  const unsub = collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = "could not fatch data";
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return {
    documents,
    error,
  };
};

export default getCollection;
