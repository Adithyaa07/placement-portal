import { doc, query } from "firebase/firestore";
import { db } from "firebase-auth";
import { useDocumentData } from "react-firebase-hooks/firestore";

function useUser(id) {
  const q = query(doc(db, "users", id));
  const [user, isLoading] = useDocumentData(q);

  return { user, isLoading };
}

export default useUser;
