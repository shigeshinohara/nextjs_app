import { getAllEmployeesData } from "../lib/strapi";

const Ssg = ({employees}) => {
    console.log(employees)
  return (<>
    <div>Static Site Generation</div>
    <ul>
       {employees &&  employees.map((emp) => <li>{emp.attributes.Name} - {emp.attributes.email}</li> )}
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