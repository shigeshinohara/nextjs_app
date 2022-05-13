export async function getAllEmployeesData() {
    const res = await fetch(new URL(`${process.env.NEXT_PUBLIC_STRAPI_URL}employees`))
    const employees = await res.json();
    return employees.data;
}

export async function getAllEmployeeIds() {
    const res = await fetch(new URL(`${process.env.NEXT_PUBLIC_STRAPI_URL}employees`))
    const employees = await res.json();
    const employeesData = employees.data;
    return employeesData.map((emp) => {
        return {
            params: {
                id: String(emp.id)
            }
        }
    })
}

export async function getAllEmployeeData(id) {
    const res = await fetch(new URL(`${process.env.NEXT_PUBLIC_STRAPI_URL}employees/${id}`))
    const employee = await res.json();
    return employee.data;
}