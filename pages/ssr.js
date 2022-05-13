import { getAllEmployeesData } from "../lib/strapi";

const Ssr = ({employees}) => {
  return (<>
    <div>Server Side Rendering</div>
    <ul>
       {employees &&  employees.map((emp) => <li key={emp.id}>{emp.attributes.Name}</li> )}
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