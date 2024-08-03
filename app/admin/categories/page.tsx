import { CategoryTable } from "@/components/CategoryTable";

const Category = () => {
    return (
        <div className="p-2">
            <h2 className="text-xl font-semibold mb-3 ms-3">Categories:</h2>
            <CategoryTable />
        </div>
    )
}

export default Category;