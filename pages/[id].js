import { getAllEmployeeData, getAllEmployeeIds } from "../lib/strapi";

const Detail = ({employee}) => {
    
  if(!employee) {
    return <div>Loading...</div>
  }
  return (<>
    <div>Detail Page</div>
    <div>名前：{employee.attributes.Name}</div>
    <div>email：{employee.attributes.email}</div>
    </>
  )
}

export async function getStaticProps({params}) {
    const employee = await getAllEmployeeData(params.id);
    console.log(employee)
    return {
        props: {employee}
    }
}

export async function getStaticPaths() {
    const paths = await getAllEmployeeIds();
    return {
        paths,
        fallback: true
    }
}

export default Detail;