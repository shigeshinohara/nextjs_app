import { getAllEmployeesData } from "../lib/strapi";

const Ssr = ({employees}) => {
    console.log(employees)
  return (<>
    <div>Server Side Rendering</div>
    <ul>
       {employees &&  employees.map((emp) => <li>{emp.attributes.Name} - {emp.attributes.email}</li> )}
    </ul>
    </>
  )
}

export async function getServerSideProps() {
    const employees = await getAllEmployeesData();
    return {
        props: {employees}
    }
}

export default Ssr;