
const SingleCategory = ({ params }: { params: { category: string } }) => {
    const { category } = params;
    console.log(category)
    return (
        <div>
            SingleCategory
        </div>
    )
}

export default SingleCategory;