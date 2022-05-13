import { getAllEmployeesData } from "../lib/strapi";

const Ssg = ({employees}) => {
  return (<>
    <div>Static Site Generation</div>
    <ul>
       {employees &&  employees.map((emp) => <li  key={emp.id}>{emp.attributes.Name}</li> )}
    </ul>
    </>
  )
}

export async function getStaticProps() {
    const employees = await getAllEmployeesData();
    return {
        props: {employees}
    }
}

export default Ssg;