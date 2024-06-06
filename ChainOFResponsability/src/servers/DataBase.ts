import PermissionType from "./PermissionType"

interface DataBaseItem {
    email: string
    password: string
    permission: PermissionType
}

const DataBase : DataBaseItem[] = [
    {
        email: "tigrinho@gmail.com",
        password: "123",
        permission: PermissionType.USER
    },
    {
        email: "kaue@gmail.com",
        password: "Kaue%SAS",
        permission: PermissionType.ADMIN
    }
]

export default DataBase