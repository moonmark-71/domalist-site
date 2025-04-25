import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const useExternalProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const snapshot = await getDocs(collection(db, "externalProducts"));
      const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(list);
    };
    fetch();
  }, []);

  return products;
};

export default useExternalProducts;
