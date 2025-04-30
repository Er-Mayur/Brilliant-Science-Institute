// src/insertAdminData.js
import { getDatabase, ref, set } from "firebase/database";

export const insertAdminData = async (user) => {
  const db = getDatabase();
  const uid = user.uid;

  const adminData = {
    name: "Mayur Mahajan",
    email: user.email,
    bio: "Admin of Virtunexa",
    photo: "https://drive.google.com/file/d/13qsflABjoA2SF7BkpMq0e5_NHlpTEd5G/view"|| "https://via.placeholder.com/150"
  };

  return set(ref(db, 'admin/' + uid), adminData);
};
