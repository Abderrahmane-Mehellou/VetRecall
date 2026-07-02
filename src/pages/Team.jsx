import { getClinicById } from "../service/clinic.service";

function Team() {

  async function hello(){

    const data = await getClinicById("YOBXPA5hhfeQlwXoHaiM");
    console.log(data)
  }
  hello()
  return (
    <div className="mt-16 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Team Management
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Invite colleagues and manage roles & permissions.
        </p>
      </div>
    </div>
  );
}

export default Team;