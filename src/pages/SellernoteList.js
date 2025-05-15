import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const SellernoteList = () => {
  const [notes, setNotes] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdTokenResult();
        setIsAdmin(token.claims.role === "admin");
      } else {
        setIsAdmin(false);
      }
    });
  }, []);

  useEffect(() => {
    const fetchNotes = async () => {
      const q = query(collection(db, "sellernotes"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      setNotes(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchNotes();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📒 셀러노트</h1>

      {isAdmin && (
        <div className="mb-4 text-right">
          <button
            onClick={() => navigate("/admin/sellernote-add")}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            ✏️ 글쓰기
          </button>
        </div>
      )}

      <div className="space-y-4">
        {notes.map(note => (
          <Link to={`/sellernote/${note.id}`} key={note.id}>
            <div className="p-4 border rounded-xl hover:bg-gray-50">
              <h2 className="text-xl font-semibold">{note.title}</h2>
              <p className="text-sm text-gray-500">
                {new Date(note.createdAt.seconds * 1000).toLocaleDateString()}
              </p>
              <p className="mt-2 text-gray-700 line-clamp-2">
                {note.content.slice(0, 100)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SellernoteList;