const { v1: uuidv1 } = require("uuid");

function createId() {
  return uuidv1();
}

const initialUsers = () => {
  let initialUserList = [
    { id: createId(), kullaniciadi: "ibrahim", sifre: "ifk123" },
    { id: createId(), kullaniciadi: "ali", sifre: "ali123" },
    { id: createId(), kullaniciadi: "kerem", sifre: "kerem123" },
    { id: createId(), kullaniciadi: "ayşe", sifre: "ayşe123" },
  ];
  return initialUserList;
};

let users = initialUsers();

module.exports = { users, createId, initialUsers };
