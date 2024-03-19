import UserController from "@/lib/rxdb/controllers/UserController";

export default function Demo() {
  async function handleClick() {
    await UserController.add({
      id: 1,
      name: "2gbeh",
      email: "webmaster@hwplabs.com",
      password: "_Thathwplabsb0y",
      createdAt: new Date().toJSON(),
    });
  }
  //
  return <button onClick={handleClick}>OK</button>;
}
